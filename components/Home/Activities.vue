<template>
  <div class="max-w-[1450px] mx-auto py-10 px-[10px] md:px-0">
    <h2 class="extra-h1 mx-auto leading-[1.2] pt-4 pb-10 text-center md:text-left">Explore the world</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
      <div
        class="hover:bg-primary hover:text-white text-center flex justify-center flex-col items-center gap-4 rounded h-[250px] duration-300 group shadow-[0px_4px_17px_0px_rgba(0,_0,_0,_0.06)] md:max-h-full max-h-[160px]"
        v-for="(activity, index) in activityData"
        :key="index"
      >
        <div class="img">
          <img
            :src="activity.image"
            alt="activity name"
            height="60"
            width="60"
            class="w-[60px] group-hover:[filter:hue-rotate(145deg)_brightness(200%)] "
          />
        </div>
        <p class="h5 md:text-left">{{ activity.name }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import activityImage from "../../assets/icons/travels_guide.svg";
interface Activity {
  name: string;
  image: string;
}

const activityData: readonly Activity[] = [
  {
    name: "Kathmandu",
    image: activityImage,
  },
  {
    name: "Kathmandu",
    image: activityImage,
  },
  {
    name: "Kathmandu",
    image: activityImage,
  },
  {
    name: "Kathmandu",
    image: activityImage,
  },
  {
    name: "Kathmandu",
    image: activityImage,
  },
];
</script>
<style scoped lang="scss">

</style>