<script setup lang="ts">
import { computed, ref } from 'vue'
import { useCompanyContent } from '@/content/company'
import { useTranslation } from '@/composables/useTranslation'
import humanoid from '@/assets/img/carousel/humanoid.png'
import twin from '@/assets/img/carousel/twin.png'
import automation from '@/assets/img/robot-automation.png'
import safety from '@/assets/img/key-safety-driver.png'

const company = useCompanyContent()
const { currentLanguage } = useTranslation()
const order = ['humanoid', 'twin-r-ax', 'automation', 'safety'] as const
const images = { humanoid, 'twin-r-ax': twin, automation, safety }
const selected = ref<(typeof order)[number]>('humanoid')
const tabs = computed(() => order.map(id => company.value.solutions.find(s => s.id === id)!))
const videos: Record<string, string> = { humanoid: '/videos/humanoid.mp4', 'twin-r-ax': '/videos/twin-r-ax.mp4' }
const icons = ['pi pi-desktop', 'pi pi-sitemap', 'pi pi-chart-line', 'pi pi-history']

function navigateTab(event: KeyboardEvent, index: number) {
  let next = index
  if (event.key === 'ArrowRight') next = (index + 1) % order.length
  else if (event.key === 'ArrowLeft') next = (index + order.length - 1) % order.length
  else if (event.key === 'Home') next = 0
  else if (event.key === 'End') next = order.length - 1
  else return
  event.preventDefault()
  selected.value = order[next]!
  document.getElementById(`key-tab-${selected.value}`)?.focus()
}
</script>

