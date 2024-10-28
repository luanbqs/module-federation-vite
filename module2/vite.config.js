// vite.config.js
import federation from "@originjs/vite-plugin-federation";
export default {
  plugins: [
    federation({
      name: 'module2',
      filename: 'remoteEntry.js',
      remotes: {
        module2: 'module2@http://localhost:3002/remoteEntry.js',
      },
      shared: ['react', 'react-dom']
    })
  ]
}