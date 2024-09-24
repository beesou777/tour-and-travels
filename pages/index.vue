<template>
  <div>
    <home-homepage />
    <!-- <home-hero-section /> -->
    <home-destination :render-data="renderData"/>
    <home-activities />
    <home-ready-adventure />
    <!-- <home-feature-tour :render-data="renderData" /> -->
    <!-- <home-around-the-world /> -->
  </div>
</template>

<script setup lang="ts">

import { useTourStore } from "../store/toueStore";

const tourStore = useTourStore();

onMounted(async () => {
  await tourStore.getTours();
});

const renderData = computed(() => {
  return tourStore.tourDestination
});
useHead({
  title: "Nepal Travel & Tour | best travel agency in Nepal",
})
</script>
