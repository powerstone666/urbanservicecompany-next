import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';
import type { PluginAPI } from 'tailwindcss/types/config';

// Type definitions
type UtilityConfig = {
  [key: string]: {
    [key: string]: string;
  };
};

type KeyframeConfig = {
  [key: string]: {
    transform?: string;
    opacity?: string;
  };
};

type AnimationConfig = {
  [key: string]: string;
};

const animations: AnimationConfig = {
  'fade-in-down': 'fadeInDown 0.5s ease-out',
  'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  'rotate-12': 'rotate-12 0.2s ease-in-out',
  'scale': 'scale 0.2s ease-in-out',
};

const keyframes: { [key: string]: KeyframeConfig } = {
  fadeInDown: {
    '0%': {
      opacity: '0',
      transform: 'translateY(-10px)'
    },
    '100%': {
      opacity: '1',
      transform: 'translateY(0)'
    },
  },
  'rotate-12': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(12deg)' },
  },
  scale: {
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(1.05)' },
  },
};

const scrollbarUtilities: UtilityConfig = {
  '.scrollbar-hide': {
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
   
  }
};

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      animation: animations,
      keyframes,
      transitionDuration: {
        '2000': '2000ms',
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'custom-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  
  ],
} satisfies Config;
