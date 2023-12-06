<script setup>
import { onMounted, ref } from "vue";
import { useProductsStore } from "@/store/productsStore.js";
import { storeToRefs } from "pinia";
import ProductCard from "@/components/ProductCard.vue";
import SkeletonLoader from "@/components/SkeletonLoader.vue";

const { getAllProducts, loadMore, delay } = useProductsStore();
const { displayedProducts, loadBtnState } = storeToRefs(useProductsStore());
const loading = ref(false);
onMounted(async () => {
  loading.value = true;
  await getAllProducts()
  await delay(500);
  loading.value = false;
});
async function btnClick() {
  loading.value = true;
  await delay(500);
  loadMore();
  loading.value = false;
}
</script>
<template>
  <VContainer>
    <VRow>
      <template v-if="displayedProducts.length">
        <VCol
          v-for="product in displayedProducts"
          :key="product.id"
          cols="12"
          lg="4"
          md="6"
          sm="12"
          class="d-flex"
        >
          <ProductCard :product="product" />
        </VCol>
      </template>
      <template v-else-if="!displayedProducts.length && !loading">
        <VCol cols="12" class="d-flex justify-center mt-8">
          <h3 class="text-h3 ">Sorry, there are no products matching the selected filters</h3>
        </VCol>
      </template>
      <template v-if="loading">
        <VCol cols="12" lg="4" md="6" sm="12" v-for="n in 6" :key="n">
          <SkeletonLoader />
        </VCol>
      </template>
      <VCol cols="12" class="d-flex justify-center" v-if="loadBtnState">
        <VBtn
          append-icon="mdi-refresh"
          size="x-large"
          class="text-h5"
          @click="btnClick"
        >
          Load More
        </VBtn>
      </VCol>
    </VRow>
  </VContainer>
</template>
<style scoped></style>
