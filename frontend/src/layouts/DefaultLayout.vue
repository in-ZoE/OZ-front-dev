<script setup>
import { useRouter } from 'vue-router';
import logo from '@/assets/logo.svg';

const router = useRouter();
const goHome = () => router.push('/');
</script>

<template>
  <div class="min-h-screen flex flex-col bg-background-soft text-text-base">
    <!-- Header -->
    <header
      class="h-16 flex items-center justify-between px-6 border-b border-border-base bg-background-base"
    >
      <div class="flex items-center gap-3 cursor-pointer" @click="goHome">
        <img
          :src="logo"
          alt="logo"
          class="w-10 h-10 rounded-full object-contain"
        />
        <span class="text-lg font-semibold">OZea</span>
      </div>

      <nav class="flex items-center gap-4 text-sm text-text-muted">
        <RouterLink to="/" class="hover:text-text-base transition">
          홈
        </RouterLink>
        <RouterLink to="/goals" class="hover:text-text-base transition">
          목표 관리
        </RouterLink>
        <RouterLink
          to="/tax-management"
          class="hover:text-text-base transition"
        >
          세금 계산
        </RouterLink>
        <RouterLink to="/product" class="hover:text-text-base transition">
          금융상품
        </RouterLink>
      </nav>
    </header>

    <!-- Main -->
    <main class="flex-1 px-6 py-8">
      <slot />
    </main>

    <!-- Footer -->
    <footer
      class="h-14 flex items-center justify-center text-sm text-text-light"
    >
      © 2025 OZea. All rights reserved.
    </footer>
  </div>
</template>
