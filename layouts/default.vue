<template>
  <div class="container">
    <ClientOnly>
      <NavBar />
    </ClientOnly>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 70%;
  margin: 0 auto;

  @include responsive(mobile) {
    width: 85%;
  }
}
</style>
