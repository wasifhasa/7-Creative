
'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import Image from 'next/image';

const Project: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    { title: 'Logo Designing', imgSrc: '/l.jpg', desc: 'A stunning logo that represents your brand\'s identity and values.', width: 400, height: 300 },
    { title: 'Graphic Designing', imgSrc: '/g.jpg', desc: 'High-quality graphic designs that enhance your brand\'s visual appeal.', width: 400, height: 300 },
    { title: 'Web Designing', imgSrc: '/w.jpg', desc: 'Innovative web designs that make your website stand out.', width: 400, height: 300 },
    { title: 'Web Development', imgSrc: '/wd.jpg', desc: 'Advanced web development techniques for a seamless user experience.', width: 400, height: 300 },
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-white mb-16" data-aos="zoom-in">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
            >
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={project.imgSrc}
                  alt={`${project.title} Image`}
                  width={project.width}  // Ensure width is provided
                  height={project.height} // Ensure height is provided
                  className="w-full h-full object-cover hover:object-scale-down transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-teal-400">{project.title}</h3>
                <p className="mt-2 text-gray-300">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/project" className="inline-block px-8 py-4 bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-500 transition transform hover:-translate-y-1">
            See All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project;
