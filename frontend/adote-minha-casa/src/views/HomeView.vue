<template>
  <div>
    <Header />

    <!-- Seções -->
    <section class="py-5" id="section1">
      <div class="container text-center">
        <h2 class="mb-4">Adote Minha Casa</h2>
        <p style="font-size:25px">Unindo pessoas que precisam de ajuda com pessoas dispostas a ajudar.</p>
        <div class="d-flex justify-content-evenly">
          <div class="card">
            <p>Juntas, ONGs colaboram para transformar vidas e lares.</p>
          </div>
          <div class="card">
            <p>Doar utensílios domésticos e eletrônicos é uma forma de fazer a diferença.</p>
          </div>
          <div class="card">
            <p>Cada contribuição em dinheiro nos aproxima da reforma que sonhamos.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="text-center d-flex flex-column align-items-center">
        <h2 class="mb-4">Comece a doar</h2>
        <Carousel :slides="carouselSlides"/>
        <router-link to="/search" class="btn basicbutton" 
          style="margin-top: 10px;">Ver mais</router-link>
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

.card{
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 30%;
  font-size: 20px;
}
</style>