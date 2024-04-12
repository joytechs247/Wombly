// import React from 'react';


// const Homepage = () => {
//   return (
//     <div>
     

//       <main className="container mx-auto mt-8">
//         <section className="mb-8">
//           <h2 className="text-3xl font-bold mb-4">About Us</h2>
//           <p className="text-gray-700">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
//             ultricies velit vel eleifend. Vivamus at ullamcorper justo. 
//             Fusce condimentum accumsan magna.
//           </p>
//         </section>

//         <section className="mb-8">
//           <h2 className="text-3xl font-bold mb-4">Key Features</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {/* Feature Cards */}
//             <div className="bg-white p-4 rounded-lg shadow-md">
//               <h3 className="text-xl font-bold mb-2">Ovulation Tracker</h3>
//               <p>Track your ovulation cycle with ease.</p>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow-md">
//               <h3 className="text-xl font-bold mb-2">Period Tracker</h3>
//               <p>Monitor and predict your menstrual period.</p>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow-md">
//               <h3 className="text-xl font-bold mb-2">Pregnancy Tracker</h3>
//               <p>Follow your pregnancy journey week by week.</p>
//             </div>
//           </div>
//         </section>

//         <section className="mb-8">
//           <h2 className="text-3xl font-bold mb-4">Community</h2>
//           <p className="text-gray-700 mb-4">
//             Join our community to chat anonymously and connect with others.
//           </p>
//           <div className="flex justify-center">
//             <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
//               Join Chat
//             </button>
//           </div>
//         </section>

//         <section>
//           <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
//           <p className="text-gray-700">
//             Have questions? Chat with our doctor mentor or use our chatbot for
//             instant answers.
//           </p>
//           <div className="flex justify-center mt-4">
//             <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
//               Chat Now
//             </button>
//           </div>
//         </section>
//       </main>

     
//     </div>
//   );
// };

// export default Homepage;



import React from 'react';

import { FiCalendar, FiHeart, FiMessageCircle } from 'react-icons/fi'; // Import icons
// import communityImage from './community.jpg'; // Import community image

const Homepage = () => {
  return (
    <div>
     

      <main className="container mx-auto mt-8">
        {/* Full-length image */}
        <div className="mb-8">
          <img src="https://via.placeholder.com/1200x400" alt="Banner" className="w-full h-auto" />
        </div>

        {/* About Us Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies velit vel eleifend. Vivamus at ullamcorper justo. Fusce condimentum accumsan magna.
          </p>
        </section>

        {/* Key Features Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Feature Cards */}
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
              <FiCalendar className="text-4xl text-pink-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Ovulation Tracker</h3>
              <p>Track your ovulation cycle with ease.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
              <FiHeart className="text-4xl text-pink-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Period Tracker</h3>
              <p>Monitor and predict your menstrual period.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
              <FiMessageCircle className="text-4xl text-pink-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Pregnancy Tracker</h3>
              <p>Follow your pregnancy journey week by week.</p>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="mb-8 flex items-center">
          {/* <img src={communityImage} alt="Community" className="w-1/2 rounded-l-lg" /> */}
          <div className="bg-pink-100 p-8 rounded-r-lg">
            <h2 className="text-3xl font-bold mb-4">Community</h2>
            <p className="text-gray-700">
              Join our community to chat anonymously and connect with others.
            </p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mt-4">
              Join Chat
            </button>
          </div>
        </section>

        {/* Get in Touch Section */}
        <section className="mb-8 bg-pink-100 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            Have questions? Chat with our doctor mentor or use our chatbot for instant answers.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
            Chat with Doctor
          </button>
        </section>

        {/* Chatbot Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Chat with Our Bot</h2>
          <p className="text-gray-700 mb-4">
            Need quick answers? Chat with our AI-powered bot for instant solutions.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
            Chat with Bot
          </button>
        </section>
      </main>

      
    </div>
  );
};

export default Homepage;
