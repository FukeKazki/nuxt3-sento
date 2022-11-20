<script setup>
const login = async () => {
  const { login } = useAuth();
  await login()
    .then(() => {
      navigateTo('/dashboard')
    })
};
const logout = () => {
  const { logout } = useAuth();
  logout();
};
</script>

<template>
  <button @click="login">ログイン</button>
  <button @click="logout">ログアウト</button>
</template>
