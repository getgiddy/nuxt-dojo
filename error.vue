<template>
  <div class="mt-7 max-w-sm mx-auto text-center card">
    <p class="mt-7 test-7xl font-bold">{{ error?.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops.</p>
    <p class="mt-7">{{ error?.message }}</p>
    <button class="btn my-7" @click="handleClearError">Back to home...</button>
  </div>
</template>

<script lang="ts" setup>
const error = useError();

const handleClearError = () => clearError({ redirect: "/" })
</script>

<style></style>
