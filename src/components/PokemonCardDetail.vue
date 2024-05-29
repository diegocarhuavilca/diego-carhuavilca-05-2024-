<template>
  <div class="card">
    <pokemon-profile-card :pokemon />
    <div class="general-info">
      <div class="content">
        <div class="title">Weight</div>
        <div class="card">
          <span>{{ pokemon.weight }} lb</span>
        </div>
      </div>

      <div class="content">
        <div class="title">Height</div>
        <div class="card">
          <span>{{ pokemon.height }} inch</span>
        </div>
      </div>
    </div>
    <div class="stats">
      <pokemon-stats :stats="pokemon.stats" />
    </div>
    <div class="types">
      <div class="title">Types</div>
      <div class="content">
        <pokemon-types :types="pokemon.types" />
      </div>
    </div>
    <pokemon-evolution-chain :evolutionChain="evolutionChain" />
  </div>
</template>

<script setup lang="ts">
import PokemonEvolutionChain from '@/components/PokemonEvolutionChain.vue'
import PokemonProfileCard from '@/components/PokemonProfileCard.vue'
import PokemonStats from '@/components/PokemonStats.vue'
import PokemonTypes from '@/components/PokemonTypes.vue'
import { type iPokemon } from '@/interfaces/pokemon'
import type { PropType } from 'vue'

defineProps({
  pokemon: {
    type: Object as PropType<iPokemon>,
    required: true
  },
  evolutionChain: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.card {
  border-radius: 10px;
  padding: 0.5em 1.5em;
  box-shadow: #ed2860 0px 0px 5px;
  width: 100%;
  margin: auto;
}
.stats,
.types .content {
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
}

.general-info {
  display: flex;
  justify-content: space-around;
  margin: 20px;
}

.types .title,
.general-info .content .title {
  text-align: center;
  margin-bottom: 0.5em;
  font-weight: bold;
  margin-top: 1em;
}
</style>
