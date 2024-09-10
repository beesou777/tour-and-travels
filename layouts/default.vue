<template>
  <div>
    <navbar />
    <div class="">
      <slot></slot>
    </div>
    <scroll-top />
    <Footer />
  </div>
</template>
 <script setup lang="ts">
 import Footer from "../components/Footer.vue";
</script>