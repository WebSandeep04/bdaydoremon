import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Gift } from 'lucide-react';
import { playSoundEffect } from '../utils/sound';
import { fireCelebrationConfetti } from '../utils/confetti';

export default function GiftBox({ config, onNext }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenGift = () => {
    playSoundEffect('bell');
    fireCelebrationConfetti();
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-md w-full mx-auto text-center px-4">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4"
      >
        <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-black rounded-full mb-2 tracking-wider uppercase">
          Scene 7 · The Secret Present
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-[#17345C]">
          {config.gift.teaser}
        </h2>
      </motion.div>

      {/* The Animated Gift Box */}
      <div className="relative w-60 h-60 my-2 flex items-center justify-center select-none">
        
        {/* Magic Aura when opened */}
        {isOpen && (
          <motion.div
            className="absolute inset-0 bg-yellow-300/40 rounded-full blur-2xl"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.4, 1.2] }}
            transition={{ duration: 1.5 }}
          />
        )}

        <div className="relative flex flex-col items-center">
          {/* Lid & Ribbon Knot */}
          <motion.div
            className="z-20 relative flex flex-col items-center"
            animate={{
              y: isOpen ? -65 : 0,
              rotate: isOpen ? -18 : 0,
              opacity: isOpen ? 0.9 : 1
            }}
            transition={{ type: 'spring', damping: 10, stiffness: 80 }}
          >
            {/* Ribbon Bow */}
            <div className="flex items-center -mb-2">
              <div className="w-8 h-8 rounded-full border-4 border-yellow-400 bg-yellow-300 shadow-md rotate-[-25deg]" />
              <div className="w-4 h-4 rounded-full bg-yellow-500 z-10 -mx-2 shadow" />
              <div className="w-8 h-8 rounded-full border-4 border-yellow-400 bg-yellow-300 shadow-md rotate-[25deg]" />
            </div>

            {/* Lid Box */}
            <div className="w-48 h-10 bg-[#168FE5] rounded-xl border-3 border-[#17345C] shadow-lg relative flex items-center justify-center">
              {/* Yellow ribbon line */}
              <div className="w-8 h-full bg-[#FFD84D] border-x border-yellow-500" />
            </div>
          </motion.div>

          {/* Box Body */}
          <div className="w-42 h-36 bg-gradient-to-b from-[#168FE5] to-[#0E6EB5] rounded-b-2xl border-3 border-[#17345C] shadow-2xl relative -mt-1 flex items-center justify-center overflow-hidden">
            {/* Vertical ribbon */}
            <div className="w-8 h-full bg-[#FFD84D] border-x border-yellow-500" />
            {/* Horizontal ribbon */}
            <div className="absolute w-full h-8 bg-[#FFD84D] border-y border-yellow-500" />

            {/* Glowing Star in center of gift */}
            <div className="absolute z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
              <Sparkles className="w-5 h-5 text-yellow-500 animate-spin" style={{ animationDuration: '4s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Action / Reveal Message */}
      <div className="w-full mt-4">
        {!isOpen ? (
          <button
            onClick={handleOpenGift}
            className="w-full py-3.5 px-6 rounded-2xl font-black text-white bg-gradient-to-r from-[#168FE5] to-[#0D72BA] shadow-lg shadow-sky-500/40 hover:brightness-105 active:scale-95 transition flex items-center justify-center gap-2 text-base cursor-pointer"
          >
            <Gift size={20} />
            <span>{config.gift.openButton}</span>
          </button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center"
          >
            <div className="p-4 bg-white/95 rounded-3xl border-3 border-yellow-300 shadow-xl text-[#17345C] font-black text-sm sm:text-base mb-3 leading-relaxed">
              💙 “{config.gift.message}”
            </div>

            <button
              onClick={() => {
                playSoundEffect('bell');
                onNext();
              }}
              className="w-full py-3.5 px-6 rounded-2xl font-black text-[#17345C] bg-[#FFD84D] shadow-lg shadow-yellow-400/50 hover:bg-yellow-300 active:scale-95 transition flex items-center justify-center gap-2 text-base cursor-pointer"
            >
              <span>{config.gift.proceedButton}</span>
              <ArrowRight size={20} />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

