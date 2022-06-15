<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button @click="removeCounter" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="addCounter" class="btn">+</button>
    </div>
    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text">
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

/* const counter = ref(0)
const counterTitle = ref('') */

const appTitle = 'Amazing Counter App'

const counterData = reactive({
  count: 0,
  title: 'My Counter'
})

function addCounter() {
  counterData.count++
}

function removeCounter() {
  counterData.count--
}

</script>


<!-- import { ref } from 'vue'

export default {
  setup() {
    const counter = ref(10)
    const counterZero = ref(0)

    function addCounter() {
      counterZero.value++
    }

    function removeCounter() {
      counterZero.value--
    }

    return {
      counter,
      counterZero,
      addCounter,
      removeCounter
    }
  }
} 
-->

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
.edit {
  margin-top: 60px;
}
</style>