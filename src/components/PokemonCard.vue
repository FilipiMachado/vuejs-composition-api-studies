<template>
 <div class="main-container">
   <div class="pokemon-info__wrapper">
    <div class="left-info__wrapper">
      <div>pikachu photo</div>
      <span>nº 025</span>
    </div>
    <div class="right-info__wrapper">
      <span class="right-info__title">Pikachu</span>
      <span class="right-info__title">Mouse</span>
      <span class="right-info__title">HT <strong>1'04"</strong></span>
      <span class="right-info__title">WT <strong>13.0lb</strong></span>
    </div>
   </div>
 </div>
</template>

<script setup>
import { onMounted } from 'vue'
import axios from 'axios'

let pokemonResData = ''

function getPokemons() {
  axios.get('https://pokeapi.co/api/v2/pokemon/')
  .then(function (response) {
    pokemonResData = response.data.results
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

onMounted(() => {
  getPokemons()
  setTimeout(() => {
    console.log(pokemonResData)
  }, 1500);
})

</script>

<style>

</style>