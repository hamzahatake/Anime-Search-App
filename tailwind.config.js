module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundPrimary: '#0b0b0b',
        backgroundSecondary: '#1c1c1e',
        textPrimary: '#ffffff',
        textSecondary: '#c0c0c0',
        cardBackground: '#1c1c1e',
        divider: '#333333',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.5)',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
      },
      fontSize: {
        heading1: ['48px', '56px'],
        heading2: ['32px', '40px'],
        heading3: ['24px', '32px'],
        body: ['16px', '24px'],
        caption: ['12px', '16px'],
      },
      letterSpacing: {
        wide: '0.5px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}; 