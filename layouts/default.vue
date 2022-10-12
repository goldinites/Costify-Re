<template>
  <div>
    <Nuxt/>
  </div>
</template>

<script>
export default {
  name: "default",
  middleware: 'authenticated',
}
</script>

<style scoped>

</style>
