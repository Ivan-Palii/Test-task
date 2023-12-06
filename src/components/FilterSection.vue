<script setup>
import { useProductsStore } from "@/store/productsStore.js";
import { storeToRefs } from "pinia";

const { filters } = storeToRefs(useProductsStore());
</script>
<template>
  <VContainer>
    <VCard elevation="3">
      <VRow class="pt-10 d-flex justify-center">
        <VCol cols="12" md="4" sm="6" class="d-flex justify-center align-center">
          <VRangeSlider
            v-model="filters.range"
            thumb-label="always"
            label="Price:"
            :min="filters.price.min"
            :max="filters.price.max"
            class="pr-8 pr-md-0 pl-2"
          >
            <template v-slot:thumb-label="item">
              ${{ item.modelValue.toFixed(2) }}
            </template>
          </VRangeSlider>
        </VCol>
        <VCol cols="12" md="4" sm="6">
          <VCardTitle>Categories:</VCardTitle>
          <VCheckbox
            v-model="filters.selectedCategories"
            v-for="category in filters.categories"
            :key="category"
            :label="category"
            :value="category"
            hide-details="hide-details"
            class="pl-4"
          />

        </VCol>
        <VCol cols="12" md="4" sm="6" class="d-flex align-center justify-center">
          <VSelect
            v-model="filters.sortBy"
            :items="filters.sortOptions"
            density="compact"
            label="Sort by"
            class="px-6 "
          ></VSelect>
        </VCol>
      </VRow>
    </VCard>
  </VContainer>
</template>
<style scoped></style>
