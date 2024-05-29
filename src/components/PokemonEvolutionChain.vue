<template>
  <div>
    <div class="pokemon" v-for="evolution in evolutionChain" :key="evolution">
      <template v-if="evolution">
        <template v-if="evolution.species">
          <div
            class="card-pokemon"
            :class="{ active: $route.params.id == getPokemonData(evolution.species.url).id }"
          >
            <pokemon-profile-card :pokemon="getPokemonData(evolution.species.url)" />
          </div>
        </template>
        <template v-if="evolution.evolves_to">
          <template v-if="evolution.evolves_to.length > 0">
            <div class="arrow-container">
              <div class="arrow-down"></div>
            </div>
            <PokemonEvolutionChain :evolutionChain="evolution.evolves_to" />
          </template>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePokemonStore } from '@/stores/pokemon'
import { storeToRefs } from 'pinia'
import PokemonProfileCard from './PokemonProfileCard.vue'

defineProps({
  evolutionChain: {
    type: Array,
    required: true,
    default: () => []
  }
})

const pokemonStore = usePokemonStore()
const { getPokemonById } = storeToRefs(pokemonStore)

function getPokemonData(url: string) {
  return getPokemonById.value(getIdFromUrl(String(url)))
}

function getIdFromUrl(url: string) {
  const urlParts = url.split('/')
  return urlParts[urlParts.length - 2]
}
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
}

.arrow-container {
  display: flex;
  justify-content: center;
  margin-top: 1em;
}

.arrow-down {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 20px solid #ed2860;
}

.card-pokemon {
  margin: 1rem 0;
  padding: 0.5em;
  border-radius: 10px;
}

.card-pokemon.active {
  border: 1px solid #ed2860;
  box-shadow: #ed2860 0px 0px 5px;
}
</style>
