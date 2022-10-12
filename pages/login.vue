<template>
  <div>
    <form>
      <input type="text" placeholder="Логин" v-model="login">
      <input type="text" placeholder="Пароль" v-model="password">
      <button @click.prevent="auth">Войти</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  layout: "auth",
  data(){
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    auth() {
      let authData = {
        login : this.login,
        password: this.password
      }
      this.$store.dispatch('auth/auth', authData);
    }
  }
}
</script>

<style scoped>

</style>
