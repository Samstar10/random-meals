<script setup>
import MealItem from '@/components/MealItem.vue';
import store from '@/store';
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import Meals from '@/components/Meals.vue';

const route = useRoute()
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const meals = computed(() => store.state.mealsByLetter)

watch(route, () => {
	store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
	store.dispatch('searchMealsByLetter', route.params.letter)
})

</script>

<template>
    <div>
        <div class="flex justify-center gap-2 mt-2">
        <RouterLink :to="{name: 'by-letter', params: {letter}}" v-for="letter of letters.split('')" key="letter">
          {{ letter }}
        </RouterLink>
      </div>
    </div>
		<Meals :meals="meals" />
</template>