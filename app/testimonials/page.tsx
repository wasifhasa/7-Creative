
'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Image from 'next/image';

function Clients() {
  const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  }, [isInView, controls]);

  return (
    <div>
      <Navbar/>
      <section
        id="clients-section"
        ref={sectionRef}
        className="bg-black px-4 py-12 md:py-24"
      >
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-white underline font-extrabold font-serif text-center text-4xl leading-none uppercase max-w-2xl mx-auto">
            What Clients Are Saying
          </h2>
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 relative mt-28">
            <motion.div
              className="bg-gray-500 rounded-lg p-8 text-center md:w-1/3 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              <p className="font-bold uppercase">John Doe</p>
              <p className="text-xl font-light italic text-gray-800">
                Impeccable website design with a focus on detail and user experience.
              </p>
              <div className="flex items-center justify-center space-x-2 mt-4">
                {[...Array(3)].map((_, index) => (
                  <svg
                    key={index}
                    className="text-yellow-500 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="bg-gray-500 rounded-lg p-8 text-center md:w-1/3 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              animate={controls}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="font-bold uppercase">Jane Smith</p>
              <p className="text-xl font-light italic text-gray-800">
                Cutting-edge AI microservices that combine innovation with top-quality performance.
              </p>
              <div className="flex items-center justify-center space-x-2 mt-4">
                {[...Array(3)].map((_, index) => (
                  <svg
                    key={index}
                    className="text-yellow-500 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="bg-gray-500 rounded-lg p-8 text-center md:w-1/3 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              animate={controls}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="font-bold uppercase">Emily Johnson</p>
              <p className="text-xl font-light italic text-gray-800">
                Stunning graphic designs that showcase creativity and precision.
              </p>
              <div className="flex items-center justify-center space-x-2 mt-4">
                {[...Array(3)].map((_, index) => (
                  <svg
                    key={index}
                    className="text-yellow-500 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Clients;
