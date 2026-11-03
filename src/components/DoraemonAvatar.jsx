import React from 'react';
import { motion } from 'framer-motion';

export default function DoraemonAvatar({ mood = 'happy', size = 180, hasPropeller = true }) {
  return (
    <div className="relative inline-flex flex-col items-center select-none" style={{ width: size, height: size * 1.15 }}>
      {/* Bamboo-copter on head */}
      {hasPropeller && (
        <motion.div
          className="absolute -top-6 z-20 flex flex-col items-center"
          animate={{
            y: [-3, 3, -3],
          }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          {/* Propeller blades */}
          <motion.div
            className="w-16 h-2 bg-yellow-400 rounded-full shadow-sm border border-yellow-500"
            animate={{ rotateY: [0, 180, 360] }}
            transition={{ repeat: Infinity, duration: 0.25, ease: 'linear' }}
          />
          {/* Stem */}
          <div className="w-1.5 h-4 bg-yellow-500 rounded-b shadow" />
          {/* Suction cup */}
          <div className="w-4 h-1.5 bg-yellow-600 rounded-full" />
        </motion.div>
      )}

      {/* Main Head SVG */}
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className="drop-shadow-xl"
        animate={{
          y: [0, -6, 0],
        }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      >
        {/* Blue Round Head */}
        <circle cx="100" cy="100" r="92" fill="#168FE5" stroke="#17345C" strokeWidth="4" />

        {/* White Face Mask */}
        <ellipse cx="100" cy="112" rx="74" ry="66" fill="#FFFFFF" stroke="#17345C" strokeWidth="3.5" />

        {/* Left Eye */}
        <ellipse cx="80" cy="52" rx="18" ry="24" fill="#FFFFFF" stroke="#17345C" strokeWidth="3.5" />
        {/* Right Eye */}
        <ellipse cx="120" cy="52" rx="18" ry="24" fill="#FFFFFF" stroke="#17345C" strokeWidth="3.5" />

        {/* Pupils */}
        {mood === 'winking' ? (
          <>
            <path d="M70 54 Q80 44 90 54" fill="none" stroke="#17345C" strokeWidth="4" strokeLinecap="round" />
            <ellipse cx="118" cy="54" rx="5" ry="7" fill="#17345C" />
            <circle cx="120" cy="51" r="2.5" fill="#FFFFFF" />
          </>
        ) : mood === 'excited' ? (
          <>
            <ellipse cx="82" cy="53" rx="7" ry="10" fill="#17345C" />
            <circle cx="84" cy="50" r="3" fill="#FFFFFF" />
            <ellipse cx="118" cy="53" rx="7" ry="10" fill="#17345C" />
            <circle cx="120" cy="50" r="3" fill="#FFFFFF" />
          </>
        ) : (
          <>
            {/* Happy eyes */}
            <ellipse cx="82" cy="53" rx="6" ry="8" fill="#17345C" />
            <circle cx="84" cy="50" r="2.5" fill="#FFFFFF" />
            <ellipse cx="118" cy="53" rx="6" ry="8" fill="#17345C" />
            <circle cx="120" cy="50" r="2.5" fill="#FFFFFF" />
          </>
        )}

        {/* Red Nose */}
        <circle cx="100" cy="74" r="14" fill="#EF4444" stroke="#17345C" strokeWidth="3" />
        <circle cx="96" cy="70" r="4" fill="#FFFFFF" />

        {/* Vertical Center Line */}
        <line x1="100" y1="88" x2="100" y2="136" stroke="#17345C" strokeWidth="3.5" />

        {/* Cheerful Whiskers */}
        {/* Left side */}
        <line x1="38" y1="88" x2="84" y2="95" stroke="#17345C" strokeWidth="3" strokeLinecap="round" />
        <line x1="34" y1="106" x2="84" y2="106" stroke="#17345C" strokeWidth="3" strokeLinecap="round" />
        <line x1="38" y1="124" x2="84" y2="117" stroke="#17345C" strokeWidth="3" strokeLinecap="round" />

        {/* Right side */}
        <line x1="162" y1="88" x2="116" y2="95" stroke="#17345C" strokeWidth="3" strokeLinecap="round" />
        <line x1="166" y1="106" x2="116" y2="106" stroke="#17345C" strokeWidth="3" strokeLinecap="round" />
        <line x1="162" y1="124" x2="116" y2="117" stroke="#17345C" strokeWidth="3" strokeLinecap="round" />

        {/* Cheerful Mouth */}
        <path
          d="M 52 124 Q 100 175 148 124"
          fill="#D62828"
          stroke="#17345C"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Pink Tongue */}
        <path
          d="M 76 142 Q 100 130 124 142 Q 100 170 76 142 Z"
          fill="#FF85A1"
        />

        {/* Cute blush cheeks */}
        <circle cx="56" cy="115" r="10" fill="#FF85A1" opacity="0.45" />
        <circle cx="144" cy="115" r="10" fill="#FF85A1" opacity="0.45" />
      </motion.svg>

      {/* Red Collar & Golden Bell */}
      <div className="relative -mt-3 z-10 flex flex-col items-center">
        {/* Red Collar */}
        <div className="w-28 h-5 bg-red-500 rounded-full border-2 border-[#17345C] shadow flex items-center justify-center">
          {/* Golden Bell */}
          <div className="w-9 h-9 bg-yellow-400 rounded-full border-2 border-[#17345C] shadow-md flex flex-col items-center justify-center relative translate-y-3">
            <div className="w-7 h-1 bg-yellow-700 rounded-full mb-0.5" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-700" />
            <div className="w-0.5 h-2 bg-yellow-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

