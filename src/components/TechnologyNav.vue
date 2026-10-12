<script setup lang="ts">
import { useCompanyContent } from '@/content/company'
import { useTranslation } from '@/composables/useTranslation'
defineProps<{ active?: string }>()
const company = useCompanyContent()
const { currentLanguage } = useTranslation()
</script>
<template>
  <nav class="border-b border-slate-200 bg-white" :aria-label="currentLanguage === 'ko' ? '주요기술 메뉴' : 'Technology navigation'">
    <div class="inner flex flex-wrap gap-2 py-5">
      <router-link to="/technologies" class="rounded px-4 py-3 text-sm font-bold hover:bg-sky-50" :class="!active ? 'bg-sky-50 text-sky-700' : 'text-slate-600'" :aria-current="!active ? 'page' : undefined">{{ currentLanguage === 'ko' ? '주요기술 전체' : 'All technologies' }}</router-link>
      <router-link v-for="id in ['humanoid', 'twin-r-ax', 'automation', 'safety']" :key="id" :to="`/technologies/${id}`" class="rounded px-4 py-3 text-sm font-bold hover:bg-sky-50" :class="active === id ? 'bg-sky-50 text-sky-700' : 'text-slate-600'" :aria-current="active === id ? 'page' : undefined">{{ company.solutions.find(s => s.id === id)?.name }}</router-link>
    </div>
  </nav>
</template>
