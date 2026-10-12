<script setup lang="ts">
import { computed } from 'vue'
import { useCompanyContent } from '@/content/company'
import { useTranslation } from '@/composables/useTranslation'
import TechnologyNav from '@/components/TechnologyNav.vue'
import humanoid from '@/assets/img/carousel/humanoid.png'
import twin from '@/assets/img/carousel/twin.png'
import automation from '@/assets/img/robot-automation.png'
import safety from '@/assets/img/key-safety-driver.png'
const company = useCompanyContent()
const { currentLanguage } = useTranslation()
const cards = computed(() => ['humanoid', 'twin-r-ax', 'automation', 'safety'].map(id => company.value.solutions.find(s => s.id === id)!))
const images: Record<string, string> = { humanoid, 'twin-r-ax': twin, automation, safety }
</script>
<template>
  <main>
    <header class="bg-[#0D0F18] py-16 text-white sm:py-20">
      <div class="inner">
        <p class="mb-4 text-sm font-bold tracking-widest text-sky-400">TECHNOLOGIES</p>
        <h1 class="text-3xl font-extrabold sm:text-5xl">{{ currentLanguage === 'ko' ? '제조 현장을 연결하는 주요기술' : 'Technologies for connected manufacturing' }}</h1>
        <p class="mt-5 max-w-3xl leading-8 text-slate-300">{{ currentLanguage === 'ko' ? '휴머노이드 관제부터 제조 플랫폼, 로봇자동화와 AI 안전관제까지. 필요한 기술을 선택해 기능과 적용 방식을 살펴보세요.' : 'Explore humanoid supervision, manufacturing platforms, robot automation and AI safety monitoring.' }}</p>
      </div>
    </header>
    <TechnologyNav />
    <section class="inner py-12 sm:py-16" :aria-label="currentLanguage === 'ko' ? '기술 분야 선택' : 'Choose a technology'">
      <div class="grid gap-7 md:grid-cols-2">
        <router-link v-for="(card, index) in cards" :key="card.id" :to="`/technologies/${card.id}`" class="group overflow-hidden rounded-md border border-slate-200 bg-white transition-shadow hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500">
          <img :src="images[card.id]" :alt="card.name" class="aspect-[16/9] w-full object-cover" loading="lazy" />
          <div class="p-6 sm:p-8">
            <p class="mb-3 text-xs font-bold tracking-widest text-sky-600">0{{ index + 1 }} / {{ card.category }}</p>
            <h2 class="text-2xl font-extrabold text-slate-900">{{ card.name }}</h2>
            <p class="mt-3 text-lg font-bold text-slate-700">{{ card.title }}</p>
            <p class="mt-4 leading-7 text-slate-600 break-keep">{{ card.description }}</p>
            <span class="mt-6 inline-block font-bold text-sky-600">{{ company.more }} →</span>
          </div>
        </router-link>
      </div>
    </section>
  </main>
</template>
