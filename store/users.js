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

  // async fetchUser({commit}, params) {
  //   const user = await this.$axios.$get(`https://meta-cpa-default-rtdb.europe-west1.firebasedatabase.app/users/${params.id}.json`)
  //   console.log(params.id, 'params')
  //   console.log(user, 'user')
  //   return {...user}
  // }
}

export const getters = {
  users: state => state.users
}
