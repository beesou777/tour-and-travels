<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4"
    :class="[props.grid ? `md:grid-cols-${props.grid}` : 'md:grid-cols-4']"
  >
    <div
      class="group bg-[#fff] rounded-md overflow-x-hidden [box-shadow:8px_1px_10px_0px_rgba(0,_0,_0,_0.08)]"
      v-for="(feature, index) in props.data"
      :key="feature.id || index"
      @mouseover="handleHover(feature)"
    >
      <div class="aspect-[350/250] bg-muted overflow-x-hidden group-hover:scale-[1.1] duration-300">
        <NuxtImg :src="feature.img" alt="" class="aspect-[350/250] w-full object-cover" />
      </div>
      <div class="bg-[#fff] translate-y-[-20px] mb-[-20px] rounded-md p-4">
        <p class="text-small font-bold text-muted">
          {{ feature.location }}
        </p>
        <h3 class="h5">{{ feature.title }}</h3>
        <div class="flex gap-2 items-center">
          <span>
            {{ feature.days }} <span class="body-bold">Days</span>
          </span>
          <span>
            {{ feature.person }} <span class="body-bold">Person</span>
          </span>
        </div>
        <hr class="text-muted pb-2 mt-2" />
        <p>
          From
          <span class="text-primary body-bold">${{ feature.price }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  grid: {
    type: Number,
    default: 4
  }
});

const emit = defineEmits<{
  (event: 'hover', tour: any): void;
}>();

const handleHover = (tour) => {
  emit('hover', tour);
};
</script>

