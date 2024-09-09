<template>
  <Body>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>

<script setup lang="ts">
const bodyClass = ref('');

usePageTitle();
</script>