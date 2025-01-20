<template>
  <header class="flex items-center justify-center w-full h-20 bg-white">
    <div class="flex items-center justify-between w-full px-40">
      <router-link to="/">
        <img src="@/assets/img/logo.png" alt="" class="w-[150px]">
      </router-link>
        <div class="flex gap-10 font-bold">
          <router-link class="hover:text-sky-500" v-for="item in menuItems" :key="item.text" :to="item.link">{{ item.text }}</router-link>
        </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const menuItems = ref([
  { text: '회사 소개', link: '/about' },
  { text: '주요 기술', link: '/technologies' },
  { text: '언론•홍보', link: '/article' },
  { text: '문의하기', link: '/contact' },
]);
</script>
