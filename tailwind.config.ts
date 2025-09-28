import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  // Optimized content paths for better performance
  // More specific paths = faster compilation
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
    // Exclude node_modules and other directories that don't contain Tailwind classes
    "!./src/**/*.d.ts",
    "!./node_modules",
  ],

  // Note: safelist optimization handled at build time for performance
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Therapeutic color aliases for easier use
        "therapeutic-primary": "var(--primary)",
        "therapeutic-secondary": "var(--secondary)",
        "therapeutic-accent": "var(--accent)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
      },

      // Therapy-specific design tokens
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },

      // Optimized breakpoints for therapy websites
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },

      // Performance-optimized animations
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Performance optimization plugin
    function({ addUtilities, theme }: { addUtilities: Function; theme: Function }) {
      addUtilities({
        // Hardware-accelerated animations for better performance
        '.will-change-auto': {
          'will-change': 'auto',
        },
        '.will-change-scroll': {
          'will-change': 'scroll-position',
        },
        '.will-change-transform': {
          'will-change': 'transform',
        },
        '.gpu-accelerated': {
          'transform': 'translateZ(0)',
          'backface-visibility': 'hidden',
          'perspective': '1000px',
        },
        // Therapy-specific utilities
        '.therapy-container': {
          'max-width': '1200px',
          'margin-left': 'auto',
          'margin-right': 'auto',
          'padding-left': theme('spacing.4'),
          'padding-right': theme('spacing.4'),
        },
        '.therapy-section': {
          'padding-top': theme('spacing.16'),
          'padding-bottom': theme('spacing.16'),
        },
      })
    },
  ],

  // Future-proof configuration for Tailwind CSS v4
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;