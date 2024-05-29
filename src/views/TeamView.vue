<template>
  <template v-if="pokemonTeamList.length > 0">
    <template v-for="pokemon in pokemonTeamList" :key="pokemon.id">
      <pokemon-team-card
        :pokemon="pokemon"
        @remove-from-team="removeFromTeamHandler"
        @card-click="cardClickHandler"
      />
    </template>
  </template>
  <template v-else>
    <p>No pokemons in your team</p>
  </template>
</template>

<script setup lang="ts">
import PokemonTeamCard from '@/components/PokemonTeamCard.vue'
import { type iPokemon } from '@/interfaces/pokemon'
import { usePokemonStore } from '@/stores/pokemon'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const pokemonStore = usePokemonStore()
const router = useRouter()

const pokemonTeamList = computed(() => pokemonStore.getTeamList)

function removeFromTeamHandler(id: string) {
  pokemonStore.removeFromTeam(id)
}

function cardClickHandler(pokemon: iPokemon) {
  router.push({ name: 'teamId', params: { id: pokemon.id } })
}
</script>

<style scoped></style>
