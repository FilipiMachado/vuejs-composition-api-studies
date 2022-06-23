<template>
 <div>
   <div>
    <div>
      <div>pikachu photo</div>
      <span>nº 025</span>
    </div>
    <div>
      <span>Pikachu</span>
      <span>Mouse</span>
      <span>HT 1'04"</span>
      <span>WT 13.0lb</span>
    </div>
   </div>
 </div>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps(['pokemonData'])

onMounted(() => {
    setTimeout(() => {
      console.log(pokemonData)
    }, 1500);
})

</script>

<style>

</style>