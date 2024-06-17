<template>
  <div class="container mt-4">
    <form @submit.prevent="applyFilters">
      <div class="row">
        <div class="col-md-4">
          <div class="form-group">
            <label for="city">Cidade</label>
            <input type="text" id="city" class="form-control" v-model="filters.city" placeholder="Digite a cidade">
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="state">Estado</label>
            <input type="text" id="state" class="form-control" v-model="filters.state" placeholder="Digite o estado">
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12 text-right">
          <button type="submit" class="btn basicbutton">Aplicar Filtros</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchFilters',
  data() {
    return {
      filters: {
        city: '',
        state: '',
        value: ''
      }
    };
  },
  methods: {
    applyFilters() {
      this.$emit('apply-filters', this.filters);
    }
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}
</style>