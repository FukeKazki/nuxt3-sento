/**
 * 認証用のトークンを発行するAPI
 */
export default defineEventHandler((event) => {
  return {
    token: 'aha',
  };
});
