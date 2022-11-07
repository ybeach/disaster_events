<!-- client/components/Header.vue -->
<template>
  <header class="header wrapper">
    <div>
      <nuxt-link :to='`/`'>
        <h1 class="title">
          『日本中世気象災害史年表稿』ビューア <!--(藤木久志編 高志書院)-->
        </h1>
      </nuxt-link>
    <div>
      <nav>
        <NuxtLink to="/" class="nav">トップ</NuxtLink>
        <!--<NuxtLink to="/site" class="nav">このサイトについて</NuxtLink>-->
        <NuxtLink to="/about" class="nav">『日本中世気象災害史年表稿』について</NuxtLink>
      </nav>
    </div></div>
  </header>
</template>

<style scoped>
.header {
  padding: 20px 4% 20px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #5ba9f7;
  display: flex;
  align-items: center;
  z-index: 10;
}

.wrapper {
  max-width: 100%;
  margin: 0 auto;
}

.title {
  font-size: 3rem;
  color: #fff;
  margin: 0;
  padding: 0;
  padding-bottom: 3px;
  line-height: 1.4em;
  justify-content: center;
  letter-spacing: 1px;
}

.nav {
  margin: 4rem 4rem 4rem;
  text-align: center;
}
</style>