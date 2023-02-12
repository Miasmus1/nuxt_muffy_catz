import createRepository from '@/store/repositories/index';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('repositories', createRepository($fetch));
  return {
    provide: {
      injected: createRepository($fetch),
    },
  };
});
