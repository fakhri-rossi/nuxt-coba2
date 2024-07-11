<template>
  <div class="px-4">
    <ElementsBackButton />
    <h1 class="text-4xl">Hello from index</h1>
    <p>name: {{ name }}</p>
    <p>name: {{ reactiveName }}</p>

    <p>x: {{ auth.x }}</p>

    <!-- <form @submit.prevent="auth.setName(newName)"> -->
      <UInput type="text" v-model="newName" />

      <UButton @click="auth.setName(newName)" label="change name" />

      <UInput type="text" v-model="auth.x.value" />

      <UButton @click="auth.setX('ll')" label="change name" />
    <!-- </form> -->
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    layout: 'page'
  })

  const newName = ref('');

  const { name } = useAuth();
  const auth = useAuth();

  const reactiveName = ref(name)
  
</script>

<style>

</style>