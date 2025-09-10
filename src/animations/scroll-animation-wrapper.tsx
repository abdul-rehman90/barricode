// "use client";

// import React, { useEffect, useState } from 'react';
// import 'aos/dist/aos.css';

// // import { motion } from 'framer-motion';

// interface ScrollAnimatedWrapperProps {
//     children: React.ReactNode;
//     index: number;
// }

// const ScrollAnimatedWrapper = ({ children, index }: ScrollAnimatedWrapperProps) => {
//     useEffect(() => {
//         import('aos').then(AOS => {
//             AOS.init({
//                 duration: 1000,
//                 once: true,
//                 offset: 100
//             });
//         });
//     }, []);
//     // First component (index 0): no animation
//     if (index === 0) return <>{children}</>;

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20, scale: 0.95 }}
//             whileInView={{
//                 opacity: 1,
//                 y: 0,
//                 scale: [0.95, 1.01, 1] // pop-up effect
//             }}
//             transition={{
//                 duration: 0.4,
//                 ease: 'easeOut'
//             }}
//             viewport={{ once: true, amount: 0.2 }}
//             className="max-w-screen mx-auto"
//         >
//             <div className="max-w-screen mx-auto" data-aos="fade-scale">
//                 {children}s
//             </div>
//         </motion.div >
//     );
// };

// export default ScrollAnimatedWrapper;
