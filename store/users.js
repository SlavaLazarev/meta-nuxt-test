export const state = () => ({
  users: [],
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}

export const actions = {
  async fetchUsers({commit}) {
    const url = process.env.URL
    const users = await this.$axios.$get(`${url}.json`)
    commit('setUsers', users)
  },
}

export const getters = {
  users: state => state.users
}
