<script setup>
import { RouterView, useRoute } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const route = useRoute();
</script>

<template>
  <!-- Default Layout Pages -->
  <DefaultLayout v-if="route.meta.layout !== 'none'">
    <RouterView />
  </DefaultLayout>

  <!-- Layout None Pages -->
  <div v-else class="min-h-screen bg-background-soft w-full overflow-x-hidden">
    <RouterView />
  </div>
</template>
