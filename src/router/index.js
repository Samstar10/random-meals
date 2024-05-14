import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '../views/Ingredients.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: "/by-name/:name?",
          name: "by-name",
          component: MealsByName
        },
        {
          path: '/by-letter/:letter?',
          name: "by-letter",
          component: MealsByLetter
        },
        {
          path: "/by-ingredient/:ingredient",
          name: "by-ingredient",
          component: MealsByIngredient
        },
        {
          path: "/ingredients",
          name: "ingredients",
          component: Ingredients
        },
        {
          path: '/meal/:id',
          name: 'meal-details',
          component: MealDetails
        }
      ]
    },
    {
      path: '/guest',
      component: GuestLayout,
      children: [
        
      ]
    }
  ]
})

export default router
