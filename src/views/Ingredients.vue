<script setup>
import axiosClient from '../axiosClient'
import { computed, onMounted, ref } from 'vue';

const ingredients = ref([])
const keyword = ref('')
const computedIngredients = computed(() =>{
    if (!computedIngredients) return ingredients
    return ingredients.value.filter((item) => 
        item.strDescription?.toLowerCase().includes(keyword.value.toLowerCase()) || 
        item.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
    )
})

onMounted(() => {
	axiosClient.get(`list.php?i=list`)
		.then(({ data }) => {
			ingredients.value = data.meals
		})
})
</script>

<template>
  <div class="p-8">
		<h1 class="text-4xl font-bold mb-4 flex justify-center items-center">Ingredients</h1>
        <input 
            type="text" 
            class="rounded border-2 border-gray-200 w-full mb-3" 
            placeholder="Search for Ingredients"
			v-model="keyword" >
        <RouterLink 
			:to="{name: 'by-ingredient', params: {ingredient: ingredient.strIngredient}}" 
			v-for="ingredient of computedIngredients" :key="ingredient.idIngredient" 
			class="bg-white rounded p-3 mb-3 shadow block"
		>
			<h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
			<p>{{ ingredient.strDescription }}</p>
		</RouterLink>
  </div>
</template>