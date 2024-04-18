<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// fetch the products
const { data: products } = await useFetch<Product[]>("https://fakestoreapi.com/products");

// Meta definitions
definePageMeta({
  layout: "products"
});
useHead({ title: "Nuxt Dojo | Merch", meta: [{ name: "description", content: "Nuxt 3 Merch" }] });
</script>

<style></style>
