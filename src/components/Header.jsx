// import React, { useEffect } from "react";
// import "./Header.css";
// import gsap from "gsap";
// import { delay, motion } from "motion/react";

// function Header() {
//   // useEffect(() => {
//   //   gsap.from(".sec1", {
//   //     duration: 8,
//   //     y: 100,
//   //     opacity: 1,
//   //   });
//   //   gsap.to("sec1", {
//   //     duration: 8,
//   //     y: 0,
//   //     opacity: 1,
//   //   });
//   // }, []);
//   return (
//     <div className="header">
//       <motion.div
//         animate={{
//           x: [-100, 0],
//           opacity: [0, 1],
//         }}
//         Transition={{
//           ease: "easeInOut",
//           transition: { duration: 4},
//         }}
//         className="sec1"
//       >
//         BUGATTI
//       </motion.div>
//       <motiondiv
//         animate={{
//           x: [-100, 0],
//           opacity: 2,
//         }}
//         transition={{
//           ease: "easeInOut",
//           transition: { duration: 2 },
//         }}
//         className="sec2"
//       >
//         <h4>Home</h4>
//         <h4>About</h4>
//         <h4>Contact</h4>
//         <h4>Products</h4>
//         <button className="chironbtn">Explore</button>
//       </motiondiv>
//     </div>
//   );
// }

// export default Header;

import React from "react";
import "./Header.css";
import { motion } from "motion/react";

function Header() {
  return (
    <div className="header">
      <motion.div
        animate={{
          // y: [-100, 0],
          opacity: [0, 1],
        }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          delay: 2.5,
        }}
        className="sec1"
      >
        <h4>BUGATTI</h4>
        <span>|</span>
        <img
          className="cimg"
          src="https://bugatti.imgix.net/67fd0ad8e7036b2ee3b72218/chiron-wordmark-flat.svg?auto=format,compress&cs=srgb&sharp=10&w=512&dpr=1.25"
          alt=""
        />
      </motion.div>

      <motion.div
        animate={{
          // y: [-100, 0],
          opacity: [0, 1],
        }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          delay: 2.9,
        }}
        className="sec2"
      >
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Products</h4>
        <button className="chironbtn">Explore</button>
      </motion.div>
      
    </div>
  );
}

export default Header;
