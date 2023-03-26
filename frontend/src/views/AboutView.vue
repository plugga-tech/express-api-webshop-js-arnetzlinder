<script setup lang="ts">
import CreateUser from '@/components/CreateUser.vue';
</script>

<template>
  <div class="about">
    <CreateUser />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
