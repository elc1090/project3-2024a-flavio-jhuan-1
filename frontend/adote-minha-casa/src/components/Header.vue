<!-- Header.vue -->
<template>
  <header class="text-white">
    <div class="container d-flex justify-content-between align-items-center py-3">
      <div>
        <img :src="logo" alt="Logo" class="img-fluid" style="max-height: 100px;">
      </div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link text-white" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/about">Sobre</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Quero Doar</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Preciso de Ajuda</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/login">Crie uma Conta</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import logo from '@/assets/white.jpg'

export default {
  name: 'Header',
  data() {
    return {
      logo
    };
  }
}
</script>

<style scoped>
header {
  background-color: var(--deep-blue);
  margin-bottom: 20px;
}
</style>
