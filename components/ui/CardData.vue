<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
    <div
      class="relative group cursor-pointer overflow-hidden shadow-[0px_4px_17px_0px_rgba(0,_0,_0,_0.06)] rounded-lg"
      v-for="(item, index) in data"
      :key="index"
    >
      <NuxtLink :to="'/tour/' + item.slug" class="overflow-hidden">
        <nuxt-img
          quality="80"
          :src="getImage('destination/pokhara2')"
          alt="Tourist destination in Nepal"
          class="group-hover:scale-110 aspect-[350/250] min-h-[300px] w-full h-auto object-cover transform transition-transform duration-500"
          loading="lazy"
        />
      </NuxtLink>
      <p
        class="absolute right-4 top-4 z-10 bg-accent py-[4px] px-4 rounded-md font-bold text-gray-900"
      >
        {{ item.tour_duration }} days / {{ item.tour_duration - 1 }} nights
      </p>

      <div
        class="relative mt-[-49px] w-full%] bg-white rounded-[6px] py-[10px]"
      >
        <h3
          class="relative !text-[.9rem] body-bold top-[-10px] text-white bg-primary text-left font-semibold uppercase p-[7px_15px] [border-top-left-radius:6px] [border-top-right-radius:6px]"
        >
          <NuxtLink
            :to="'/tour/' + item.slug"
            :aria-label="item.destinations_covered"
            >{{ item.destinations_covered.split(",").join(" , ") }}</NuxtLink
          >
        </h3>
        <div class="flex justify-between items-center p-[3px_9px_5px]">
          <h3 class="h5">{{ item.tour_title }}</h3>
          <NuxtLink
            :aria-label="item.slug"
            :to="'/tour/' + item.slug"
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
</template>

<script setup lang="ts">
const { getImage } = useNuxtImage();

const data = inject("data") as any;

const emit = defineEmits<{
  (event: "hover", tour: any): void;
}>();
</script>

