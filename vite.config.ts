import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import VueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: ['esnext', 'chrome93', 'firefox92', 'safari13'],
  },
  plugins: [vue(), vueJsx(), VueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/styles/scss/_animations.scss"; 
          @import "./src/assets/styles/scss/_variables.scss";
          @import "./src/assets/styles/scss/_mixins.scss";
          @import "./src/assets/styles/scss/_helpers.scss";
          @import "./src/assets/styles/scss/_mediaqueries.scss";
          @import "./src/assets/styles/scss/_fonts.scss";
          @import "./src/assets/styles/scss/_global.scss";
          @import "./src/assets/styles/scss/_main.scss";
        `,
      },
    },
  },
});
