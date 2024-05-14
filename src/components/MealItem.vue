<script setup>
import YoutubeButton from './YoutubeButton.vue';

const props = defineProps({
    meal: {
			required: true,
			type: Object
		}
})
</script>



<template>
    <div class="bg-white shadow rounded-xl">
			<RouterLink :to="{name: 'meal-details', params: {id: meal.idMeal}}">
				<img 
					:src="meal.strMealThumb" 
					:alt="meal.strMeal" 
					class="rounded-t-xl h-48 w-full object-cover">
			</RouterLink>
			<div class="p-3">
				<h3 class="font-bold">{{ meal.strMeal }}</h3>
				<p class="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eos rerum voluptates iusto minus eveniet sint ex.</p>
				<div class="flex items-center justify-between">
					<YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
			</div>
			</div>
		</div>
</template>