<template>
  <div>
    <component
      v-if="componentTemplate"
      :is="componentTemplate"
      :node-id="nodeId"
      :view-model="content"/>
  </div>
</template>

<script>
const components = {
  DebugPage: () => import('@/components/templates/DebugPage/DebugPage'),
  HomePage: () => import('@/components/templates/HomePage/HomePage')
}

export default {
  components,
  scrollToTop: true,
  watchQuery: ['q'],
  layout: ({ layout }) => layout,
  async asyncData({ payload }) {
    return payload
  },
  computed: {
    componentTemplate() {
      if (components[this.template]) {
        return this.template
      }
      console.warn(`The template for: ${this.template} was not find`)

      return 'DebugPage' // This is just a default for now
    }
  },
  head() {
    const link = [
      { rel: 'canonical', href: this.seo ? this.seo.canonical : '' }
    ]
    return {
      link,
      title: this.seo ? this.seo.pageTitle : '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.seo ? this.seo.pageDescription : ''
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.seo ? this.seo.pageDescription : ''
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.seo ? this.seo.pageTitle : ''
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.seo ? this.seo.pageKeywords : ''
        }
      ]
    }
  }
}
</script>

<style>
</style>
