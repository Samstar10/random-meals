<script setup>
import axiosClient from '../axiosClient'
import { computed, onMounted, ref } from 'vue';
import MealItem from '@/components/MealItem.vue';
import store from '@/store';
import { useRoute } from 'vue-router';
import Meals from '@/components/Meals.vue'

const meals = computed(() => store.state.mealsByIngredient)
const route = useRoute()
onMounted(() => {
	store.dispatch('searchMealsByIngredient', route.params.ingredient)
})
</script>

<template>
	<h1 class="text-4xl font-bold text-center mt-5">{{ route.params.ingredient }} Meals</h1>
  <Meals :meals="meals" />
</template>