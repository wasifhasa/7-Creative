


'use client';

import React, { useEffect } from 'react';
import { FaCode, FaPaintBrush, FaChartLine, FaStore, FaLaptopCode, FaBrain, FaRobot, FaUserEdit, FaUserShield } from "react-icons/fa";
import Navbar from '../Components/Navbar';

function Services() {
  useEffect(() => {
    const handleScroll = () => {
      const serviceCards = document.querySelectorAll('.fade-in-up');
      serviceCards.forEach((card) => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (cardPosition < screenPosition) {
          card.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black">
      {/* Navbar Component */}
      <Navbar />

      <div className="py-12 flex flex-wrap justify-center gap-8">
        <style jsx>{`
          .service-card {
            position: relative;
            overflow: hidden;
            background: white;
            padding: 2rem;
            border-radius: 0.75rem;
            transition: all 0.3s ease;
          }
          .service-card:hover {
            transform: translateY(-0.5rem);
            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
          }
          .service-card:hover .icon {
            color: #ffffff;
          }
          .service-card:hover .description {
            color: #ffffff;
          }
          .service-card .icon {
            transition: color 0.3s ease;
          }
          .service-card .description {
            transition: color 0.3s ease;
            color: #4b5563;
          }
        `}</style>

        {/* Header Section */}
        <div className="flex flex-col -mt-[48px] underline items-center justify-center min-h-screen bg-black py-12 transition-all duration-300">
          <h1 className="mb-5 text-3xl italic font-sans font-extrabold text-white md:text-6xl text-gradient-to-r from-purple-600 to-pink-600 text-center">
            Our Services
          </h1>

          <p className='text-xl text-white font-semibold mt-6 ml-5 md:mt-8 text-center'>
            Leveraging our deep industry knowledge, we build tailored digital strategies to achieve your goals.
          </p>
        </div>

        {/* Service Cards */}
        <div className="flex flex-wrap gap-8 justify-center -mt-[150px]">
          <div className="relative cursor-pointer fade-in-up service-card">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300 group-hover:scale-125" />
            <div className="relative z-10 mx-auto max-w-md text-center">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300">
                <FaCode className='text-5xl icon' />
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 ">
                <p className='text-xl font-serif font-bold'>
                  Web Development
                </p>
                <p>
                  We create responsive, scalable, and efficient websites tailored to meet your business needs.
                </p>
              </div>
            </div>
          </div>

          <div className="relative cursor-pointer fade-in-up service-card">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300 group-hover:scale-125" />
            <div className="relative z-10 mx-auto max-w-md text-center">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300">
                <FaPaintBrush className='text-5xl icon' />
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 ">
                <p className='text-xl font-serif font-bold'>
                  Web Designing
                </p>
                <p>
                  Crafting visually stunning and user-friendly website designs to captivate your audience.
                </p>
              </div>
            </div>
          </div>

          <div className="relative cursor-pointer fade-in-up service-card">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300 group-hover:scale-125" />
            <div className="relative z-10 mx-auto max-w-md text-center">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300">
                <FaChartLine className='text-5xl icon' />
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 ">
                <p className='text-xl font-serif font-bold'>
                  Digital Marketing
                </p>
                <p>
                  Boost your online presence and reach with our cutting-edge digital marketing solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="relative cursor-pointer fade-in-up service-card">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300 group-hover:scale-125" />
            <div className="relative z-10 mx-auto max-w-md text-center">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300">
                <FaStore className='text-5xl icon' />
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 ">
                <p className='text-xl font-serif font-bold'>
                  E-Commerce Solutions
                </p>
                <p>
                  Seamlessly integrated e-commerce solutions to expand your business and drive sales.
                </p>
              </div>
            </div>
          </div>

          <div className="relative cursor-pointer fade-in-up service-card">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300 group-hover:scale-125" />
            <div className="relative z-10 mx-auto max-w-md text-center">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300">
                <FaLaptopCode className='text-5xl icon' />
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 ">
                <p className='text-xl font-serif font-bold'>
                  E-Commerce Development
                </p>
                <p>
                  Developing efficient e-commerce platforms tailored to your business goals.
                </p>
              </div>
            </div>
          </div>

          <div className="relative cursor-pointer fade-in-up service-card">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300 group-hover:scale-125" />
            <div className="relative z-10 mx-auto max-w-md text-center">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300">
                <FaBrain className='text-5xl icon' />
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 ">
                <p className='text-xl font-serif font-bold'>
                  Custom GPT&apos;s Development
                </p>
                <p>
                  Create custom GPT models for tailored insights and interactions, aligned with your business needs.
                </p>
              </div>
            </div>
          </div>

          <div className="relative cursor-pointer fade-in-up service-card">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300 group-hover:scale-125" />
            <div className="relative z-10 mx-auto max-w-md text-center">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300">
                <FaRobot className='text-5xl icon' />
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 ">
                <p className='text-xl font-serif font-bold'>
                  AI Chatbots Development
                </p>
                <p>
                  Build intelligent AI chatbots to enhance customer engagement and streamline interactions.
                </p>
              </div>
            </div>
          </div>

          <div className="relative cursor-pointer fade-in-up service-card">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300 group-hover:scale-125" />
            <div className="relative z-10 mx-auto max-w-md text-center">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300">
                <FaUserEdit className='text-5xl icon' />
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 ">
                <p className='text-xl font-serif font-bold'>
                  Graphic Designing
                </p>
                <p>
                  Transforming visions into stunning visuals with expert graphic design that captures attention and communicates your brand’s message effectively.
                </p>
              </div>
            </div>
          </div>

          <div className="relative cursor-pointer fade-in-up service-card">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300 group-hover:scale-125" />
            <div className="relative z-10 mx-auto max-w-md text-center">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300">
                <FaUserShield className='text-5xl icon' />
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 ">
                <p className='text-xl font-serif font-bold'>
                  Web automation through AI
                </p>
                <p>
                  Streamline your web processes with cutting-edge AI-driven automation, optimizing efficiency and enhancing productivity.
                </p>
              </div>
            </div>
          </div>

          <div className="relative cursor-pointer fade-in-up service-card">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300 group-hover:scale-125" />
            <div className="relative z-10 mx-auto max-w-md text-center">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300">
                <FaCode className='text-5xl icon' />
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 ">
                <p className='text-xl font-serif font-bold'>
                  UI/UX Design
                </p>
                <p>
                  Transform user interactions with intuitive and engaging UI/UX designs.
                </p>
              </div>
            </div>
          </div>

          <div className="relative cursor-pointer fade-in-up service-card">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300 group-hover:scale-125" />
            <div className="relative z-10 mx-auto max-w-md text-center">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300">
                <FaBrain className='text-5xl icon' />
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 ">
                <p className='text-xl font-serif font-bold'>
                  AI Solutions
                </p>
                <p>
                  Implement advanced AI solutions to automate processes and enhance decision-making.
                </p>
              </div>
            </div>
          </div>

          <div className="relative cursor-pointer fade-in-up service-card">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300 group-hover:scale-125" />
            <div className="relative z-10 mx-auto max-w-md text-center">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300">
                <FaRobot className='text-5xl icon' />
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 ">
                <p className='text-xl font-serif font-bold'>
                  Logo Designing
                </p>
                <p>
                  Crafting memorable and impactful logos that represent your brand&apos;s identity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
