/**
 * Web Audio API synthesizer for cheerful Doraemon & Birthday tunes.
 * Zero external audio file dependency required, completely reliable on mobile & web.
 */

let audioCtx = null;
let isPlaying = false;
let currentTimer = null;

// Doraemon theme melody notes (Frequencies in Hz) and durations
const melody = [
  // Happy Birthday / Doraemon motif opening
  { note: 261.63, dur: 0.3 }, // C4
  { note: 261.63, dur: 0.2 }, // C4
  { note: 293.66, dur: 0.5 }, // D4
  { note: 261.63, dur: 0.5 }, // C4
  { note: 349.23, dur: 0.5 }, // F4
  { note: 329.63, dur: 0.8 }, // E4
  { note: 0, dur: 0.2 },      // rest

  { note: 261.63, dur: 0.3 }, // C4
  { note: 261.63, dur: 0.2 }, // C4
  { note: 293.66, dur: 0.5 }, // D4
  { note: 261.63, dur: 0.5 }, // C4
  { note: 392.00, dur: 0.5 }, // G4
  { note: 349.23, dur: 0.8 }, // F4
  { note: 0, dur: 0.2 },

  // Doraemon upbeat chime bridge
  { note: 261.63, dur: 0.3 }, // C4
  { note: 261.63, dur: 0.2 }, // C4
  { note: 523.25, dur: 0.5 }, // C5
  { note: 440.00, dur: 0.5 }, // A4
  { note: 349.23, dur: 0.5 }, // F4
  { note: 329.63, dur: 0.5 }, // E4
  { note: 293.66, dur: 0.6 }, // D4
  { note: 0, dur: 0.2 },

  // Sparkly resolution
  { note: 466.16, dur: 0.3 }, // Bb4
  { note: 466.16, dur: 0.2 }, // Bb4
  { note: 440.00, dur: 0.5 }, // A4
  { note: 349.23, dur: 0.5 }, // F4
  { note: 392.00, dur: 0.5 }, // G4
  { note: 349.23, dur: 0.9 }, // F4
  { note: 0, dur: 0.5 }
];

function initAudio() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playNote(freq, duration, time) {
  if (!audioCtx || freq === 0) return;

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  // Marimba / music box bell timbre (mixture of sine with soft harmonic)
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(freq, time);

  // Soft envelope
  gain.gain.setValueAtTime(0.001, time);
  gain.gain.exponentialRampToValueAtTime(0.12, time + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + duration - 0.02);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(time);
  osc.stop(time + duration);
}

function playLoop() {
  if (!isPlaying || !audioCtx) return;

  let now = audioCtx.currentTime + 0.05;
  melody.forEach((step) => {
    playNote(step.note, step.dur, now);
    now += step.dur;
  });

  const totalDuration = melody.reduce((acc, step) => acc + step.dur, 0) * 1000;
  currentTimer = setTimeout(() => {
    if (isPlaying) {
      playLoop();
    }
  }, totalDuration);
}

export function playSoundEffect(type) {
  try {
    initAudio();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;

    if (type === 'bell' || type === 'chime') {
      // Magic bell chime
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        playNote(freq, 0.4, now + idx * 0.08);
      });
    } else if (type === 'blow') {
      // Whoosh blow sound
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.5);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.5);
    } else if (type === 'pop') {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(200, now);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.1);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    }
  } catch {
    // Audio context may require user interaction first
  }
}

export function startBackgroundMusic() {
  initAudio();
  if (isPlaying) return;
  isPlaying = true;
  playLoop();
}

export function stopBackgroundMusic() {
  isPlaying = false;
  if (currentTimer) {
    clearTimeout(currentTimer);
    currentTimer = null;
  }
}

export function toggleBackgroundMusic(callback) {
  if (isPlaying) {
    stopBackgroundMusic();
    if (callback) callback(false);
  } else {
    startBackgroundMusic();
    if (callback) callback(true);
  }
}

