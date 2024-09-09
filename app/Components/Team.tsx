
// 'use client'
// import React, { useEffect, useState } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import Image from 'next/image';

// // Define the debounce function with proper TypeScript types
// const debounce = <T extends (...args: any[]) => void>(func: T, delay: number): T => {
//   let timeoutId: NodeJS.Timeout;
//   return function(this: any, ...args: Parameters<T>) {
//     if (timeoutId) clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => func.apply(this, args), delay);
//   } as T;
// };

// const Team: React.FC = () => {
//   const controls = useAnimation();
//   const [isInView, setIsInView] = useState<boolean>(false);

//   const handleScroll = () => {
//     const sectionElement = document.getElementById('our-team');

//     if (sectionElement) {
//       const scrollPosition = window.scrollY + window.innerHeight;
//       const sectionTop = sectionElement.offsetTop;
//       const sectionHeight = sectionElement.offsetHeight;

//       if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
//         setIsInView(true);
//       } else {
//         setIsInView(false);
//       }
//     }
//   };

//   const debouncedHandleScroll = debounce(handleScroll, 100);

//   useEffect(() => {
//     window.addEventListener('scroll', debouncedHandleScroll);
//     handleScroll(); // Initial check
//     return () => window.removeEventListener('scroll', debouncedHandleScroll);
//   }, [debouncedHandleScroll]);

//   useEffect(() => {
//     if (isInView) {
//       controls.start({ opacity: 1, y: 0 });
//     } else {
//       controls.start({ opacity: 0, y: 20 });
//     }
//   }, [isInView, controls]);

//   return (
//     <section id="our-team" className="bg-black py-32">
//       <div className="container mx-auto px-4">
//         <h2 className="text-white text-5xl underline font-bold text-center mb-8">
//           Meet Our Team
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
//           {/* Team Member 1 */}
//           <motion.div
//             className="bg-gray-400 rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
//             animate={controls}
//             transition={{ duration: 0.5 }}
//           >
//             <Image
//               src="/t1.jpg"
//               alt="Waqas, Software Engineer"
//               width={500}
//               height={500}
//               className="w-full rounded-full mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">Waqas Ali Khan</h3>
//             <p className="text-gray-700">Role: Software Engineer</p>
//           </motion.div>
//           {/* Team Member 2 */}
//           <motion.div
//             className="bg-gray-400 rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
//             animate={controls}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             <Image
//               src="/t2.jpg"
//               alt="Jane Smith, Graphic Designer"
//               width={500}
//               height={500}
//               className="w-full rounded-full mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">Asad Mirza</h3>
//             <p className="text-gray-700">Role: Graphic Designer</p>
//           </motion.div>
//           {/* Team Member 3 */}
//           <motion.div
//             className="bg-gray-400 rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
//             animate={controls}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <Image
//               src="/t3.jpg"
//               alt="Alex Johnson, Marketing Manager"
//               width={500}
//               height={500}
//               className="w-full rounded-full mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">Alex Johnson</h3>
//             <p className="text-gray-700">Role: Marketing Manager</p>
//           </motion.div>
//           {/* Team Member 4 */}
//           <motion.div
//             className="bg-gray-400 rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
//             animate={controls}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <Image
//               src="/t4.jpg"
//               alt="Peter Johnson, SEO Specialist"
//               width={500}
//               height={500}
//               className="w-full rounded-full mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">Ahmer Aziz</h3>
//             <p className="text-gray-700">Role: SEO Specialist</p>
//           </motion.div>
//           {/* Team Member 5 */}
//           <motion.div
//             className="bg-gray-400 rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
//             animate={controls}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <Image
//               src="/t5.jpg"
//               alt="Emily Brown, UX Designer"
//               width={500}
//               height={500}
//               className="w-full rounded-full mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">Emily Brown</h3>
//             <p className="text-gray-700">Role: UX Designer</p>
//           </motion.div>
//           {/* Team Member 6 */}
//           <motion.div
//             className="bg-gray-400 rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
//             animate={controls}
//             transition={{ duration: 0.5, delay: 0.5 }}
//           >
//             <Image
//               src="/t6.jpg"
//               alt="Michael Davis, Frontend Developer"
//               width={500}
//               height={500}
//               className="w-full rounded-full mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">Wasif Hasan</h3>
//             <p className="text-gray-700">Role: Frontend Developer</p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Team;


'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Team: React.FC = () => {
  const animationVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="our-team" className="bg-black ">
      <div className="container mx-auto  py-32">
        <h2 className="text-white text-5xl underline font-bold text-center mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <motion.div
            className="bg-gray-400 rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
            variants={animationVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Image
              src="/t1.jpg"
              alt="Waqas Ali Khan, Software Engineer"
              width={500}
              height={500}
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Waqas Ali Khan</h3>
            <p className="text-gray-700">Role: Software Engineer</p>
          </motion.div>
          {/* Team Member 2 */}
          <motion.div
            className="bg-gray-400 rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
            variants={animationVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
          >
            <Image
              src="/t2.jpg"
              alt="Jane Smith, Graphic Designer"
              width={500}
              height={500}
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Asad Mirza</h3>
            <p className="text-gray-700">Role: Graphic Designer</p>
          </motion.div>
          {/* Team Member 3 */}
          <motion.div
            className="bg-gray-400 rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
            variants={animationVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
          >
            <Image
              src="/t3.jpg"
              alt="Alex Johnson, Marketing Manager"
              width={500}
              height={500}
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Alex Johnson</h3>
            <p className="text-gray-700">Role: Marketing Manager</p>
          </motion.div>
          {/* Team Member 4 */}
          <motion.div
            className="bg-gray-400 rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
            variants={animationVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
          >
            <Image
              src="/t4.jpg"
              alt="Peter Johnson, SEO Specialist"
              width={500}
              height={500}
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Ahmer Aziz</h3>
            <p className="text-gray-700">Role: SEO Specialist</p>
          </motion.div>
          {/* Team Member 5 */}
          <motion.div
            className="bg-gray-400 rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
            variants={animationVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
          >
            <Image
              src="/t5.jpg"
              alt="Emily Brown, UX Designer"
              width={500}
              height={500}
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Emily Brown</h3>
            <p className="text-gray-700">Role: UX Designer</p>
          </motion.div>
          {/* Team Member 6 */}
          <motion.div
            className="bg-gray-400 rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
            variants={animationVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
          >
            <Image
              src="/t6.jpg"
              alt="Michael Davis, Frontend Developer"
              width={500}
              height={500}
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Wasif Hasan</h3>
            <p className="text-gray-700">Role: Frontend Developer</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
