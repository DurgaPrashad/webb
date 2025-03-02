// // Navigation.js
// import React from 'react';

// const Navigation = () => {
//   return (
//     <nav className="bg-black bg-opacity-40 fixed w-full z-50">
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <img src="webdpro1.png" alt="Logo" className="h-8 w-8" />
//             <span className="text-2xl font-bold blue-glow">ebDPro</span>
//           </div>
//           <div className="hidden md:flex space-x-8">
//             <a href="#" className="hover:text-blue-400 transition">Home</a>
//             <a href="#" className="hover:text-blue-400 transition">Services</a>
//             <a href="#" className="hover:text-blue-400 transition">Projects</a>
//             <a href="#" className="hover:text-blue-400 transition">Contact</a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

import React from 'react';
import './navigation.css'; // Import the CSS file

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-content">
          <div className="logo-container">
            <img src="../webdpro1.png" alt="Logo" className="logo" />
            <span className="brand-name">ebDPro</span>
          </div>
          <div className="nav-links">
            <a href="" className="nav-link">Home</a>
            <a href="" className="nav-link">Services</a>
            <a href="" className="nav-link">Projects</a>
            <a href="" className="nav-link">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;