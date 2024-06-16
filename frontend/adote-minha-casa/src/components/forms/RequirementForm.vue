<template>

    <div class="login-container">
      <h1>Iniciar Pedido de Ajuda</h1>
      <form @submit.prevent="submit">
        <div class="form-group">
          <label for="address">Endereço:</label>
          <input type="email" id="address" v-model="address" required>
        </div>
        <div class="form-group">
          <label for="value">Estimativa para reparação:</label>
          <input type="text" id="value" v-model="value" required>
        </div>
        <div class="form-group">
          <label for="description">Breve descrição:</label>
          <input type="text" id="description" v-model="description" required>
        </div>
        <div class="form-group">
          <label for="text">Descrição detalhada:</label>
          <input type="text" id="text" v-model="text" required>
        </div>
        <div class="form-group">
          <label for="pix">Chave Pix:</label>
          <input type="text" id="pix" v-model="pix" required>
        </div>
        <div class="form-group">
          <label for="phoneNumber">Whatzapp:</label>
          <input type="tel" id="phoneNumber" v-model="phoneNumber" required>
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
      address: '',
      value: '',
      description: '',
      text: '',
      pix: '',
      phoneNumber: ''
    };
  },
  methods: {
    submit() {
      console.log('Endereço:', this.address);
      console.log('Estimativa:', this.value);
      console.log('Descrição:', this.description);
      console.log('Descrição detalhada:', this.text);
      console.log('Chave Pix:', this.pix);
      console.log('Whatzapp:', this.phoneNumber);
    }
  }
};
</script>

<style lang="css" scoped src="@/assets/styles/form.css"></style>
