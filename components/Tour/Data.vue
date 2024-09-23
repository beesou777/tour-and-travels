<template>
  <div class="py-10 gap-4 px-[10px]">
    <ui-card-data :data="tourData" @hover="handleHover" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useTourStore } from '../../store/toueStore';
import { Tour } from '../../types'; // Adjust this import according to your types

const tourStore = useTourStore();
const selectedTour = ref<Tour | null>(null);



const tourData = computed(() => {
  return tourStore.tourDestination;
});

onMounted(async () => {
  await tourStore.getTours();
  if (tourData.value) {
    selectedTour.value = tourData.value[0]
  }
});

const handleHover = (tour: Tour) => {
  selectedTour.value = tour;
};

useHead({
  title: 'Tours and Tour',
});
</script>
