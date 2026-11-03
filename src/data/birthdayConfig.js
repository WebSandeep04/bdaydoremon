/**
 * Doraemon-Themed Birthday Experience Configuration
 * All editable personalization data is organized in this file.
 */
export const birthdayConfig = {
  recipientName: "Birthday Star",
  senderName: "Your Best Friend",
  birthdayDate: "12 December",
  tagline: "Every birthday deserves a little magic. 💙🎂",
  theme: "doraemon",

  colors: {
    blue: "#168FE5",
    skyBlue: "#8ED8FF",
    lightBlue: "#DDF4FF",
    red: "#EF4444",
    yellow: "#FFD84D",
    navy: "#17345C",
    white: "#FFFFFF"
  },

  // Scene 1 Invitation details
  invitation: {
    teaser: "Psst… someone has a very special birthday surprise for you!",
    subtext: "Doraemon has a little mission today…",
    openButton: "Open Your Birthday Invitation 💌",
    revealedTitle: "Your Birthday Adventure Starts Now!",
    startButton: "Let's Go! 🚀"
  },

  // Scene 2 Anywhere Door
  anywhereDoor: {
    question: "Guess where we're going today?",
    subtext: "Somewhere full of smiles, surprises, and birthday magic!",
    buttonText: "Open the Anywhere Door 🚪",
    portalMessage: "Step through the magical portal...",
    proceedButton: "Enter Birthday Wonderland ✨"
  },

  // Scene 3 Birthday Reveal
  reveal: {
    subtitle: "Today, the world gets a little more magical because it's your day.",
    buttonText: "Discover Your Birthday Gadgets 🎒"
  },

  // Scene 4 Magical Pocket Gadgets
  gadgets: [
    {
      id: "anywhere-door",
      name: "Anywhere Door",
      japanese: "どこでもドア",
      tag: "Exploration",
      icon: "door",
      color: "#EF4444",
      wish: "May every place you dream of take you closer to happiness and wonderful adventures."
    },
    {
      id: "bamboo-copter",
      name: "Bamboo-Copter",
      japanese: "タケコプター",
      tag: "Freedom",
      icon: "propeller",
      color: "#FFD84D",
      wish: "May your dreams take you higher than ever and life always give you the freedom to fly."
    },
    {
      id: "time-machine",
      name: "Time Machine",
      japanese: "タイムマシン",
      tag: "Memories",
      icon: "clock",
      color: "#168FE5",
      wish: "May you revisit your happiest memories whenever you want and build even brighter tomorrows."
    },
    {
      id: "memory-bread",
      name: "Memory Bread",
      japanese: "暗記パン",
      tag: "Wisdom & Joy",
      icon: "bread",
      color: "#E2903C",
      wish: "May every beautiful moment, lesson, and blessing stay sweetly with you forever."
    },
    {
      id: "small-light",
      name: "Small Light",
      japanese: "スモールライト",
      tag: "Perspective",
      icon: "flashlight",
      color: "#10B981",
      wish: "May all your worries shrink to tiny specks while your joys grow endlessly huge!"
    }
  ],

  // Scene 5 & 6 Cake & Wishes
  cake: {
    wishHeading: "Make a Wish! 🎂",
    wishSubtext: "Close your eyes, think of your biggest dream, and make a wish.",
    wishButton: "Make a Wish 🌟",
    blowButton: "Blow the Candles 🌬️🕯️",
    wishedReveal: "May every wish in your heart come true!",
    nextToCutButton: "Time to Cut the Cake! 🍰",
    
    cutHeading: "Cake Time! 🍰",
    cutButton: "Cut the Cake 🔪",
    cutMessage: "Life is sweeter with someone as special as you in it.",
    proceedToGift: "Open Your Final Surprise 🎁"
  },

  // Scene 7 Gift Box
  gift: {
    teaser: "Doraemon saved one final surprise…",
    openButton: "Open Your Gift 🎁",
    message: "You deserve a pocket full of happiness, a lifetime of laughter, and endless reasons to smile.",
    proceedButton: "Read Birthday Letter 💌"
  },

  // Scene 8 Final Message & Signature
  finalScene: {
    heading: "To the Most Special Person 💙",
    letter: [
      "Happy Birthday!",
      "I hope your day is filled with laughter, happiness, little surprises, and memories that stay with you forever.",
      "May you always keep that beautiful smile, follow your dreams, and find magic in the smallest moments.",
      "If I had Doraemon’s 4D magical pocket, I would fill it with all the happiness and wonder in the world just for you.",
      "Have the most amazing, sparkling, and unforgettable birthday!"
    ],
    hugButton: "One Last Birthday Hug 🤗",
    hugMessage: "Sending you the biggest, warmest birthday hug! 💙✨",
    restartButton: "Start the Adventure Again 🔄"
  },

  // Audio settings
  audio: {
    title: "Cheerful Birthday Melody",
    // Uses Web Audio synth generator if musicUrl is empty or fails
    musicUrl: "" 
  }
};

