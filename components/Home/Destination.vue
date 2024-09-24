<template>
  <div class="max-w-[1450px] mx-auto px-[10px] md:py-10 py-6">
    <p class="h5 text-center text-primary">Explore Nepal's Wonders</p>
    <h2 class="extra-h1 leading-[1.1] mx-auto py-6 max-w-[720px] text-center">
      Check Out Nepal's Top
      <span class="font_family text-muted">Tourist</span> Destinations
    </h2>
    <div class="grid md:grid-cols-3 grid-cols-1 gap-8">
      <div
        class="relative group overflow-hidden cursor-pointer flex flex-1 items-center flex-col justify-center"
        v-for="(item, index) in destination"
        :key="index"
      >
        <NuxtLink
          :to="'/tour/' + item.slug2"
          class="group-hover:scale-110 duration-300"
        >
          <nuxt-img
            :src="item.image"
            alt="Tourist destination in Nepal"
            class="aspect-[350/250] w-full h-auto object-cover transform transition-transform duration-500"
            loading="lazy"
          />
        </NuxtLink>
        <p
          class="absolute right-4 top-4 z-10 bg-accent py-[4px] px-4 rounded-md font-bold text-gray-900"
        >
          {{ item.tour_count }} days / {{ item.tour_count - 1 }} nights
        </p>

        <div
          class="relative mt-[-49px] w-[90.5%] bg-white rounded-[6px] p-[10px] shadow-[0px_4px_17px_0px_rgba(0,_0,_0,_0.06)]"
        >
          <h3
            class="relative h5 top-[-10px] text-white left-[-10px] w-[61%] bg-primary text-left font-semibold leading-[28.5px] uppercase p-[7px_15px] [border-top-left-radius:6px] duration-300 ease-in-out after:content-[''] after:absolute after:right-[-25px] after:bottom-0 after:m-[0_auto] after:w-0 after:h-0 after:md:[border-top:_43px_solid_theme('colors.primary')] after:[border-top:_38px_solid_theme('colors.primary')] after:[border-left:_25px_solid_transparent] after:[border-right:_25px_solid_transparent]"
          >
            <NuxtLink
              :to="'/tour/' + item.slug2"
              :aria-label="item.destination_name"
              >{{ item.destination_name }}</NuxtLink
            >
          </h3>
          <div class="flex justify-between items-center p-[3px_9px_5px]">
            <p>View all tours in {{ item.destination_name }}</p>
            <NuxtLink
              :ar-label="item.slug2"
              :to="'/tour/' + item.slug2"
              class="h-[42px] w-[42px] bg-gray-200 rounded-full flex justify-center items-center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_403_3715)">
                  <path
                    d="M23.124 9.87897L18.538 5.29297L17.124 6.70697L21.386 10.97L0 11V13L21.446 12.97L17.123 17.293L18.537 18.707L23.124 14.121C23.6847 13.5575 23.9995 12.7949 23.9995 12C23.9995 11.205 23.6847 10.4425 23.124 9.87897Z"
                    fill="#374957"
                  />
                </g>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
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

const { renderdata } = defineProps({
  renderdata: {
    type: Object,
  },
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/_function.scss";

.font_family {
  font-family: fontFamily(cursive);
}
</style>
