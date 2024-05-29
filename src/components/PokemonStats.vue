<template>
  <template v-for="stat in stats" :key="stat">
    <div class="content">
      <div class="bar">
        <span class="name">
          {{ stat.stat.name }}
        </span>

        <div class="bar-content" :style="{ height: `${(stat.base_stat * 200) / 255}px` }">
          {{ stat.base_stat }}
        </div>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { type iPokemonStat } from '@/interfaces/pokemon'
import type { PropType } from 'vue'
defineProps({
  stats: {
    type: Array as PropType<iPokemonStat[]>,
    required: true
  }
})
</script>

<style scoped>
.content {
  margin: 0 5px;
  writing-mode: vertical-lr;
}

.content .bar {
  height: 200px;
  display: flex;
  justify-content: end;
}

.content .bar .name {
  transform: rotate(180deg);
  margin-bottom: 5px;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.content .bar-content {
  background-color: #2b818c;
  width: 30px;
  padding: 0.2em;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}
</style>
