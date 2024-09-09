
'use client';
import { useEffect } from 'react';
import Typed from 'typed.js';

const Home: React.FC = () => {
  useEffect(() => {
    const options = {
      strings: [
    "Inspire, Connect, Grow Together",
    "Drive Engagement, Build Trust",
    "Empower Your Digital Journey"
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    };
    const typed = new Typed('#typewriter', options);

    return () => {
      // Destroy Typed instance during cleanup to prevent memory leaks
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center text-center  text-white h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:  "url('/ho.jpg')", // Replace with your image URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 hero-content" data-aos="fade-up">
        <h1 className="text-5xl font-extrabold tracking-wide">
          <span id="typewriter"></span>
        </h1>
        <p className="mt-4 text-xl text-white max-w-lg mx-auto">
          We Empower Your Online Presence with Innovative Social Media Solutions
        </p>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default Home;
