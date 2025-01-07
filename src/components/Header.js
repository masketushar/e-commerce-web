import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <header className="bg-gray-800 shadow-blue sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center space-x-2">
       
      <span className="text-xl font-bold text-yellow-200 ">Tushar</span>
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-200 hover:text-gray-300 font-medium transition"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="text-gray-200 hover:text-gray-300 font-medium transition"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="text-gray-200 hover:text-gray-300 font-medium transition"
          >
            About
          </Link>
          <Link
            to="/signup"
            className="text-gray-200 hover:text-gray-300 font-medium transition"
          >
            Sign Up
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <form className="hidden lg:flex items-center space-x-2 border rounded-md px-2">
            <input
              type="text"
              placeholder="Sarech hear?"
              className="px-4 py-2 text-sm text-gray-600 focus:outline-none"
            />
            <button
              type="submit"
              className="text-gray-600 hover:text-gray-800 transition"
            >
              <FiSearch className="h-5 w-5" />
            </button>
          </form>
          <button className="text-gray-200 hover:text-gray-300 transition relative">
            <FiHeart className="h-5 w-5" />
          </button>
          <button className="text-gray-200 hover:text-gray-300 transition relative">
            <FiShoppingCart className="h-5 w-5" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>
          <button className="text-gray-200 hover:text-gray-300 transition">
            <FiUser className="h-5 w-5" />
          </button>
        </div>

        <button
          className="lg:hidden block text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
