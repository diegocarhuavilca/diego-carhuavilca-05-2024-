import BaseApi from './base'

const pokemonService = {
  async getPokemonById(id: number | string) {
    return await BaseApi.get(`pokemon/${id}`)
  },
  async getSpecies(id: number | string) {
    return BaseApi.get(`pokemon-species/${id}`)
  },
  async getEvolutionChainById(id: number) {
    return BaseApi.get(`evolution-chain/${id}`)
  }
}
export default pokemonService
