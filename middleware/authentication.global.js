export default defineNuxtRouteMiddleware((to, from) => {
  const { value } = useCookie('userInfo');

  if (to.path.includes('/cats') && !value?.idToken) {
    return navigateTo('/');
  }
});
