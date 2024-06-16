<template>
  <div>
    <Header />

    <!-- Seções -->
    <section class="py-5" id="section1">
      <div class="container text-center">
        <h2 class="mb-4">Adote Minha Casa</h2>
        <p style="font-size:20px">Unindo pessoas que precisam de ajuda com pessoas dispostas a ajudar.</p>
        <p style="font-size:20px">Unindo pessoas que precisam de ajuda com pessoas dispostas a ajudar.</p>
        <p style="font-size:20px">Unindo pessoas que precisam de ajuda com pessoas dispostas a ajudar.</p>
        <p style="font-size:20px">Unindo pessoas que precisam de ajuda com pessoas dispostas a ajudar.</p>
        <p style="font-size:20px">Unindo pessoas que precisam de ajuda com pessoas dispostas a ajudar.</p>
        <p style="font-size:20px">Unindo pessoas que precisam de ajuda com pessoas dispostas a ajudar.</p>
        <p style="font-size:20px">Unindo pessoas que precisam de ajuda com pessoas dispostas a ajudar.</p>
        <p style="font-size:20px">Unindo pessoas que precisam de ajuda com pessoas dispostas a ajudar.</p>

      </div>
    </section>

    <section class="py-5">
      <div class="text-center d-flex flex-column align-items-center">
        <h2 class="mb-4">Comece a doar</h2>
        <Carousel :slides="carouselSlides"/>
        <a href="/search" class="btn basicbutton" 
          style="margin-top: 10px;">Ver mais</a>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import InfoCard from '@/components/InfoCard.vue';
import Carousel from '@/components/Carousel.vue';

export default {
  name: 'HomePage',
  components: {
    Header,
    Footer,
    InfoCard,
    Carousel
  },

  data() {
    return {
      carouselSlides: [ 
        {
          component: InfoCard,
          props: {
            id: "2",
            imageSrc: "https://www.petz.com.br/blog/wp-content/uploads/2021/04/raca-de-cachorro-docil-2.jpg",
            title: "Título",
            description: "Minha casa caiu",
            ownerName: "Marsio",
            totalDonations: "987651"
          }
        },
        {
          component: InfoCard,
          props: {
            id: "3",
            imageSrc: "https://www.petz.com.br/blog/wp-content/uploads/2021/04/raca-de-cachorro-docil-2.jpg",
            title: "Título",
            description: "Minha casa subiu",
            ownerName: "Marsio",
            totalDonations: "987651"
          }
        },
        {
          component: InfoCard,
          props: {
            id: "4",
            imageSrc: "https://www.petz.com.br/blog/wp-content/uploads/2021/04/raca-de-cachorro-docil-2.jpg",
            title: "Título",
            description: "Minha casa morreu",
            ownerName: "Marsio",
            totalDonations: "987651"
          }
        },
        {
          component: InfoCard,
          props: {
            id: "4",
            imageSrc: "https://www.petz.com.br/blog/wp-content/uploads/2021/04/raca-de-cachorro-docil-2.jpg",
            title: "Título",
            description: "Minha casa fugiu",
            ownerName: "Marsio",
            totalDonations: "987651"
          }
        },
        {
          component: InfoCard,
          props: {
            id: "4",
            imageSrc: "https://www.petz.com.br/blog/wp-content/uploads/2021/04/raca-de-cachorro-docil-2.jpg",
            title: "Título",
            description: "Minha casa AA folou",
            ownerName: "Marsio",
            totalDonations: "987651"
          }
        }
      ]
    }
  }
}
</script>

<style lang="css" src="@/assets/styles/basicbutton.css"></style>


<style scoped>

#section1{
  background-image: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4) ),
                    url('@/assets/casa.jpg');
  color: white;
  background-size: cover;
}

h2 {
  font-family: 'Courier New', Courier, monospace;
  font-size: 3em;
  text-transform: uppercase;
  margin-top: 20px;
  font-weight: bold;
}
</style>