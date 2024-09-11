import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      host: true,
      port: Number(env.VITE_PORT) || 5173 // Ensure port is a number
    },
    preview: {
      port: Number(env.VITE_PORT) || 4173 // Use this for preview server
    }
  };
});
