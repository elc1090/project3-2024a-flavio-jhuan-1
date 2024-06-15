<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <RouterView />
</template>

<style>
:root{
  --deep-blue: #273043;
  --white-background: #EFEFEF;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: var(--white-background);
}
</style>