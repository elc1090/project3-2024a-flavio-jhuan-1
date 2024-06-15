<template>
  <div>
    <Header />

    <!-- Seções -->
    <section class="py-5">
      <div class="container text-center">
        <h2 class="mb-4">Adote Minha Casa</h2>
        <img :src="cerca" alt="Imagem chocante" class="img-fluid">
      </div>
    </section>


    <section class="py-5">
      <div class="container text-center">
        <h2 class="mb-4">Começe a doar</h2>
        <p>Casas para doar aqui</p>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import cerca from '@/assets/cerca.jpg'

export default {
  name: 'HomePage',
  components: {
    Header,
    Footer
  },
  data() {
    return cerca;
  }

}
</script>
<<<<<<< HEAD

=======

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

>>>>>>> flavionofront
<style scoped>
header {
  margin-bottom: 20px;
}

section {
  padding: 60px 0;
}

footer {
  margin-top: 20px;
}
</style>