<template>
  <div class="pokemon-container">
    <template v-for="pokemon in pokemonListPagination" :key="pokemon.id">
      <div
        class="pokemon"
        :class="{ selected: isPokemonInTeam(pokemon) }"
        @click="addPokemonToTeam(pokemon)"
      >
        <pokemon-profile-card :pokemon="pokemon" />
      </div>
    </template>
  </div>
  <div class="pagination-control">
    <button
      class="button-prev"
      @click="pagination.actual--"
      :disabled="pagination.actual === 1"
    ></button>
    <span>{{ pagination.actual }} / {{ pagination.maxPage }}</span>
    <button
      class="button-next"
      @click="pagination.actual++"
      :disabled="pagination.actual === pagination.maxPage"
    ></button>
  </div>
</template>

<script setup lang="ts">
import PokemonProfileCard from '@/components/PokemonProfileCard.vue'
import { usePokemonStore } from '@/stores/pokemon'
import { computed, onMounted, ref } from 'vue'

const pokemonStore = usePokemonStore()

const pokemonList = computed(() => pokemonStore.getPokemonList)
const pokemonListPagination = computed(() => {
  const start = (pagination.value.actual - 1) * 25
  const end = start + 25
  return pokemonList.value.slice(start, end)
})
const pagination = ref({
  actual: 1,
  maxPage: Math.ceil(pokemonList.value.length / 25)
})

function addPokemonToTeam(pokemon: any) {
  pokemonStore.addPokemonToTeam(pokemon)
}

function isPokemonInTeam(pokemon: any) {
  return pokemonStore.isPokemonInTeam(pokemon)
}

onMounted(() => {
  pokemonStore.fillPokemonList()
})
</script>

<style scoped>
.pokemon-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 40px;
}

.pokemon-container .pokemon {
  text-align: center;
  cursor: pointer;
  background-color: #990069;
  transition: 0.3s ease-in-out;
  border-radius: 0.5em;
}

.pokemon-container .pokemon.selected {
  background-color: #2b818c;
}

.pokemon-container .pokemon:hover {
  transform: scale(1.1);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.pagination-control {
  width: 100%;
  text-align: center;
  padding: 1em 0.5em;
}

.button-next,
.button-prev {
  background-color: transparent;
  box-shadow: none;
  cursor: pointer;
  padding: 0.5em;
  max-width: fit-content;
  margin: 0 1.5em;
  color: white;
  font-size: 1.5em;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  border: none;
}

.button-prev::before {
  content: '\2039';
}

.button-next::before {
  content: '\203A';
}
</style>
