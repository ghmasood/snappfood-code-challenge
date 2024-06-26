import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';

import tsconfigPaths from 'vite-tsconfig-paths';

import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  server: {
    port: 3000,
    watch: { usePolling: true },
    host: true,
    strictPort: true,
  },
  preview: {
    port: 3000,
    host: true,
    strictPort: true,
  },
});
