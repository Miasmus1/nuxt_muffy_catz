<template>
  <nav>
    <a href="https://github.com/Miasmus1/nuxt_muffy_catz" target="_blank">
      <svg role="img">
        <use href="@/assets/sprites.svg#github" />
      </svg>
      Muffy Catz
    </a>

    <ul>
      <li v-if="currentPath !== '/'">
        <NuxtLink to="/" class="link-button" @click="handleLogout">
          Logout
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const route = useRoute();
const currentPath = ref('/');

watch(
  route,
  (value) => {
    currentPath.value = value.path;
  },
  { deep: true, immediate: true }
);

function handleLogout() {
  const cookie = useCookie('userInfo', {});
  cookie.value = null;
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $white-shade-1;
  flex: 1;

  & > a {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    color: $white-shade-1;
    font-weight: bold;
    font-size: 2rem;
    line-height: 1;

    & svg {
      fill: $white-shade-1;
      width: 4.2rem;
      height: 4.2rem;
    }

    &:hover {
      filter: contrast(2);
    }
  }

  & > ul {
    display: flex;
    gap: 3rem;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    font-weight: bold;
  }
}
</style>
