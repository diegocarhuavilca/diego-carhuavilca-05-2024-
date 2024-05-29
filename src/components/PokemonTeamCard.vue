<template>
  <div class="card" @click="cardClick(pokemon)">
    <div class="left">
      <pokemon-profile-card :pokemon="pokemon" />
    </div>
    <div class="right">
      <pokemon-sound-button :sound="pokemon.sound" class="audio" />
      <button @click.stop="removeFromTeam(pokemon.id)" class="remove">
        <img src="@/assets/icons/delete.svg" height="20" />
      </button>
      <div class="column">
        <pokemon-types :types="pokemon.types" />
      </div>
      <div class="column stats">
        <pokemon-stats :stats="pokemon.stats" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PokemonProfileCard from '@/components/PokemonProfileCard.vue'
import PokemonSoundButton from '@/components/PokemonSoundButton.vue'
import PokemonStats from '@/components/PokemonStats.vue'
import PokemonTypes from '@/components/PokemonTypes.vue'
import { type iPokemon } from '@/interfaces/pokemon'
import type { PropType } from 'vue'

defineProps({
  pokemon: {
    type: Object as PropType<iPokemon>,
    required: true
  }
})

const emits = defineEmits(['remove-from-team', 'card-click'])

function removeFromTeam(id: string | number) {
  emits('remove-from-team', id)
}

function cardClick(pokemon: object) {
  emits('card-click', pokemon)
}
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin: 20px 0;
  padding: 0.5em 1.5em;
  box-shadow: var(--base-red) 0px 0px 5px;
  cursor: pointer;
  position: relative;
}
.card .left {
  margin: auto;
  width: 20%;
  text-align: center;
}

.card .right {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
}

.card .remove {
  position: absolute;
  right: 10px;
  top: 50px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--base-red);
  transition: 0.3s ease-in-out;
}

.remove:hover {
  transform: scale(1.1);
}

.card .right .column.stats {
  height: 200px;
  display: flex;
}

.card .right .column .types {
  text-align: center;
  border: 1px solid var(--base-red);
  width: 150px;
  padding: 0.5em;
  border-radius: 10px;
  margin: 1em 0;
}

.audio {
  position: absolute;
  right: 10px;
  top: 10px;
}

@media only screen and (max-width: 768px) {
  .card {
    flex-wrap: wrap;
  }
}
</style>
