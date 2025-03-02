// // Services.js
// import React from 'react';

// const Services = () => {
//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-16 blue-glow">
//           Our Services
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-black bg-opacity-50 p-8 rounded-lg blue-border-glow">
//             <h3 className="text-xl font-bold mb-4 text-blue-400">
//               Web Development
//             </h3>
//             <p className="text-gray-300">
//               Custom websites built with the latest technologies and best
//               practices.
//             </p>
//           </div>
//           <div className="bg-black bg-opacity-50 p-8 rounded-lg blue-border-glow">
//             <h3 className="text-xl font-bold mb-4 text-blue-400">UI/UX Design</h3>
//             <p className="text-gray-300">
//               Beautiful, intuitive interfaces that engage your users.
//             </p>
//           </div>
//           <div className="bg-black bg-opacity-50 p-8 rounded-lg blue-border-glow">
//             <h3 className="text-xl font-bold mb-4 text-blue-400">
//               E-commerce Solutions
//             </h3>
//             <p className="text-gray-300">
//               Powerful online stores that drive sales and growth.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
import React from 'react';
import './services.css'; // Import the CSS file

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="services-title">
          Our Services
        </h2>
        <div className="services-grid">
          <div className="service-card">
            <h3 className="service-title">
              Web Development
            </h3>
            <p className="service-description">
              Custom websites built with the latest technologies and best practices.
            </p>
          </div>
          <div className="service-card">
            <h3 className="service-title">UI/UX Design</h3>
            <p className="service-description">
              Beautiful, intuitive interfaces that engage your users.
            </p>
          </div>
          <div className="service-card">
            <h3 className="service-title">
              E-commerce Solutions
            </h3>
            <p className="service-description">
              Powerful online stores that drive sales and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;