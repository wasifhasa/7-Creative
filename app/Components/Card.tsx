

'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function Card() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <div className='bg-gray-800 h-screen w-full'>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>MyCompany - Alternative Hero Section</title>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');"
        }}
      />

      <main className="pt-16 bg-gray-800">
        {/* Hero Section */}
        <section
          ref={sectionRef}
          className="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-gray-800 opacity-50" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
            }}
          />
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Left Side: Company Info */}
              <motion.div
                className="w-full md:w-1/2 mb-12 md:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Innovate.
                  <br />
                  Transform.
                  <br />
                  Succeed.
                </h1>
                <p className="text-xl mb-8 text-gray-300">
                  Empowering businesses with cutting-edge solutions for a digital
                  future.
                </p>
              </motion.div>

              {/* Right Side: Features */}
              <motion.div
                className="w-full md:w-1/2 md:pl-12"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1 }}
              >
                <div className="bg-gray-800 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
                  <h2 className="text-2xl font-semibold mb-6">Why My Company?</h2>
                  <ul className="space-y-4">
                    <motion.li
                      className="flex items-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <svg
                        className="w-6 h-6 mr-3 text-yellow-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <span>Lightning-fast Performance</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <svg
                        className="w-6 h-6 mr-3 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <span>Bank-grade Security</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <svg
                        className="w-6 h-6 mr-3 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        />
                      </svg>
                      <span>AI-powered Insights</span>
                    </motion.li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
          {/* Decorative Element */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                fill="white"
              />
            </svg>
          </div>
        </section>
        {/* ... (rest of your main content) ... */}
      </main>
    </div>
  );
}

export default Card;
