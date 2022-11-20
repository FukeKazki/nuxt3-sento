// https://nuxt.com/docs/getting-started/configuration
export default defineNuxtConfig({
  runtimeConfig: {
    // useRuntimeConfigから利用
    // サーバーのみ
    apiSecret: '秘密だよ',
    // クライアント側で使う(見れる)
    public: {
      apiBase: '/api',
    },
  },
});
