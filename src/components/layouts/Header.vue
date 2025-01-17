<template>
  <header class="flex w-full justify-center items-center bg-white h-20">
    <div class="px-40 w-full flex items-center justify-between">
        <img src="@/assets/img/logo.png" alt="" class="w-[150px]">
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
  { text: '문의하기', link: '/contact' },
]);
</script>
