import React, { useEffect, useRef } from "react";
import { motion, stagger, useAnimation } from "framer-motion";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function TextGenerateEffect({ words, className }) {
  const animationControls = useAnimation();
  const scopeRef = useRef(null);

  const wordsArray = words.split(" ");

  useEffect(() => {
    animationControls.start((i) => ({
      opacity: 1,
      transition: { duration: 2, delay: i * 0.2 },
    }));
  }, [animationControls]);

  const renderWords = () => {
    return (
      <motion.div ref={scopeRef}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-white text-black opacity-0"
            custom={idx}
            animate={animationControls}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div>
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide ">
          {renderWords()}
        </div>
      </div>
    </div>
  );
}

export default TextGenerateEffect;
