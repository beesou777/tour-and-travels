<template>
  <div class="max-w-[1450px] mx-auto px-[10px] md:py-10 py-6">
    <p class="h5 text-center text-primary">Explore the world</p>
    <h2 class="extra-h1 leading-[1.1] mx-auto py-6 max-w-[720px] text-center">
      We Provide Top <span class="font_family text-muted">Tourist</span> Destination
    </h2>
    <div class="grid md:grid-cols-3 grid-cols-1 gap-8">
      <div
        class="relative group overflow-hidden  cursor-pointer flex flex-1 items-center flex-col justify-center"
        v-for="(item, index) in destination"
        :key="index"
      >
        <div class="group-hover:scale-110 duration-300">
          <img
            :src="item.image"
            alt=""
            class="aspect-[350/250] w-full h-auto object-cover transform transition-transform duration-500"
          />
        </div>
          <p
            class="absolute right-4 top-4 z-10 bg-accent py-[4px] px-4 rounded-md font-bold text-white"
          >
            {{ item.tour_count }} TOURS
          </p>

        <div
          class="relative mt-[-49px] w-[90.5%] bg-white rounded-[6px] p-[10px] shadow-[0px_4px_17px_0px_rgba(0,_0,_0,_0.06)]"
        >
          <h3
            class="relative h5 top-[-10px] text-white left-[-10px] w-[61%] bg-primary text-left font-semibold leading-[28.5px] uppercase p-[7px_15px] [border-top-left-radius:6px] duration-300 ease-in-out after:content-[''] after:absolute after:right-[-25px] after:bottom-0 after:m-[0_auto] after:w-0 after:h-0 after:[border-top:_43px_solid_#4da528] after:[border-left:_25px_solid_transparent] after:[border-right:_25px_solid_transparent]"
          >
            <a
              href="https://vitourwp.themesflat.co/ba_booking-locations/united-state/"
            >
              {{ item.destination_name }}
            </a>
          </h3>
          <div class="flex justify-between items-center p-[3px_9px_5px]">
            <p>View all tours</p>
            <a href="#" class="h-[42px] w-[42px] bg-gray-200 rounded-full flex justify-center items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_403_3715)">
                  <path
                    d="M23.124 9.87897L18.538 5.29297L17.124 6.70697L21.386 10.97L0 11V13L21.446 12.97L17.123 17.293L18.537 18.707L23.124 14.121C23.6847 13.5575 23.9995 12.7949 23.9995 12C23.9995 11.205 23.6847 10.4425 23.124 9.87897Z"
                    fill="#374957"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import featureImg from "../../assets/img/destination/tour-feature-1.webp";
import tourImage from "../../assets/img/destination/tour-feature-1.webp";
import kathmandu from "../../assets/img/destination/kathmandu.webp";
import kathmandu2 from "../../assets/img/destination/kathmadu2.webp";
import pokhara2 from "../../assets/img/destination/pokhara3.webp";
import lumbini from "../../assets/img/destination/lumbini.webp";
import bharatnager from "../../assets/img/destination/bh.webp";
import dharan from "../../assets/img/destination/dh3.webp";
interface Destination {
  image: string;
  tour_count: number;
  destination_name: string;
}

const destination: readonly Destination[] = [
  {
    image: kathmandu,
    tour_count: 3,
    destination_name: "kathmandu",
  },
  {
    image: bharatnager,
    tour_count: 3,
    destination_name: "biratnagar",
  },
  {
    image: dharan,
    tour_count: 3,
    destination_name: "dharan",
  },
  {
    image: pokhara2,
    tour_count: 3,
    destination_name: "pokhara",
  },
  {
    image: featureImg,
    tour_count: 3,
    destination_name: "lumbini",
  },
  {
    image: lumbini,
    tour_count: 3,
    destination_name: "lumbini",
  },
];
</script>

<style scoped lang="scss">
@import "../../assets/scss/_function.scss";

.font_family{
  font-family:fontFamily(cursive);
}

</style>