<template>
  <div>
    <HomeView />
  </div>

  <RouterView />
</template>

<script>
import HomeView from './views/HomeView.vue'

export default {
  components: {
    HomeView,
  }
}

</script>

<style>
</style>
