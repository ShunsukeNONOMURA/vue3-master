// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import pugPlugin from "vite-plugin-pug"

const options = { pretty: true } // FIXME: pug pretty is deprecated!
const locals = { name: "My Pug" }

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// vueI18n
import { resolve, dirname } from "node:path";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // 相対パスにするしてい
  plugins: [
    vue({ 
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
    pugPlugin(
      options, 
      locals
    ),
    // https://zenn.dev/smiura0222/articles/c8d9f5afa074cc
    vueI18n({
      // https://github.com/intlify/vite-plugin-vue-i18n/issues/74#issuecomment-815594942
      runtimeOnly: false, // これがないとビルドできないらしい
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "./src/plugins/i18n/locales/**"
      ),
    }),
  ],
  define: { 
    'process.env': {},
    // [vue-18nで出る警告](https://specialpark.net/archives/121)
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
  },
})