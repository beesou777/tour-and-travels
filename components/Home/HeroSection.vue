<template>
  <div class="max-w-[1445px] mx-auto py-10 pt-[150px] px-[10px]">
    <div class="grid lg:grid-cols-2 md:grid-cols-1">
      <div class="">
        <div class="max-w-[600px] w-full h-full aspect-[350/350]">
          <NuxtImg
            src="/img/fly.webp"
            alt="hero image"
            class="w-full max-w-[600px] h-auto object-cover"
            width="600"
            height="auto"
          />
        </div>
      </div>
      <div class="flex justify-center items-start flex-col">
        <p class="body-bold text-primary md:mx-0 mx-auto">
          Discover the Beauty of Nepal
        </p>
        <h2 class="extra-h1 py-2 md:text-left text-center">
          Unforgettable <span class="text-muted font-family">Adventure</span> &
          Travel Experiences
        </h2>
        <p class="text-muted py-2">
          Explore Nepal’s majestic mountains, vibrant culture, and hidden gems.
          Whether you're planning a trek to Everest Base Camp or a serene
          getaway in Pokhara, we provide expert guidance for all your travel
          needs.
        </p>

        <div class="grid grid-cols-2 py-4 md:py-2">
          <div class="col-span-1">
            <div class="py-2">
              <NuxtImg class="h-[42px] w-[42px]" :src="travelsGuide" alt="" />
            </div>
            <h3>Expert Travel Guid</h3>
            <p class="body-2 text-muted leading-[1.5]">
              Our experienced guides ensure safe and authentic experiences
              across Nepal’s breathtaking landscapes.
            </p>
          </div>
          <div class="col-span-1">
            <div class="py-2">
              <img class="h-[42px] w-[42px]" :src="trustedGuide" alt="" />
            </div>
            <h3>Personalized Nepal Trip</h3>
            <p class="body-2 text-muted leading-[1.5]">
              Customize your Nepal trip to match your adventure style, whether
              it's trekking, cultural tours, or relaxation.
            </p>
          </div>
        </div>
        <div class="text-primary flex gap-2 item-center py-2">
          <span>
            <img
              :src="location"
              alt="icons"
              height="20"
              width="20"
              class="h-[24px] w-[24px]"
            />
          </span>
          <span class="font-medium"
            >Explore must-visit destinations across Nepal, from
            <NuxtLink class="underline font-bold" to="/tour/pokhara-lakeside"
              >Kathmandu to Pokhara</NuxtLink
            >.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import location from "../../assets/icons/location.svg";
// import trustedGuide from "../../assets/icons/travels_guide.svg";
import travelsGuide from '~/assets/icons/travels_guide.svg';
useHead({
  link: [
    {
      rel: "prefetch",
      as: "image",
      href: "/img/fly.webp",
    },
  ],
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/_function.scss";
.font-family {
  font-family: fontFamily(cursive);
}
</style>