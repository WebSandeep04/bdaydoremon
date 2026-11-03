import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Utensils } from 'lucide-react';
import { playSoundEffect } from '../utils/sound';
import { fireGentleStars, fireCelebrationConfetti } from '../utils/confetti';

export default function CutBirthdayCake({ config, onNext }) {
  const [isCut, setIsCut] = useState(false);

  const handleCutCake = () => {
    playSoundEffect('pop');
    setIsCut(true);
    setTimeout(() => {
      playSoundEffect('bell');
      fireCelebrationConfetti();
    }, 300);
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-md w-full mx-auto text-center px-4">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4"
      >
        <span className="inline-block px-3 py-1 bg-sky-100 text-[#168FE5] text-xs font-black rounded-full mb-2 tracking-wider uppercase">
          Scene 6 · Cake Time!
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-[#17345C]">
          {config.cake.cutHeading}
        </h2>
        <p className="text-xs sm:text-sm text-sky-900 font-semibold mt-1">
          A fresh Doraemon star-cake made especially for you!
        </p>
      </motion.div>

      {/* The Interactive Cut Cake graphic */}
      <div className="relative w-64 h-56 my-2 flex items-center justify-center select-none">
        
        {/* Remaining Main Cake */}
        <div className="relative w-48 h-36 bg-[#168FE5] rounded-3xl border-4 border-[#17345C] shadow-2xl flex flex-col items-center justify-between p-3 overflow-hidden">
          {/* Frosting top */}
          <div className="w-full h-8 bg-white rounded-2xl flex items-center justify-around px-2 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          </div>

          <div className="text-white text-xs font-black tracking-wider uppercase">
            Special Recipe
          </div>

          {/* Golden Bell Decor */}
          <div className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-yellow-600 shadow-md flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-yellow-700" />
          </div>
        </div>

        {/* The Slice that cuts and slides out on click */}
        <AnimatePresence>
          {isCut && (
            <motion.div
              initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
              animate={{ x: 75, y: -20, rotate: 18, opacity: 1 }}
              transition={{ type: 'spring', damping: 12, stiffness: 90 }}
              className="absolute z-20"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-amber-200 border-3 border-amber-400 rounded-2xl shadow-xl flex flex-col items-center justify-center p-2">
                <span className="text-2xl">🍰</span>
                <span className="text-[10px] font-black text-amber-800">For You!</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Action CTA & Hidden Message Reveal */}
      <div className="w-full mt-4">
        {!isCut ? (
          <button
            onClick={handleCutCake}
            className="w-full py-3.5 px-6 rounded-2xl font-black text-white bg-gradient-to-r from-[#168FE5] to-[#0D72BA] shadow-lg shadow-sky-500/40 hover:brightness-105 active:scale-95 transition flex items-center justify-center gap-2 text-base cursor-pointer"
          >
            <Utensils size={18} />
            <span>{config.cake.cutButton}</span>
          </button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <div className="p-4 bg-white/95 rounded-2xl border-2 border-yellow-300 shadow-md text-[#17345C] font-black text-sm sm:text-base mb-3 leading-relaxed">
              ✨ “{config.cake.cutMessage}”
            </div>

            <button
              onClick={() => {
                playSoundEffect('bell');
                onNext();
              }}
              className="w-full py-3.5 px-6 rounded-2xl font-black text-[#17345C] bg-[#FFD84D] shadow-lg shadow-yellow-400/50 hover:bg-yellow-300 active:scale-95 transition flex items-center justify-center gap-2 text-base cursor-pointer"
            >
              <span>{config.cake.proceedToGift}</span>
              <ArrowRight size={20} />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

