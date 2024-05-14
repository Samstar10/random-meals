<template>
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <RouterLink :to="{name: 'home'}" class="inline-flex items-center h-full px-5">Home</RouterLink>
      <div class="flex items-center gap-1 "> 
        <RouterLink :to="{name: 'by-name'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">Search Meals</RouterLink>
        <RouterLink :to="{name: 'by-letter'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">Meals By Letter</RouterLink>
        <RouterLink :to="{name: 'ingredients'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">Meals By Ingredients</RouterLink>
      </div>
    </header>
</template>