import { usePokemonStore } from '@/stores/pokemon'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamIdView from '../views/TeamIdView.vue'
import TeamView from '../views/TeamView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView
    },
    {
      path: '/team/:id',
      name: 'teamId',
      component: TeamIdView,
      beforeEnter: (to, from, next) => {
        const pokemonStore = usePokemonStore()
        if (pokemonStore.getTeamList.length === 0) {
          next({ name: 'team' })
        } else {
          next()
        }
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      redirect: { name: 'home' }
    }
  ]
})

export default router
