<template>
  <div
    class="px-[10px] background_image relative bg-[#F3F8F6] z-[1] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[1] after:opacity-[30%]"
  >
    <div
      class="bg-cover bg-center bg-norepeat min-h-[100vh] py-10 max-w-[1445px] mx-auto px-[10px] relative z-[10]"
    >
      <h1 class="h1 mx-auto py-2 max-w-[820px] text-center text-pretty">
        Amazing Featured Tour Packages in Nepal
        <span class="font_family text-muted">Explore the Nepal with Us</span>
      </h1>

      <!-- Card Data Component (Shows Tours) -->
      <ui-card-data :data="renderData" />

      <!-- CTA Button with Optimized Link Text for SEO -->
      <div class="text-center py-2">
        <NuxtLink
          to="/tour"
          class="px-4 py-3 bg-primary text-white rounded hover:bg-green-700 duration-000"
        >
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

// Fetching data on mounted
onMounted(async () => {
  await tourStore.getTours();
});

// Computed data based on active button
const renderData = computed(() => {
  return tourStore.tourDestination
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/_function.scss";

// Background image styling
.background_image {
  &::after {
    background-image: setBackground(
      "../../public/img/destination/background.webp"
    );
  }
}

// Custom font family
.font_family {
  font-family: fontFamily(cursive);
}
</style>
