// vite.config.js
import federation from "@originjs/vite-plugin-federation";
import react from '@vitejs/plugin-react'
export default {
  plugins: [
    react(),
    federation({
      name: 'remote-app',
      filename: 'remoteEntry.js',
      exposes: {
        './module1': './src/Module1.jsx',
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
}