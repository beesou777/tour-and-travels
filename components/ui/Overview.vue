<template>
  <div class="md:col-span-7 col-span-12" v-if="tourData">
    <div class="flex justify-between">
     <div class="flex flex-col gap-2">
       <h1 class="h1">{{ tourData.tour_title }}</h1>
     </div>
      <span
        class="flex flex-col items-center rounded-[8px] w-[70px] [box-shadow:_0px_4px_8px_rgba(0,_0,_0,_.04),_0px_0px_2px_rgba(0,_0,_0,_.06),_0px_0px_1px_rgba(0,_0,_0,_.04)]"
      >
        <span
          class="extra-h1 bg-secondary flex justify-center text-white w-full"
        >
          {{ tourData.tour_duration }}
        </span>
        <span class="days flex justify-center py-1"> Days </span>
      </span>
    </div>
    <tour-tabs>
      <template #tab1>
        <tour-tab-information />
      </template>
      
      <template #tab2>
        <tour-tab-itinerary  />
      </template>

      <template #tab3>
        <tour-tab-packages />
      </template>

      <template #tab4>
        <tour-tab-location />
      </template>
    </tour-tabs>
  </div>
</template>
<script setup lang="ts">
const tourData  = inject("tourData") as any;

</script>
<style scoped lang="scss">
</style>