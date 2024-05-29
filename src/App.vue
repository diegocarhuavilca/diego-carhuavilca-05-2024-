<script setup lang="ts">
import LoadingSpinner from '@/components/shared/LoadingSpinner.vue'
import { useGlobalStore } from '@/stores/global'
import { computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const globalStore = useGlobalStore()

const isLoading = computed(() => globalStore.isLoading)
</script>

<template>
  <div class="navbar">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/team">Team</RouterLink>
  </div>

  <template v-if="isLoading">
    <div class="spinner-container">
      <loading-spinner />
    </div>
  </template>
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
  color: var(--base-red);
  font-weight: bold;
}

.spinner-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
</style>
