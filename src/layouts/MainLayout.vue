<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>
<template>
  <TheHeader />
  <VMain class="flex-1-1">
    <RouterView />
  </VMain>
  <TheFooter />
</template>
<style scoped></style>
