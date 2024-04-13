


import React from 'react';

import { FiCalendar, FiHeart, FiMessageCircle } from 'react-icons/fi'; // Import icons
// import communityImage from 'src/assets/community.jpg'; // Import community image

const Homepage = () => {
  return (
    <div>


      <main className=" ">
        {/* Full-length image */}
        <div className="mb-8">
          <img src="src\assets\banner.jpg" alt="Banner" className="w-full h-96 object-cover" />
        </div>

        {/* About Us Section */}
        <section className="mb-8 flex items-center">
          <div id='about-section' className='flex  w-full h-full items-center justify-center' >
            <div data-aos="fade-up">
              <div className=" lg:grid grid-cols-2 w-full place-items-center justify-center">
                <div className='  flex py-10 w-full h-full items-center justify-center'>
                  <img src='src\assets\about.jpg' alt="Image"
                    className="lg:h-96 lg:w-96  w-80 h-80 items-center justify-center" />
                </div>

                <div className=" ">
                  <div className=" h-full w-full items-center justify-center  back">
                    <h1 className="text-4xl font-bold mb-4 pt-2 text-black">ABOUT US</h1>
                  </div>
                  <h2 className="text-lg text-gray-900 lg:mr-10   px-2"> Welcome to Wombly, your trusted companion for women's health. We're here to empower you with accurate cycle tracking, ovulation monitoring, and pregnancy support. Our user-friendly app provides personalized insights and guidance, backed by a team of medical experts. Beyond tracking, Wombly fosters a supportive community where women can connect, share experiences, and find solidarity. Join us on Wombly and discover a world of empowerment, knowledge, and sisterhood. Together, we're revolutionizing women's health one cycle at a time.  </h2>



                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 pl-8">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
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
          <div id='about-section' className='flex lg:pt-24 w-full h-full items-center justify-center' >
            <div data-aos="fade-up">
              <div className=" lg:grid grid-cols-2 w-full place-items-center justify-center">
                <div className='  flex py-10 w-full h-full items-center justify-center'>
                  <img src='src\assets\community.jpg' alt="Image"
                    className="lg:h-96 lg:w-96  w-80 h-80 items-center justify-center" />
                </div>

                <div className=" ">
                  <div className=" h-full w-full items-center justify-center  back">
                    <h1 className="text-4xl font-bold mb-4 pt-2 text-black">JOIN OUR COMMUNITY!</h1>
                  </div>
                  <h2 className="text-lg text-gray-900 lg:mr-10   px-2"> Join a community of like-minded empowering women and ask your questions without any hesitation on our anonymous chat Forum, so that no one comes between you and your concerns!  </h2>

                  <a href="/community">
                    <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mt-4 items-center justify-center text-center">
                      Join Chat
                    </button>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </section>


        <div className='flex'>
          {/* Get in Touch Section */}
          <section className="mb-8 bg-pink-100 px-8 py-4 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              Have questions? Chat with our doctor mentor or use our chatbot for instant answers.
            </p>
            <a href="/mentor-contact">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
                Chat with Doctor
              </button>
            </a>
          </section>

          {/* Chatbot Section */}
          <section className="mb-8 pl-8 py-4">
            <h2 className="text-3xl font-bold mb-4">Chat with Our Bot</h2>
            <p className="text-gray-700 mb-4">
              Need quick answers? Chat with our AI-powered bot for instant solutions.
            </p>
            <a href="/womb-gpt">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
                Chat with Bot
              </button>
            </a>
          </section>
        </div>
      </main>


    </div>
  );
};

export default Homepage;
