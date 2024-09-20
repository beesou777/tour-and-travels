<template>
  <div
    class="px-[10px] background_image relative bg-[#F3F8F6] z-[1] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[1] after:opacity-[30%]"
  >
    <div
      class="bg-cover bg-center bg-norepeat min-h-[100vh] py-10 max-w-[1445px] mx-auto px-[10px] relative z-[10]"
    >
      <!-- H1 for SEO -->
      <h1 class="h1 mx-auto py-2 max-w-[820px] text-center text-pretty">
        Amazing Featured Tour Packages in Nepal
        <span class="font_family text-muted">Explore the Nepal with Us</span>
      </h1>

      <div class="flex gap-3 justify-center py-4 md:py-2 overflow-visible">
        <div class="flex gap-3 justify-center py-4 md:py-2 overflow-visible">
          <button
            @click="activeButton = item.name"
            :class="
              activeButton == item.name
                ? 'bg-primary text-white before:content-[\'\'] before:absolute before:h-[10px] before:w-[20px] before:bg-primary before:[clip-path:polygon(45%_100%,_0_0,_100%_0)] before:bottom-[-10px] before:left-[50%] before:translate-x-[-50%]'
                : 'bg-white'
            "
            class="text-gray-950 px-5 py-3 [box-shadow:8px_1px_10px_0px_rgba(0,_0,_0,_0.08)] hover:bg-primary hover:text-white hover:duration-300 duration-300 rounded font-bold relative overflow-visible"
            v-for="(item, index) in buttonData"
            :key="index"
          >
            <span>{{ item.name }}</span>
          </button>
        </div>
      </div>

      <!-- Card Data Component (Shows Tours) -->
      <ui-card-data :data="renderData" />

      <!-- CTA Button with Optimized Link Text for SEO -->
      <div class="text-center py-2">
        <NuxtLink to="/tour" class="px-4 py-3 bg-primary text-white rounded hover:bg-green-700 duration-000">
          View All Nepal Tour Packages
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTourStore } from "../../store/toueStore";

const tourStore = useTourStore();

// Active filter button
const activeButton = ref<string>("All");

const buttonData = [
  { name: "All" },
  { name: "Kathmandu" },
  { name: "Pokhara" },
  { name: "Lumbini" },
  { name: "Dharan" },
  { name: "Biratnagar" }
];

// Fetching data on mounted
onMounted(async () => {
  await tourStore.getTours();
});

// Computed data based on active button
const renderData = computed(() => {
  if (activeButton.value === "All") {
    return tourStore.tourDestination.slice(0, 8);
  } else {
    return tourStore.tourDestination.filter((item:any) => item.slug === activeButton.value);
  }
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/_function.scss";

// Background image styling
.background_image {
  &::after {
    background-image: setBackground("../../assets/img/destination/background.webp");
  }
}

// Custom font family
.font_family {
  font-family: fontFamily(cursive);
}
</style>
