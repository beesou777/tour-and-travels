<template>
  <div class="" v-if="data">
    <h2 class="py-4">{{ data.tour_title }}</h2>
    <p>{{ data.product_description }}</p>

    <h3 class="py-4">Tour Includes</h3>
    <div
      class="flex gap-2 my-2"
      v-for="(item, index) in data.tour_cost_includes"
      :key="index"
    >
      <span
        ><svg
          class="h-[24px] w-[24px] p-1 bg-green-500 rounded-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="white"
        >
          <path
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          /></svg
      ></span>
      <span>{{ item }}</span>
    </div>
    <div
      class="flex gap-2 my-2"
      v-for="(item, index) in data.tour_cost_excludes"
      :key="index"
    >
      <span>
        <svg
          class="h-[24px] w-[24px] p-1 bg-red-400 rounded-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          fill="white"
        >
          <path
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          />
        </svg>
      </span>
      <span>{{ item }}</span>
    </div>
    <div class="" v-if="data.notes">
      <h3 class="py-4">Notes</h3>
      <ul>
        <li class="flex gap-2 items-center text-balance" v-for="(item, index) in data.notes" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">

const data = inject("tourData") as any;

</script>
<style scoped lang="scss">
ul {
  counter-reset: step;
  li::before {
    min-width: 20px;
    min-height: 20px;
    height: 20px;
    width: 20px;
    background: theme("colors.secondary");
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    counter-increment: step;
    content: counter(step);
  }
}
</style>