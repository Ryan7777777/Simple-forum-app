<template>
  <div>
    <meta name="viewport" content="initial-scale = 1.0,maximum-scale = 1.0" />
    <div>
      <strong>Screen Size:</strong>
      <div v-if="$resize && $mq.above(1336)">Desktop</div>
      <div v-else-if ="$resize && $mq.above(768)">Tablet and Below</div>
      <div v-else>Mobile</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        action: false,
      }
    },
    mounted: function () {
    },
    methods: {
      }
  }
</script>

<style scoped>

</style>
