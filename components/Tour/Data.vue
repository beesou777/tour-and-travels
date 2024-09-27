<template>
  <div class="pb-10">
    <div
      class="background-image bg-no-repeat bg-cover bg-center p-[9.375rem_0] text-white relative overflow-hidden text-center"
      v-if="tourData"
    >
      <div class="relative z-[3] max-w-[960px] w-full px-[.75rem] mx-auto">
        <div class="">
          <h1 class="extra-h1">Travel with Us</h1>
          <ul class="flex justify-center gap-4 py-5">
            <li>
              <NuxtLink to="/" title="Home">Home</NuxtLink>
            </li>
            <li class="item-cat item-custom-post-type-trip">Trips</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="max-w-[1445px] mx-auto px-[10px] py-6 md:py-10">
      <ui-card-data />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTourStore } from "../../store/toueStore";

const tourStore = useTourStore();
const selectedTour = ref<any>(null);

const tourData = computed(() =>tourStore.tourDestination);

provide("data", tourData);

await tourStore.fetchTours();

onMounted(async () => {
  if (tourData.value) {
    selectedTour.value = tourData.value[0];
  }
});

const handleHover = (tour: Tour) => {
  selectedTour.value = tour;
};

useHead({
  title: "Tours and Tour",
});
</script>
<style scoped lang="scss">
.background-image{
  background-image: url("/public/img/single_tour.webp");
  position: relative;
  @media (max-width: 768px) {
    background-image: url("/public/img/single_tour_sm.webp");
  }
  &:after{
    content: '';
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
}
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