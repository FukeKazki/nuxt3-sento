export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id');
  // TODO: idから検索
  return {
    post: { title: 'aaa', content: 'bbb', author: 'aaa' }
  }
});
