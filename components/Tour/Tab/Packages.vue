<template>
  <div class="overflow-x-auto">
    <h2 class="h3 py-4">Check our packages</h2>
    <table class="w-full border-collapse border border-primary">
      <thead>
        <tr class="border">
          <th class="p-2 border border-primary">Tour Category</th>
          <th class="p-2 border border-primary">Group Size</th>
          <th class="p-2 border border-primary">Price (INR)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(category, index) in data.tour_costs.pricing" :key="index">
          <td class="border-b border-primary">
            {{ category.category.replaceAll("_", " ").toUpperCase() }}
          </td>
          <td class="border border-primary">
            <div
              v-for="(pricingDetail, subIndex) in category.pricing_details"
              :key="subIndex"
            >
              {{ pricingDetail.group_size.replaceAll("_", " ").toUpperCase() }}
            </div>
          </td>
          <td class="border-b border-primary">
            <div
              v-for="(pricingDetail, subIndex) in category.pricing_details"
              :key="subIndex"
            >
              {{ pricingDetail.price }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">

const data = inject("tourData") as any;

</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  text-align: left;
  padding: 8px;
}
</style>
