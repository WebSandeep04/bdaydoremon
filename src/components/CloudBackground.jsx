import React from 'react';
import { motion } from 'framer-motion';

export default function CloudBackground() {
  const clouds = [
    { id: 1, top: '8%', left: '-10%', scale: 1.1, duration: 40, delay: 0 },
    { id: 2, top: '22%', left: '80%', scale: 0.8, duration: 35, delay: 5 },
    { id: 3, top: '45%', left: '-15%', scale: 1.3, duration: 48, delay: 2 },
    { id: 4, top: '65%', left: '70%', scale: 0.9, duration: 38, delay: 7 },
    { id: 5, top: '82%', left: '5%', scale: 1.2, duration: 44, delay: 4 },
  ];

  const floatingStars = [
    { id: 1, top: '12%', left: '15%', size: 16, delay: 0.2 },
    { id: 2, top: '18%', left: '75%', size: 20, delay: 0.6 },
    { id: 3, top: '35%', left: '88%', size: 14, delay: 1.1 },
    { id: 4, top: '55%', left: '8%', size: 18, delay: 0.8 },
    { id: 5, top: '78%', left: '85%', size: 22, delay: 0.4 },
    { id: 6, top: '85%', left: '30%', size: 15, delay: 1.3 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-gradient-to-b from-[#46B3FF] via-[#8ED8FF] to-[#DDF4FF]">
      {/* Soft Sky Aura */}
      <div className="absolute inset-0 bg-radial-gradient opacity-60" />

      {/* Fluffy drifting clouds */}
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute opacity-65 select-none"
          style={{
            top: cloud.top,
            transform: `scale(${cloud.scale})`
          }}
          initial={{ x: '-120%' }}
          animate={{ x: '120vw' }}
          transition={{
            repeat: Infinity,
            duration: cloud.duration,
            ease: 'linear',
            delay: cloud.delay
          }}
        >
          <svg width="220" height="90" viewBox="0 0 220 90" fill="none">
            <path
              d="M35 75C20 75 8 63 8 48C8 35 17 24 29 22C34 10 46 2 60 2C75 2 87 11 92 24C98 21 106 20 113 22C123 10 138 2 154 2C175 2 192 18 193 38C204 40 212 50 212 61C212 73 202 83 190 83L35 83C35 83 35 75 35 75Z"
              fill="white"
              fillOpacity="0.88"
            />
          </svg>
        </motion.div>
      ))}

      {/* Sparkling Stars */}
      {floatingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute text-yellow-300 drop-shadow-sm"
          style={{
            top: star.top,
            left: star.left,
          }}
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.6, 1, 0.6],
            rotate: [0, 45, 90]
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + (star.id % 2) * 1.5,
            delay: star.delay,
            ease: 'easeInOut'
          }}
        >
          <svg width={star.size} height={star.size} viewBox="0 0 24 24" fill="#FFD84D">
            <path d="M12 2L14.7 8.6L22 9.3L16.5 14.1L18.2 21.2L12 17.5L5.8 21.2L7.5 14.1L2 9.3L9.3 8.6L12 2Z" />
          </svg>
        </motion.div>
      ))}

      {/* Tiny Doraemon Bell emblem floating subtly */}
      <motion.div
        className="absolute bottom-6 right-6 opacity-20"
        animate={{ y: [0, -10, 0], rotate: [-4, 4, -4] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      >
        <div className="w-16 h-16 rounded-full bg-yellow-400 border-2 border-yellow-600 flex items-center justify-center shadow-inner">
          <div className="w-12 h-1 bg-yellow-700 rounded mb-1" />
        </div>
      </motion.div>
    </div>
  );
}

