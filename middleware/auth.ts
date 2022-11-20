import { useAuth } from "~~/composables/useAuth";
/**
 * 認証済みか確認するミドルウェア
 */
export default defineNuxtRouteMiddleware(() => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn.value) {
    return true
  }

  return navigateTo('/login')
})