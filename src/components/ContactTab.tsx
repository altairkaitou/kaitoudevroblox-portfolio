/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MessageSquare, Mail, Github, Twitter, Compass, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const contactConfig = {
  availableForCommissions: true,
};

const links = [
  {
    id: "discord",
    icon: MessageSquare,
    label: "Discord",
    value: "kaitou6980",
    href: null,
    note: "Fastest way to reach me",
    primary: true,
  },
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: "leminhgiabao@gmail.com",
    href: "mailto:leminhgiabao@gmail.com",
    note: null,
    primary: false,
  },
  {
    id: "roblox",
    icon: Compass,
    label: "Roblox Profile",
    value: "KaitouDev",
    href: "https://www.roblox.com/users/10784666975/profile",
    note: "See my profile",
    primary: false,
  },
  {
    id: "github",
    icon: Github,
    label: "GitHub",
    value: "altairkaitou",
    href: "https://github.com/altairkaitou",
    note: null,
    primary: false,
  },
  {
    id: "twitter",
    icon: Twitter,
    label: "Twitter / X",
    value: "@BkidDead",
    href: "https://x.com/BkidDead",
    note: null,
    primary: false,
  },
];

export default function ContactTab() {
  return (
    <div className="flex-1 flex flex-col justify-start w-full relative z-10 py-4 select-none">
      <div className="mb-8 md:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-[#eae6df] tracking-tight">
            Work With Me
          </h2>
          <p className="text-sm text-neutral-500 font-sans mt-2 leading-relaxed max-w-md">
            Best way to reach me is Discord. Drop a message with what you need and I will get back to you the same day.
          </p>
        </div>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className={`flex items-center gap-2.5 px-4 py-2 rounded-full border text-sm font-sans font-medium self-start sm:self-auto ${
            contactConfig.availableForCommissions
              ? "bg-emerald-950/40 border-emerald-800/40 text-emerald-400"
              : "bg-neutral-900 border-white/5 text-neutral-500"
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${contactConfig.availableForCommissions ? "bg-emerald-400 animate-pulse" : "bg-neutral-600"}`} />
          {contactConfig.availableForCommissions ? "Available for commissions" : "Currently unavailable"}
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
        }}
        className="flex flex-col gap-3 max-w-xl"
      >
        {links.map((link) => {
          const Icon = link.icon;
          const inner = (
            <motion.div
              key={link.id}
              variants={{
                hidden: { y: 16, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 20, stiffness: 100 } },
              }}
              className={`group flex items-center justify-between gap-4 px-5 py-4 rounded-2xl border transition-all duration-300 ${
                link.primary
                  ? "bg-[#eae6df]/[0.04] border-[#eae6df]/10 hover:border-[#eae6df]/20"
                  : "bg-[#0f0f0f] border-white/5 hover:border-white/10"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                  link.primary
                    ? "bg-[#eae6df]/[0.06] border-[#eae6df]/10"
                    : "bg-white/[0.03] border-white/5"
                }`}>
                  <Icon className={`w-4 h-4 ${link.primary ? "text-[#eae6df]" : "text-neutral-400 group-hover:text-[#eae6df]"} transition-colors`} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-0.5">{link.label}</p>
                  <p className={`text-sm font-sans font-medium ${link.primary ? "text-[#eae6df]" : "text-neutral-300"}`}>{link.value}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {link.note && (
                  <span className="text-[10px] font-mono text-neutral-600 hidden sm:block">{link.note}</span>
                )}
                {link.href && (
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-600 group-hover:text-neutral-400 transition-colors" />
                )}
              </div>
            </motion.div>
          );

          return link.href ? (
            <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer" className="block">
              {inner}
            </a>
          ) : (
            <div key={link.id}>{inner}</div>
          );
        })}
      </motion.div>
    </div>
  );
}
