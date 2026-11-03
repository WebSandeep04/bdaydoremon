import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, RotateCcw, Sparkles } from 'lucide-react';
import { playSoundEffect } from '../utils/sound';
import { fireCelebrationConfetti } from '../utils/confetti';
import DoraemonAvatar from './DoraemonAvatar';

export default function FinalBirthdayMessage({ config, onRestart }) {
  const [hugGiven, setHugGiven] = useState(false);

  const handleGiveHug = () => {
    playSoundEffect('bell');
    fireCelebrationConfetti();
    setHugGiven(true);
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-lg w-full mx-auto text-center px-4 py-4">
      {/* Doraemon Avatar with cute blush */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-2"
      >
        <DoraemonAvatar mood="happy" size={140} hasPropeller={true} />
      </motion.div>

      {/* Main Letter Card */}
      <motion.div
        className="w-full bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-sky-200 relative text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <div className="text-center mb-4">
          <span className="inline-block px-3.5 py-1 bg-red-100 text-[#EF4444] text-xs font-black rounded-full uppercase tracking-wider">
            Birthday Keepsake Letter
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#17345C] mt-2">
            {config.finalScene.heading}
          </h2>
        </div>

        {/* Letter body */}
        <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed font-medium bg-sky-50/70 p-4 sm:p-5 rounded-2xl border border-sky-100">
          {config.finalScene.letter.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {/* Signature */}
          <div className="pt-3 text-right">
            <span className="font-serif italic text-base text-[#168FE5] font-black">
              With lots of love,
            </span>
            <div className="text-[#17345C] font-black text-lg">
              {config.senderName} 💙
            </div>
          </div>
        </div>

        {/* Hug Interaction */}
        <AnimatePresence>
          {hugGiven && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-4 p-3 bg-pink-100 border-2 border-pink-300 rounded-2xl text-pink-700 text-center font-black flex items-center justify-center gap-2 shadow-xs"
            >
              <Heart className="w-5 h-5 fill-pink-500 text-pink-500 animate-ping" />
              <span>{config.finalScene.hugMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleGiveHug}
            className="flex-1 py-3 px-4 rounded-2xl font-black text-white bg-gradient-to-r from-[#EF4444] to-[#E53935] shadow-lg shadow-red-500/30 hover:brightness-105 active:scale-95 transition flex items-center justify-center gap-2 text-sm cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>{config.finalScene.hugButton}</span>
          </button>

          <button
            onClick={() => {
              playSoundEffect('pop');
              onRestart();
            }}
            className="flex-1 py-3 px-4 rounded-2xl font-black text-[#17345C] bg-[#FFD84D] shadow-lg shadow-yellow-400/40 hover:bg-yellow-300 active:scale-95 transition flex items-center justify-center gap-2 text-sm cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{config.finalScene.restartButton}</span>
          </button>
        </div>
      </motion.div>

      {/* Little Surprise Tagline */}
      <div className="mt-4 text-xs font-bold text-sky-900 tracking-wider">
        {config.tagline}
      </div>
    </div>
  );
}

