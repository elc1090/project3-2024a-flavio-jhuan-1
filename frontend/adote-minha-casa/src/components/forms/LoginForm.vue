<template>
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Senha:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <router-link type="submit" class="btn basicbutton" @click="login">Login</router-link>
      </form>
    </div>

</template>

<script>
import {loginRecipient} from '@/scripts/recipients.js';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      
      data = {
        "email": this.email,
        "password": this.password
      };
      
      loginRecipient(data);
    }
  }
};
</script>

<style lang="css" scoped src="@/assets/styles/form.css"></style>