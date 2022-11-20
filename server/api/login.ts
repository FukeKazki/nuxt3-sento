export default defineEventHandler((event) => {
  setCookie(event, 'token', 'aha');
  return {
    message: 'aha',
  };
});
