<template>
     <div class="max-w-[1445px] mx-auto py-10 pt-[150px] px-[10px]">
          <div class="grid lg:grid-cols-2 md:grid-cols-1">
               <div class="">
                    <div class="max-w-[600px] w-full h-full aspect-[350/350]">
                         <img class="w-full  max-w-[600px] aspect-[450/350]" :src="heroSectionImage" alt="hero image" height="600" width="600">
                    </div>
               </div>
               <div class="flex justify-center items-start flex-col">
                    <p class="body-bold text-primary md:mx-0 mx-auto">Explore the Nepal's Beauty</p>
                    <h2 class="extra-h1 py-2 md:text-left text-center"> Great Opportunity For <span class="text-muted font-family">Adventure</span> & Travels</h2>
                    <p class="text-muted py-2">Welcome to our Print 128 website! We are a professional and reliable printing company that offers a wide range of printing services to</p>

                    <div class="grid grid-cols-2 py-4 md:py-2">
                         <div class="col-span-1">
                             <div class="py-2">
                               <img
                              class="h-[42px] w-[42px]"
                               :src="trustedGuide" alt="">
                             </div>
                              <h3>Trusted Travel Guide</h3>
                              <p class="body-2 text-muted leading-[1.5]">Pellentesque habitant morbi tristique senectus netus et</p>
                         </div>
                         <div class="col-span-1">
                              <div class="py-2">
                               <img
                              class="h-[42px] w-[42px]"
                               :src="trustedGuide" alt="">
                             </div>
                              <h3>Pesonalized Trips</h3>
                              <p class="body-2 text-muted leading-[1.5]">Pellentesque habitant morbi tristique senectus netus et</p>
                         </div>
                    </div>
                    <div class="text-primary flex gap-2 item-center py-2">
                         <span>
                              <img :src="location" alt="icons" height="20" width="20" class="h-[24px] w-[24px]">
                         </span>
                         <span class="font-bold">Checkout Beautiful Places Arround the World.</span>
                    </div>
               </div>
          </div>
     </div>
</template>
<script setup lang="ts">
import  heroSectionImage from "../../assets/img/herosection/fly.webp"
import location from "../../assets/icons/location.svg";
import trustedGuide from "../../assets/icons/travels_guide.svg"
</script>
<style scoped lang="scss">
@import "../../assets/scss/_function.scss";
.font-family{
     font-family:fontFamily(cursive);
}
</style>