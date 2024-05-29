import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => {
    return {
      loading: false
    }
  },
  actions: {
    setLoading(loading: boolean) {
      this.loading = loading
    }
  },
  getters: {
    isLoading(state) {
      return state.loading
    }
  }
})
