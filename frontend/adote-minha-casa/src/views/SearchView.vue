<template>
  <div>
    <Header />

    <!-- Navbar de filtro de pesquisa -->
    <SearchFilters />

    <!-- Conteúdo -->
    <Album :items=carouselSlides />


    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import InfoCard from '@/components/InfoCard.vue';
import Album from '@/components/Album.vue';
import SearchFilters from '@/components/SearchFilters.vue';

export default {
  name: 'SearchPage',
  components: {
    Header,
    Footer,
    InfoCard,
    Album,
    SearchFilters
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
        },
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

<style scoped>
section{
}

#section1{
  background-image: url('../assets/cerca.jpg');
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