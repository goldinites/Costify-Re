<template>
  <form class="form">
    <input class="input" type="text" id="email" placeholder="E-mail" v-model="email">
    <input class="input" type="text" id="login" placeholder="Логин" v-model="login">
    <input class="input" type="text" id="password" placeholder="Пароль" v-model="password">
    <button class="btn" @click.prevent="registerHandler">Зарегистрироваться</button>
  </form>
</template>

<script>
import {required, email, minLength} from 'vuelidate/lib/validators';

export default {
  name: "register",
  data() {
    return {
      login: '',
      password: '',
      email: ''
    }
  },
  validations: {
    email: {
      required,
      email: email,
    },
    password: {
      required,
      minLength: minLength(6)
    },
    login: {
      required,
      minLength: minLength(2)
    }
  },
  methods: {
    registerHandler() {
      let userData = {
        email: this.email,
        login: this.login,
        password: this.password
      }
      if(this.formValid) {
        this.$store.dispatch('auth/register', userData);
      }
    }
  },
  computed: {
    formValid() {
      return !this.$v.email.$invalid && !this.$v.login.$invalid && !this.$v.password.$invalid;
    }
  }
}
</script>

<style scoped>

</style>
