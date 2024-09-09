
'use client'
import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full py-3 border-b bg-black">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 sm:px-20 font-semibold">
        
        {/* Logo */}
        <div>
          <Link href='/'>
          <h1 className="text-3xl font-extrabold sm:text-5xl text-gray-500">
            7<span className='font-bold text-4xl font-sans italic text-white'>Creative</span>
          </h1>
          </Link>
        </div>       

        {/* Hamburger Icon */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
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
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex sm:flex-row sm:gap-8 gap-2 text-white">
          <Link href="/" className='hover:text-gray-500 text-md'>Home</Link>
          <Link href='/agency' className='hover:text-gray-500 text-md'>Agency</Link>
          <Link href="/team" className='hover:text-gray-500 text-md'>Team</Link>
          <Link href="/services" className='hover:text-gray-500 text-md'>Services</Link>
          <Link href="/testimonials" className='hover:text-gray-500 text-md'>Testimonials</Link>
          <Link href="/Projects" className='hover:text-gray-500 text-md'>Projects</Link>
          <Link href="/contact" className='hover:text-gray-500 text-md'>Contact</Link>
        </nav>
      </div>

      {/* Mobile Sidebar Navigation */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-black text-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out sm:hidden z-50`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white"
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
        <nav className="flex flex-col mt-20 space-y-4">
          <Link href="/" className='hover:text-gray-500 text-md pl-6'>Home</Link>
          <Link href='/agency' className='hover:text-gray-500 text-md pl-6'>Agency</Link>
          <Link href="/team" className='hover:text-gray-500 text-md pl-6'>Team</Link>
          <Link href="/services" className='hover:text-gray-500 text-md pl-6'>Services</Link>
          <Link href="/testimonials" className='hover:text-gray-500 text-md pl-6'>Testimonials</Link>
          <Link href="/Projects" className='hover:text-gray-500 text-md pl-6'>Projects</Link>
          <Link href="/contact" className='hover:text-gray-500 text-md pl-6'>Contact</Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
