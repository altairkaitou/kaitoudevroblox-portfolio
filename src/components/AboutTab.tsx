/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface AboutTabProps {
  onViewScripting: () => void;
}

export default function AboutTab({ onViewScripting }: AboutTabProps) {
  // Animating the text characters for the title "Helious"
  const titleText = "KaitouDev";
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 18, stiffness: 120 },
    },
  };

  const textBlockVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", damping: 20, stiffness: 80, delay: 0.6 },
    },
  };

  return (
    <div className="flex-1 flex flex-col justify-end min-h-[300px] md:min-h-[400px] relative z-10 w-full">
      {/* Decorative center subtle atmospheric grid glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-neutral-900 rounded-full blur-[120px]" />
      </div>

      <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-end gap-10 lg:gap-6">
        {/* Left Side: Massive Display Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-start select-none"
        >
          <div className="relative flex items-start">
            <h1 
              style={{ textShadow: "0 4px 18px rgba(0,0,0,0.45), 0 2px 4px rgba(0,0,0,0.6)" }}
              className="font-display font-medium tracking-tighter text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem] text-[#eae6df] leading-none flex overflow-hidden py-1"
            >
              {titleText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block origin-bottom"
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            
          </div>
        </motion.div>

        {/* Right Side: Profile Statement & CTA Button */}
        <motion.div
          variants={textBlockVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6 max-w-sm md:max-w-md lg:max-w-xs xl:max-w-md self-start lg:self-end pb-4 lg:pb-8"
        >
          <p 
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
            className="font-sans text-sm md:text-base leading-relaxed text-neutral-200 font-light pr-2"
          >
            Roblox scripter with full-stack engineering background. I design scalable systems with clear client-server boundaries, server-side validation, and maintainable Luau architecture so projects do not need a rewrite a few months later.
          </p>

          <button
            id="view-scripting-btn"
            onClick={onViewScripting}
            className="group relative flex items-center justify-between gap-5 bg-[#eae6df] hover:bg-white text-[#0a0a0a] rounded-full pl-6 pr-2 py-2 outline-none font-sans font-medium text-sm sm:text-base cursor-pointer shadow-xl transition-all duration-300 hover:scale-[1.03] select-none"
          >
            <span>View my work</span>
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#0a0a0a] text-[#eae6df] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
