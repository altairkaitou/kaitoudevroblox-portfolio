/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import {
  Activity,
  ArrowUpRight,
  Code2,
  Database,
  Gamepad2,
  Github,
  Play,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Waves,
} from "lucide-react";
import { motion } from "motion/react";

const gameplayVideoSrc = "/videos/ability-training-arena-demo.mp4";

const demoLinks = {
  play: "https://www.roblox.com/games/78969513676638/Ability-Training-Arena",
  code: "https://github.com/altairkaitou/hidden-dev-luau-submission/blob/main/AbilityTrainingArena.server.lua",
};

const proofStats = [
  { value: "666", label: "Luau code lines" },
  { value: "1", label: "server Script" },
  { value: "5", label: "skeleton targets" },
];

const demonstratedSystems = [
  {
    icon: ShieldCheck,
    title: "Server-owned casting",
    description: "Cast range, cooldowns, character state, and target validation stay on the server.",
  },
  {
    icon: Waves,
    title: "CFrame wave logic",
    description: "Ground waves use forward vectors, lane offsets, and box queries to resolve hits.",
  },
  {
    icon: Activity,
    title: "Combat feedback",
    description: "Damage, hit counters, physics impulse, floating numbers, and respawns are handled at runtime.",
  },
  {
    icon: TimerReset,
    title: "Runtime cleanup",
    description: "Transient effects, tool connections, and player state are cleaned without extra modules.",
  },
];

const commissionAreas = [
  {
    icon: Sparkles,
    title: "Ability systems",
    body: "Skill casts, cooldowns, hit detection, status effects, and combat readability.",
  },
  {
    icon: Gamepad2,
    title: "NPC gameplay",
    body: "Enemy encounters, dummy testing areas, patrol behavior, and server-side combat rules.",
  },
  {
    icon: Database,
    title: "Progression logic",
    body: "Inventory, loot, stats, save flow, and data-driven balancing hooks.",
  },
  {
    icon: Code2,
    title: "Existing code help",
    body: "Refactors, bug fixes, code review, and system cleanup for Roblox projects.",
  },
];

export default function RobloxTab() {
  return (
    <div className="flex-1 w-full relative z-10 py-4 select-none">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8 md:mb-10 max-w-3xl"
      >
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[#a7c7ff]/75">
          Roblox scripting
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-medium text-[#eae6df] tracking-tight leading-[0.98] text-balance">
          Server-side systems clients can test.
        </h2>
        <p className="mt-4 max-w-xl text-sm md:text-base text-neutral-400 leading-relaxed">
          I build Roblox combat and progression logic with playable proofs, readable Luau, and server authority where it matters.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.18fr)_minmax(360px,0.82fr)] gap-5 md:gap-6">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[28px] bg-white/[0.035] p-1.5 ring-1 ring-white/[0.075] shadow-[0_24px_80px_rgba(0,0,0,0.22)]"
        >
          <div className="relative overflow-hidden rounded-[22px] bg-[#080909] ring-1 ring-white/[0.07] min-h-[340px] md:min-h-[440px]">
            {gameplayVideoSrc ? (
              <video
                className="h-full min-h-[340px] md:min-h-[440px] w-full object-cover"
                src={gameplayVideoSrc}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Ability Training Arena gameplay preview"
              />
            ) : (
              <div className="relative flex min-h-[340px] md:min-h-[440px] flex-col justify-between overflow-hidden p-5 md:p-8 technical-grid">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(167,199,255,0.18),transparent_28%),radial-gradient(circle_at_82%_78%,rgba(234,230,223,0.08),transparent_32%)]" />
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/[0.08] to-transparent" />
                <div className="media-scan absolute inset-x-0 top-0 h-px bg-[#a7c7ff]/70 shadow-[0_0_28px_rgba(167,199,255,0.55)]" />

                <div className="relative flex items-center gap-3">
                  <div className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-300">
                    Playable demo
                  </div>
                </div>

                <div className="relative mt-12 max-w-md">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eae6df] text-[#080909] shadow-[0_18px_50px_rgba(234,230,223,0.16)]">
                    <Play className="h-6 w-6 fill-current translate-x-0.5" />
                  </div>
                  <h3 className="font-display text-3xl md:text-5xl font-medium leading-none tracking-tight text-[#eae6df]">
                    Ability Training Arena
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-400">
                    A public Roblox place showing one skill damaging five Skeleton Warrior targets.
                  </p>
                </div>

                <div className="relative grid grid-cols-3 gap-2 md:gap-3">
                  {proofStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/[0.075] bg-black/35 px-3 py-3 md:px-4 md:py-4"
                    >
                      <div className="font-display text-2xl md:text-3xl font-semibold tabular-nums text-[#eae6df]">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-[10px] md:text-xs text-neutral-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.section>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between gap-6 rounded-[28px] border border-white/[0.075] bg-[#101011] p-6 md:p-7"
        >
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              Featured proof
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-[#eae6df]">
              Ability Training Arena
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              A HiddenDevs-ready Luau demo built as one server Script. It validates player casts, positions a CFrame ground wave, queries targets, applies damage and knockback, then cleans temporary effects.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row xl:flex-col 2xl:flex-row gap-3">
            <a
              href={demoLinks.play}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-1 items-center justify-between gap-4 rounded-full bg-[#eae6df] px-5 py-2.5 text-sm font-semibold text-[#0a0a0a] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white active:scale-[0.98]"
            >
              <span>Play demo</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0a0a0a] text-[#eae6df] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>

            <a
              href={demoLinks.code}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-1 items-center justify-between gap-4 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-[#eae6df] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/20 hover:bg-white/[0.055] active:scale-[0.98]"
            >
              <span>View code</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.08] text-[#eae6df] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <Github className="h-4 w-4" />
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {demonstratedSystems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-3 rounded-2xl bg-white/[0.025] p-3 ring-1 ring-white/[0.055]">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#a7c7ff]/10 text-[#c6dbff] ring-1 ring-[#a7c7ff]/15">
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[#eae6df]">{item.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-neutral-500">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.aside>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4"
      >
        {commissionAreas.map((area) => {
          const Icon = area.icon;
          return (
            <article
              key={area.title}
              className="group rounded-[22px] border border-white/[0.065] bg-[#0f0f10] p-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-white/[0.13] hover:bg-[#141415]"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.035] text-neutral-400 ring-1 ring-white/[0.06] transition-colors duration-500 group-hover:text-[#eae6df]">
                <Icon className="h-4 w-4" strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-lg font-medium tracking-tight text-[#eae6df]">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {area.body}
              </p>
            </article>
          );
        })}
      </motion.section>
    </div>
  );
}
