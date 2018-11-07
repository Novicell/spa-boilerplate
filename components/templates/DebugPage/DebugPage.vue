
<template>
  <div class="container">
    <h1>DebugPage</h1>
    <p> If you're hitting this, the template hasnt been created yet! </p>
    <div class="row">
      <div class="col">
        <table>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, key) in viewModel"
              :key="key">
              <td>{{ key }}</td>
              <td><div class="value">{{ viewModel[key] }}</div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    viewModel: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.value {
  max-height: 300px;
  overflow: auto;
}
table {
  max-width: 100%;
}
</style>
