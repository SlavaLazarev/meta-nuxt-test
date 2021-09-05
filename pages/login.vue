<template>
  <section>
    <div v-if="$route.query.message" class="alert alert-secondary">
      Please log in to your account
    </div>
    <form @submit.prevent="onSubmit">
      <h1>Login</h1>
      <div class="form-group">
        <input type="text" class="form-control">
      </div>
      <b-button type="submit">login</b-button>
    </form>
  </section>
</template>

<script>
export default {
  name: "login",
  layout: 'empty',
  methods: {
    onSubmit() {
      this.$store.dispatch('login')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  form {
    width: 400px;
    margin: 0 auto;
  }
</style>
