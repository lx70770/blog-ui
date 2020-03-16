export function isLogin() {
  try {
    let toekn = localStorage.getItem('token')
    return !!toekn
  } catch (e) {
    return false
  }
}
