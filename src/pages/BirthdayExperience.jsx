import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { birthdayConfig } from '../data/birthdayConfig';
import CloudBackground from '../components/CloudBackground';
import ProgressIndicator from '../components/ProgressIndicator';
import BirthdayInvitation from '../components/BirthdayInvitation';
import AnywhereDoor from '../components/AnywhereDoor';
import BirthdayReveal from '../components/BirthdayReveal';
import MagicalPocket from '../components/MagicalPocket';
import BirthdayWishCandles from '../components/BirthdayWishCandles';
import CutBirthdayCake from '../components/CutBirthdayCake';
import GiftBox from '../components/GiftBox';
import FinalBirthdayMessage from '../components/FinalBirthdayMessage';
import { toggleBackgroundMusic } from '../utils/sound';

export default function BirthdayExperience() {
  const [currentScene, setCurrentScene] = useState(1);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const totalScenes = 8;

  const nextScene = () => {
    if (currentScene < totalScenes) {
      setCurrentScene((prev) => prev + 1);
    }
  };

  const prevScene = () => {
    if (currentScene > 1) {
      setCurrentScene((prev) => prev - 1);
    }
  };

  const restartExperience = () => {
    setCurrentScene(1);
  };

  const handleToggleMusic = () => {
    toggleBackgroundMusic((playing) => {
      setIsMusicPlaying(playing);
    });
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans overflow-x-hidden selection:bg-yellow-300 selection:text-slate-900">
      {/* Background Cloud & Atmosphere */}
      <CloudBackground />

      {/* Top Navigation & Status Bar */}
      <ProgressIndicator
        currentScene={currentScene}
        totalScenes={totalScenes}
        onPrev={prevScene}
        isMusicPlaying={isMusicPlaying}
        onToggleMusic={handleToggleMusic}
      />

      {/* Main Interactive Stage */}
      <main className="relative z-10 flex-1 flex items-center justify-center pt-20 pb-10 px-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene}
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.04, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full flex items-center justify-center"
          >
            {currentScene === 1 && (
              <BirthdayInvitation config={birthdayConfig} onNext={nextScene} />
            )}
            {currentScene === 2 && (
              <AnywhereDoor config={birthdayConfig} onNext={nextScene} />
            )}
            {currentScene === 3 && (
              <BirthdayReveal config={birthdayConfig} onNext={nextScene} />
            )}
            {currentScene === 4 && (
              <MagicalPocket config={birthdayConfig} onNext={nextScene} />
            )}
            {currentScene === 5 && (
              <BirthdayWishCandles config={birthdayConfig} onNext={nextScene} />
            )}
            {currentScene === 6 && (
              <CutBirthdayCake config={birthdayConfig} onNext={nextScene} />
            )}
            {currentScene === 7 && (
              <GiftBox config={birthdayConfig} onNext={nextScene} />
            )}
            {currentScene === 8 && (
              <FinalBirthdayMessage
                config={birthdayConfig}
                onRestart={restartExperience}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

