<template>
  <div
    class="px-[10px] background_image relative bg-[#F3F8F6] z-[1] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[1] after:opacity-[30%]"
  >
    <div
      class="bg-cover bg-center bg-norepeat min-h-[100vh] py-10 max-w-[1445px] mx-auto px-[10px] relative z-[10]"
    >
      <p class="h4 text-center text-primary">Explore the world</p>
      <h2 class="extra-h1 mx-auto py-2 max-w-[720px] text-center">
        Amazing Featured Tour
        <span class="font_family text-muted">Package</span> The World
      </h2>
      <div class="flex gap-3 justify-center py-4 md:py-2 overflow-visible">
        <div class="flex gap-3 justify-center py-4 md:py-2 overflow-visible">
          <button
            @click="activeButton = item.name"
            :class="
              activeButton == item.name
                ? 'bg-primary text-white before:content-[\'\'] before:absolute before:h-[10px] before:w-[20px] before:bg-primary before:[clip-path:polygon(45%_100%,_0_0,_100%_0)] before:bottom-[-10px] before:left-[50%] before:translate-x-[-50%]'
                : 'bg-white'
            "
            class="text-gray-950 px-5 py-3 [box-shadow:8px_1px_10px_0px_rgba(0,_0,_0,_0.08)] hover:bg-primary hover:text-white hover:duration-300 duration-300 rounded font-bold relative overflow-visible"
            v-for="(item, index) in buttonData"
            :key="index"
          >
            <span>{{ item.name }}</span>
          </button>
        </div>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 py-4"
      >
        <div
          class="group bg-[#fff] rounded-md overflow-x-hidden [box-shadow:8px_1px_10px_0px_rgba(0,_0,_0,_0.08)]"
          v-for="(feature, index) in renderData"
          :key="index"
        >
          <div
            class="aspect-[350/250] bg-muted overflow-x-hidden group-hover:scale-[1.1] duration-300"
          >
            <img :src="feature.img" alt="" class="aspect-[350/250] w-full object-cover" />
          </div>
          <div class="bg-[#fff] translate-y-[-20px] mb-[-20px] rounded-md p-4">
            <p class="text-small fomt-bold text-muted">
              {{ feature.location }}
            </p>
            <h3 class="h5">{{ feature.title }}</h3>
            <div class="flex gap-2 items-center">
              <span
                >{{ feature.days }} <span class="body-bold">Days</span></span
              >
              <span
                >{{ feature.person }}
                <span class="body-bold">Person</span></span
              >
            </div>
            <hr class="text-muted pb-2 mt-2" />
            <p>
              From
              <span class="text-primary body-bold">${{ feature.price }}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="text-center py-2">
        <button class="px-4 py-3 bg-primary text-white rounded hover:bg-green-700 duration-000">View All Tour</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface FeaturePlace {
  img: string;
  title: string;
  price: number;
  person: number;
  location: string;
  days: number;
  slug?: location["name"];
}


interface location {
  name: string;
}

const activeButton = ref<string>("All");

const featureData:  FeaturePlace[] = [];

const buttonData: location[] = [
  {
    name: "All",
  },
  {
    name: "Kathmandu",
  },
  {
    name: "Pokhara",
  },
  {
    name: "Lumbini",
  },
  {
    name: "Dharan",
  },
  {
    name: "Biratnagar",
  },
];

onMounted(() => {
  try {
    fetch("api/get-tour").then((res) => {
      res.json().then((data) => {
        featureData.push(...data);
      });
    })
  } catch (error) {
    console.log(error);
  }
});

const renderData = computed(() => {
  if (activeButton.value == "All") {
    return featureData?.slice(0, 8);
  } else {
    return featureData.filter((item) => item.slug == activeButton.value);
  }
});
</script>
<style scoped lang="scss">
@import "../../assets/scss/_function.scss";

.background_image {
  &::after {
    background-image: setBackground(
      "../../assets/img/destination/background.webp"
    );
  }
}
.font_family {
  font-family: fontFamily(cursive);
}
</style>