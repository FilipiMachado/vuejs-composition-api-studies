<template>
  <nav>
    <router-link to="/">Home</router-link>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">Posts</RouterLink>
  </nav>

  <RouterView />
</template>

<script>
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'

export default {
  components: {
    HomeView,
    AboutView,
  }
}

</script>

<style>
</style>
