<template>
  <!-- <div class="info-card">
    <img :src="imageSrc" alt="Imagem Indisponível" class="info-card-image">
    <div class="info-card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <p><strong>Proprietário:</strong> {{ ownerName }}</p>
      <p><strong>Total Doado:</strong> {{ totalDonations }} R$</p>
      <button class="btn btn-primary" @click="handleButtonClick">Ajudar</button>
    </div>
  </div> -->
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" :src="imageSrc" alt="Card image">
  <div class="card-body">
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">{{ description }}</p>
    <p><strong>Proprietário:</strong> {{ ownerName }}</p>
    <p><strong>Total Doado:</strong> {{ totalDonations }} R$</p>
    <a href="#" class="btn basicbutton">Ajudar</a>
  </div>
</div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    id : {
      type: String,
      required: true
    } ,
    imageSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    ownerName: {
      type: String,
      required: true
    },
    totalDonations: {
      type: String,
      required: true
    }
  },
  methods: {
    handleButtonClick() {
      // Lógica para o clique do botão
      alert('Botão clicado!' + this.id);
    }
  },
  data() {
    return {
      id: ''
    };
  }
};
</script>
