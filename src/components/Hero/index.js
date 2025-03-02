
// // Hero.js
// import React from 'react';

// const Hero = () => {
//   return (
//     <section className="pt-32 pb-20 ">
//       <div className="container mx-auto px-6">
//         <div className="text-center">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6 blue-glow">
//             Transform Your Digital Presence
//           </h1>
//           <p className="text-xl md:text-2xl text-blue-200 mb-10">
//             Professional web development solutions for modern businesses
//           </p>
//           <button
//             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg transition duration-300"
//           >
//             Get Started
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from 'react';
import './hero.css'; // Import the CSS file

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="text-center">
          <h1 className="hero-title">
            Transform Your Digital Presence
          </h1>
          <p className="hero-subtitle">
            Professional web development solutions for modern businesses
          </p>
          <button className="hero-button">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;