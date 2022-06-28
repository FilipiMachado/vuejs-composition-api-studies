<template>
 <div class="main-container">
   <div class="pokemon-info__wrapper">
    <div class="left-info__wrapper">
      <img class="left-info__img" src="../assets/pokemon-img_example.png" alt="">
      <span class="left-info__title">nº 025</span>
    </div>
    <div class="right-info__wrapper">
      <span class="right-info__title">Pikachu</span>
      <span class="right-info__title">Mouse</span>
      <span class="right-info__title">HT <strong>1'04"</strong></span>
      <span class="right-info__title">WT <strong>13.0lb</strong></span>
    </div>
   </div>
   <div>test</div>
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

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  width: 25vw;
  margin: 0 auto;
}
.pokemon-info__wrapper {
  display: flex;
  border: 1px solid #fff;
  outline: 5px solid #d34d00;
}

/* Left Content */
.left-info__wrapper {
  display: flex;
  flex-direction: column;
}
.left-info__img {
  margin: 0.2em;
}
.left-info__title {
  margin: 0.2em auto;
}

/* Right Content */
.right-info__wrapper {
  display: flex;
  flex-direction: column;
  margin: 1em;
}
.right-info__title {
  font-size: 1.2rem;
  margin: 0.2em 0em;
}

@media screen and (max-width: 750px) {
  .main-container {
    width: 80vw;
    margin: 1em 2em;
  }
}
</style>