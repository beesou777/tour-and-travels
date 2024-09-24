<template>
  <div class="max-w-[1450px] mx-auto py-10 px-[10px] md:px-0">
    <p class="h5 text-center text-primary">why choose us</p>
    <h2 class="extra-h1 mx-auto leading-[1.2] pt-4 pb-10 md:text-left">Our Unique Offerings</h2>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
      <div
        class="hover:bg-primary hover:text-white p-[30px] flex justify-center flex-col gap-6 rounded h-[250px] duration-300 group shadow-[0px_4px_17px_0px_rgba(0,_0,_0,_0.06)] md:max-h-full max-h-[160px]"
        v-for="(activity, index) in activityData"
        :key="index"
      >
        <h3 class="h4">{{ activity.name }}</h3>
        <p>{{ activity.desc }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

const { getIcon} = useNuxtImage();

interface Activity {
  name: string;
  desc: string;
}

const activityData: readonly Activity[] = [
  {
    name: "Expert Guidance",
    desc: "Access to knowledgeable travel agents we can provide personalized and insights based on your preferences and budget",
  },
  {
    name: "Time Efficiency",
    desc: "Save time by letting professionals handle itinerary planning, booking accommodations, transportation, and activities.",
  },
  {
    name: "Stress Reduction",
    desc: "Minimize stress and hassle associated with trip planning, especially for complex itineraries or unfamiliar destinations.",
  },
  {
    name: "Safety & Security",
    desc: "Benefit from enhanced safety measures, emergency support, and assistance in case of circumstances during your travels.",
  }
];
</script>