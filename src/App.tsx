import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Code2,
  Database,
  Gamepad2,
  Github,
  Mail,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";

const workLinks = {
  arenaPlace: "https://www.roblox.com/games/78969513676638/Ability-Training-Arena",
  arenaCode: "https://github.com/altairkaitou/hidden-dev-luau-submission/blob/main/AbilityTrainingArena.server.lua",
};

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: Sparkles,
    title: "Ability systems",
    body: "Skill casting, cooldowns, validation, mana costs, VFX broadcasts, damage logic, and status effects.",
  },
  {
    icon: Database,
    title: "Data and progression",
    body: "ProfileStore save flows, inventory data, stat systems, rewards, loot tables, and balance configs.",
  },
  {
    icon: Gamepad2,
    title: "NPC gameplay",
    body: "Enemy behavior, aggro rules, target handling, pathing hooks, encounters, and server-owned interactions.",
  },
  {
    icon: Code2,
    title: "Game frameworks",
    body: "Clean module structure, shared configs, remotes, lifecycle boundaries, and code your team can extend.",
  },
  {
    icon: ShieldCheck,
    title: "Server-client architecture",
    body: "Remote boundaries, exploit-resistant validation, client feedback loops, and efficient replication patterns.",
  },
  {
    icon: Wrench,
    title: "Code help",
    body: "Refactors, bug fixes, code review, cleanup, and turning fragile prototype scripts into maintainable systems.",
  },
];

const workItems = [
  {
    label: "Solo project",
    title: "ENTRO",
    body: "A solo Roblox ARPG built with strict Luau, Rojo, ProfileStore, and React-Lua. It shows how I think about larger systems: server-owned gameplay, data-driven skill and stat design, persistence, procedural content, and custom UI.",
    video: "/videos/entro-map-skill-demo.mp4",
    poster: "/images/entro-map-skill-poster.jpg",
    tags: ["Strict Luau", "Rojo", "ProfileStore", "React-Lua", "Data-Driven"],
    status: "In active development",
  },
  {
    label: "Playable proof",
    title: "Ability Training Arena",
    body: "A public Luau demo built as one server Script. It validates casts, computes a CFrame ground wave, queries targets, applies damage and knockback, and cleans temporary runtime effects.",
    video: "/videos/ability-training-arena-demo.mp4",
    poster: "/images/ability-training-arena-poster.jpg",
    tags: ["666 lines", "1 server Script", "CFrame", "Physics", "Cleanup"],
    status: "Public demo",
    primaryLink: workLinks.arenaPlace,
    secondaryLink: workLinks.arenaCode,
  },
];

const proofStats = [
  { value: "2", label: "public proof pieces" },
  { value: "666", label: "Luau demo lines" },
  { value: "6", label: "systems offered" },
];

const tools = ["Strict Luau", "Rojo", "ProfileStore", "React-Lua", "Promise", "Signal", "Trove", "CFrame"];

const briefItems = [
  "What system you need",
  "Existing codebase or new build",
  "Gameplay references",
  "Deadline and budget range",
];

const sectionVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

