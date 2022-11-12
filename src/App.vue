<script>
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
import Footer from './components/Footer.vue';
import Join from './views/signup/Join.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // TheWelcome,
    // Footer,
    Join,
  },
};
</script>
<template>
  <div>
    <!-- <router-link to="/signup">Sign Up</router-link>
  <router-link to="/">Sign In</router-link> -->
  </div>
  <router-view />
  <!-- <Join /> -->
</template>
<style scoped></style>
