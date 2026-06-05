/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Tab } from "../types";
import { motion } from "motion/react";

interface HeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const tabs = Object.values(Tab);

  return (
    <header className="w-full flex items-end h-[64px] relative select-none z-20">
      {/* Left Wing - stretches to fill empty space */}
      <div className="flex-1 h-16 rounded-tl-[24px] md:rounded-tl-[32px] border-t border-l border-white/5 bg-[#0d0d0d]" />

      {/* S-curve Transition Left */}
      <svg
        className="w-8 h-16 flex-shrink-0 -mr-[1px] text-[#0d0d0d]"
        viewBox="0 0 32 64"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 0,0 C 16,0 16,36 32,36 L 32,64 L 0,64 Z" />
        <path
          d="M 0,0 C 16,0 16,36 32,36"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.2"
        />
      </svg>

      {/* Center Cutout holding Navbar */}
      <div className="flex-shrink-0 h-7 border-t border-white/5 flex items-center px-4 sm:px-6 md:px-10 bg-[#0d0d0d]">
        <nav className="flex items-center gap-1 sm:gap-2 md:gap-4 lg:gap-8 overflow-x-auto scrollbar-none max-w-[calc(100vw-6rem)] py-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                id={`nav-${tab.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActiveTab(tab)}
                className={`relative px-3 py-1 font-sans text-xs sm:text-sm tracking-wide font-medium transition-colors duration-300 outline-none whitespace-nowrap cursor-pointer ${
                  isActive ? "text-[#eae6df]" : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#eae6df] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {tab}
              </button>
            );
          })}
        </nav>
      </div>

      {/* S-curve Transition Right */}
      <svg
        className="w-8 h-16 flex-shrink-0 -ml-[1px] text-[#0d0d0d]"
        viewBox="0 0 32 64"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 0,36 C 16,36 16,0 32,0 L 32,64 L 0,64 Z" />
        <path
          d="M 0,36 C 16,36 16,0 32,0"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.2"
        />
      </svg>

      {/* Right Wing - stretches to fill empty space */}
      <div className="flex-1 h-16 rounded-tr-[24px] md:rounded-tr-[32px] border-t border-r border-white/5 bg-[#0d0d0d]" />
    </header>
  );
}
