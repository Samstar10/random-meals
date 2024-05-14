<script setup>
import MealItem from '@/components/MealItem.vue';
import YoutubeButton from '@/components/YoutubeButton.vue';
import store from '@/store';
import { ref, computed, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router';
import Meals from '@/components/Meals.vue'



const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)
const route = useRoute()

function searchMeals(){
	if (keyword.value){
		store.dispatch('searchMeals', keyword.value)
	}else {
		store.commit('setSearchedMeals', [])
	}
}

onMounted(() => {
	keyword.value = route.params.name
	if (keyword.value) {
		searchMeals()
	}
})
</script>


<template>
  <div class="p-8 pb-0">
    <input 
      type="text" 
      class="rounded border-2 border-gray-200 w-full" 
      placeholder="Search for Meals"
			v-model="keyword"
			@change="searchMeals" >
  </div>
	<Meals :meals="meals" />
</template>