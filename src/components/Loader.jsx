import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Loader.css";

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let count = { value: 0 };

    gsap.to(count, {
      value: 100,
      duration: 2.5,
      ease: "power1.inOut",
      onUpdate: () => {
        if (textRef.current) {
          textRef.current.textContent = Math.round(count.value) + "%";
        }
      },
      onComplete: () => {
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.5,
          delay: 1,
          onComplete: () => onComplete(),
        });
      },
    });
  }, [onComplete]);

  return (
    <div id="loader" ref={loaderRef}>
      <div className="loader-content">
        <h1 ref={textRef} id="loading-text">
          0%
        </h1>
        <p className="loading-sub">Igniting the Engine...</p>
      </div>
    </div>
  );
}
