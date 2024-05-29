<template>
  <pokemon-card-detail
    :pokemon="pokemonData"
    :evolutionChain="[evolutionChain]"
    :description="description"
  />
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
const idPokemon = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
const pokemonData = computed(() => getPokemonById.value(idPokemon))
const description = ref('')

pokemonService.getSpecies(idPokemon).then((response) => {
  const id = response.data.evolution_chain.url.split('/').slice(-2)[0]
  description.value = response.data.flavor_text_entries[0].flavor_text.replace(
    /(\r\n|\n|\r|\f)/gm,
    ' '
  )

  pokemonService.getEvolutionChainById(id).then((response) => {
    evolutionChain.value = response.data.chain
  })
})
</script>

<style scoped></style>
