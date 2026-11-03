import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { playSoundEffect } from '../utils/sound';
import { fireGentleStars } from '../utils/confetti';

export default function AnywhereDoor({ config, onNext }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDoor = () => {
    playSoundEffect('bell');
    fireGentleStars();
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-md w-full mx-auto text-center px-4">
      {/* Prompt heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-5"
      >
        <span className="inline-block px-3 py-1 bg-white/80 text-[#EF4444] text-xs font-black rounded-full mb-2 tracking-wider uppercase shadow-xs">
          Magical Gadget #1
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-[#17345C] leading-snug">
          {config.anywhereDoor.question}
        </h2>
        <p className="text-sm text-sky-900 font-medium mt-1">
          {config.anywhereDoor.subtext}
        </p>
      </motion.div>

      {/* The 3D-feel Anywhere Door */}
      <div className="relative w-56 h-84 my-3 flex items-center justify-center perspective-[1000px]">
        {/* Door Frame */}
        <div className="relative w-48 h-80 bg-[#EF4444] rounded-t-2xl p-2.5 shadow-2xl border-4 border-[#C92A2A] flex flex-col justify-end">
          
          {/* Inside Portal (revealed when door swings open) */}
          <div className="absolute inset-2.5 rounded-t-xl bg-gradient-to-b from-[#FFF59D] via-[#80D8FF] to-[#D1C4E9] overflow-hidden flex flex-col items-center justify-center">
            {/* Swirling portal magic circles */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
            >
              <div className="w-40 h-40 rounded-full border-4 border-dashed border-white/60" />
            </motion.div>
            <motion.div
              className="absolute w-24 h-24 rounded-full bg-white/40 blur-md"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />
            {isOpen && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="z-10 flex flex-col items-center text-center px-2"
              >
                <Sparkles className="w-8 h-8 text-yellow-500 mb-1 animate-bounce" />
                <span className="text-xs font-extrabold text-[#17345C]">
                  Birthday Wonderland
                </span>
              </motion.div>
            )}
          </div>

          {/* Actual Door Leaf that pivots on left edge */}
          <motion.div
            className="absolute inset-2.5 rounded-t-xl bg-[#EF4444] border-2 border-red-300 shadow-lg origin-left flex flex-col justify-between p-3"
            animate={{
              rotateY: isOpen ? -82 : 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 70,
              damping: 14
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Door Panel Insets */}
            <div className="w-full h-24 border-2 border-red-300/60 rounded-lg bg-red-500/30" />
            
            {/* Golden Round Doorknob */}
            <div className="w-full flex justify-end pr-2">
              <div className="w-5 h-5 rounded-full bg-yellow-400 border border-yellow-600 shadow-md flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-700" />
              </div>
            </div>

            <div className="w-full h-24 border-2 border-red-300/60 rounded-lg bg-red-500/30" />
          </motion.div>

          {/* Door Base Threshold */}
          <div className="w-52 -ml-2 h-4 bg-[#A61E1E] rounded-b-md shadow-md" />
        </div>
      </div>

      {/* Action CTA */}
      <div className="w-full mt-4">
        {!isOpen ? (
          <button
            onClick={handleOpenDoor}
            className="w-full py-3.5 px-6 rounded-2xl font-black text-white bg-gradient-to-r from-[#EF4444] to-[#C92A2A] shadow-lg shadow-red-500/40 hover:brightness-105 active:scale-95 transition flex items-center justify-center gap-2 text-base cursor-pointer"
          >
            <span>{config.anywhereDoor.buttonText}</span>
          </button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={() => {
                playSoundEffect('pop');
                onNext();
              }}
              className="w-full py-3.5 px-6 rounded-2xl font-black text-[#17345C] bg-[#FFD84D] shadow-lg shadow-yellow-400/50 hover:bg-yellow-300 active:scale-95 transition flex items-center justify-center gap-2 text-base cursor-pointer"
            >
              <span>{config.anywhereDoor.proceedButton}</span>
              <ArrowRight size={20} />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

