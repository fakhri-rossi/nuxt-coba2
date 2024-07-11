<template>
  <div class="flex items-center justify-between dark:bg-slate-800 px-3">
    <div class="flex items-center gap-5 h-[38px]">
      <NuxtLink v-for="(menu, i) in menus" :key="i" :to="menu.to">{{ menu.label }}</NuxtLink>
    </div>

    <div>
      <ElementsColorMode />
    </div>
  </div>
</template>

<script setup>
  const menus = [
    {label: 'Home', to:'/'},
    {label: 'projecs', to:'/projects'},
    {label: 'contacts', to:'/'},
  ]
</script>

<style>
  
</style>