

// Animation.js
import React from 'react';

const Animation = () => {
  return (
    <section id="animationfile">
      {/* Central Icon */}
      <div id="conternuc">
        <div className="nucleus">
          <img
            src="./webdpro1.png"
            alt="Logo"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
      </div>

      {/* Sector Icons as Electrons */}
      <div className="electron-container">
        <div className="electron"><i className="fas fa-laptop"></i></div>
        <div className="electron"><i className="fas fa-money-bill-wave"></i></div>
        <div className="electron"><i className="fas fa-shopping-cart"></i></div>
        <div className="electron"><i className="fas fa-tshirt"></i></div>
        <div className="electron"><i className="fas fa-car"></i></div>
        <div className="electron"><i className="fas fa-hamburger"></i></div>
        <div className="electron"><i className="fas fa-heartbeat"></i></div>
        <div className="electron"><i className="fas fa-film"></i></div>
      </div>
    </section>
  );
};


export default Animation;