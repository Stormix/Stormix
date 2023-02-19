import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

import { execSync } from 'child_process';

const commitHash = execSync('git rev-parse --short HEAD').toString();
const timestamp = execSync('git log -1 --format=%ct').toString();

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __COMMIT_HASH__: JSON.stringify(commitHash),
    __COMMIT_TIMESTAMP__: JSON.stringify(timestamp),
  },
  server: {
    port: 3030,
  },
  preview: {
    port: 8080,
  },
  plugins: [svgr(), react(), tsconfigPaths()],
});
