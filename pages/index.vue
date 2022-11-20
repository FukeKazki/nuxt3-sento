<script setup>
const version = 3;
const { data } = await useFetch('/api/posts');
</script>

<template>
  <p>Index Page</p>
  <div class="hello">Hello Nuxt {{ version }}</div>
  <AppAlert> This is an auto-imported component </AppAlert>
  <NuxtLink to="/about">aboutへ</NuxtLink>
  <ul>
    <li v-for="post in data.posts" :key="post.title">
      <NuxtLink :to="`/posts/${post.id}`">
        {{ post.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
.hello {
  font-weight: bold;
  font-size: 24px;
}
</style>
