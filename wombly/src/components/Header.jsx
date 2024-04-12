import React from 'react';

const Header = () => {
  return (
    <header className="bg-pink-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Women's Health Wellness</h1>
        <nav>
          <a href="#" className="ml-4 hover:underline">About</a>
          <a href="#" className="ml-4 hover:underline">Features</a>
          <a href="#" className="ml-4 hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
