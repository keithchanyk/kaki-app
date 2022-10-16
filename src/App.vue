<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Footer from './components/Footer.vue'

import Join from './signup/Join.vue'

export default {
  name: "App",
  components: {
    // HelloWorld,
    // TheWelcome,
    // Footer,
    Join
  }
}
</script>

<template>
  <Join />
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
  <router-view></router-view>
  <Footer /> -->
</template>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
} */
</style>
