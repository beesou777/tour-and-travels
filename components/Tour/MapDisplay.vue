<template>
  <div class="h-full p-2 rounded-md">
    <l-map
      :zoom="zoom"
      :center="center"
      style="height: 90vh; width: 100%; border-radius: 12px"
    >
      <l-tile-layer :url="url" />
      <l-marker :lat-lng="center" :icon="defaultIcon">
        <l-icon :icon-size="[21, 21]" class="markers">{{ props.selectedTour?.price }}</l-icon>
      </l-marker>
      <l-marker
        v-if="selectedTour"
        :lat-lng="[selectedTour.lat, selectedTour.lng]"
        :icon="imageIcon"
      />
    </l-map>
  </div>
</template>

<script setup lang="ts">
import "leaflet/dist/leaflet.css";

const props = defineProps<{
  selectedTour: {
    lat: number;
    lng: number;
    img: string;
    title: string;
    price: number; // Ensure price is included
  } | null;
}>();

const zoom = ref(13);
const center = ref([47.41322, -1.219482]);
const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

// Define defaultIcon
const defaultIcon = computed(() =>
  L.icon({
    iconUrl: "path/to/default-icon.png", // Ensure this path is correct
    iconSize: [32, 32],
  })
);

// Define imageIcon as divIcon
const imageIcon = computed(() =>
  L.divIcon({
    className: "custom-icon",
    html: `
    <div class="bg-white rounded-md p-3 w-full min-w-[200px] relative -translate-y-[200px] -translate-x-[60px] before:content-[''] before:absolute before:h-[10px] before:w-[20px] before:bg-white before:[clip-path:polygon(45%_100%,_0_0,_100%_0)] before:bottom-[-10px] before:left-[50%] before:translate-x-[-50%] [box-shadow:8px_1px_10px_0px_rgba(0,_0,_0,_0.08)]">
      <span class="flex justify-center items-center w-8 h-8 absolute top-[-10px] right-[-10px] h3 bg-gray-200 rounded-full cursor-pointer">
        x
      </span>
      <nuxt-img src="${props.selectedTour?.img}" style="width: 100%; height: 100px;"/>
      <p class="font-bold py-2">${props.selectedTour?.title}</p>
      <p class="body-bold text-primary">$${props.selectedTour?.price}</p>
    </div>
  `,
  })
);



// Watch selectedTour prop to update the map center
watch(
  () => props.selectedTour,
  (newTour) => {
    if (newTour) {
      center.value = [newTour.lat, newTour.lng];
    }
  }
);
</script>

<style scoped>
.custom-icon img {
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}
</style>
