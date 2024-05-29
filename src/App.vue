<script setup lang="ts">
import { useGlobalStore } from '@/stores/global'
import { computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const globalStore = useGlobalStore()

const isLoading = computed(() => globalStore.isLoading)
</script>

<template>
  <div class="navbar">
    <RouterLink to="/" activeClass="active-link">Home</RouterLink>
    <RouterLink to="/team">Team</RouterLink>
  </div>

  <template v-if="isLoading"> Loading </template>
  <template v-else>
    <RouterView />
  </template>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem;
}

.navbar a {
  text-decoration: none;
  color: #ed2860;
  font-weight: bold;
}

.active-link {
  color: blue;
}
</style>
