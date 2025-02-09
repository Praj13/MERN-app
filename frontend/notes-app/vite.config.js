import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2B85FF", // Custom primary color (blue-900)
        secondary: "#9333EA", // Custom secondary color (purple-600)
      },
    },
  },
  
})
