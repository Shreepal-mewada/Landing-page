import { useEffect } from "react";
import gsap from "gsap";
import "./MainContent.css";
import { motion } from "motion/react";
export default function MainContent() {
  // useEffect(() => {
  //   let t=gsap.timeline();
  //   t.from(".cimg",{

  //   })
  // gsap.from(".hero-text", {
  //   opacity: 0,
  //   y: 40,
  //   duration: 1.2,
  //   ease: "power2.out",
  // });
  // gsap.from(".hero-car", {
  //   opacity: 0,
  //   scale: 0.9,
  //   duration: 1.5,
  //   delay: 0.3,
  //   ease: "expo.out",
  // });
  // }, []);

  return (
    <div className="main-container">
      <video
        autoPlay
        muted
        playsInline
        src="/Chiron-IV-2-DESKTOP.mp4"
      ></video>
      {/* <motion.div
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 2,
          delay: 4,
          ease: "easeOutElastic",
        }}
        className="chirons"
      >
        <img
          className="cimg"
          src="https://bugatti.imgix.net/67fd0ad8e7036b2ee3b72218/chiron-wordmark-flat.svg?auto=format,compress&cs=srgb&sharp=10&w=512&dpr=1.25"
          alt=""
        />
      </motion.div> */}
      {/* <motion.p
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 2,
          delay: 4.1,
        }}
        className="chironp"
      >
        BEAUTY MEETS BEAST
        
      </motion.p> */}

      <div className="overlay"></div>
    </div>
  );
}
