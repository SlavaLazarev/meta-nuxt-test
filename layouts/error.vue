<template>
  <section>
    <h1>User {{$route.params.id}} does not exist</h1>
    <nuxt-link to="/">Home</nuxt-link>
  </section>
</template>

<script>
export default {
  name: "error"
}
</script>

<style scoped>
  section {
    width: 600px;
    margin: 0 auto;
    padding-top: 5rem;
  }
  h1 {
    color: red;
  }
</style>
