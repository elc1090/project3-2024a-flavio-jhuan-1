<template>

    <div class="login-container">
      <h1>Crie uma conta</h1>
      <form @submit.prevent="sign_up">
        <div class="form-group">
          <label for="password">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Nome:</label>
          <input type="text" id="password" v-model="name" required>
        </div>
        <div class="form-group">
          <label for="password">Senha:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div class="form-group">
          <label for="password">Confirme sua senha:</label>
          <input type="password" id="password" v-model="passwordConf" required>
        </div>
        <button type="submit">SignUp</button>
      </form>
    </div>

</template>

<script>

export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      name: '',
      password: '',
      passwordConf: ''
    };
  },
  methods: {
    sign_up() {
      console.log('Email:', this.email);
      console.log('Name:', this.name);
      console.log('Password:', this.password);
      console.log('PasswordConf:', this.passwordConf);

      if (this.password !== this.passwordConf) {
        alert('As senhas não conferem');
      }
    }
  }
};
</script>

<style lang="css" scoped src="@/assets/styles/form.css"></style>
