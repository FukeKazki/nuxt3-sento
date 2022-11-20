<script setup>
const version = 3;
</script>

<template>
  <p>Index Page</p>
  <div class="hello">Hello Nuxt {{ version }}</div>
  <AppAlert> This is an auto-imported component </AppAlert>
  <NuxtLink to="/about">aboutへ</NuxtLink>
</template>

<style scoped>
.hello {
  font-weight: bold;
  font-size: 24px;
}
</style>
