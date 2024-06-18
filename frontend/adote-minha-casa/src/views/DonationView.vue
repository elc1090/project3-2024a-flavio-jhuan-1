<template>
    <div>
      <Header />
      <div class="content">
        <section class="section">
          <h2>{{ title }}</h2>
        </section>
        
        <section class="section">
          <h3>Descrição</h3>
          <p>{{ description }}</p>
        </section>
        
        <section class="section">
          <h3>Contato</h3>
          <p>Pix: {{ pix }}</p>
          <p>Telefone: {{ phoneNumber }}</p>
        </section>
        
        <section class="section">
          <h3>Endereço</h3>
          <p>{{ address }}</p>
          <p>Bairro: {{ bairro }}</p>
          <p>Cidade: {{ city }}</p>
          <p>Estado: {{ state }}</p>
          <p>CEP: {{ cep }}</p>
        </section>
        
        <section class="section">
          <h3>Valor</h3>
          <p>{{ value }}</p>
        </section>
      </div>
      <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'DonationView',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      title: '',
      description: '',
      pix: '',
      address: '',
      city: '',
      state: '',
      value: '',
      bairro: '',
      cep: '',
      phoneNumber: ''
    };
  },
  async beforeMount() {
    try {
      const { data } = await api.get(`/houses/${this.$route.params.id}`);
        this.title = data.title;
        this.description = data.description;
        this.pix = data.pixkey;
        this.address = data.address;
        this.city = data.city;
        this.state = data.state;
        this.value = data.value;
        this.bairro = data.bairro;
        this.cep = data.cep;
        this.phoneNumber = data.number;
    } catch (error) {
      console.error("Erro ao obter dados das casas", error);
    }
  }
}
</script>