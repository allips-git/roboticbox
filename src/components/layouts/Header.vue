<template>
  <header class="flex justify-center items-center w-full bg-white md:h-20">
    <div class="flex flex-col items-center pt-4 w-full sm:pt-4.5 sm:pb-3.5 sm:pl-4 sm:flex-row sm:justify-between max-w-[1280px]">
      <h1>
        <router-link to="/">
          <img src="@/assets/img/logo.png" alt="주식회사 로보틱박스" class="w-[7rem] sm:w-[9rem]">
        </router-link>
      </h1>
      <div class="flex justify-between sm:justify-end sm:gap-4">
        <router-link class="px-4 py-3 whitespace-nowrap font-bold text-[0.9375rem] sm:text-base hover:text-sky-500" v-for="item in menuItems" :key="item.text" :to="item.link">{{ item.text }}</router-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const menuItems = ref([
  { text: '회사 소개', link: '/about' },
  { text: '주요 기술', link: '/technologies' },
  { text: '언론·홍보', link: '/article' },
  { text: '문의하기', link: '/contact' },
]);
</script>
