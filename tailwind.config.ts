import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          container: "var(--color-primary-container)",
          hover: "var(--color-accent-hover)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          container: "var(--color-secondary-container)",
        },
        tertiary: {
          DEFAULT: "var(--color-tertiary)",
          container: "var(--color-tertiary-container)",
        },
        background: "var(--color-background)",
        surface: {
          DEFAULT: "var(--color-surface)",
          dim: "var(--color-surface-dim)",
          lowest: "var(--color-surface-lowest)",
          raised: "var(--color-surface-raised)",
          high: "var(--color-surface-high)",
          highest: "var(--color-surface-highest)",
          variant: "var(--color-surface-variant)",
        },
        content: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          tertiary: "var(--color-text-tertiary)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          subtle: "var(--color-border-subtle)",
          medium: "var(--color-border-medium)",
          strong: "var(--color-border-strong)",
          amber: "var(--color-border-amber)",
        },
      },
      fontFamily: {
        heading: ["var(--font-archivo-black)", "Impact", "Arial Black", "sans-serif"],
        body: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "Courier New", "monospace"],
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "4px",
        md: "4px",
        lg: "8px",
        xl: "8px",
        "2xl": "8px",
        "3xl": "12px",
        card: "8px",
        button: "4px",
        input: "4px",
        full: "9999px",
      },
      boxShadow: {
        none: "none",
        DEFAULT: "0 8px 16px rgba(0,0,0,0.4)",
        sm: "inset 0 0 0 1px #f3f4f2",
        md: "0 8px 16px rgba(0,0,0,0.4)",
        lg: "0 12px 24px rgba(0,0,0,0.5)",
        amber: "0 0 20px rgba(255, 197, 38, 0.25)",
      },
      borderWidth: {
        DEFAULT: "1px",
        "1": "1px",
        "2": "2px",
        "4": "4px",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
