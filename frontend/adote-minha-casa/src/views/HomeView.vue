<template>
  <div>
    <Header />

    <!-- Seções -->
    <section class="py-5">
      <div class="container text-center">
        <h2 class="mb-4">Adote Minha Casa</h2>
        imagem chocante <br>
        motivação <br>
        que tristeza <br>
      </div>
    </section>


    <section class="py-5">
      <div class="container text-center">
        <h2 class="mb-4">Começe a doar</h2>
        <p>Casas para doar aqui</p>
        carrossel, talvez?
        link levando para página com todas as casas
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomePage',
  components: {
    Header,
    Footer
  },

  data() {
    return {
      
    }
  }
}
</script>

<style scoped>

</style>