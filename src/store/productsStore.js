import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axios from "@/http-common.js";

export const useProductsStore = defineStore("productsStore", () => {
  const ITEMS_PET_PAGE = 6;
  const products = ref([]);
  const pages = ref(0);
  const currentPage = ref(1);
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const loadBtnState = computed(() => {
    return ITEMS_PET_PAGE * currentPage.value < filteredProducts.value.length;
  });
  const filters = ref({
    price: { min: 0, max: 0 },
    categories: [],
    selectedCategories: [],
    range: [],
    sortBy: "",
    sortOptions: [
      "Price asc",
      "Price desc",
      "Rating asc",
      "Rating desc",
      "Reviews asc",
      "Reviews desc",
      "Category asc",
      "Category desc",
    ],
  });

  const filteredProducts = computed( () => {

    currentPage.value = 1;

    return products.value
      .filter((product) => {
        return (
          product.price >= filters.value.range[0] &&
          product.price <= filters.value.range[1]
        );
      })
      .filter((product) => {
        return filters.value.selectedCategories.length
          ? filters.value.selectedCategories.includes(product.category)
          : true;
      });
  });

  const displayedProducts = computed( () => {

    const [sort, order] = filters.value.sortBy.split(" ");
    const tmpList = ref(filteredProducts.value);
    tmpList.value.sort((a, b) => {
      switch (sort) {
        case "Price":
          return a.price - b.price;
        case "Rating":
          return a.rating.rate - b.rating.rate;
        case "Reviews":
          return a.rating.count - b.rating.count;
        case "Category":
          return a.category < b.category ? 1 : -1
      }
    });
    if (order === "desc") tmpList.value.reverse();
    return tmpList.value.slice(0, ITEMS_PET_PAGE * currentPage.value);
  });

  async function getAllProducts() {
    const { data } = await (axios.get("products/"));
    products.value = data;
    pages.value = Math.ceil(products.value.length / ITEMS_PET_PAGE);
    await setFilters();
    filteredProducts.value = products.value;
    console.log(filteredProducts.value);
  }

  async function setFilters() {
    const { data } = await axios.get("products/categories");
    filters.value.categories = data;
    filters.value.price.min = products.value.reduce((prev, curr) =>
      prev.price < curr.price ? prev : curr
    ).price;
    filters.value.price.max = products.value.reduce((prev, curr) =>
      prev.price > curr.price ? prev : curr
    ).price;

    filters.value.range.push(...Object.values(filters.value.price));
  }

  function loadMore() {
    currentPage.value++;
  }

  return {
    filters,
    displayedProducts,
    currentPage,
    loadBtnState,
    delay,
    getAllProducts,
    loadMore,
  };
});
