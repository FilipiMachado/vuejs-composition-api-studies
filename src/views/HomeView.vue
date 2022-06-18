<template>
  <div class="home">
    <div class="edit">
      <button class="btn">-</button>
      <span class="counter">{{ counter }}</span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)

function increaseCounter() {
  counter.value++
}

</script>

<!--
<script setup>
//import { ref } from 'vue'
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
-->

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
.btn,
.counter {
  font-size: 40px;
  margin: 10px;
  cursor: pointer;
}
.edit {
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
