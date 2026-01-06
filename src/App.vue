

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
import { useLanguageStore } from '@/stores/language'

const languageStore = useLanguageStore()

onMounted(() => {
  languageStore.initLanguage()
})
</script>

<style scoped>

</style>
