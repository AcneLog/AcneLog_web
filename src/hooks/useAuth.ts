function useAuth() {
  // localStorage에 토큰이 있으면 로그인된 상태라고 가정
  return Boolean(localStorage.getItem('accessToken'));
}

export default useAuth;
