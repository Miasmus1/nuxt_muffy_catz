<template>
  <div>
    <transition v-if="catPic" name="fade-img" mode="out-in">
      <img
        :key="catPic"
        :src="catPic"
        alt="A Funny Cat Photo"
        @load="handleLoad"
      />
    </transition>
    <div v-else class="loading-spinner">
      <div id="loading" />
    </div>
    <button :disabled="imageLoading" @click="getCat">Get New Cat</button>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();
const catPic = ref('');
const imageLoading = ref(true);

function handleLoad() {
  imageLoading.value = false;
}

onMounted(() => {
  getCat();
});

async function getCat() {
  imageLoading.value = true;
  const cookie = useCookie('userInfo', {});

  if (!cookie.value?.idToken) {
    navigateTo('/');
  }

  catPic.value = await nuxtApp.$repositories.cat.show();
}
</script>

<style lang="scss" scoped>
div {
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  & > img {
    width: 40rem;
    height: 40rem;
    object-fit: cover;
    border-radius: $border-radius-md;
    box-shadow: 0 0 1rem 2rem rgba(0, 0, 0, 0.2);

    @include responsive('mobile') {
      width: 30rem;
      height: 30rem;
    }
  }

  & > button {
    font-weight: bold;
    font-size: 1.8rem;
    border: 1px solid $white-shade-1;
    border-radius: $border-radius-md;
    color: $color-text-primary;
    background-color: transparent;
    padding: 2rem 6rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);

    &:hover {
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }
}

.loading-spinner {
  width: 40rem;
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  & > #loading {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @include responsive('mobile') {
    width: 30rem;
    height: 30rem;
  }
}

.fade-img-enter-from,
.fade-img-leave-to {
  opacity: 0;
}
.fade-img-enter-active {
  transition: opacity 0.75s ease-out;
}
.fade-img-enter-to,
.fade-img-leave-from {
  opacity: 1;
}
.fade-img-leave-active {
  transition: opacity 0.75s ease-in;
}
</style>
