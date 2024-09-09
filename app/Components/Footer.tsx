
import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <div>
      <footer className="w-full bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Grid */}
          <div className="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">
            {/* Logo */}
            <h1 className="text-3xl font-extrabold sm:text-5xl text-gray-500">
              7
              <span className='font-bold text-4xl font-sans italic text-white'>
                Creative
              </span>
            </h1>

            {/* Navigation Links */}
            <ul className="text-lg text-center flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10 xl:gap-14 transition-all duration-500">
              <li><Link href="/home" className="text-white hover:text-gray-400">Home</Link></li>
              <li><Link href="/agency" className="text-white hover:text-gray-400">Agency</Link></li>
              <li><Link href="/team" className="text-white hover:text-gray-400">Team</Link></li>
              <li><Link href="/services" className="text-white hover:text-gray-400">Services</Link></li>
              <li><Link href="/testimonials" className="text-white hover:text-gray-400">Testimonials</Link></li>
              <li><Link href="/Projects" className="text-white hover:text-gray-400">Projects</Link></li>
              <li><Link href="/contact" className="text-white hover:text-gray-400">Contact</Link></li>
            </ul>
          </div>

          {/* Grid */}

          <div className="py-7 border-t border-gray-700">
            <div className="flex items-center justify-center">
              <span className="text-gray-400">
                © <Link href="/">7 Creative</Link> 2024, All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
