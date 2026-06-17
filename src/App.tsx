/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import AboutTab from "./components/AboutTab";
import RobloxTab from "./components/RobloxTab";
import BlenderTab from "./components/BlenderTab";
import ContactTab from "./components/ContactTab";
import { Tab } from "./types";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.About);

  const renderTabContent = () => {
    switch (activeTab) {
      case Tab.About:
        return <AboutTab onViewScripting={() => setActiveTab(Tab.Roblox)} />;
      case Tab.Roblox:
        return <RobloxTab />;
      case Tab.Blender:
        return <BlenderTab />;
      case Tab.Contact:
        return <ContactTab />;
      default:
        return <AboutTab onViewScripting={() => setActiveTab(Tab.Roblox)} />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#121213] text-[#eae6df] flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden font-sans">
      {/* Background Loop Video with Cinematic Vignette Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
          <source src="https://res.cloudinary.com/disuogo1r/video/upload/v1780588789/videohero_x0bjbl.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/70 via-black/25 to-black/45 pointer-events-none" />
      </div>

      {/* Noise Grain Film Layer */}
      <div className="noise-overlay z-10" />

      {/* Decorative ambient lights inside the workspace */}
      <div className="absolute top-[-10%] left-[-10%] w-[35vw] h-[35vw] bg-radial from-neutral-800/10 to-transparent pointer-events-none rounded-full blur-3xl z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-radial from-neutral-800/10 to-transparent pointer-events-none rounded-full blur-3xl z-10" />

      {/* Floating Main Folder Panel Wrapper */}
      <div className="w-full max-w-7xl h-[calc(100vh-2rem)] sm:h-[calc(100vh-4rem)] flex flex-col relative z-20">
        
        {/* Custom S-Curve Folder Tab Header */}
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Folder Body Frame */}
        <main className={`flex-1 rounded-b-[24px] md:rounded-b-[32px] border-b border-l border-r border-[#ffffff]/5 p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-between overflow-y-auto overflow-x-hidden relative scrollbar-none transition-colors duration-500 ${activeTab === Tab.About ? "bg-transparent" : "bg-[#0d0d0d]"}`}>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 flex flex-col w-full h-full"
            >
              {renderTabContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
