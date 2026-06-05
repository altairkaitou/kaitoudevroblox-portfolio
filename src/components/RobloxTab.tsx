/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Cpu, Database, Layout, GitBranch } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    id: "systems",
    icon: Cpu,
    title: "Game Systems & Scripting",
    description: "Combat systems, skill frameworks, loot and inventory logic, mob AI, and progression systems. Built server-authoritative with clean separation between client and server.",
    tags: ["Luau", "OOP", "RemoteEvents", "Server-Auth"],
  },
  {
    id: "data",
    icon: Database,
    title: "Data & Persistence",
    description: "Player save systems using ProfileStore with retry logic, data migration support, and secure server-side validation. No data loss, no exploits.",
    tags: ["ProfileStore", "DataStore", "Serialization"],
  },
  {
    id: "ui",
    icon: Layout,
    title: "UI Development",
    description: "React-Lua interfaces including HUDs, inventory panels, skill bars, menus, and tooltips. Responsive, animated, and designed from Figma specs.",
    tags: ["React-Lua", "Figma to Code", "Motion UI"],
  },
  {
    id: "arch",
    icon: GitBranch,
    title: "Architecture & Code Review",
    description: "Modular, data-driven system design built to scale. Clean interfaces between modules, easy to extend. Available for consulting on existing projects too.",
    tags: ["Rojo", "Modular Design", "Code Review"],
  },
];

export default function RobloxTab() {
  return (
    <div className="flex-1 flex flex-col justify-start w-full relative z-10 py-4 select-none">
      <div className="mb-6 md:mb-10">
        <h2 className="font-display text-2xl md:text-3xl font-medium text-[#eae6df] tracking-tight">
          What I Build
        </h2>
        <p className="text-sm text-neutral-500 font-sans mt-2">
          Services available for commission. Full stack software background applied to Roblox.
        </p>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 20, stiffness: 100 } },
              }}
              className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-6 flex flex-col gap-4 hover:border-white/10 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-neutral-800/10 to-transparent pointer-events-none rounded-full" />

              <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-white/10 transition-colors">
                <Icon className="w-4 h-4 text-neutral-400 group-hover:text-[#eae6df] transition-colors" />
              </div>

              <div>
                <h3 className="font-display text-lg font-medium text-[#eae6df] mb-2">
                  {service.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-sans px-2.5 py-1 bg-white/[0.02] border border-white/5 rounded-full text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
