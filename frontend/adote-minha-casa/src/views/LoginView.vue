<template>
  <div class="login-container">
    <nav
    class="navbar navbar-main navbar-expand-lg container-fluid px-3 pt-3 pb-3 shadow-none border-radius-xl"
    id="navbarBlur"
    data-scroll="true"
  >
    <div class="px-4 py-1 pt-3 pb-4 backgr container bg-white">
      <!--Imagem do cliente-->
      <nav aria-label="breadcrumb">
      </nav>
      <!--Trecho copiado de PageLaoyout/Navbar.vue-->
      <button
        @click="changeShowNav"
        class="shadow-none navbar-toggler ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="mt-2 navbar-toggler-icon">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>

      <div class="collapse navbar-collapse" id="navigation" :class="{ 'd-block': display}">
        <ul class="navbar-nav ms-auto text-left">
          <br />
          <li class="nav-item">
            <router-link class="nav-link me-2 fs-4" to="/">
              <i class="ni ni-tv-2 me-1 fw-bold"></i>
              Início
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-2 fs-4" to="/login">
              <i class="fas fa-sign-in-alt me-1"></i>
              Entrar
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Aqui você pode adicionar a lógica de autenticação
      // Por exemplo, fazer uma requisição HTTP para verificar as credenciais
      console.log('Email:', this.email);
      console.log('Password:', this.password);
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>