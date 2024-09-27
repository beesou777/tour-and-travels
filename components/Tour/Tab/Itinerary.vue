<template>
  <div class="pt-6">
    <h2 class="py-2 h3">Itinerary Overview</h2>
    <table class="w-full">
      <thead>
        <tr class="border border-primary">
          <th class="p-2">Day</th>
          <th class="p-2">Activity</th>
        </tr>
      </thead>
      <tbody class="border border-primary">
        <tr
          class="border-b border-primary"
          v-for="(item, index) in data.outlined_itinerary"
          :key="index"
        >
          <td class="p-2">{{ item.split(":")[0] }}</td>
          <td class="p-2">{{ item.split(":")[1] }}</td>
        </tr>
      </tbody>
    </table>
    <h2 class="h3 pt-6">Itinerary Details</h2>
    <div class="max-w-[1440px] mx-auto pb-5" id="faqs">
      <div
        v-for="(item, index) in data.detailed_itinerary"
        :key="index"
        class="overflow-hidden border-b-2 last:border-b-0 py-3 !m-0"
      >
        <button
          @click="toggle(index)"
          class="w-full py-2 text-left flex justify-between border-none outline-none transition-colors items-center"
        >
          <div class="flex gap-3 items-center">
            <span
              class="uppercase bg-primary rounded-full text-white px-2 h-[42px] w-[42px] flex justify-center items-center text-[24px]"
              >{{ index + 1 }}</span
            >
            <span class="h4 !font-semibold">{{ item.title }}</span>
          </div>
          <span
            class="text-gray-500 h2"
            :class="
              activeIndex === index
                ? 'rotate-[45deg] duration-500'
                : 'rotate-0 duration-500'
            "
            >+</span
          >
        </button>
        <div
          class="px-4 body-2 max-w-[56rem] h-0 overflow-hidden opacity-0 transition-all duration-1000 ease-out !font-normal"
          :class="activeIndex === index ? 'open' : 'close'"
        >
          <p class="font-bold">Day {{ item.day }}</p>
          <p class="text-pretty">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const activeIndex: Ref<number> = ref(-1);

const data = inject("tourData") as any;

const toggle = (index: number) => {
  if (activeIndex.value === index) {
    activeIndex.value = -1;
  } else {
    activeIndex.value = index;
  }
};
</script>
<style scoped>
.transition-all {
  transition: max-height 0.5s ease, padding 0.5s ease, width 0.5s ease,
    opacity 0.7s ease;
}

.open {
  max-height: auto;
  height: 100%;
  width: 100%;
  padding: 1rem;
  opacity: 1;
}
</style>