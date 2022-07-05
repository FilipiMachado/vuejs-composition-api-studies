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
    <div class="main-container">
      <h4 class="title">Edit Counter Quantity</h4>
      <input v-model="counterData.inputCount" class="input-value" type="number">
      <button @click="addCounterQuantity" class="input-value">Salvar Quantidade</button>
      <!-- <input v-model="counterData.title" class="input-value" type="text"> -->
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"

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