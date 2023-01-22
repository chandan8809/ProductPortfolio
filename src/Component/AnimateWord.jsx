import React from "react";
import { motion } from "framer-motion";

const AnimateWord = ({ text }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: .04 * i },
    }),
    //visible:{opacity:1}
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
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
      {words.map((word, index) => (
        <motion.span
  
          variants={child}
          style={{ marginRight: "5px" ,border:"1px solid"}}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimateWord;
