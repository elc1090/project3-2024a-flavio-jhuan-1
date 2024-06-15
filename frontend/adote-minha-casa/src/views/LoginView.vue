<template>
  <Header />
  <main class="d-flex justify-content-evenly flex-wrap">
    <LoginForm />
    <SingUpForm />


  </main>

  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import LoginForm from '@/components/LoginForm.vue'
import SingUpForm from '@/components/SignUpForm.vue'

export default {
  name: 'Login',
  components: {
    Header,
    Footer,
    LoginForm,
    SingUpForm
  }
};
</script>
