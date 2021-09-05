<template>
  <div class="container">
    <h1>Users</h1>
    <ul class="list-group">
      <li
        @click.prevent="openUser(user)"
        v-for="user in users"
        :key="user.id"
        class="list-group-item">
        {{ user.login }}
      </li>
      <i class="bi bi-telephone"></i>
    </ul>
  </div>
</template>

<script>
export default {
  name: "users",
  middleware: ['auth'],
  async fetch({store}) {
    if (store.getters["users/users"].length === 0 ) {
      await store.dispatch('users/fetchUsers')
    }
  },
  computed: {
    users() {
      return this.$store.getters["users/users"]
    }
  },
  methods: {
    openUser(user) {
      this.$router.push('/users/' + user.id)
    }
  }
}
</script>

<style scoped>
  ul {
    width: 600px;
  }

</style>
