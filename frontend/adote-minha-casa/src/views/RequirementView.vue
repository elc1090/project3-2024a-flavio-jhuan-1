<template>
  <Header />
  <main class="d-flex justify-content-evenly flex-wrap">
    <RequirementForm />
    <img style="max-width:30%" src="@/assets/logo.svg" alt="exemplo" class="w-50" />
  </main>

  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import RequirementForm from '@/components/forms/RequirementForm.vue'

export default {
  name: 'Login',
  components: {
    Header,
    Footer,
    RequirementForm
  }
};
</script>