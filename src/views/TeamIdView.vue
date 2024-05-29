<template>
  <pokemon-card-detail :pokemon="pokemonData" :evolutionChain="[evolutionChain]" />
</template>

<script setup lang="ts">
import PokemonCardDetail from '@/components/PokemonCardDetail.vue'
import pokemonService from '@/services/api/pokemon'
import { usePokemonStore } from '@/stores/pokemon'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const pokemonStore = usePokemonStore()
const { getPokemonById } = storeToRefs(pokemonStore)
const route = useRoute()

const evolutionChain = ref()
const pokemonData = computed(() => getPokemonById.value(route.params.id))

pokemonService.getSpecies(Number(route.params.id)).then((response) => {
  const id = response.data.evolution_chain.url.split('/').slice(-2)[0]
  pokemonService.getEvolutionChainById(id).then((response) => {
    evolutionChain.value = response.data.chain
  })
})
</script>

<style scoped></style>
