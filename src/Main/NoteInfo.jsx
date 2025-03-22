import React from "react";
import { motion } from "motion/react";
const NoteInfo = ({ date, isFocused }) => {
  const variants = {
    initial: {
      opacity: 1,
      scaleY: 1,
      transition: { type: "tween", ease: "easeInOut", duration: 0.5 },
    },
    hideNote: {
      opacity: 0,
      scaleY: 0,
      transition: { type: "tween", ease: "easeInOut", duration: 0.3 },
    },
  };
  return (
    <motion.div>
      <motion.div
        variants={variants}
        initial="initial"
        animate={isFocused ? "hideNote" : ""}
        className="absolute bottom-0 z-10 h-2/12 w-full origin-bottom rounded-b-xl bg-white p-2"
      >
        <p className="text-gray-800"> Created: {date}</p>
      </motion.div>
    </motion.div>
  );
};

export default NoteInfo;
