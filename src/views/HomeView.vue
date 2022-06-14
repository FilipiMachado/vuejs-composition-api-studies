<template>
  <div class="home">
    <div>
      <button @click="removeCounter" class="btn">-</button>
      <span class="counter">{{ counter }}</span>
      <button @click="addCounter" class="btn">+</button>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<!-- <script>
export default {
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    addCounter() {
      this.counter += 1;
    },
    removeCounter() {
      this.counter -= 1;
    }
  },
}
</script> -->

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn, .counter {
  font-size: 40px;
  margin: 10px;
  cursor: pointer;
}
</style>