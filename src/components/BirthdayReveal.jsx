import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fireCelebrationConfetti } from '../utils/confetti';
import { playSoundEffect } from '../utils/sound';
import DoraemonAvatar from './DoraemonAvatar';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

export default function BirthdayReveal({ config, onNext }) {
  useEffect(() => {
    playSoundEffect('bell');
    fireCelebrationConfetti();
  }, []);

  // Floating pastel balloons
  const balloons = [
    { color: '#EF4444', left: '10%', delay: 0 },
    { color: '#168FE5', left: '25%', delay: 1 },
    { color: '#FFD84D', left: '72%', delay: 0.5 },
    { color: '#10B981', left: '85%', delay: 1.5 },
  ];

  return (
    <div className="flex flex-col items-center justify-center max-w-lg w-full mx-auto text-center px-4 relative">
      {/* Floating balloons in background */}
      {balloons.map((b, i) => (
        <motion.div
          key={i}
          className="absolute -top-10 pointer-events-none select-none opacity-80"
          style={{ left: b.left }}
          animate={{
            y: [-10, -50, -10],
            x: [-6, 6, -6],
            rotate: [-5, 5, -5]
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + i,
            delay: b.delay,
            ease: 'easeInOut'
          }}
        >
          <div
            className="w-10 h-13 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] shadow-md relative"
            style={{ backgroundColor: b.color }}
          >
            <div className="w-1 h-8 bg-slate-300 absolute -bottom-8 left-1/2 -translate-x-1/2" />
          </div>
        </motion.div>
      ))}

      {/* Doraemon Avatar celebrating */}
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', damping: 12 }}
        className="mb-2"
      >
        <DoraemonAvatar mood="excited" size={150} hasPropeller={true} />
      </motion.div>

      {/* Main Announcement Card */}
      <motion.div
        className="w-full bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-sky-200 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        {/* Date badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-yellow-100 border border-yellow-300 rounded-full text-xs font-black text-[#17345C] mb-4 shadow-xs">
          <Calendar size={14} className="text-yellow-600" />
          <span>{config.birthdayDate}</span>
        </div>

        {/* Grand Birthday Greeting */}
        <motion.h1
          className="text-3xl sm:text-4xl font-black text-[#168FE5] mb-2 tracking-tight drop-shadow-xs"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        >
          Happy Birthday, <span className="text-[#EF4444]">{config.recipientName}!</span> 🎂
        </motion.h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed max-w-sm mx-auto mb-6">
          {config.reveal.subtitle}
        </p>

        {/* Decorative Mini Doraemon Pocket Banner */}
        <div className="bg-sky-50 rounded-2xl p-3 border border-sky-200/80 flex items-center justify-center gap-3 mb-6">
          <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
          <span className="text-xs font-black text-[#17345C] uppercase tracking-wider">
            Doraemon brought special 22nd-century gadgets!
          </span>
          <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
        </div>

        {/* Next Scene CTA */}
        <button
          onClick={() => {
            playSoundEffect('bell');
            onNext();
          }}
          className="w-full py-4 px-6 rounded-2xl font-black text-white bg-gradient-to-r from-[#168FE5] via-[#2196F3] to-[#0D72BA] shadow-lg shadow-sky-500/40 hover:brightness-105 active:scale-95 transition flex items-center justify-center gap-2 text-base cursor-pointer"
        >
          <span>{config.reveal.buttonText}</span>
          <ArrowRight size={20} />
        </button>
      </motion.div>
    </div>
  );
}

