import React from "react";
import { motion } from "framer-motion";

const AnimateLetters = ({ text }) => {
  const letters = Array.from(text)

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: .04 * i },
    }),
    //visible:{opacity:1}
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div 
      style={{border:"1px solid",overflow:"hidden",display:"flex"}} 
      variants={container} 
      initial="hidden" 
      animate="visible"
      >
      {letters.map((letter, index) => (
        <motion.span
          variants={child}
          key={index}
        >
          {letter===" " ?"\u00A0":letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimateLetters;
