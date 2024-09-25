<template>
  <div>
    <home-homepage />
    <home-destination :data="renderData" />
    <home-activities />
    <home-tour-packages />
    <home-ready-adventure />
    <home-about-us />
  </div>
</template>

<script setup lang="ts">
import { useTourStore } from "../store/toueStore";

const tourStore = useTourStore();

await tourStore.fetchTours();

const renderData = computed(() => {
  return tourStore.tourDestination;
});
useHead({
  title: "Nepal Travel & Tour | best travel agency in Nepal",
});
</script>
