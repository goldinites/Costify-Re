<template>
  <div class="auth">
    <Register />
    <div class="auth-links">
      <NuxtLink to="auth">Войти</NuxtLink>
    </div>
  </div>
</template>

<script>
import Register from "~/components/auth/register.vue";
export default {
  name: "register",
  layout: "auth",
  components: {Register}
}
</script>

<style scoped>
  .auth-links {
    margin-top: 15px;
  }
</style>
