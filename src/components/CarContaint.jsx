import React from "react";
import "./CarContaint.css";
import { motion } from "motion/react";
function CarContaint() {
  return (
    <motion.div
      className="carcont"
      animate={{
        opacity: [0, 1],
      }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        delay: 3.8,
      }}
    >
      <h1>BUGATTI CHIRON</h1>
      <p>
        Breaking new barriers and dimensions through a modern reinterpretation
        of BUGATTI'S iconic history. The CHIRON emphasizes comfort and
        sophistication as much as innovative technology and performance-oriented
        form.
      </p>
    </motion.div>
  );
}

export default CarContaint;
