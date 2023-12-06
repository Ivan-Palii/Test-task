<script setup>
import { ref } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const rating = ref((props.product.rating.rate / 5) * 100 + "%");
</script>
<template>

  <VCard class="flex-1-1 d-flex flex-column" elevation="6">
    <VRow>
      <VImg
        :src="product.image"
        aspect-ratio="1/1"
        class="card-image ma-4 mt-8"
      />
    </VRow>
    <VRow>
      <VCol cols="12" class="d-flex flex-column">
        <VCardTitle class="text-h5 text-wrap flex-1-1">
          {{ product.title }}
        </VCardTitle>
        <VCardText class="pa-1 pl-4 text-wrap d-flex align-center">
          <div class="rating">
            <svg
              viewBox="0 0 66 14"
              class="rating__stars"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,0v14h66V0H0z M13.3,6.3l-2.5,2.4l0.6,3.4c0.1,0.4-0.2,0.8-0.6,0.9c-0.2,0-0.3,0-0.5-0.1l-3.1-1.6l-3.1,1.6
    c-0.4,0.2-0.8,0.1-1-0.3c-0.1-0.1-0.1-0.3-0.1-0.5l0.6-3.4L1.2,6.3C0.9,6,0.9,5.5,1.2,5.2C1.3,5.1,1.5,5,1.6,5l3.4-0.5l1.5-3.1
    c0.2-0.4,0.6-0.5,1-0.3c0.1,0.1,0.3,0.2,0.3,0.3l1.5,3.1L12.9,5c0.4,0.1,0.7,0.4,0.6,0.8C13.5,6,13.4,6.2,13.3,6.3z M26.1,6.3
    l-2.5,2.4l0.6,3.4c0.1,0.4-0.2,0.8-0.6,0.9c-0.2,0-0.3,0-0.5-0.1l-3.1-1.6l-3.1,1.6c-0.4,0.2-0.8,0.1-1-0.3C16,12.5,16,12.3,16,12.1
    l0.6-3.4l-2.5-2.4c-0.3-0.3-0.3-0.8,0-1.1C14.2,5.1,14.4,5,14.5,5l3.4-0.5l1.5-3.1c0.2-0.4,0.6-0.5,1-0.3c0.1,0.1,0.3,0.2,0.3,0.3
    l1.5,3.1L25.7,5c0.4,0.1,0.7,0.4,0.6,0.8C26.3,6,26.3,6.2,26.1,6.3z M39,6.3l-2.5,2.4l0.6,3.4c0.1,0.4-0.2,0.8-0.6,0.9
    c-0.2,0-0.3,0-0.5-0.1L33,11.3l-3.1,1.6c-0.4,0.2-0.8,0.1-1-0.3c-0.1-0.1-0.1-0.3-0.1-0.5l0.6-3.4L27,6.3c-0.3-0.3-0.3-0.8,0-1.1
    C27.1,5.1,27.2,5,27.4,5l3.4-0.5l1.5-3.1c0.2-0.4,0.6-0.5,1-0.3c0.1,0.1,0.3,0.2,0.3,0.3l1.5,3.1L38.6,5c0.4,0.1,0.7,0.4,0.6,0.8
    C39.2,6,39.1,6.2,39,6.3z M51.9,6.3l-2.5,2.4l0.6,3.4c0.1,0.4-0.2,0.8-0.6,0.9c-0.2,0-0.3,0-0.5-0.1l-3.1-1.6l-3.1,1.6
    c-0.4,0.2-0.8,0.1-1-0.3c-0.1-0.1-0.1-0.3-0.1-0.5l0.6-3.4l-2.5-2.4c-0.3-0.3-0.3-0.8,0-1.1C40,5.1,40.1,5,40.3,5l3.4-0.5l1.5-3.1
    c0.2-0.4,0.6-0.5,1-0.3c0.1,0.1,0.3,0.2,0.3,0.3l1.5,3.1L51.5,5c0.4,0.1,0.7,0.4,0.6,0.8C52.1,6,52,6.2,51.9,6.3z M64.8,6.3
    l-2.5,2.4l0.6,3.4c0.1,0.4-0.2,0.8-0.6,0.9c-0.2,0-0.3,0-0.5-0.1l-3.1-1.6l-3.1,1.6c-0.4,0.2-0.8,0.1-1-0.3
    c-0.1-0.1-0.1-0.3-0.1-0.5l0.6-3.4l-2.5-2.4c-0.3-0.3-0.3-0.8,0-1.1C52.8,5.1,53,5,53.1,5l3.4-0.5l1.5-3.1c0.2-0.4,0.6-0.5,1-0.3
    c0.1,0.1,0.3,0.2,0.3,0.3l1.5,3.1L64.4,5c0.4,0.1,0.7,0.4,0.6,0.8C65,6,64.9,6.2,64.8,6.3z"
              ></path>
            </svg>
            <div class="rating__bg"></div>
            <div class="rating__fill"></div>
          </div>
          <VBtn icon="mdi-message-text-outline ml-2" variant="text"></VBtn>
          <span class="rating-text">{{ product.rating.count }}</span>
        </VCardText>
        <VCardText class="pa-1 pl-4 text-wrap text-h6">
          ${{ product.price }}
        </VCardText>

        <VBtn prepend-icon="mdi-cart-variant" variant="outlined" class="ma-4"> Buy </VBtn>
      </VCol>
    </VRow>
  </VCard>
</template>
<style scoped lang="scss">
.card-image {
  height: 200px;
  object-fit: cover;
}
.rating {
  display: inline-block;
  width: 100%;
  max-width: 100px;
  height: 20px;
  position: relative;
  transform: translateY(-10%);
  // .rating__stars
  &__stars {
    position: absolute;
    fill: white;
    z-index: 3;
  }

  // .rating__bg
  &__bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: lightgray;
    z-index: 1;
  }

  // .rating__fill
  &__fill {
    position: absolute;
    background-color: orange;
    width: v-bind(rating);
    height: 100%;
    z-index: 2;
  }
}
.rating-text {
}
</style>
