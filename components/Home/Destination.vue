<template>
  <div class="max-w-[1450px] mx-auto px-[10px] md:py-10 py-6">
    <p class="h5 text-center text-primary">Explore Nepal's Wonders</p>
    <h2 class="extra-h1 leading-[1.1] mx-auto py-6 max-w-[720px] text-center">
      Check Out Nepal's Top
      <span class="font_family text-muted">Tourist</span> Destinations
    </h2>
      <ui-card-data :data="data" />
  </div>
</template>

<script setup lang="ts">
const { getImage } = useNuxtImage();

interface Destination {
  image: string;
  tour_count: number;
  destination_name: string;
  slug2: string;
}

const destination: readonly Destination[] = [
  {
    image: getImage("destination/kathmandu"),
    tour_count: 3,
    destination_name: "Kathmandu",
    slug2: "kathmandu-hiking-tour",
  },
  {
    image: getImage("destination/bh"),
    tour_count: 3,
    destination_name: "Biratnagar",
    slug2: "biratnagar-cultural-experience",
  },
  {
    image: getImage("destination/dh3"),
    tour_count: 3,
    destination_name: "Dharan",
    slug2: "dharan-city-exploration",
  },
  {
    image: getImage("destination/pokhara3"),
    tour_count: 3,
    destination_name: "Pokhara",
    slug2: "pokhara-sarangkot-sunrise",
  },
  {
    image: getImage("destination/lumbini"),
    tour_count: 3,
    destination_name: "Lumbini",
    slug2: "lumbini-buddha-birthplace-tour",
  },
  {
    image: getImage("destination/kathmandu"),
    tour_count: 3,
    destination_name: "Lumbini",
    slug2: "lumbini-peace-stupa-tour",
  },
];

const data = inject("data");
</script>
