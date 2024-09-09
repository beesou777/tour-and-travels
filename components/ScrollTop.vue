<template>
  <div
    id="scroll-top"
    class="fixed bottom-5  right-5 z-[999] rounded-full flex justify-center items-center"
  >
    <div class="relativ">
      <svg
        width="75"
        height="75"
        viewBox="-12.75 -12.75 127.5 127.5"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style="transform: rotate(-90deg)"
      >
        <circle
          r="41"
          cx="51"
          cy="51"
          fill="transparent"
          stroke="#dbdbdb"
          stroke-width="5"
          stroke-dasharray="257.48px"
          stroke-dashoffset="0"
        ></circle>
        <circle
        class="cursor-pointer"
        @click="scrollToTop"
          r="41"
          cx="51"
          cy="51"
          stroke="#76e5b1"
          stroke-width="5"
          stroke-linecap="round"
          :stroke-dashoffset="scrollPercent"
          fill="#fbad17"
          stroke-dasharray="257.48px"
        ></circle>
      </svg>
      <svg
        @click="scrollToTop"
        class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
        width="18"
        height="10"
        viewBox="0 0 15 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 8.14747L7.061 3.20747L2.122 8.14747L0 6.02547L5.293 0.732466C5.52516 0.50025 5.80078 0.316042 6.10414 0.190364C6.4075 0.0646864 6.73264 0 7.061 0C7.38936 0 7.7145 0.0646864 8.01786 0.190364C8.32122 0.316042 8.59685 0.50025 8.829 0.732466L14.122 6.02547L12 8.14747Z"
          fill="#fff"
        />
      </svg>
    </div>
  </div>
</template>
<script setup lang="ts">
let scrollPercent = ref<number>(257.48);
let scrollDashary = ref<number>(257.48);
onMounted(() => {
  window.addEventListener("scroll", scrollTop);
});


const scrollTop = () => {
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let width = (scrollTop / scrollHeight) * 100;
  const dasharyintoPercent = scrollDashary.value / 100;
  scrollPercent.value = ((width-100) * dasharyintoPercent);
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>
