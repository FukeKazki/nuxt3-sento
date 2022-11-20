<script setup>
const { isLoggedIn } = useAuth();
</script>

<template>
  <header>
    <NuxtLink to="/">
      <h2>銭湯メディア</h2>
    </NuxtLink>

    <ul class="actions">
      <li v-if="!isLoggedIn">
        <NuxtLink to="/login">ログイン</NuxtLink>
      </li>
      <li v-if="isLoggedIn">
        <p>ログイン中</p>
      </li>
    </ul>
  </header>
</template>

<style scoped>
header {
  height: 64px;
  border-bottom: 1px solid #4d4d4d;

  display: flex;
  justify-content: space-between;
}

.actions {
  display: flex;
}
</style>