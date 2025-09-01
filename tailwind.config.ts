import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        radical: {
          primary: {
            DEFAULT: "#00f5d4", // Bright cyan for primary actions/highlights
            light: "#008f7a", // Darker cyan for contrast
          },
          secondary: {
            DEFAULT: "#f765a3", // Pink for secondary elements
            light: "#d13d7b", // Darker pink
          },
          dark: "#0a0a0a", // Darker background
          darker: "#050505", // Even darker background
          light: "#f0f0f0", // Light text color
          muted: {
            DEFAULT: "#666666", // Muted text
            light: "#888888", // Lighter muted text
          },
          red: "#ff3333", // Accent red
          blue: "#3366ff", // Accent blue
          green: "#33ff66", // Accent green
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        display: ["var(--font-display)"],
        tech: ["var(--font-tech)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "noise": "url('/noise.png')",
        grid: "url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 32 32\\' width=\\'32\\' height=\\'32\\' fill=\\'none\\' stroke=\\'%2300f5d4\\' stroke-opacity=\\'0.2\\'%3E%3Cpath d=\\'M0 .5H31.5V32\\'/%3E%3C/svg%3E')",
        "grid-light": "url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 32 32\\' width=\\'32\\' height=\\'32\\' fill=\\'none\\' stroke=\\'%23008f7a\\' stroke-opacity=\\'0.2\\'%3E%3Cpath d=\\'M0 .5H31.5V32\\'/%3E%3C/svg%3E')",
        dots: "url('data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%2300f5d4\\' fill-opacity=\\'0.2\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'1\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'1\\'/%3E%3C/g%3E%3C/svg%3E')",
        "dots-light": "url('data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23008f7a\\' fill-opacity=\\'0.2\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'1\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'1\\'/%3E%3C/g%3E%3C/svg%3E')",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glitch": "glitch 2s linear infinite",
        "scan": "scan 2s linear infinite",
        "glitch-horizontal": "glitch 3s linear infinite",
        "glitch-vertical": "glitch 3s linear infinite alternate",
        "crt-scanline": "crt-scanline 8s linear infinite",
        "crt-flicker": "crt-flicker 8s infinite",
        "crt-blink": "crt-blink 12s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
        scan: {
          "0%": { backgroundPosition: "0 -250%" },
          "100%": { backgroundPosition: "0 250%" },
        },
        "crt-scanline": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "crt-flicker": {
          "0%": { opacity: "0.27861" },
          "5%": { opacity: "0.34769" },
          "10%": { opacity: "0.93604" },
          "15%": { opacity: "0.66843" },
          "20%": { opacity: "0.83692" },
          "25%": { opacity: "0.67442" },
          "30%": { opacity: "0.26641" },
          "35%": { opacity: "0.84453" },
          "40%": { opacity: "0.96645" },
          "45%": { opacity: "0.25388" },
          "50%": { opacity: "0.54734" },
          "55%": { opacity: "0.6536" },
          "60%": { opacity: "0.98365" },
          "65%": { opacity: "0.13544" },
          "70%": { opacity: "0.65414" },
          "75%": { opacity: "0.75601" },
          "80%": { opacity: "0.12138" },
          "85%": { opacity: "0.52738" },
          "90%": { opacity: "0.78499" },
          "95%": { opacity: "0.45496" },
          "100%": { opacity: "0.85429" },
        },
      },
      fontSize: {
        "8xl": "6rem",
        "9xl": "8rem",
        "10xl": "10rem",
      },
      extend: {
        backdropFilter: {
          'none': 'none',
          'blur': 'blur(20px)',
        },
        borderWidth: {
          '3': '3px',
          '5': '5px',
          '6': '6px',
        },
        textStrokeWidth: {
          '1': '1px',
        },
        textStrokeColor: (theme: any) => ({
          primary: theme('colors.radical.primary.DEFAULT'),
        }),
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: theme('colors.radical.dark'),
            a: {
              color: theme('colors.radical.primary.light'),
              '&:hover': {
                color: theme('colors.radical.secondary.light'),
              },
              textDecoration: 'none',
              borderBottom: `1px solid ${theme('colors.radical.primary.light')}`,
              paddingBottom: '1px',
              transition: 'all 0.2s',
            },
            strong: { color: theme('colors.radical.primary.light') },
            h1: { 
              color: theme('colors.radical.dark'),
              fontFamily: theme('fontFamily.display'),
              fontWeight: '700',
            },
            h2: { 
              color: theme('colors.radical.dark'),
              fontFamily: theme('fontFamily.display'),
              fontWeight: '700',
            },
            h3: { 
              color: theme('colors.radical.dark'),
              fontFamily: theme('fontFamily.display'),
              fontWeight: '700',
            },
            code: { color: theme('colors.radical.primary.light') },
            blockquote: {
              position: 'relative',
              borderLeftWidth: '0px',
              borderWidth: '2px',
              borderColor: theme('colors.radical.primary.light'),
              padding: '1rem 1.25rem',
              backgroundColor: 'rgba(0, 143, 122, 0.06)',
              fontStyle: 'normal',
              fontFamily: theme('fontFamily.mono'),
              color: theme('colors.radical.dark'),
              opacity: 0.95,
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:last-of-type::after': { content: 'none' },
            ul: {
              listStyleType: 'square',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.radical.light'),
            a: {
              color: theme('colors.radical.primary.DEFAULT'),
              '&:hover': {
                color: theme('colors.radical.secondary.DEFAULT'),
              },
              borderBottom: `1px solid ${theme('colors.radical.primary.DEFAULT')}`,
            },
            strong: { color: theme('colors.radical.primary.DEFAULT') },
            h1: { color: theme('colors.radical.light') },
            h2: { color: theme('colors.radical.light') },
            h3: { color: theme('colors.radical.light') },
            code: { color: theme('colors.radical.secondary.DEFAULT') },
            blockquote: {
              borderLeftWidth: '0px',
              borderWidth: '2px',
              borderColor: theme('colors.radical.primary.DEFAULT'),
              backgroundColor: 'rgba(0, 245, 212, 0.08)',
              color: theme('colors.radical.light'),
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:last-of-type::after': { content: 'none' },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addUtilities, theme }: { addUtilities: Function, theme: Function }) {
      const newUtilities = {
        '.text-outline': {
          '-webkit-text-stroke': '1px ' + theme('colors.radical.primary.DEFAULT'),
          'color': 'transparent',
        },
        '.text-outline-light': {
          '-webkit-text-stroke': '1px ' + theme('colors.radical.primary.light'),
          'color': 'transparent',
        },
        '.radical-grid': {
          'background-image': theme('backgroundImage.grid'),
          'background-size': '30px 30px',
          'background-position': 'fixed',
        },
        '.radical-grid-light': {
          'background-image': theme('backgroundImage.grid-light'),
          'background-size': '30px 30px',
          'background-position': 'fixed',
        },
        '.radical-dots': {
          'background-image': theme('backgroundImage.dots'),
          'background-size': '20px 20px',
          'background-position': 'fixed',
        },
        '.radical-dots-light': {
          'background-image': theme('backgroundImage.dots-light'),
          'background-size': '20px 20px',
          'background-position': 'fixed',
        },
        '.radical-glitch': {
          'position': 'relative',
        },
        '.radical-glitch::before': {
          'content': '""',
          'position': 'absolute',
          'top': '0',
          'left': '0',
          'width': '100%',
          'height': '100%',
          'opacity': '0.5',
          'color': theme('colors.radical.primary.DEFAULT'),
          'margin-left': '-0.25rem',
          'margin-top': '-0.25rem',
          'animation': 'glitch 2s linear infinite',
          'clip-path': 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
        },
        '.dark .radical-glitch::before': {
          'color': theme('colors.radical.primary.DEFAULT'),
        },
        '.radical-glitch::after': {
          'content': '""',
          'position': 'absolute',
          'top': '0',
          'left': '0',
          'width': '100%',
          'height': '100%',
          'opacity': '0.5',
          'color': theme('colors.radical.secondary.light'),
          'margin-left': '0.25rem',
          'margin-top': '0.25rem',
          'animation': 'glitch 2s linear infinite',
          'clip-path': 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
          'animation-delay': '-0.5s',
        },
        '.dark .radical-glitch::after': {
          'color': theme('colors.radical.secondary.DEFAULT'),
        },
        '.radical-border': {
          'border-width': '2px',
          'border-color': theme('colors.radical.primary.light'),
          'position': 'relative',
        },
        '.dark .radical-border': {
          'border-color': theme('colors.radical.primary.DEFAULT'),
        },
        '.radical-border::before': {
          'content': '""',
          'position': 'absolute',
          'inset': '-0.125rem',
          'border-width': '2px',
          'border-color': theme('colors.radical.secondary.light'),
          'z-index': '-1',
          'transform': 'translate(4px, 4px)',
        },
        '.dark .radical-border::before': {
          'border-color': theme('colors.radical.secondary.DEFAULT'),
        },
        '.radical-scan': {
          'position': 'relative',
          'overflow': 'hidden',
        },
        '.radical-scan::after': {
          'content': '""',
          'position': 'absolute',
          'inset': '0',
          'background-image': 'linear-gradient(to bottom, transparent, rgba(0, 143, 122, 0.2), transparent)',
          'background-size': '100% 500%',
          'animation': 'scan 2s linear infinite',
        },
        '.dark .radical-scan::after': {
          'background-image': 'linear-gradient(to bottom, transparent, rgba(0, 245, 212, 0.2), transparent)',
        },
        
        // CRT effect based on Balatro
        '.balatro-crt': {
          'position': 'relative',
          'overflow': 'visible',
          'background-color': 'rgba(0, 0, 0, 0.1)',
          'backdrop-filter': 'blur(1px)',
          'width': '100vw',
          'margin-left': 'calc(-50vw + 50%)',
          'padding-left': 'calc(50vw - 50%)',
          'padding-right': 'calc(50vw - 50%)',
          'box-sizing': 'border-box',
        },
        '.dark .balatro-crt': {
          'background-color': 'rgba(0, 0, 0, 0.15)',
        },
        '.balatro-crt > *': {
          'transform': 'perspective(800px) rotateX(2deg) scale(0.95)',
          'transform-style': 'preserve-3d',
          'transform-origin': 'center center',
          'border-radius': '10% / 5%',
          'animation': 'crt-blink 12s infinite',
        },
        '.balatro-crt > * > *': {
          'position': 'relative',
          'border-radius': '10% / 5%',
          'overflow': 'hidden',
        },
        '.balatro-crt::before': {
          'content': '""',
          'position': 'absolute',
          'inset': '0',
          'pointer-events': 'none',
          'z-index': '1',
          'opacity': '0.9',
        },
        '.balatro-crt::after': {
          'content': '""',
          'position': 'absolute',
          'left': '0',
          'top': '-100%',
          'width': '74rem',
          'margin': '0 auto',
          'height': '1px',
          'background': 'linear-gradient(90deg, transparent 0%, rgba(0, 245, 212, 0.7) 50%, transparent 100%)',
          'animation': 'crt-scanline 8s linear infinite',
          'z-index': '20',
          'pointer-events': 'none',
          'opacity': '0.895',
          'box-shadow': '0 0 12px 2px rgba(0, 245, 212, 0.4)',
        },
        '.balatro-crt .container': {
          'transform': 'scale(0.99)',
          'transform-origin': 'center center',
        },
        '.balatro-flicker': {
          'animation': 'crt-flicker 8s infinite',
          'position': 'relative',
        },
        '.balatro-flicker::after': {
          'content': '""',
          'position': 'absolute',
          'inset': '0',
          'background': 'radial-gradient(circle at center, transparent 50%, rgba(0, 0, 0, 0.2) 100%)',
          'pointer-events': 'none',
          'z-index': '1',
          'opacity': '0.6',
          'mix-blend-mode': 'overlay',
          'border-radius': '5% / 2.5%',
        },
        '.dark .balatro-flicker::after': {
          'background': 'radial-gradient(circle at center, transparent 50%, rgba(0, 245, 212, 0.15) 100%)',
        },
        
        '.clip-diagonal': {
          'clip-path': 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },

        // New utilities for gothic/industrial style
        '.gothic-title': {
          'font-family': 'var(--font-display)',
          'text-transform': 'uppercase',
          'letter-spacing': '0.05em',
        },
        '.tech-text': {
          'font-family': 'var(--font-tech)',
          'letter-spacing': '0.03em',
          'font-weight': '600',
        },
        '.distressed': {
          'position': 'relative',
          'text-shadow': '1px 1px 2px rgba(0, 0, 0, 0.3)',
          'filter': 'saturate(0.8) contrast(1.2)',
        },
        '.industrial-border': {
          'border': '1px solid rgba(255, 255, 255, 0.2)',
          'position': 'relative',
        },
        '.industrial-border::before': {
          'content': '""',
          'position': 'absolute',
          'inset': '-2px',
          'border': '1px solid rgba(255, 255, 255, 0.05)',
          'z-index': '-1',
        },
        '.num-tag': {
          'font-family': 'var(--font-mono)',
          'font-size': '0.7em',
          'padding': '0.1em 0.3em',
          'background-color': 'rgba(0, 245, 212, 0.1)',
          'color': theme('colors.radical.primary.DEFAULT'),
          'border': '1px solid ' + theme('colors.radical.primary.DEFAULT'),
        },
        '.redacted': {
          'position': 'relative',
        },
        '.redacted::after': {
          'content': '""',
          'position': 'absolute',
          'left': '0',
          'right': '0',
          'top': '50%',
          'height': '1px',
          'background-color': 'currentColor',
          'opacity': '0.7',
        },
        '.cyberpunk-grid': {
          'background-image': 'linear-gradient(rgba(0, 245, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 245, 212, 0.1) 1px, transparent 1px)',
          'background-size': '20px 20px',
        },
      }
      addUtilities(newUtilities)
    },
  ],
};

export default config;
