<template>
  <template v-for="type in types" :key="type.slot">
    <div class="types">
      {{ capitalizeFirstLetter(type.type.name) }}
    </div>
  </template>
</template>

<script setup lang="ts">
import { type iPokemonType } from '@/interfaces/pokemon'
import { capitalizeFirstLetter } from '@/utils/stringFormatter'
import type { PropType } from 'vue'

defineProps({
  types: {
    type: Array as PropType<iPokemonType[]>,
    required: true
  }
})
</script>

<style scoped>
.types {
  text-align: center;
  border: 1px solid #ed2860;
  width: 150px;
  padding: 0.5em;
  border-radius: 10px;
  margin: 1em;
}
</style>
