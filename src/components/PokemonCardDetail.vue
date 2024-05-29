<template>
  <div class="card">
    <pokemon-profile-card :pokemon />
    <pokemon-sound-button :sound="pokemon.sound" class="audio" />
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
import { type iEvolutionChain, type iPokemon } from '@/interfaces/pokemon'
import type { PropType } from 'vue'
import PokemonSoundButton from './PokemonSoundButton.vue'

defineProps({
  pokemon: {
    type: Object as PropType<iPokemon>,
    required: true
  },
  evolutionChain: {
    type: Array as PropType<iEvolutionChain[]>,
    required: true
  }
})
</script>

<style scoped>
.card {
  border-radius: 10px;
  padding: 0.5em 1.5em;
  box-shadow: var(--base-red) 0px 0px 5px;
  width: 100%;
  margin: auto;
  position: relative;
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
  position: relative;
}

.types .title,
.general-info .content .title {
  text-align: center;
  margin-bottom: 0.5em;
  font-weight: bold;
  margin-top: 1em;
}

.audio {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
