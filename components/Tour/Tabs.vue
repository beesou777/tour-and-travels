<template>
  <div class="">
    <div class="flex gap-4 overflow-x-auto">
      <div
        class="flex items-baseline border-2 border-primary rounded-[27px] py-2 px-4 cursor-pointer group hover:text-white hover:bg-primary duration-300"
        @click="setActiveTab(0)"
        :class="{ 'bg-primary text-white': activeTab === 0 }"
      >
        <svg
          class="h-[12px] w-[12px] group-hover:text-white svg-hover"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192 512"
          :fill="activeTab === 0 ? 'white' : ''"
        >
          <path
            d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192-32 0c-17.7 0-32-14.3-32-32z"
          />
        </svg>
        <span class="ml-2 body-2">Information</span>
      </div>

      <div
        class="flex items-baseline border-2 border-primary rounded-[27px] py-2 px-4 cursor-pointer group hover:text-white hover:bg-primary duration-300"
        @click="setActiveTab(1)"
        :class="{ 'bg-primary text-white': activeTab === 1 }"
      >
        <svg
          class="h-[12px] w-[12px] group-hover:text-white svg-hover"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          :fill="activeTab === 1 ? 'white' : ''"
        >
          <path
            d="M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"
          />
        </svg>
        <span class="ml-2 body-2">Itinerary</span>
      </div>

        <div
        class="flex items-baseline border-2 border-primary rounded-[27px] py-2 px-4 cursor-pointer group hover:text-white hover:bg-primary duration-300"
        @click="setActiveTab(2)"
        :class="{ 'bg-primary text-white': activeTab === 2 }"
      >
        <svg
        class="h-[12px] w-[12px] group-hover:text-white svg-hover"
        :fill="activeTab === 2 ? 'white' : ''"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path d="M256 48c0-26.5 21.5-48 48-48L592 0c26.5 0 48 21.5 48 48l0 416c0 26.5-21.5 48-48 48l-210.7 0c1.8-5 2.7-10.4 2.7-16l0-242.7c18.6-6.6 32-24.4 32-45.3l0-32c0-26.5-21.5-48-48-48l-112 0 0-80zM571.3 347.3c6.2-6.2 6.2-16.4 0-22.6l-64-64c-6.2-6.2-16.4-6.2-22.6 0l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L480 310.6 480 432c0 8.8 7.2 16 16 16s16-7.2 16-16l0-121.4 36.7 36.7c6.2 6.2 16.4 6.2 22.6 0zM0 176c0-8.8 7.2-16 16-16l352 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16L16 224c-8.8 0-16-7.2-16-16l0-32zm352 80l0 224c0 17.7-14.3 32-32 32L64 512c-17.7 0-32-14.3-32-32l0-224 320 0zM144 320c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0z"/></svg>
        <span class="ml-2 body-2">Packages</span>
      </div>

      <div
        class="flex items-baseline border-2 border-primary rounded-[27px] py-2 px-4 cursor-pointer group hover:text-white hover:bg-primary duration-300"
        @click="setActiveTab(3)"
        :class="{ 'bg-primary text-white': activeTab === 3 }"
      >
        <svg
          class="h-[12px] w-[12px] group-hover:text-white svg-hover"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          :fill="activeTab === 3 ? 'white' : ''"
        >
          <path
            d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
          />
        </svg>
        <span class="ml-2 body-2">Hotels</span>
      </div>
    </div>

    <div class="mt-4">
      <slot v-if="activeTab === 0" name="tab1"></slot>
      <slot v-if="activeTab === 1" name="tab2"></slot>
      <slot v-if="activeTab === 2" name="tab3"></slot>
      <slot v-if="activeTab === 3" name="tab4"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeTab = ref(0);

const setActiveTab = (tab: number) => {
  activeTab.value = tab;
};
</script>

<style scoped lang="scss">
.group:hover .svg-hover {
    animation-duration: 300ms;
  fill: white;
}
</style>
