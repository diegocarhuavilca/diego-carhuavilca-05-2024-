export interface iPokemon {
  height: number
  id: number
  img: string
  name: string
  sound: string
  stats: iPokemonStat[]
  weight: number
  types: iPokemonType[]
}

export interface iPokemonStat {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

export interface iPokemonType {
  slot: number
  type: {
    name: string
    url: string
  }
}
