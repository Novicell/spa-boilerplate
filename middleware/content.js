export default async function(ctx) {
  const key = decodeURIComponent(ctx.route.fullPath)
  const { data } = await ctx.$axios.get('/api/getcontentbykey/?key=/test/', {
    withCredentials: true,
    params: {
      key
    }
  })
  console.log(data)
  return (ctx.payload = {
    seo: 'seo',
    template: 'template',
    content: 'this.axios',
    nodeId: 'nodeId'
  })
}
