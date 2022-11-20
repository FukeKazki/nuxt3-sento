export default defineEventHandler((event) => {
  const token = getCookie(event, 'token');

  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'UnAuthorized',
    });
  }

  return {
    posts: [
      { title: 'aaa', content: 'bbb', author: 'aaa' },
      { title: 'aaa', content: 'bbb', author: 'aaa' },
      { title: 'aaa', content: 'bbb', author: 'aaa' },
    ],
  };
});
