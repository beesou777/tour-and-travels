<template>
  <div
    class="background-img bg-cover bg-center bg-no-repeat my-10 h-[450px] justify-center items-center flex text-white"
  >
    <div class="max-w-[1445px] mx-auto px-[10px] w-full">
      <div class="flex md:flex-row flex-col justify-between items-center">
        <div>
          <h3 class="h1 py-2 md:text-left text-center">Ready To Adventure And Enjoy Natural</h3>
          <p class="text-gray-200 md:text-left text-center py-4 md:py-0">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
        <div class="py-4">
          <NuxtLink
          to="/tour"
            class="py-4 px-8 bg-white text-green-700 uppercase font-semibold hover:text-white hover:bg-gray-950 duration-300 rounded"
          >
            let's get started
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
@import "../../assets/scss/_function.scss";

.background-img {
  background-image: setBackground("../../public/img/destination/img6_01.webp");
}
</style>