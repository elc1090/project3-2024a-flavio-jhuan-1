<template>

    <div class="login-container">
      <h1>Inicial Pedido de Ajuda</h1>
      <form @submit.prevent="submit">
        <div class="form-group">
          <label for="password">Endereço:</label>
          <input type="email" id="email" v-model="address" required>
        </div>
        <div class="form-group">
          <label for="password">Estimativa para reparação:</label>
          <input type="text" id="password" v-model="value" required>
        </div>
        <div class="form-group">
          <label for="password">Breve descrição:</label>
          <input type="password" id="password" v-model="description" required>
        </div>
        <div class="form-group">
          <label for="password">Descrição detalhada:</label>
          <input type="password" id="password" v-model="text" required>
        </div>
        <div class="form-group">
          <label for="password">Chave Pix:</label>
          <input type="password" id="password" v-model="text" required>
        </div>
        <button type="submit">Abrir Requerimento</button>
      </form>
    </div>
</template>

<script>

export default {
  name: 'RequirementForm',
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
