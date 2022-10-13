<template>
  <div class="auth">
    <Auth/>
    <div class="auth-links">
      <NuxtLink to="register">Зарегистрироваться</NuxtLink>
    </div>
  </div>
</template>

<script>
import Auth from "~/components/auth/auth.vue";

export default {
  name: "login",
  layout: "auth",
  components: {Auth}
}
</script>
<style scoped>
.auth-links {
  margin-top: 15px;
}
</style>
