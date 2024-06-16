<!-- Header.vue -->
<template>
  <header class="text-white">
    <div class="container d-flex justify-content-between align-items-center py-3">
      <div>
        <a href="/" class="d-flex flex-column align-items-center" style="text-decoration: none;">
          <img :src="logo" alt="Logo" class="img-fluid mb-3" style="max-width:80px; max-height: 80px;">
          <p >Adote Minha Casa</p>
        </a>
      </div>
      <nav class="navbar navbar-expand navbar-light wrap">
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
import logo from '@/assets/lar.png'

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
