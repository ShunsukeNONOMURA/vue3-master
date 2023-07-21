# 概要
DockerでVue3開発環境を起動するためのファイル群。
初期構築は`yarn create vuetify`で作成。

## 使い方
```
# 導入
git clone https://github.com/ShunsukeNONOMURA/vue3-master.git
cd vue3-master

# 初期構築
docker compose build --no-cache

# ライブラリのインストール
# 初期構築時や環境更新する際は適宜install.shを使ってnote_modulesを更新
./shell/install.sh

# 開発環境起動
docker compose up

# prettierとlintの実行
./shell/fix.sh

# 開発環境起動時にプレビュー環境を起動する
./shell/preview.sh

# 開発環境起動時にバンドルする
./shell/build.sh
```

## 搭載プラグイン
- typescript
- vuetify3
- vue-router
- pinia
- vite-plugin-pug
- eslint

## 開発参考情報
- [vuetify3 guide](https://vuetifyjs.com/en/getting-started/installation/)
- [vue-router guide](https://router.vuejs.org/guide/)

## 初期構築
- [`yarn create vuetify` で初期構築](https://vuetifyjs.com/en/getting-started/installation/)
- [`vite-plugin-pug` を追加](https://www.npmjs.com/package/vite-plugin-pug)
- [Vite + Vue3にESLintとPrettierを導入](https://zenn.dev/chida/articles/c0bd3ad56ed06b)
```
# プロジェクトの初期構築
yarn create vuetify

✔ Project name: … vue3
✔ Which preset would you like to install? › Custom (Choose your features)
✔ Use TypeScript? … No / Yes
✔ Use Vue Router? … No / Yes
✔ Use Pinia? … No / Yes
✔ Use ESLint? … No / Yes
✔ Would you like to install dependencies with yarn, npm, or pnpm? › yarn

# pugの追加
yarn add -D vite-plugin-pug

# prettierの追加
yarn add -D prettier @vue/eslint-config-prettier
```

### vite.config.ts
- [pugを有効化させる設定を追記](https://www.npmjs.com/package/vite-plugin-pug)
```ts
// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import pugPlugin from "vite-plugin-pug"

const options = { pretty: true } // FIXME: pug pretty is deprecated!
const locals = { name: "My Pug" }

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
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
  ],
  define: { 'process.env': {} },
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
```

### package.json
- [Failed to resolve entry for package "/app" の対応](https://github.com/vitejs/vite/issues/6859#issuecomment-1472940540)
    - `"main": "./src/main.ts",` を追記する
- Prettierの導入
    - `"format": "prettier -w src/*.{ts,vue} && prettier -w src/**/*.{ts,vue}",` を追記する
    - `"fix": "yarn format && yarn lint",` を追記する
```
[vite] Internal server error: Failed to resolve entry for package "/app". The package may have incorrect main/module/exports specified in its package.json.
```

```json
{
  "name": "vue3",
  "version": "0.0.0",
  "main": "./src/main.ts",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview",
    "lint": "eslint . --fix --ignore-path .gitignore",
    "format": "prettier -w src/*.{ts,vue} && prettier -w src/**/*.{ts,vue}",
    "fix": "yarn format && yarn lint"    
  },
  "dependencies": {
    "@mdi/font": "7.0.96",
    "pinia": "^2.0.23",
    "roboto-fontface": "*",
    "vue": "^3.2.0",
    "vue-router": "^4.0.0",
    "vuetify": "^3.0.0",
    "webfontloader": "^1.0.0"
  },
  "devDependencies": {
    "@babel/types": "^7.21.4",
    "@types/node": "^18.15.0",
    "@types/webfontloader": "^1.6.35",
    "@vitejs/plugin-vue": "^4.0.0",
    "@vue/eslint-config-prettier": "^8.0.0",
    "@vue/eslint-config-typescript": "^11.0.0",
    "eslint": "^8.0.0",
    "eslint-plugin-vue": "^9.0.0",
    "prettier": "^3.0.0",
    "typescript": "^5.0.0",
    "vite": "^4.2.0",
    "vite-plugin-pug": "^0.3.2",
    "vite-plugin-vuetify": "^1.0.0",
    "vue-tsc": "^1.2.0"
  }
}
```
