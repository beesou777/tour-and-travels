<template>
  <section
    class="background-image relative bg-cover bg-center bg-no-repeat py-[10.375rem] sm:py-[12.385rem] md:py-[13.385rem]"
  >

    <div
      class="relative z-[3] max-w-[960px] w-full px-[.75rem] mx-auto text-center text-white"
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
     {
      rel: "preload",
      href: getImage("v-small-homepage-img"),
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
  @media (max-width: 768px) {
    background-image: url("/public/img/small-homepage-img.webp");
  }
  @media (max-width: 520px) {
    background-image: url("/public/img/v-small-homepage-img.webp");
  }
    &:after{
    content: '';
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
}
</style>
