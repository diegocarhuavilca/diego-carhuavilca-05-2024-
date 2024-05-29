<template>
  <div class="container" v-if="pokemon">
    <img :src="pokemon.img" :alt="pokemon.name" />
    <h2>{{ capitalizeFirstLetter(pokemon.name) }}</h2>
  </div>
</template>

<script setup lang="ts">
import { type iPokemon } from '@/interfaces/pokemon'
import { capitalizeFirstLetter } from '@/utils/stringFormatter'
import type { PropType } from 'vue'

defineProps({
  pokemon: {
    type: Object as PropType<iPokemon>,
    required: true
  }
})
</script>

<style scoped>
.container {
  margin: auto;
  text-align: center;
}
</style>
