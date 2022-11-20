/**
 * 認証用のカスタムフック
 * サーバー・クライアント両方から使える
 */
export const useAuth = () => {
  const cookie = useCookie('token');
  const isLoggedIn = useState('loggedIn', () => cookie.value ? true : false);

  const login = async () => {
    const res = await $fetch('/api/login');
    cookie.value = res.token
    isLoggedIn.value = true
  }

  const logout = () => {
    cookie.value = null
    isLoggedIn.value = false
  }

  return {
    login,
    logout,
    isLoggedIn
  }
}