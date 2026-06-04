
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        bg1: '#0B1220', bg2: '#0F172A', line: '#1F2B44', text: '#E7EDF7', muted: '#9FB0C7',
        accent: { DEFAULT: '#3B82F6', light: '#60A5FA' }
      },
      fontFamily: { sans: ['Inter','system-ui','-apple-system','Segoe UI','Roboto','Helvetica','Arial','sans-serif'] },
      boxShadow: { glow: '0 10px 30px rgba(59,130,246,.35)' }
    }
  }, plugins: []
};
