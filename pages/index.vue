<template>
  <div>
    <div>
      <div>Get all users</div>
      <button @click="getUsers">get users</button>
    </div>
    <div>
      <div>Get user by id</div>
      <input type="text" placeholder="userID" v-model="userId">
      <button @click="getUserByID">get user by id</button>
    </div>
    <div>
      <div>create user</div>
      <input type="text" placeholder="login" v-model="login">
      <input type="text" placeholder="password" v-model="password">
      <input type="text" placeholder="email" v-model="email">
      <button @click="createUser">create user</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      userId: '',
      login: '',
      email: '',
      password: '',
    }
  },
  methods: {
    getUsers() {
      fetch('/api/users/').then(response => response.json()).then(data => console.log(data))
    },
    getUserByID() {
      let id = this.userId;
      fetch(`/api/users${id}`).then(response => response.json()).then(data => console.log(data))
    },
    createUser() {
      let userData = {
        email: this.email,
        password: this.password,
        login : this.login
      }
      fetch('/api/users/', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      }).then(response => response).then(data => console.log(data));
    }
  },
}
</script>
