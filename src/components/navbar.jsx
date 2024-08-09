import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className=" bg-yellow-300 shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-extrabold text-red-600">MyApp</div>

        <div className="hidden md:flex  bg-black space-x-4">
          <a className="hover:text-blue-500">Home</a>
          <a className="hover:text-blue-500">About</a>
          <a href="#" className="hover:text-blue-500">
            Contact
          </a>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-xl">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-4">
          <button
            onClick={toggleMenu}
            className="text-xl absolute top-4 right-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <nav className="mt-12 space-y-4">
            <a href="#" className="block text-xl hover:text-blue-500">
              Home
            </a>
            <a href="#" className="block text-xl hover:text-blue-500">
              About
            </a>
            <a href="#" className="block text-xl hover:text-blue-500">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
