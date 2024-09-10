<template>
  <div class="grid grid-cols-2 py-10 gap-4 px-[10px]">
    <ui-card-data :data="tourData" @hover="handleHover" :grid="2" />
    <tour-map-display :selected-tour="selectedTour"  />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useTourStore } from '../../store/toueStore';


const tourStore = useTourStore();
const selectedTour = ref(null);

onMounted(async () => {
  await tourStore.getTours();
});

const tourData = computed(() => {
  return tourStore.tourDestination.slice(0, 4);
});

const handleHover = (tour) => {
  selectedTour.value = tour;
};

useHead({
  title: 'Tours and Tour',
});
</script>
