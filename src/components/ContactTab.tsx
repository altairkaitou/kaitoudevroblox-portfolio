/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare, Mail, Github, Compass, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ContactTab() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Roblox Scripting",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", service: "Roblox Scripting", message: "" });
    }, 1200);
  };

  return (
    <div className="flex-1 flex flex-col lg:flex-row gap-6 w-full relative z-10 py-4 select-none">
      {/* Brief details card */}
      <div className="w-full lg:w-2/5 flex flex-col justify-between gap-6">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-[#eae6df] tracking-tight">
            Work With Me
          </h2>
          <p className="text-sm text-neutral-500 font-sans mt-2 leading-relaxed">
            Looking for a Roblox scripter or 3D modeler? Fill out the form or reach out directly. I respond fast.
          </p>

          <div className="mt-8 flex flex-col gap-4 font-sans text-sm text-neutral-400">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#eae6df]" />
              <span>leminhgiabao@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MessageSquare className="w-4 h-4 text-[#eae6df]" />
              <span>Discord: kaitou6980</span>
            </div>
          </div>
        </div>

        {/* Social channels widget */}
        <div className="mt-6 flex flex-col gap-4 pt-6 border-t border-white/5">
          <h4 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
            Find Me On
          </h4>
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="https://github.com/altairkaitou"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center text-neutral-400 hover:text-[#eae6df] hover:border-white/15 transition-colors cursor-pointer"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/BkidDead"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center text-neutral-400 hover:text-[#eae6df] hover:border-white/15 transition-colors cursor-pointer"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://www.roblox.com/users/10784666975/profile"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 h-10 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center font-mono text-[10px] uppercase font-semibold text-neutral-400 hover:text-[#eae6df] hover:border-white/15 transition-colors cursor-pointer gap-1.5"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Roblox Profile</span>
            </a>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div className="w-full lg:w-3/5 bg-[#0f0f0f] border border-white/5 rounded-2xl p-6 md:p-8 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-5 h-full text-left"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="user-name" className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                    Your Name
                  </label>
                  <input
                    id="user-name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#080809] border border-white/5 focus:border-white/15 rounded-xl px-4 py-3 text-sm text-[#eae6df] outline-none font-sans"
                    placeholder="Your name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="user-email" className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                    Your Email
                  </label>
                  <input
                    id="user-email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#080809] border border-white/5 focus:border-white/15 rounded-xl px-4 py-3 text-sm text-[#eae6df] outline-none font-sans"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service-type" className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                  What Do You Need?
                </label>
                <select
                  id="service-type"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#080809] border border-white/5 focus:border-white/15 rounded-xl px-4 py-3 text-sm text-[#eae6df] outline-none font-sans appearance-none select-theme cursor-pointer"
                >
                  <option value="Roblox Scripting">Roblox Scripting / Game Systems</option>
                  <option value="3D Modeling">3D Modeling</option>
                  <option value="UI Development">UI Development</option>
                  <option value="General Discussion">General Discussion</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="user-message" className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                  Tell Me About Your Project
                </label>
                <textarea
                  id="user-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#080809] border border-white/5 focus:border-white/15 rounded-xl px-4 py-3 text-sm text-[#eae6df] outline-none font-sans resize-none"
                  placeholder="What are you building? What do you need help with?"
                />
              </div>

              <button
                id="submit-brief-btn"
                disabled={isSubmitting}
                type="submit"
                className="self-start group flex items-center justify-center gap-3 bg-[#eae6df] hover:bg-white disabled:bg-neutral-800 text-[#0a0a0a] disabled:text-neutral-500 rounded-full px-6 py-3 font-sans font-medium text-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer disabled:cursor-not-allowed mt-2 select-none"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="submission-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center text-center py-12 h-full"
            >
              <CheckCircle2 className="w-12 h-12 text-[#eae6df] mb-4 animate-bounce" />
              <h3 className="font-display text-2xl font-medium text-[#eae6df] mb-2">
                Message Sent
              </h3>
              <p className="text-sm text-neutral-400 font-sans max-w-xs leading-relaxed mb-6 font-light">
                Got it. I will get back to you as soon as possible.
              </p>
              <button
                id="reset-form-btn"
                onClick={() => setSubmitted(false)}
                className="text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-[#eae6df] transition-colors border-b border-white/10 hover:border-[#eae6df]"
              >
                Send Another Message
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
