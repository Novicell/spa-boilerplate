export default async function(ctx) {
  const key = decodeURIComponent(ctx.route.fullPath)
  const { data } = await ctx.$axios.get('/api/getcontentbykey/?key=/test/', {
    withCredentials: true,
    params: {
      key
    }
  })
  const content = data.viewModel
  console.log(data)
  return (ctx.payload = {
    seo: content.seo,
    template: content.meta.template,
    content: content.content,
    nodeId: content.meta.nodeId
  })
}
