<template>
  <div>
    <ui-header-data />
    <div class="grid grid-cols-12 gap-4 max-w-[1445px] mx-auto px-[10px] py-5">
      <ui-overview  />
      <div class="pt-5 col-span-12 md:col-span-5">
        <h2 class="px-6">Contact Us</h2>
        <contact-form :subject="tourData?.title" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const tourStore = useTourStore();
const router = useRouter();

let tourName = ref<string>("");

onMounted(async () => {
  if (!router.currentRoute.value.params.slug) router.push({ name: "tour" });
  tourName.value = router.currentRoute.value.params.slug;
});
await tourStore.fetchTours();

const tourData = computed(() => {
  const data = tourStore.tourDestination.filter((item: any) => {
    return item.slug === router.currentRoute.value.params.slug;
  });
  return data[0] ? data[0] : {};
});

provide("tourData", tourData);

useHead({
  title: `${tourData.value?.title || "tour and travel"}`,
});
</script>
