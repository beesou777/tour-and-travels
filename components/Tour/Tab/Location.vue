<template>
  <div class="overflow-x-auto">
    <h2 class="h3 py-4">Check our packages</h2>
    <table class="w-full border-collapse border border-primary">
      <thead>
        <tr class="border">
          <th class="p-2 border border-primary">Hotel Category</th>
           <th
            v-for="(location, index) in allLocations"
            :key="index"
            class="p-2 border border-primary"
          >
            {{ location.charAt(0).toUpperCase() + location.slice(1) }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(hotel, index) in data.hotels" :key="index">
          <td class="border border-primary">{{ hotel.category }}</td>
          <td
            v-for="(value, keyIndex) in Object.keys(hotel).filter(key => key !== 'category')"
            :key="keyIndex"
            class="border border-primary">
            {{ hotel[value] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const data = inject("tourData") as any;

const allLocations = computed(() =>
  Array.from(
    new Set(
      data.hotels.flatMap((hotel:any) => Object.keys(hotel).filter(key => key !== 'category'))
    )
  )
);
</script>

<style scoped>
th, td {
  text-align: left;
  padding: 8px;
}
</style>