function Nav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-6">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border border-white/[0.09] bg-[#080909]/70 px-3 shadow-[0_18px_70px_rgba(0,0,0,0.26)] backdrop-blur-xl md:px-4">
        <a href="#home" className="group flex items-center gap-3 rounded-full outline-none">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eae6df] font-display text-sm font-bold text-[#080909] transition-transform duration-500 group-hover:rotate-6">
            K
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-[#eae6df]">KAITOU</span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.035] p-1 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-neutral-400 transition-colors duration-300 hover:bg-white/[0.055] hover:text-[#eae6df]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-[#eae6df] px-4 py-2 text-sm font-semibold text-[#080909] transition-all duration-500 hover:bg-white active:scale-[0.98]"
        >
          Hire me
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100dvh] items-center px-4 pb-16 pt-28 md:px-6 md:pt-32">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#ff5e66]/25 bg-[#ff5e66]/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-[#ff858b]">
              Roblox scripter for hire
            </span>
            <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              Systems developer
            </span>
          </div>

          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.92] tracking-tight text-[#f4f0ea] sm:text-6xl md:text-7xl lg:text-8xl">
            Roblox scripting and gameplay systems that ship clean.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg">
            I build server-client architecture, data saving, combat, progression, NPC gameplay, and custom UI with maintainable Luau that can survive real production.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="group inline-flex items-center justify-between gap-5 rounded-full bg-[#eae6df] py-3 pl-6 pr-2 text-sm font-semibold text-[#080909] shadow-[0_18px_50px_rgba(234,230,223,0.12)] transition-all duration-500 hover:bg-white active:scale-[0.98] sm:w-fit"
            >
              View my work
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#080909] text-[#eae6df] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.035] px-6 py-3 text-sm font-semibold text-[#eae6df] transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] active:scale-[0.98]"
            >
              Hire me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[28px] border border-white/[0.075] bg-[#0d0d0e]/80 p-4 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl"
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#ff858b]">Availability</p>
              <p className="mt-1 font-display text-2xl font-semibold tracking-tight text-[#eae6df]">Open for scripting</p>
            </div>
            <span className="flex h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.8)]" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {proofStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/[0.065] bg-white/[0.025] p-3">
                <p className="font-display text-2xl font-semibold text-[#eae6df]">{stat.value}</p>
                <p className="mt-1 text-[11px] leading-tight text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-white/[0.065] bg-black/25 p-4">
            <p className="text-sm leading-relaxed text-neutral-300">
              Good fit for founders or teams who need a Roblox developer who can take a system from brief to playable proof without constant supervision.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="mb-7 max-w-3xl">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[#ff858b]">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold leading-[0.98] tracking-tight text-[#f4f0ea] md:text-5xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400 md:text-base">{body}</p>
    </div>
  );
}

function WorkSection() {
  return (
    <motion.section id="work" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} className="scroll-mt-24 px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Recent work"
          title="Real proof before promises."
          body="Two public-facing pieces: one larger solo ARPG case study and one compact Luau demo built for direct review."
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {workItems.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-[30px] border border-white/[0.075] bg-[#101011] shadow-[0_24px_90px_rgba(0,0,0,0.22)]">
              <div className="relative aspect-video overflow-hidden bg-black">
                <video
                  className="h-full w-full scale-[1.01] object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={item.poster}
                  aria-label={`${item.title} gameplay preview`}
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,transparent_42%,rgba(0,0,0,0.38)_100%)]" />
                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/75 backdrop-blur-md">
                  {item.label}
                </div>
              </div>

              <div className="p-5 md:p-6">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full border border-white/[0.075] bg-white/[0.035] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                    {item.status}
                  </span>
                </div>
                <h3 className="font-display text-3xl font-semibold tracking-tight text-[#eae6df]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{item.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/[0.075] bg-black/20 px-3 py-1.5 text-xs text-neutral-400">
                      {tag}
                    </span>
                  ))}
                </div>
                {(item.primaryLink || item.secondaryLink) && (
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    {item.primaryLink && (
                      <a href={item.primaryLink} target="_blank" rel="noopener noreferrer" className="group/link inline-flex flex-1 items-center justify-between rounded-full bg-[#eae6df] px-5 py-2.5 text-sm font-semibold text-[#080909] transition-all duration-500 hover:bg-white active:scale-[0.98]">
                        Play demo
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                    {item.secondaryLink && (
                      <a href={item.secondaryLink} target="_blank" rel="noopener noreferrer" className="group/link inline-flex flex-1 items-center justify-between rounded-full border border-white/10 bg-white/[0.035] px-5 py-2.5 text-sm font-semibold text-[#eae6df] transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] active:scale-[0.98]">
                        View code
                        <Github className="h-4 w-4 transition-transform duration-500 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function ServicesSection() {
  return (
    <motion.section id="services" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} className="scroll-mt-24 px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Services"
          title="Hire me for one system or the whole gameplay loop."
          body="I keep implementation scoped, server-safe, and easy to extend so the next developer does not have to untangle the work."
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="group rounded-[24px] border border-white/[0.065] bg-[#0f0f10]/85 p-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[#ff858b]/25 hover:bg-[#151314]">
                <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.035] text-neutral-400 ring-1 ring-white/[0.06] transition-colors duration-500 group-hover:text-[#ff858b]">
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-[#eae6df]">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{service.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

function AboutSection() {
  return (
    <motion.section id="about" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} className="scroll-mt-24 px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <div className="rounded-[30px] border border-white/[0.075] bg-[#101011]/85 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.2)] md:p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#ff858b]">About</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-none tracking-tight text-[#f4f0ea] md:text-6xl">KAITOU</h2>
          <p className="mt-5 text-sm leading-relaxed text-neutral-400 md:text-base">
            Roblox developer with a full-stack engineering background. I think in systems: validation boundaries, data flow, maintainable modules, source control, and UI that can scale past the first prototype.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span key={tool} className="rounded-full border border-white/[0.075] bg-black/20 px-3 py-1.5 text-xs text-neutral-400">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {[
            ["Server-client architecture", "Remote boundaries, server-owned rules, client feedback, and validation flows."],
            ["Database and progression", "ProfileStore-backed save flows, player state, inventory data, and progression records."],
            ["Production habits", "Readable modules, config-driven systems, Rojo workflow, and code that can be handed off."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-[24px] border border-white/[0.065] bg-black/25 p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ff5e66]/10 text-[#ff858b] ring-1 ring-[#ff5e66]/15">
                <BadgeCheck className="h-4 w-4" strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-xl font-semibold tracking-tight text-[#eae6df]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function ContactSection() {
  return (
    <motion.section id="contact" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} className="scroll-mt-24 px-4 pb-20 pt-16 md:px-6 md:pb-28 md:pt-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 lg:grid-cols-[1fr_0.88fr]">
        <div className="rounded-[30px] border border-white/[0.075] bg-[#101011]/90 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.22)] md:p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#ff858b]">Contact</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-none tracking-tight text-[#f4f0ea] md:text-6xl">
            Send a brief. I will scope the system.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-400 md:text-base">
            Discord is fastest. Tell me what you need, what already exists, and what outcome matters. I will reply with a practical scope before any work starts.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="https://github.com/altairkaitou" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-semibold text-[#eae6df] transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] active:scale-[0.98]">
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a href="mailto:leminhgiabao@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-semibold text-[#eae6df] transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] active:scale-[0.98]">
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>

        <div className="rounded-[30px] border border-white/[0.075] bg-[#0d0d0e]/90 p-6 md:p-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/15">
              <MessageSquare className="h-4 w-4" strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#eae6df]">Discord</p>
              <p className="text-sm text-neutral-500">kaitou6980</p>
            </div>
          </div>

          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">Include in your message</p>
          <div className="space-y-2">
            {briefItems.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/[0.055] bg-white/[0.025] px-4 py-3 text-sm text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff858b]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#070708] text-[#eae6df] font-sans">
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover opacity-55">
          <source src="https://res.cloudinary.com/disuogo1r/video/upload/v1780588789/videohero_x0bjbl.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,94,102,0.13),transparent_28%),linear-gradient(180deg,rgba(7,7,8,0.58),rgba(7,7,8,0.94)_70%,#070708)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.024)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
      </div>
      <div className="noise-overlay z-10" />

      <div className="relative z-20">
        <Nav />
        <Hero />
        <WorkSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </div>
    </div>
  );
}
