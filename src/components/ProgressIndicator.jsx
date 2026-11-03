import React from 'react';
import { Volume2, VolumeX, ChevronLeft } from 'lucide-react';

export default function ProgressIndicator({
  currentScene,
  totalScenes = 8,
  onPrev,
  isMusicPlaying,
  onToggleMusic
}) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 sm:px-6 bg-white/70 backdrop-blur-md border-b border-sky-100/60 shadow-xs">
      {/* Back button or Brand logo */}
      <div className="flex items-center gap-2">
        {currentScene > 1 ? (
          <button
            onClick={onPrev}
            aria-label="Previous scene"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#17345C] hover:bg-sky-50 transition border border-sky-200 text-xs font-semibold shadow-xs active:scale-95 cursor-pointer"
          >
            <ChevronLeft size={16} />
            <span className="hidden sm:inline">Back</span>
          </button>
        ) : (
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#EF4444] animate-pulse" />
            <span className="text-xs font-bold tracking-wider text-[#168FE5] uppercase">
              LittleSurprise
            </span>
          </div>
        )}
      </div>

      {/* Progress Pill */}
      <div className="flex flex-col items-center">
        <div className="text-xs font-bold text-[#17345C] tracking-wide">
          Birthday Adventure · <span className="text-[#168FE5]">{currentScene}</span> of {totalScenes}
        </div>
        <div className="flex items-center gap-1 mt-1.5">
          {Array.from({ length: totalScenes }).map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx + 1 === currentScene
                  ? 'w-6 bg-[#168FE5]'
                  : idx + 1 < currentScene
                  ? 'w-2 bg-[#8ED8FF]'
                  : 'w-2 bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Music Toggle */}
      <div className="flex items-center">
        <button
          onClick={onToggleMusic}
          aria-label={isMusicPlaying ? 'Mute cheerful music' : 'Play cheerful music'}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-xs active:scale-95 cursor-pointer ${
            isMusicPlaying
              ? 'bg-[#FFD84D] text-[#17345C] border border-yellow-400 animate-pulse'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-sky-50'
          }`}
        >
          {isMusicPlaying ? (
            <>
              <Volume2 size={16} className="text-[#17345C]" />
              <span className="hidden sm:inline">Music ON</span>
            </>
          ) : (
            <>
              <VolumeX size={16} />
              <span className="hidden sm:inline">Music</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}

