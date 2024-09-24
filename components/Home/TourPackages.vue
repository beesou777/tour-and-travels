<template>
  <div class="pt-10 pb-5 max-w-[1445px] mx-auto">
    <div class="text-center py-4">
        <p class="text-primary body-bold">Popular Tour Packages</p>
        <h2 class="h1 mx-auto">Our Popular Tour Packages</h2>
    </div>
    <div class="flex gap-[10px] flex-nowrap">
      <div
        class="duration-500 h-[500px] flex flex-1 w-auto rounded-[12px] overflow-hidden relative"
        v-for="(item, index) in destination"
        :key="index"
        @mouseenter="active = index"
        :class="{ 'flex-grow-[2.1]': index === active }"
      >
        <nuxt-img
          class="w-full h-full object-cover"
          :src="item.image"
          alt="destination image"
        />
        <div
          class="absolute bottom-[10px] left-[10px] flex justify-between items-center w-full px-2"
        >
          <span class="bg-white px-4 py-2 rounded-md">{{ item.tags }}</span>
        </div>
        <NuxtLink
          v-if="active === index"
          to="/tour/kathmandu-hiking-tour"
          class="absolute bottom-[10px] right-[10px] text-white hover:underline h-[42px] w-[42px] bg-primary grid place-items-center rounded-full duration-500"
          >{{ item.tour_count }}</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { getImage } = useNuxtImage();

const active = ref(0);

interface Destination {
  image: string;
  tour_count: number;
  destination_name: string;
  slug2: string;
  tags: string;
}
const destination: readonly Destination[] = [
  {
    image: getImage("destination/kathmandu"),
    tour_count: 3,
    destination_name: "Kathmandu",
    slug2: "kathmandu-hiking-tour",
    tags: "popular, trending, popular",
  },
  {
    image: getImage("destination/bh"),
    tour_count: 3,
    destination_name: "Biratnagar",
    slug2: "biratnagar-cultural-experience",
    tags: "popular , trending",
  },
  {
    image: getImage("destination/dh3"),
    tour_count: 3,
    destination_name: "Dharan",
    slug2: "dharan-city-exploration",
    tags: "popular , trending",
  },
  {
    image: getImage("destination/pokhara3"),
    tour_count: 3,
    destination_name: "Pokhara",
    slug2: "pokhara-sarangkot-sunrise",
    tags: "popular, trending, popular",
  },
];
</script>
