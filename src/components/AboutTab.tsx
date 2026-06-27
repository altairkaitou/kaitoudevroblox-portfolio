import React from "react";
import { ArrowRight, Code2, Database, GitBranch, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

interface AboutTabProps {
  onViewScripting: () => void;
}

const titleText = "KAITOU";

const strengths = [
  {
    icon: ShieldCheck,
    title: "Server-client architecture",
    body: "Clear remote boundaries, server-owned rules, client feedback, and validation flows.",
  },
  {
    icon: Code2,
    title: "Systems, not snippets",
    body: "Reusable gameplay logic, clean module boundaries, and code shaped for future features.",
  },
  {
    icon: Database,
    title: "Database",
    body: "ProfileStore-backed save flows, player state, inventory data, and progression records.",
  },
];

const proofItems = [
  { value: "Luau", label: "primary scripting language" },
  { value: "Rojo", label: "source-controlled workflow" },
  { value: "React-Lua", label: "custom Roblox UI" },
];

const toolTags = ["Strict Luau", "ProfileStore", "Promise", "Signal", "Trove", "CFrame"];

export default function AboutTab({ onViewScripting }: AboutTabProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.055,
        delayChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 92, opacity: 0, rotateX: -12 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { type: "spring", damping: 19, stiffness: 125 },
    },
  };

  return (
    <div className="relative z-10 flex w-full flex-1 select-none flex-col justify-start overflow-visible py-2 xl:justify-center">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[-16%] h-[34rem] w-[34rem] rounded-full bg-[#a7c7ff]/[0.08] blur-[120px]" />
        <div className="absolute bottom-[-28%] right-[-12%] h-[36rem] w-[36rem] rounded-full bg-[#eae6df]/[0.055] blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.026)_1px,transparent_1px)] bg-[size:56px_56px] opacity-30" />
      </div>

      <div className="relative grid w-full grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.06fr)_minmax(360px,0.94fr)] xl:items-end">
        <motion.section
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex min-w-0 flex-col justify-end"
        >
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[#a7c7ff]/85">
              Roblox developer
            </span>
            <span className="rounded-full border border-emerald-400/15 bg-emerald-400/[0.055] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300/80">
              Scripting commissions
            </span>
          </div>

          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex overflow-hidden py-2 font-display text-[4rem] font-semibold leading-[0.86] tracking-tight text-[#eae6df] sm:text-[6.4rem] md:text-[8.2rem] lg:text-[9.4rem] xl:text-[10.2rem]"
            style={{ textShadow: "0 20px 80px rgba(0,0,0,0.52), 0 4px 18px rgba(0,0,0,0.58)" }}
          >
            {titleText.split("").map((char, index) => (
              <motion.span key={`${char}-${index}`} variants={letterVariants} className="inline-block origin-bottom">
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <div className="mt-6 max-w-3xl">
            <p className="font-display text-2xl font-medium leading-[1.04] tracking-tight text-[#f2eee7] md:text-4xl">
              Roblox scripting for gameplay systems that need to keep growing.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-300 md:text-base">
              I bring full-stack engineering habits into Roblox: clear client-server separation, strict validation, maintainable Luau architecture, and systems that do not need a rewrite after the prototype stage.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              id="view-scripting-btn"
              onClick={onViewScripting}
              className="group inline-flex w-fit items-center justify-between gap-5 rounded-full bg-[#eae6df] py-2 pl-5 pr-2 text-sm font-semibold text-[#0a0a0a] shadow-[0_18px_50px_rgba(234,230,223,0.12)] outline-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white active:scale-[0.98] sm:text-base"
            >
              <span>View my work</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0a0a0a] text-[#eae6df] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>

            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <GitBranch className="h-3.5 w-3.5 text-[#a7c7ff]/70" strokeWidth={1.8} />
              Rojo workflow, strict Luau, reusable systems
            </div>
          </div>
        </motion.section>

        <motion.aside
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[28px] border border-white/[0.075] bg-[#0f1011]/90 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.24)] md:p-6"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_0%,rgba(167,199,255,0.14),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.045),transparent_42%)]" />
          <div className="relative">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#a7c7ff]/75">
                  What clients get
                </p>
                <h2 className="mt-2 font-display text-2xl font-medium tracking-tight text-[#eae6df] md:text-3xl">
                  Practical systems with clean edges.
                </h2>
              </div>
              <div className="hidden rounded-2xl border border-white/[0.075] bg-black/25 px-3 py-2 text-right md:block">
                <p className="font-display text-xl font-semibold text-[#eae6df]">01</p>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-500">solo dev</p>
              </div>
            </div>

            <div className="space-y-3">
              {strengths.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#a7c7ff]/10 text-[#c6dbff] ring-1 ring-[#a7c7ff]/15">
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#eae6df]">{item.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-neutral-500">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 border-t border-white/[0.07] pt-5">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                Familiar tooling
              </p>
              <div className="flex flex-wrap gap-2">
                {toolTags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/[0.075] bg-black/20 px-3 py-1.5 text-xs text-neutral-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.aside>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 xl:mt-7"
      >
        {proofItems.map((item) => (
          <div key={item.value} className="rounded-[22px] border border-white/[0.065] bg-black/20 px-4 py-4">
            <p className="font-display text-xl font-semibold tracking-tight text-[#eae6df] md:text-2xl">
              {item.value}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-neutral-500">{item.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
