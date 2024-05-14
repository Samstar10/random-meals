<script setup>
import store from '@/store';
import { computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router';
import axiosClient from '../axiosClient.js'


onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list')
  console.log(response.data)

})
</script>

<template>
  <div class="flex flex-col p-8">
    

      
  </div>
</template>
