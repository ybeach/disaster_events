<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
// pagenation: scroll location -> "top"
/*
useRouter().options.scrollBehavior = (to, from, savedPosition) => {
  if (to.hash === '') {
    return { left: 0, top: 0 }
  }
}
*/
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>