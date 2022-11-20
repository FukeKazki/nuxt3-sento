<script setup>
const login = async () => {
  const res = await $fetch('/api/login');
  console.log(res);
};
const post = async () => {
  const data = await $fetch('/api/posts');
  console.log(data);
};
</script>

<template>
  <button @click="login">ログイン</button>
  <button @click="post">ゲッチュー</button>
</template>
