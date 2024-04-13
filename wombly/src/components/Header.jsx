import React from 'react';

const Header = () => {
  return (
    <header className="bg-pink-200 text-black p-4 border-b-2 border-black">
      <div className="container mx-auto flex justify-between items-center">
      <img src="src\assets\wombly_logo.png" alt="Upload" className=" rounded-full h-10 " />
        {/* <h1 className="text-xl font-bold">Women's Health Wellness</h1> */}
        <nav>
          <a href="/ovulation" className="ml-4 hover:underline">Ovulation Tracker</a>
          <a href="/period" className="ml-4 hover:underline">Period Tracker</a>
          <a href="/pregnancy" className="ml-4 hover:underline">Pregnancy Tracker</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
