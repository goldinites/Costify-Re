<template>
  <form class="form">
    <input class="input" type="text" placeholder="Email" v-model="email">
    <input class="input" type="text" placeholder="Пароль" v-model="password">
    <button class="btn" @click.prevent="authHandler">Войти</button>
  </form>
</template>

<script>
export default {
  name: "auth",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    authHandler() {
      let userData = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('auth/auth', userData);
    }
  }
}
</script>

<style scoped>

</style>
