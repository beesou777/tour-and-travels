<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4"
  >
    <div
      class="group bg-[#fff] cursor-pointer rounded-md overflow-x-hidden [box-shadow:8px_1px_10px_0px_rgba(0,_0,_0,_0.08)]"
      v-for="(feature, index) in props.data"
      :key="feature.id || index"
    >
      <NuxtLink
        :to="'tour/' + feature.slug"
        :area-label="feature.title"
        class="aspect-[350/250] bg-muted overflow-x-hidden group-hover:scale-[1.1] duration-300"
      >
        <NuxtImg
          :src="feature?.img"
          alt=""
          class="aspect-[350/250] w-full object-cover"
        />
      </NuxtLink>
      <div class="bg-[#fff] translate-y-[-20px] mb-[-20px] rounded-md p-4">
        <p class="text-small font-bold text-muted">
          {{ feature.location }}
        </p>
        <h2 class="h5">{{ feature.tour_title }}</h2>
        <div class="flex gap-2 items-center">
          <span class="body-bold">
            {{ feature.tour_duration }} Days
            {{ feature.tour_duration - 1 }} Night
          </span>
          <span>
            {{ feature.person }} <span class="body-bold">Person</span>
          </span>
        </div>
        <hr class="text-muted pb-2 mt-2" />
        <p>
          From
          <!-- <span class="text-primary body-bold">${{ feature.tour_costs?.pricing['pricing_details'][0].price }}</span> -->
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  grid: {
    type: Number,
    default: 4,
  },
});

const emit = defineEmits<{
  (event: "hover", tour: any): void;
}>();
</script>

