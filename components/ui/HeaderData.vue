<template>
  <div
    class="[background-image:url(https://wordpress.themeholy.com/tourm/wp-content/uploads/2024/07/breadcumb-bg.jpg)] p-[9.375rem_0] text-white relative bg-[left_top] overflow-hidden text-center"
    v-if="tourData"
  >
    <div class="relative z-[3] max-w-[960px] w-full px-[.75rem] mx-auto">
      <div class="">
        <h1 class="extra-h1">{{ tourData.tour_title }}</h1>
        <ul class="flex justify-center gap-4 py-5">
          <li>
            <NuxtLink to="/" title="Home"
              >Home</NuxtLink
            >
          </li>
          <li class="item-cat item-custom-post-type-trip">
            <NuxtLink
              class="bread-cat bread-custom-post-type-trip"
              to="/tour"
              title="Trips"
              >Trips</NuxtLink
            >
          </li>
          <li class="active bread-534" title="Langtang Valley Trekking">
            {{ tourData.tour_title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  tourData: {
    type: Object,
    default: () => {},
  },
});

const { tourData } = toRefs(props);
</script>
<style scoped lang="scss">
li:not(:last-child) {
  position: relative;
  &::after {
    content: "";
    background-image: url("/public/icons/bread-crum-arrow.svg");
    background-size: 100% 100%;
    top: 3px;
    width: 18px;
    height: 16px;
    display: inline-flex;
    position: relative;
    margin-left: 6px;
    font-weight: 700;
    font-size: 18px;
    color: inherit;
  }
}
</style>