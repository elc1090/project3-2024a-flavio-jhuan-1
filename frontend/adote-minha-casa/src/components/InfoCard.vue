<template>
  <div class="info-card">
    <img :src="imageSrc" alt="Imagem Indisponível" class="info-card-image">
    <div class="info-card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <p><strong>Proprietário:</strong> {{ ownerName }}</p>
      <p><strong>Total Doado:</strong> {{ totalDonations }} R$</p>
      <button class="btn btn-primary" @click="handleButtonClick">Ajudar</button>
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

<style scoped>
.info-card {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  max-width: 400px;
  margin-bottom: 20px;
}

.info-card:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

.info-card-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.info-card-content {
  padding: 20px;
}

.info-card-content h3 {
  margin-bottom: 10px;
}

.info-card-content p {
  margin-bottom: 8px;
}

.info-card-content button {
  margin-top: 10px;
  background-color: var(--deep-blue);
  border: none;
}
</style>
