<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo.svg" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
        Minha Marca
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sobre</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Serviços</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    selectRole(role) {
      // Aqui você pode adicionar a lógica para redirecionar o usuário para a página correta com base na escolha do papel (doador ou recebedor)
      if (role === 'doador') {
        // Redirecionar para a página do doador
      } else if (role === 'recebedor') {
        // Redirecionar para a página do recebedor
      }
    }
  }
}
</script>
<style>
.backgr {
  border-radius: 10px;
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.1);
}

.nav-item:hover {
  background-color: rgba(211, 211, 211, 0.5);
  transition: 0.5s;
  border-radius: 10px;
}
</style>
<style scoped>
.img {
  height: 70px;
}

.navbar {
  width: 100%;
  height: 90px;
}

.stars {
  color: #fd7e14
}

.stars:hover {
  transition: 0.5s ease;
  color: #FF4200
}

.icons:hover {
  animation: scala 1s;
}

@keyframes scala {
  0% {
    transform: scale(1.0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1.0);
  }
}
</style>
