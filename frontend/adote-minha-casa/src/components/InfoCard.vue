<template>
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" :src="imageSrc" alt="Card image">
  <div class="card-body">
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">{{ description }}</p>
    <p><strong>Proprietário:</strong> {{ ownerName }}</p>
    <p><strong>Chave pix:</strong> {{ pixkey }}</p>
    <button to="#" class="btn basicbutton" @click="handleButtonClick">Ajudar</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    id: {
      type: String,
      required: true
    },
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
    pixkey: {
      type: String,
      required: true
    }
  },
  methods: {
    handleButtonClick() {
      // Lógica para o clique do botão
      console.log('Botão clicado!', this.id);
      alert('Botão clicado!' + this.id);
    }
  },

};
</script>
