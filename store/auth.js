export default {
  state() {
    return {
      user: null
    }
  },
  actions: {
    auth({commit}, payload) {
      try {
        fetch('/api/auth', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }).then(response => response.json())
          .then(data => {
            if(data.error) {
              console.log(data.error)
            } else {
              commit('auth', data)
            }
          });
      } catch (error) {
        console.log(error);
      }
    },
    register({commit}, payload) {
      try {
        fetch('/api/register/', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }).then(response => response.json())
          .then(data => {
            if (data.error) {
              console.log(data);
            } else {
              commit('auth', data);
            }

          })
          .catch(error => console.log(error));
      } catch (error) {
        console.log(error);
      }
    }
  },
  mutations: {
    auth(state, user) {
      state.user = user;
      this.$router.push('/')
    },
  },
  getters: {}
}
