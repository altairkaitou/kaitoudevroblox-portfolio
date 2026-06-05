/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Cpu } from "lucide-react";
import { motion } from "motion/react";

export default function ProjectsTab() {
  const tags = ["Luau", "Server-Authoritative", "React-Lua", "ProfileStore", "Rojo", "Data-Driven"];

  return (
    <div className="flex-1 flex flex-col justify-start w-full relative z-10 py-4 select-none">
      <div className="mb-6 md:mb-10">
        <h2 className="font-display text-2xl md:text-3xl font-medium text-[#eae6df] tracking-tight">
          Projects
        </h2>
        <p className="text-sm text-neutral-500 font-sans mt-2">
          Real work. Currently in active development.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-8 md:p-10 hover:border-white/10 transition-colors group relative overflow-hidden w-full"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-neutral-800/10 to-transparent pointer-events-none rounded-full" />

        <div className="flex justify-between items-start mb-6">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#eae6df]/60 font-semibold px-2 py-1 bg-white/5 rounded-md border border-white/5">
            Roblox ARPG — Solo Dev
          </span>
          <Cpu className="w-4 h-4 text-neutral-600 group-hover:text-[#eae6df] transition-colors" />
        </div>

        <h3 className="font-display text-3xl md:text-4xl font-medium text-[#eae6df] mb-4 leading-snug">
          ENTRO
        </h3>

        <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed mb-4 max-w-2xl">
          A Path of Exile-inspired top-down ARPG built entirely solo on Roblox. Features a fully server-authoritative combat system, a PoE-style skill and support gem socket system, loot-based gear progression with affix pooling, procedural map generation, and a complete React-Lua UI covering inventory, skill book, HUD, and XP bar.
        </p>

        <p className="font-sans text-xs text-neutral-600 font-light leading-relaxed mb-8 max-w-2xl">
          All systems are data-driven and decoupled — skills read only final stat values, never individual item sources. Written in strict Luau with Rojo for source control and ProfileStore for data persistence.
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-sans px-2.5 py-1 bg-white/[0.02] border border-white/5 rounded-full text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
