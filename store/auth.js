export default {
  state() {
    return {
      user: null
    }
  },
  actions:{
    async auth({ commit }, { login, password }) {
      try {
        fetch('/api/auth', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({login, password})
        }).then(response => response.json()).then(data => {
          commit('auth', data.user);
        });
      } catch (error) {
        console.log(error);
      }
    }
  },
  mutations:{
    auth(state, user) {
      state.user = user;
      this.$router.push('/')
    },
  },
  getters:{}
}
