

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '../Components/Navbar'

function Agency() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className='bg-black min-h-screen w-full '>
      <Navbar />
      <section id="testimonies" className="py-20 bg-black">
        <div className="max-w-6xl mx-4 md:mx-10 lg:mx-20 xl:mx-auto mt-10">
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="mb-12 space-y-5 md:mb-16 text-center">
              <motion.h1
                className="mb-5 text-3xl font-semibold text-white md:text-5xl font-serif text-gradient-to-r from-purple-600 to-pink-600"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 1 }}
              >
                The Last Digital Agency You&apos;ll Ever Need
              </motion.h1>
              <motion.p
                className="text-xl text-gray-100 md:text-2xl italic"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Our agency prioritizes quality above all, ensuring every<br /> project exceeds expectations and delivers exceptional results.
              </motion.p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                id: 1,
                name: 'Kanye West',
                title: '10+ Years of Market Experience',
                image: '/10.png',
                // link: 'https://twitter.com/kanyewest'
              },
              {
                id: 2,
                name: 'Tim Cook',
                title: 'Unique Technologies & Modern Approach',
                image: '/tech.jpg',
                // link: 'https://twitter.com/tim_cook'
              },
              {
                id: 3,
                name: 'Kanye West',
                title: '100+ Successful Cases in Portfolio',
                image: '/100.webp',
                // link: 'https://twitter.com/kanyewest'
              },
              {
                id: 4,
                name: 'Tim Cook',
                title: 'Customer Satisfaction is our Top Priority',
                image: '/customer.jpg',
                // link: 'https://twitter.com/tim_cook'
              },
              {
                id: 5,
                name: 'Tim Cook',
                title: 'Designing clean, user-friendly web pages',
                image: '/clean.png',
                // link: 'https://twitter.com/tim_cook'
              },
              {
                id: 6,
                name: 'Tim Cook',
                title: 'Developing modern, eye-catching websites',
                image: '/eye.png',
                // link: 'https://twitter.com/tim_cook'
              }
            ].map(({ id, name, title, image }) => (
              <motion.div
                key={id}
                className="text-sm leading-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: id * 0.2 }}
              >
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a href={'/'} className="cursor-pointer">
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <Image
                          src={image}
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt={name}
                          width={48}  // Specify width
                          height={48} // Specify height
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {title}
                          </h3>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        {/* Description can be added here if needed */}
                      </p>
                    </div>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Agency
