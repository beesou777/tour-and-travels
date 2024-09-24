<template>
  <section
    class="background-image relative h-[65vh] md:h-[80vh] max-h-[80vh] bg-cover bg-center bg-no-repeat"
  >
    <div
      class="w-full h-full overflow-hidden  bg-gray-900 opacity-60 z-[2] absolute top-0 left-0"
    ></div>

    <div
      class="w-full lg:w-[58%] md:w-[80%] sm:w-[90%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[3] text-center text-white"
    >
      <p class="body-bold text-secondary md:mx-0 mx-auto">
        Discover the Beauty of Nepal
      </p>
      <h2 class="extra-h1 py-2 text-center">
        Unforgettable <span class="font-family">Adventure</span> & Travel
        Experiences
      </h2>
      <p class="py-2">
        Explore Nepal’s majestic mountains, vibrant culture, and hidden gems.
        Whether you're planning a trek to Everest Base Camp or a serene getaway
        in Pokhara, we provide expert guidance for all your travel needs.
      </p>
      <div class="py-4">
        <nuxt-link
          to="/tour"
          class="px-4 py-3 bg-green-700 text-[#fff] rounded hover:bg-primary duration-300"
        >
          View All Nepal Tour Packages
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const { getIcon, getImage } = useNuxtImage();

useHead({
  link: [
    {
      rel: "preload",
      href: getImage("big-homepage-img"),
      type: "image/webp",
      fetchpriority: "high",
      loading: "eager",
    },
  ],
});
</script>
<style scoped lang="scss">
.background-image {
  background-image: url("/public/img/big-homepage-img.webp");
}
</style>
