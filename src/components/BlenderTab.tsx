/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Box, Sparkles, Orbit, Compass, Hammer } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ModelPreset {
  id: string;
  name: string;
  type: string;
  tris: string;
  gridSize: string;
  desc: string;
  svgShape: React.ReactNode;
}

export default function BlenderTab() {
  const modelsList: ModelPreset[] = [
    {
      id: "blender-1",
      name: "Cybernetic Relay Core",
      type: "Prop Module",
      tris: "1,420 Triangles",
      gridSize: "2.4m x 2.4m",
      desc: "Compact generator prop with glowing plasma coils. Optimized for high-fidelity Roblox games and stylized 3D experiences.",
      svgShape: (
        <svg className="w-full h-full text-[#eae6df]/15 hover:text-[#eae6df]/30 transition-colors" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          {/* Wireframe Box Core */}
          <polygon points="50,15 85,35 85,75 50,95 15,75 15,35" />
          <line x1="50" y1="15" x2="50" y2="95" />
          <line x1="15" y1="35" x2="50" y2="55" />
          <line x1="85" y1="35" x2="50" y2="55" />
          {/* Internal core ring representation */}
          <circle cx="50" cy="55" r="16" strokeDasharray="2,2" />
          <circle cx="50" cy="55" r="8" />
          {/* Orbital links */}
          <line x1="50" y1="15" x2="50" y2="39" strokeDasharray="3,3" />
          <line x1="15" y1="75" x2="50" y2="55" strokeDasharray="4,4" />
          <line x1="85" y1="75" x2="50" y2="55" strokeDasharray="4,4" />
        </svg>
      ),
    },
    {
      id: "blender-2",
      name: "Crystalline Broadsword",
      type: "Melee Gear Element",
      tris: "940 Triangles",
      gridSize: "1.2m x 0.15m",
      desc: "Low-poly weapon designed following clean geometric topology. Hand-painted textures baked with ambient occlusion maps.",
      svgShape: (
        <svg className="w-full h-full text-[#eae6df]/15 hover:text-[#eae6df]/30 transition-colors" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          {/* Wireframe Sword */}
          <line x1="50" y1="5" x2="50" y2="95" />
          {/* Blade edges */}
          <polygon points="50,5 57,15 55,70 50,75 45,70 43,15" />
          {/* Guard */}
          <polygon points="35,74 65,74 60,78 40,78" />
          {/* Grip and Pommel */}
          <rect x="47.5" y="78" width="5" height="12" />
          <circle cx="50" cy="92" r="3" />
          {/* Reflection accents */}
          <line x1="48" y1="20" x2="48" y2="60" strokeDasharray="1,2" />
        </svg>
      ),
    },
    {
      id: "blender-3",
      name: "Trekking Exosuit Greaves",
      type: "Apparel Mesh Overlay",
      tris: "1,850 Triangles",
      gridSize: "0.8m x 0.6m",
      desc: "Custom fitted footwear armor for R15 rigs. Smooth bone weighting, zero joint shearing and highly optimized skin layout.",
      svgShape: (
        <svg className="w-full h-full text-[#eae6df]/15 hover:text-[#eae6df]/30 transition-colors" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          {/* Wireframe Boots silhouette */}
          <path d="M 35,15 L 45,15 L 47,40 L 65,55 L 65,75 L 30,75 L 30,55 L 35,40 Z" />
          {/* Joint wire plates */}
          <line x1="30" y1="55" x2="47" y2="55" />
          <line x1="35" y1="40" x2="47" y2="40" />
          <path d="M 30,70 L 65,70" />
          {/* Support ring wire */}
          <ellipse cx="40" cy="15" rx="5" ry="2" />
          {/* Panels */}
          <line x1="39" y1="15" x2="39" y2="40" />
          <line x1="43" y1="15" x2="43" y2="40" strokeDasharray="2,2" />
        </svg>
      ),
    },
    {
      id: "blender-4",
      name: "Astral Command Helm",
      type: "Hat Accessory Accessory",
      tris: "1,120 Triangles",
      gridSize: "0.5m x 0.5m",
      desc: "Hard-surface helmet mesh styled with transparent glowing visors. Includes complete custom textures and baked surface topology.",
      svgShape: (
        <svg className="w-full h-full text-[#eae6df]/15 hover:text-[#eae6df]/30 transition-colors" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          {/* Dome shape */}
          <path d="M 20,50 C 20,15 80,15 80,50 L 76,80 L 24,80 Z" />
          {/* Curved glowing visor */}
          <path d="M 30,45 C 30,35 70,35 70,45 L 66,65 C 66,73 34,73 34,65 Z" fill="none" />
          <line x1="20" y1="50" x2="80" y2="50" />
          <line x1="50" y1="15" x2="50" y2="80" strokeDasharray="4,4" />
          <circle cx="50" cy="53" r="10" strokeDasharray="3,3" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex-1 flex flex-col justify-start w-full relative z-10 py-4 select-none">
      <div className="mb-6 md:mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-[#eae6df] tracking-tight flex items-center gap-2">
            Blender 3D Lab
          </h2>
          <p className="text-sm text-neutral-500 font-sans mt-2">
            Sleek low-poly creations engineered with precision geometry and unified UV projections.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
          <div className="flex items-center gap-1.5 bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg">
            <Orbit className="w-3.5 h-3.5 text-[#eae6df]/75 animate-spin-slow" />
            <span>Wireframe Viewport</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
        {modelsList.map((model) => {
          return (
            <motion.div
              id={`blender-${model.id}`}
              key={model.id}
              whileHover={{ y: -4, borderColor: "rgba(255, 255, 255, 0.15)" }}
              className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-5 flex flex-col bg-radial transition-all duration-300 relative group overflow-hidden"
            >
              {/* Virtual Viewport Panel */}
              <div className="w-full aspect-square bg-[#080809] bg-grid-lines border border-white/5 rounded-xl mb-4 flex items-center justify-center relative p-6">
                <div className="absolute top-2 right-2 text-[10px] font-mono text-neutral-600 bg-black/45 px-2 py-0.5 rounded border border-white/5">
                  OBJ + FBX
                </div>
                <div className="w-24 h-24 sm:w-28 sm:h-28 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                  {model.svgShape}
                </div>
              </div>

              {/* Specs and details */}
              <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                <span className="text-[#eae6df]/50 uppercase tracking-widest">{model.type}</span>
                <span className="text-neutral-500">{model.tris}</span>
              </div>

              <h3 className="font-display text-base font-semibold text-[#eae6df] mb-1 group-hover:text-white transition-colors">
                {model.name}
              </h3>
              
              <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed flex-1 mt-1">
                {model.desc}
              </p>

              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                <span>Scale: {model.gridSize}</span>
                <span className="text-neutral-600">UV Unwrapped</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
