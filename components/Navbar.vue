<template>
  <div class="!sticky top-[0] w-full z-[20] h-full">
    <nav
      class="bg-gray-100 flex flex-wrap items-center justify-between px-2 md:p-10 py-4 lg:py-4"
    >
      <div class="">
        <img :src="logo" alt="" />
      </div>
      <div class="flex items-center gap-10">
        <div class="items uppercase">
          <ul class="hidden md:flex">
            <li
              class="text-gray-900 p-[8px_12px]"
              v-for="(item, index) in navItem"
              :key="index"
            >
              <a
                :href="item.href"
                aria-current="page"
                class="text-[14px] font-semibold hover:text-primary hover:duration-300 duration-300"
                >{{ item.name }}</a
              >
            </li>
          </ul>
          <div
            @click="isToggle = false"
            v-if="isToggle"
            class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[10] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]"
          ></div>

          <div
            class="fixed right-0 top-0 bg-white z-[999] min-h-[100vh] w-[350px]"
            v-if="isToggle"
          >
            <div
              class="flex justify-end p-2 relative top-[30px] right-[10px] rounded-[50%] bg-gray-100 w-fit float-end"
              @click="isToggle = !isToggle"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1222_37032)">
                  <path
                    d="M13.5 0.5L0.5 13.5"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M0.5 0.5L13.5 13.5"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1222_37032">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <ul class="flex flex-col p-10 uppercase">
              <li
                v-for="(item, index) in navItem"
                :key="index"
                @click="isToggle = !isToggle"
                class="p-[8px_12px]"
                :class="{
                  'font-semibold': router.currentRoute.value.name === 'index',
                }"
              >
                <a :href="item.href">{{ item.name }}</a>
              </li>
            </ul>
          </div>
            <div class="flex md:hidden">
              <svg
                @click="isToggle = !isToggle"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1222_36505)">
                  <path
                    d="M13.5 1H0.5"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M13.5 4H3.5"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M13.5 7H6.5"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M13.5 13H0.5"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M13.5 10H3.5"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1222_36505">
                    <rect width="14" height="14" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch, computed } from "vue";
import { useRouter } from "vue-router";
import logo from "../assets/icons/logo.svg";
const router = useRouter();
const isToggle = ref(false);

interface NavItem {
  name: string;
  href: string;
}

const navItem: readonly NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Tour", href: "/tour" },
  { name: "About us", href: "/about-us" },
  { name: "Contact us", href: "/contact" },
];
</script>