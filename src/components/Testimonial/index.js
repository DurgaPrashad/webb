import React, { useEffect, useRef } from 'react';
import { tns } from 'tiny-slider/src/tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';
import './test.css';

const Testimonial = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const slider = tns({
        container: sliderRef.current,
        items: 1,
        slideBy: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayButtonOutput: false,
        controls: false,
        nav: false,
        responsive: {
          768: {
            items: 2,
          },
          1024: {
            items: 3,
          },
        },
      });
      
      // Clean up on component unmount
      return () => {
        if (slider && slider.destroy) {
          slider.destroy();
        }
      };
    }
  }, []);

  const testimonials = [
    {
      name: "Sneha Biswas",
      image: "https://via.placeholder.com/48",
      text: "I always wanted to learn UI design but due to lack of motivation, I was constantly procrastinating. But thanks to the team for organizing this Designathon event where we had to form a team and solve a problem with our design skills."
    },
    {
      name: "Mehul Kapodid",
      image: "https://via.placeholder.com/48",
      text: "We got our first lead through Webdpro! Right after my pitch in the Webdpro pitch tank competition, I got my first lead. Thanks a lot for this crazy community you guys have built."
    },
    {
      name: "Shravani Tembore",
      image: "https://via.placeholder.com/48",
      text: "At Webdpro study streak club, I study with online friends and get things done. Here the Pomodoro sessions have helped me a lot. Also, the leaderboard and stats keep me going in order to maintain my streak and position."
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Don't take our word for it, see what the community is saying</h2>
        <div className="testimonial-slider">
          <div className="tiny-slider" ref={sliderRef}>
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-header">
                  <img src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
                  <div className="testimonial-name">
                    <h4>{testimonial.name}</h4>
                  </div>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;