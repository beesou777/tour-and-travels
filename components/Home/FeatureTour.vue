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

      <ui-card-data :data="renderData" />

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
const {renderData} = defineProps({
  renderData: {
    type: Object
  }
})
</script>

<style scoped lang="scss">
@import "../../assets/scss/_function.scss";

.background_image {
  &::after {
    background-image: setBackground(
      "../../public/img/destination/background.webp"
    );
  }
}
</style>