<template>
  <section id="key-solutions" class="key-solutions" aria-labelledby="key-solutions-heading">
    <div class="key-inner">
      <p class="key-eyebrow">KEY SOLUTIONS</p>
      <h2 id="key-solutions-heading">{{ currentLanguage === 'ko' ? '제조 현장을 연결하는 핵심 솔루션' : 'Core solutions for connected manufacturing' }}</h2>
      <div class="key-tabs" role="tablist" :aria-label="currentLanguage === 'ko' ? '핵심 솔루션 선택' : 'Select a solution'">
        <button v-for="(tab, index) in tabs" :id="`key-tab-${tab.id}`" :key="tab.id" type="button" role="tab" :aria-selected="selected === tab.id" :aria-controls="`key-panel-${tab.id}`" :tabindex="selected === tab.id ? 0 : -1" @click="selected = order[index]!" @keydown="navigateTab($event, index)">{{ tab.name }}</button>
      </div>
      <div v-for="tab in tabs" v-show="selected === tab.id" :id="`key-panel-${tab.id}`" :key="tab.id" class="key-panel" role="tabpanel" :aria-labelledby="`key-tab-${tab.id}`" tabindex="0">
        <video v-if="videos[tab.id] && selected === tab.id" :key="tab.id" :src="videos[tab.id]" :aria-label="tab.name" class="key-video" controls autoplay muted loop playsinline preload="metadata"></video>
        <div v-else-if="videos[tab.id]" class="key-video"></div>
        <img v-else :src="images[tab.id as keyof typeof images]" :alt="tab.id === 'automation' ? (currentLanguage === 'ko' ? '로보틱박스 그리퍼와 로봇자동화 현장' : 'RoboticBox grippers and robot automation installation') : `${tab.name} ${currentLanguage === 'ko' ? '콘셉트 이미지' : 'concept illustration'}`" :class="['key-image', { 'key-image-full': tab.id === 'automation' || tab.id === 'safety' }]" loading="lazy" />
        <div class="key-copy">
          <p class="key-eyebrow">{{ tab.category }}</p>
          <h3>{{ tab.name }}</h3>
          <h4>{{ tab.title }}</h4>
          <p class="key-description">{{ tab.description }}</p>
          <ul class="key-features"><li v-for="(point, index) in tab.points" :key="point"><span :class="icons[index]" aria-hidden="true"></span><span>{{ point }}</span></li></ul>
          <router-link :to="`/technologies/${tab.id}`" class="key-more">{{ company.more }} <span aria-hidden="true">→</span></router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.key-solutions { width: 100%; padding: 80px 0 88px; background: #fff; color: #10263f; }
.key-inner { width: min(1280px, calc(100% - 64px)); margin: auto; }
.key-eyebrow { color: #28b4f3; font-size: 14px; font-weight: 700; letter-spacing: .12em; margin-bottom: 16px; }
h2 { font-size: clamp(28px, 3vw, 42px); font-weight: 800; letter-spacing: -.035em; line-height: 1.3; word-break: keep-all; }
.key-tabs { display: grid; grid-template-columns: repeat(4, 1fr); margin: 34px 0; border: 1px solid #dbe4ee; border-radius: 6px; overflow: hidden; }
.key-tabs button { padding: 22px 12px; font-size: 18px; font-weight: 700; border-bottom: 3px solid transparent; background: #fff; }
.key-tabs button + button { border-left: 1px solid #dbe4ee; }
.key-tabs button[aria-selected='true'] { color: #0287c5; background: #e5f5fe; border-bottom-color: #28b4f3; }
.key-tabs button:hover { background: #eff9ff; }
.key-tabs button:focus-visible, .key-more:focus-visible, .key-panel:focus-visible { outline: 3px solid #0287c5; outline-offset: -3px; }
.key-panel { display: grid; grid-template-columns: 1.1fr 1fr; gap: 42px; align-items: stretch; }
.key-image { width: 100%; height: 100%; min-height: 490px; max-height: 660px; object-fit: cover; object-position: 65% center; border-radius: 6px; }
.key-video { width: 100%; aspect-ratio: 16 / 9; align-self: center; object-fit: contain; background: #080d14; border-radius: 6px; }
.key-image.key-image-full { height: auto; min-height: 0; max-height: none; aspect-ratio: auto; object-fit: contain; object-position: center; align-self: center; border-radius: 6px; clip-path: inset(0 round 6px); }
.key-copy { padding: 4px 0; }
.key-copy .key-eyebrow { font-size: 12px; }
h3 { font-size: clamp(32px, 3.3vw, 48px); font-weight: 800; letter-spacing: -.035em; line-height: 1.2; margin-bottom: 18px; word-break: keep-all; }
h4 { font-size: 22px; font-weight: 800; line-height: 1.4; word-break: keep-all; }
.key-description { font-size: 16px; line-height: 1.8; color: #4b6077; margin-top: 18px; word-break: keep-all; }
.key-features { margin: 22px 0; }
.key-features li { display: flex; align-items: center; gap: 18px; padding: 14px 0; font-size: 15px; line-height: 1.5; font-weight: 700; }
.key-features li + li { border-top: 1px solid #dde5ee; }
.key-features .pi { flex: 0 0 44px; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; border-radius: 50%; color: #20aff0; background: #eaf7ff; font-size: 21px; }
.key-more { display: inline-flex; align-items: center; gap: 28px; padding: 15px 26px; border-radius: 4px; background: #12a9ee; color: white; font-size: 16px; font-weight: 700; }
.key-more:hover { background: #078bc9; }
@media (max-width: 900px) { .key-panel { gap: 28px; grid-template-columns: 1fr 1fr; } .key-tabs button { font-size: 15px; } }
@media (max-width: 700px) {
  .key-solutions { padding: 52px 0; }
  .key-inner { width: calc(100% - 40px); }
  .key-tabs { grid-template-columns: repeat(2, 1fr); margin: 24px 0; }
  .key-tabs button { padding: 16px 8px; }
  .key-tabs button:nth-child(3) { border-left: 0; }
  .key-tabs button:nth-child(n+3) { border-top: 1px solid #dbe4ee; }
  .key-panel { grid-template-columns: 1fr; gap: 26px; }
  .key-image { min-height: 0; height: auto; aspect-ratio: 4 / 3; }
  h4 { font-size: 20px; }
}
</style>
