import React from 'react';

const Header = () => {
  return (
    <header className="bg-pink-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Women's Health Wellness</h1>
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
