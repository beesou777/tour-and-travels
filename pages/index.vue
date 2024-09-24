<template>
  <div>
    <home-homepage />
    <home-destination :render-data="renderData"/>
    <!-- <home-hero-section /> -->
    <home-activities />
    <home-tour-packages />
    <home-ready-adventure />
    <home-about-us/>
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
