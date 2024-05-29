import type { iPokemon } from '@/interfaces/pokemon'
import pokemonService from '@/services/api/pokemon'
import { defineStore } from 'pinia'
import { useGlobalStore } from './global'

export const usePokemonStore = defineStore('pokemon', {
  state: () => {
    return {
      pokemonList: [] as iPokemon[],
      team: [] as iPokemon[]
    }
  },
  actions: {
    async fillPokemonList() {
      const globalStore = useGlobalStore()
      globalStore.setLoading(true)
      if (this.pokemonList.length === 0) {
        for (let i = 1; i <= 151; i++) {
          await pokemonService.getPokemonById(i).then((response) => {
            this.pokemonList.push({
              id: response.data.id,
              name: response.data.name,
              img: response.data.sprites.front_default,
              types: response.data.types,
              stats: response.data.stats,
              sound: response.data.cries.latest,
              weight: response.data.weight,
              height: response.data.height
            })
          })
        }
      }
      globalStore.setLoading(false)
    },

    addPokemonToTeam(pokemon: iPokemon) {
      if (this.team.some(({ id }) => pokemon.id === id)) return
      if (this.team.length < 6) {
        this.team.push(pokemon)
      }
    },
    isPokemonInTeam(pokemon: iPokemon) {
      return this.team.some(({ id }) => pokemon.id === id)
    },
    removeFromTeam(pokemonId: string) {
      this.team = this.team.filter((pokemon) => String(pokemon.id) !== String(pokemonId))
    }
  },
  getters: {
    getPokemonList(state): iPokemon[] {
      return state.pokemonList
    },
    getTeamList(state): iPokemon[] {
      return state.team
    },
    getPokemonById: (state) => (id: number | string) => {
      return state.pokemonList.find((pokemon) => pokemon.id == id) || ({} as iPokemon)
    }
  }
})
