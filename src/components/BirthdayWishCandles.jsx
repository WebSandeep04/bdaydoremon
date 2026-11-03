import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Wind } from 'lucide-react';
import { playSoundEffect } from '../utils/sound';
import { fireGentleStars, fireCelebrationConfetti } from '../utils/confetti';

export default function BirthdayWishCandles({ config, onNext }) {
  // states: 'initial', 'wished', 'blown'
  const [step, setStep] = useState('initial');

  const handleMakeWish = () => {
    playSoundEffect('bell');
    fireGentleStars();
    setStep('wished');
  };

  const handleBlowCandles = () => {
    playSoundEffect('blow');
    setTimeout(() => {
      playSoundEffect('bell');
      fireCelebrationConfetti();
    }, 400);
    setStep('blown');
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
          Scene 5 · Make a Birthday Wish
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-[#17345C]">
          {config.cake.wishHeading}
        </h2>
        <p className="text-xs sm:text-sm text-sky-900 font-semibold mt-1">
          {config.cake.wishSubtext}
        </p>
      </motion.div>

      {/* Birthday Cake Illustration with Animated Candles */}
      <div className="relative w-64 h-56 my-2 flex flex-col items-center justify-end select-none">
        
        {/* Floating Sparks when candles are glowing */}
        {step === 'wished' && (
          <motion.div
            className="absolute top-0 flex gap-4 text-yellow-400"
            animate={{ y: [-5, -15], opacity: [0.8, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          >
            <Sparkles size={20} />
            <Sparkles size={16} />
            <Sparkles size={20} />
          </motion.div>
        )}

        {/* 3 Candles */}
        <div className="flex items-end justify-center gap-6 z-10 -mb-2">
          {[1, 2, 3].map((candleIndex) => {
            const isLit = step !== 'blown';
            return (
              <div key={candleIndex} className="flex flex-col items-center relative">
                {/* Flame */}
                {isLit ? (
                  <motion.div
                    className="w-4 h-6 rounded-full bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-100 shadow-lg shadow-yellow-300"
                    animate={{
                      scale: step === 'wished' ? [1.2, 1.45, 1.2] : [1, 1.15, 1],
                      rotate: [-3, 3, -3]
                    }}
                    transition={{ repeat: Infinity, duration: 0.6 + candleIndex * 0.1 }}
                  />
                ) : (
                  /* Smoke puff when blown out */
                  <motion.div
                    initial={{ opacity: 0.8, y: 0, scale: 0.5 }}
                    animate={{ opacity: 0, y: -24, scale: 1.4 }}
                    transition={{ duration: 1.5 }}
                    className="w-2.5 h-6 bg-slate-300 rounded-full blur-[1px]"
                  />
                )}
                {/* Wick */}
                <div className="w-0.5 h-2 bg-slate-700" />
                {/* Candle body */}
                <div
                  className={`w-3.5 h-12 rounded-t-sm shadow-sm ${
                    candleIndex === 1
                      ? 'bg-red-400'
                      : candleIndex === 2
                      ? 'bg-yellow-400'
                      : 'bg-sky-400'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Cake Layer 1 (Top Tier) */}
        <div className="w-40 h-14 bg-white rounded-t-2xl border-3 border-sky-300 shadow-md relative overflow-hidden flex items-center justify-center">
          {/* Blue frosting drip */}
          <div className="absolute top-0 w-full h-4 bg-[#8ED8FF] rounded-b-xl flex justify-around">
            <span className="w-3 h-3 bg-[#8ED8FF] rounded-full -mb-1" />
            <span className="w-3 h-4 bg-[#8ED8FF] rounded-full -mb-2" />
            <span className="w-3 h-3 bg-[#8ED8FF] rounded-full -mb-1" />
          </div>
          <div className="text-xs font-black text-[#168FE5] mt-2">Doraemon Sweet</div>
        </div>

        {/* Cake Layer 2 (Bottom Tier) */}
        <div className="w-56 h-18 bg-[#168FE5] rounded-t-3xl border-3 border-[#17345C] shadow-xl relative overflow-hidden flex items-center justify-center">
          {/* White bell / frosting decor */}
          <div className="absolute top-0 w-full h-5 bg-white rounded-b-2xl" />
          <div className="w-7 h-7 rounded-full bg-yellow-400 border-2 border-yellow-600 shadow-sm mt-3 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-700" />
          </div>
        </div>

        {/* Cake Stand / Plate */}
        <div className="w-64 h-4 bg-white rounded-full shadow-lg border-2 border-slate-200" />
      </div>

      {/* Interactive controls */}
      <div className="w-full mt-4">
        {step === 'initial' && (
          <button
            onClick={handleMakeWish}
            className="w-full py-3.5 px-6 rounded-2xl font-black text-white bg-gradient-to-r from-[#168FE5] to-[#0D72BA] shadow-lg shadow-sky-500/40 hover:brightness-105 active:scale-95 transition flex items-center justify-center gap-2 text-base cursor-pointer"
          >
            <Sparkles size={18} />
            <span>{config.cake.wishButton}</span>
          </button>
        )}

        {step === 'wished' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <p className="text-xs font-bold text-amber-600 mb-2 animate-pulse">
              Candles are glowing bright with your wish! Now blow them out:
            </p>
            <button
              onClick={handleBlowCandles}
              className="w-full py-3.5 px-6 rounded-2xl font-black text-[#17345C] bg-[#FFD84D] shadow-lg shadow-yellow-400/50 hover:bg-yellow-300 active:scale-95 transition flex items-center justify-center gap-2 text-base cursor-pointer"
            >
              <Wind size={20} className="animate-pulse" />
              <span>{config.cake.blowButton}</span>
            </button>
          </motion.div>
        )}

        {step === 'blown' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <div className="p-4 bg-white/95 rounded-2xl border-2 border-green-300 shadow-md text-emerald-700 font-black text-base sm:text-lg mb-3">
              🎉 “{config.cake.wishedReveal}”
            </div>
            <button
              onClick={() => {
                playSoundEffect('pop');
                onNext();
              }}
              className="w-full py-3.5 px-6 rounded-2xl font-black text-white bg-gradient-to-r from-[#EF4444] to-[#C92A2A] shadow-lg shadow-red-500/40 hover:brightness-105 active:scale-95 transition flex items-center justify-center gap-2 text-base cursor-pointer"
            >
              <span>{config.cake.nextToCutButton}</span>
              <ArrowRight size={20} />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

