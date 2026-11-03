import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { playSoundEffect } from '../utils/sound';
import { fireGentleStars } from '../utils/confetti';

export default function MagicalPocket({ config, onNext }) {
  const [selectedGadgetId, setSelectedGadgetId] = useState(config.gadgets[0]?.id || null);

  const selectedGadget = config.gadgets.find((g) => g.id === selectedGadgetId);

  const handleSelectGadget = (gadget) => {
    playSoundEffect('pop');
    setSelectedGadgetId(gadget.id);
    fireGentleStars();
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-xl w-full mx-auto px-4">
      {/* 4D Pocket Badge & Heading */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-5"
      >
        {/* 4D Pocket Icon Graphic */}
        <div className="inline-block relative mb-2">
          <div className="w-20 h-10 bg-white border-3 border-[#17345C] rounded-b-full shadow-md flex items-center justify-center overflow-hidden">
            <div className="w-14 h-4 bg-sky-100 rounded-b-full border-t border-[#17345C]/30" />
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-[#17345C]">
          Doraemon’s Pocket of Wishes ✨
        </h2>
        <p className="text-xs sm:text-sm text-sky-800 font-semibold mt-1">
          Tap each 22nd-century gadget to unveil its secret birthday blessing!
        </p>
      </motion.div>

      {/* Gadget Selection Horizontal / Grid Chips */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full mb-4">
        {config.gadgets.map((gadget) => {
          const isSelected = gadget.id === selectedGadgetId;
          return (
            <motion.button
              key={gadget.id}
              onClick={() => handleSelectGadget(gadget)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className={`p-3 rounded-2xl flex flex-col items-center text-center transition-all cursor-pointer border-2 relative overflow-hidden ${
                isSelected
                  ? 'bg-white shadow-lg border-[#168FE5] scale-[1.02]'
                  : 'bg-white/70 hover:bg-white/90 border-sky-100 shadow-xs'
              }`}
            >
              {isSelected && (
                <div className="absolute top-1 right-1">
                  <CheckCircle2 size={14} className="text-[#168FE5]" />
                </div>
              )}
              {/* Gadget Icon Badge */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-1.5 shadow-xs"
                style={{ backgroundColor: `${gadget.color}25`, color: gadget.color }}
              >
                {gadget.icon === 'door' && '🚪'}
                {gadget.icon === 'propeller' && '🚁'}
                {gadget.icon === 'clock' && '⏳'}
                {gadget.icon === 'bread' && '🍞'}
                {gadget.icon === 'flashlight' && '🔦'}
              </div>
              <span className="text-xs font-black text-[#17345C] line-clamp-1">
                {gadget.name}
              </span>
              <span className="text-[10px] font-semibold text-slate-400">
                {gadget.tag}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Wish Card Preview */}
      <AnimatePresence mode="wait">
        {selectedGadget && (
          <motion.div
            key={selectedGadget.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-white/95 rounded-3xl p-5 sm:p-6 shadow-xl border-3 border-sky-200 relative mb-5 text-center"
          >
            <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-[11px] font-black rounded-full mb-2 uppercase tracking-wider">
              {selectedGadget.japanese} · {selectedGadget.tag}
            </div>

            <h3 className="text-lg sm:text-xl font-black text-[#17345C] mb-2 flex items-center justify-center gap-2">
              <span>{selectedGadget.name}</span>
              <Sparkles size={18} className="text-yellow-500" />
            </h3>

            <p className="text-sm sm:text-base text-slate-700 font-medium italic leading-relaxed px-2 py-2 bg-sky-50/70 rounded-2xl border border-sky-100">
              “{selectedGadget.wish}”
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button to proceed to Scene 5 */}
      <button
        onClick={() => {
          playSoundEffect('bell');
          onNext();
        }}
        className="w-full max-w-md py-3.5 px-6 rounded-2xl font-black text-white bg-gradient-to-r from-[#168FE5] to-[#0D72BA] shadow-lg shadow-sky-500/40 hover:brightness-105 active:scale-95 transition flex items-center justify-center gap-2 text-base cursor-pointer"
      >
        <span>One Last Magical Surprise</span>
        <ArrowRight size={20} />
      </button>
    </div>
  );
}

