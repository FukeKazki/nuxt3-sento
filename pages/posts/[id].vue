<script setup>
const route = useRoute()
const id = route.params.id
const { data } = await useFetch(`/api/posts/${id}`)
</script>

<template>
  <p>詳細ページ</p>
  {{ data }}
</template>