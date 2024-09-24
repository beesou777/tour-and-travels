<template>
  <div class="col-span-7" v-if="tourData">
    <div class="flex justify-between">
     <div class="flex flex-col gap-2">
       <h1 class="h1">{{ tourData.tour_title }}</h1>
       <span>{{tourData.tour_code}}</span>
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
        <tour-tab-information :data="tourData" />
      </template>
      <template #tab2>
        <tour-tab-itinerary :data="tourData" />
      </template>

      <template #tab3>
        <tour-tab-packages :data="tourData" />
      </template>

      <template #tab4>
        <tour-tab-location :data="tourData" />
      </template>
    </tour-tabs>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  tourData: {
    type: Object,
  },
});

const { tourData } = toRefs(props);
</script>
<style scoped lang="scss">
</style>