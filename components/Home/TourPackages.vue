<template>
  <div class="pt-10 pb-5 max-w-[1445px] mx-auto">
    <div class="text-center py-4">
        <p class="text-primary body-bold">Popular Tour Packages</p>
        <h2 class="h1 mx-auto">Our Popular Tour Packages</h2>
    </div>
    <div class="flex gap-[10px] md:flex-nowrap flex-wrap px-[10px]">
      <div
        class="duration-500 h-[350px] md:h-[500px] flex flex-[0_0_100%] md:flex-1 w-auto rounded-[12px] overflow-hidden relative"
        v-for="(item, index) in destination"
        :key="index"
        @mouseenter="active = index"
        :class="{ 'md:flex-grow-[2.1]': index === active }"
      >
        <nuxt-img
        quality="80"
          class="w-full h-full object-cover"
          :src="item.image"
          alt="destination image"
          loading="lazy"
        />
        <div
          class="absolute bottom-[10px] left-[10px] flex justify-between items-center w-full px-2"
        >
          <span class="bg-white px-4 py-1 rounded-md line-clamp-1">{{ item.tags }}</span>
        </div>
        <NuxtLink
          v-if="active === index"
          :to="'/tour/' + item.slug"
          class="absolute bottom-[10px] right-[10px] text-white hover:underline h-[42px] w-[42px] bg-primary grid place-items-center rounded-full duration-500 hover:bg-secondary"
          >
           <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              class="rotate-[-45deg]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_403_3715)">
                <path
                  d="M23.124 9.87897L18.538 5.29297L17.124 6.70697L21.386 10.97L0 11V13L21.446 12.97L17.123 17.293L18.537 18.707L23.124 14.121C23.6847 13.5575 23.9995 12.7949 23.9995 12C23.9995 11.205 23.6847 10.4425 23.124 9.87897Z"
                  fill="#fff"
                />
              </g>
            </svg>
          </NuxtLink
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
  slug: string;
  tags: string;
}
const destination: readonly Destination[] = [
  {
    image: getImage("destination/kathmandu"),
    tour_count: 8,
    destination_name: "Nepal’s Grand Tour Package",
    slug: "nepal-grand-tour-package",
    tags: "Kathmandu,Pokhara,Chitwan,Nagarkot",
  },
  {
    image: getImage("destination/bh"),
    tour_count: 7,
    destination_name: "Wildlife & Wonders Tour Package",
    slug: "wildlife-wonders-tour-package",
    tags: "Kathmandu,Pokhara,Chitwan",
  },
  {
    image: getImage("destination/dh3"),
    tour_count: 3,
    destination_name: "Mystical Nepal Tour",
    slug: "mystical-nepal-tour",
    tags: "Kathmandu,Pokhara,Jomsom",
  },
  {
    image: getImage("destination/pokhara3"),
    tour_count: 3,
    destination_name: "Himalayan Wonder Tour Package",
    slug: "himalayan-wonder-tour-package",
    tags: "Gorakpur,Lumbini,Pokhara,Kathmandu & Gorakhpur",
  },
];
</script>
