<template>
  <div>
    <PokemonCard />
  </div>
</template>

<script setup>
import PokemonCard from '../components/PokemonCard.vue'

import { ref, onMounted } from 'vue'
import axios from 'axios'

//const counter = ref(0)

onMounted(() => {
  setTimeout(() => {
    getPokemons();
  }, 400);
})

function getPokemons() {
  axios.get('https://pokeapi.co/api/v2/pokemon/')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

/* function increaseCounter() {
  counter.value++
}

function decreaseCounter() {
  if (counter.value < 1) {
    return
  }
  counter.value--
} */

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
