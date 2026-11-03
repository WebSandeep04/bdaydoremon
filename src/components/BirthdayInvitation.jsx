import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DoraemonAvatar from './DoraemonAvatar';
import { fireGentleStars } from '../utils/confetti';
import { playSoundEffect } from '../utils/sound';
import { Mail, Sparkles, ArrowRight } from 'lucide-react';

export default function BirthdayInvitation({ config, onNext }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenInvitation = () => {
    playSoundEffect('pop');
    fireGentleStars();
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-md w-full mx-auto text-center px-4">
      {/* Doraemon Avatar floating with propeller */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-4"
      >
        <DoraemonAvatar mood={isOpen ? "excited" : "happy"} size={170} hasPropeller={true} />
      </motion.div>

      {/* Main card box */}
      <motion.div
        className="w-full bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl border-4 border-sky-100 relative overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {/* Decorative corner stars */}
        <span className="absolute top-3 left-4 text-yellow-400 text-lg">✦</span>
        <span className="absolute top-4 right-4 text-sky-400 text-lg">★</span>

        {!isOpen ? (
          <div>
            <span className="inline-block px-3 py-1 bg-sky-100 text-[#168FE5] text-xs font-black rounded-full mb-3 tracking-wider uppercase">
              Secret Mission
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#17345C] leading-snug mb-3">
              “{config.invitation.teaser}”
            </h2>
            <p className="text-sm text-sky-700 font-medium mb-6">
              {config.invitation.subtext}
            </p>

            {/* Pulsing Envelope Graphic */}
            <motion.div
              className="my-5 cursor-pointer inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenInvitation}
            >
              <div className="relative w-40 h-28 bg-[#EF4444] rounded-2xl shadow-lg border-2 border-red-600 flex items-center justify-center overflow-hidden">
                <div className="absolute top-0 w-full h-14 bg-red-400 [clip-path:polygon(0_0,100%_0,50%_100%)] opacity-80" />
                <div className="z-10 bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center shadow-md border-2 border-yellow-500">
                  <Mail className="w-5 h-5 text-red-700" />
                </div>
              </div>
            </motion.div>

            <div>
              <button
                onClick={handleOpenInvitation}
                className="w-full py-3.5 px-6 rounded-2xl font-black text-white bg-gradient-to-r from-[#168FE5] to-[#0D72BA] shadow-lg shadow-sky-400/40 hover:brightness-105 active:scale-95 transition flex items-center justify-center gap-2 text-base cursor-pointer"
              >
                <span>{config.invitation.openButton}</span>
              </button>
            </div>
          </div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-yellow-100 border-2 border-yellow-400 flex items-center justify-center text-yellow-600 mb-3 shadow-inner">
                <Sparkles className="w-7 h-7 text-yellow-500 animate-spin" style={{ animationDuration: '6s' }} />
              </div>

              <div className="text-xs font-bold text-sky-500 tracking-wider uppercase mb-1">
                Personalized Invitation
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#17345C] mb-2">
                {config.invitation.revealedTitle}
              </h2>

              <div className="my-3 p-4 bg-sky-50 rounded-2xl border border-sky-200 text-[#17345C] text-sm leading-relaxed font-semibold">
                Dear <span className="text-[#168FE5] font-black">{config.recipientName}</span>,<br />
                Today is packed with wonder, gadgets, memories, and heartwarming surprises crafted just for you!
              </div>

              <button
                onClick={() => {
                  playSoundEffect('bell');
                  onNext();
                }}
                className="mt-4 w-full py-3.5 px-6 rounded-2xl font-black text-[#17345C] bg-[#FFD84D] shadow-lg shadow-yellow-400/50 hover:bg-yellow-300 active:scale-95 transition flex items-center justify-center gap-2 text-base cursor-pointer"
              >
                <span>{config.invitation.startButton}</span>
                <ArrowRight size={20} />
              </button>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </div>
  );
}

