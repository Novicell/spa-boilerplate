<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        Novicell SPA boilerplate
      </h1>
      <h2 class="subtitle">
        Sub header
        {{ content }}
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Nuxt Documentation</a>
        <a
          href="https://novicell.dk"
          target="_blank"
          class="button--grey">Novicell</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/atoms/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
