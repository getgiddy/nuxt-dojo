<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident libero doloribus laboriosam tempora tempore.
      Veniam, tempore. Itaque dolor voluptate iusto.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident libero doloribus laboriosam tempora tempore.
      Veniam, tempore. Itaque dolor voluptate iusto.</p>
    <div>{{ data }}</div>
  </div>
</template>

<script lang="ts" setup>
const { data } = await useFetch("/api/ninja?name=Mario", {
  method: "post",
  body: { age: 30 }
});
</script>

<style></style>
