<template>
  <div class="max-w-[1445px] mx-auto px-[10px] py-5" v-if="tourData">
    <h2>Overview</h2>
    <p class="text-gray-500 py-4 max-w-[720px]">
      {{tourData.overview}}
    </p>

    <h3 class="h3 py-2">Highlights</h3>
    <ul>
      <li v-for="high in tourData.highlights" :key="high">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
      <li>{{high}}</li>
    </ul>

    <h3 class="h3 py-2">What's Included</h3>
    <ul>
      <li class="flex items-center gap-4 py-2" v-for="inc in tourData.included" :key="inc">
        <span
          class="bg-gray-200 rounded-full p-2 h-[42px] w-[42px] flex justify-center items-center"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.80018 20.5299C7.40631 20.5306 7.01617 20.4535 6.65218 20.303C6.28819 20.1525 5.95753 19.9315 5.67918 19.6529L0.0861816 14.0609L1.50018 12.6459L7.09318 18.2389C7.28071 18.4263 7.53502 18.5316 7.80018 18.5316C8.06535 18.5316 8.31965 18.4263 8.50718 18.2389L22.5002 4.24585L23.9142 5.65985L9.92118 19.6529C9.64283 19.9315 9.31217 20.1525 8.94818 20.303C8.58419 20.4535 8.19406 20.5306 7.80018 20.5299Z"
              fill="#4da528"
            />
          </svg>
        </span>
        <span>{{inc}}</span>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const tourStore = useTourStore();
const router = useRouter();
onMounted(async () => {
  await tourStore.getTours();
});

const tourData = computed(() => {
  const data  = tourStore.tourDestination.filter((item: any) => {
    return item.slug2 === router.currentRoute.value.params.slug
  })
  return data[0] ? data[0] : {}
});

useHead({
  title: `${tourData.value?.title || 'tour and travel'}`,
})

</script>
<style scoped lang="scss">
</style>