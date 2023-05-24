import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths, { PluginOptions } from 'vite-tsconfig-paths';

const tsconfigoptions: PluginOptions = {
  root: '.',
};

/**
 * @type {ImportAssertions('vite').UserConfig}
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(tsconfigoptions), svgrPlugin()],
  server: {
    host: true,
    strictPort: true,
    port: 3000,
  },
  publicDir: './public',
});
