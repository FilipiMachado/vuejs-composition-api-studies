<template>
  <div>
    <HomeView />
    <AboutView />
  </div>

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
