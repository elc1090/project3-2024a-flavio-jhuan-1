<!-- Header.vue -->
<template>
  <header class="text-white">
    <div class="container d-flex justify-content-between align-items-center py-3">
      <div>
        <a href="/">
          <img :src="logo" alt="Logo" class="img-fluid" style="height: 80px;">
        </a>
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
              <a class="nav-link text-white" href="/search">Quero Doar</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/requirement">Preciso de Ajuda</a>
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
import logo from '@/assets/logo.svg'

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
}

a{
  color: white;
  font-size: 1.2rem;
  margin-left: 20px;
}
</style>
