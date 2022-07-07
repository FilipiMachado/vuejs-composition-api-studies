<template>
  <div class="main-container">
    <h1 class="title">{{ appTitle }}</h1>
    <div class="buttons-container">
      <button @click="decreaseCounter" class="minus-button">-</button>
      <span class="value">{{ counterData.count }}</span>
      <button @click="increaseCounter(1)" class="plus-button">+</button>
      <button @click="increaseCounter(5)" class="plus-button">+5</button>
      <button @click="increaseCounter(inputCountQuantity.inputCount)" class="plus-button">+{{ inputCountQuantity.inputCount }}</button>
    </div>

    <h1 style="text-align: center;">My age is {{ inputCountQuantity.inputCount }}, i'm considered a {{ testComputedProperty }} person</h1>

    <div class="main-container">
      <h4 class="title">Edit Counter Quantity</h4>
      <input v-model="counterData.inputCount" class="input-value" type="number" v-autofocus>
      <button @click="addCounterQuantity" class="input-value">Salvar idade</button>
      <!-- <input v-model="counterData.title" class="input-value" type="text"> -->
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from "vue"

const appTitle = "My Amazing Counter App"

const counter = ref(0)
const counterTitle = ref("My Counter")
const inputCountQuantity = reactive({
  inputCount: "",
})

const counterData = reactive({
  count: 0,
  title: 'My New Counter',
  inputCount: '',
})

const testComputedProperty = computed(() => {
  if (inputCountQuantity.inputCount > 0 && inputCountQuantity.inputCount < 3) {
    return 'baby'
  } else if (inputCountQuantity.inputCount > 4 && inputCountQuantity.inputCount < 30) {
    return 'young'
  } else if (inputCountQuantity.inputCount > 31 && inputCountQuantity.inputCount < 60) {
    return 'adult'
  } else if (inputCountQuantity.inputCount > 61) {
    return 'old'
  }
})

watch(() => counterData.count, (newCount, oldCount) => {
  console.log(newCount, oldCount)
})

// Local Directives
/* const vAutofocus =  { // v-autofocus
  mounted: (el) => {
    el.focus()
  }
}  */

// Watch Examples
/* watch(() => counterData.count, (newCount, oldCount) => {
  console.log(newCount, oldCount)
}) */

/* watch(() => counterData.count, (newCount, oldCount) => {
  if (newCount == 10) {
    return alert('Hello World!')
  } else {
    return 
  }
  console.log('newCount', newCount)
  console.log('oldCount', oldCount)
}) */

const increaseCounter = (amount) => {
  counterData.count += amount
}

const decreaseCounter = () => {
  counterData.count--
}

function addCounterQuantity () {
  inputCountQuantity.inputCount = counterData.inputCount
  console.log(inputCountQuantity)
}


</script>

<!-- 
<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  computed: {
    myComputedProperty() {
      // perform logic based on a data property
      return 'my result'
    }
  },
  watch: {
    count(newCount, oldCount) {
      if (newCount == 20) alert('Hello World!')
    }
  },
  mounted() {
    console.log('mounted!')
  },
  unmounted() {
    console.log('unmounted!')
  },
}
</script> 
-->

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
}

.title {
  margin: 1em auto;
}
.buttons-container {
  margin: 2em auto;
}
.minus-button {
  padding: 2em;
  cursor: pointer;
}
.value {
  margin: 1em;
  font-size: 30px;
}
.plus-button {
  padding: 2em;
  cursor: pointer;
}
.input-value {
  margin: 0 auto;
}
</style>