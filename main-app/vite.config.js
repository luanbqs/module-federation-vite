
import federation from "@originjs/vite-plugin-federation";
import react from '@vitejs/plugin-react'
export default {
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        remote_app: "http://localhost:3001/assets/remoteEntry.js",
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