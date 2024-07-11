<template>
  <div>
    <p>{{ auth.name }}</p>
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    layout: 'page'
  })
  const auth = useAuth();
</script>

<style>

</style>