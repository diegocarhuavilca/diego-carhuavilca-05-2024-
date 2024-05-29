<template>
  <div class="pokemon" v-for="evolution in evolutionChainList" :key="evolution">
    <template v-if="evolution">
      <template v-if="evolution.pokemon">
        <div class="card-pokemon" :class="{ active: isActivePokemon(evolution.pokemon) }">
          <pokemon-profile-card :pokemon="evolution.pokemon" />
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
</template>

<script setup lang="ts">
import { type iEvolutionChain, type iPokemon } from '@/interfaces/pokemon'
import { usePokemonStore } from '@/stores/pokemon'
import { storeToRefs } from 'pinia'
import type { PropType } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PokemonProfileCard from './PokemonProfileCard.vue'

const props = defineProps({
  evolutionChain: {
    type: Array as PropType<iEvolutionChain[]>,
    required: true,
    default: () => []
  }
})

const route = useRoute()
const pokemonStore = usePokemonStore()
const { getPokemonById } = storeToRefs(pokemonStore)

const evolutionChainList = computed(() => {
  return props.evolutionChain.map((evolution) => {
    return {
      ...evolution,
      pokemon: evolution.species ? getPokemonData(evolution.species.url) : null
    }
  })
})

const pokemonId: Number = Array.isArray(route.params.id)
  ? Number(route.params.id[0])
  : Number(route.params.id)

function getPokemonData(url: string): iPokemon {
  const id = getIdFromUrl(url)
  return getPokemonById.value(id)
}

function getIdFromUrl(url: string) {
  const urlParts = url.split('/')
  return urlParts[urlParts.length - 2]
}

function isActivePokemon(pokemon: iPokemon) {
  return pokemon.id === pokemonId
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
  border-top: 20px solid var(--base-red);
}

.card-pokemon {
  margin: 1rem 0;
  padding: 0.5em;
  border-radius: 10px;
}

.card-pokemon.active {
  border: 1px solid var(--base-red);
  box-shadow: var(--base-red) 0px 0px 5px;
}
</style>
