<template>
  <header>
    <h2>銭湯メディア</h2>

    <ul class="actions">
      <li>
        <NuxtLink to="/login">ログイン</NuxtLink>
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