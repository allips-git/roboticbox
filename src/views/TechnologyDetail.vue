<script setup lang="ts">
import { computed } from 'vue'
import { useCompanyContent } from '@/content/company'
import { technologyDetails } from '@/content/technologyDetails'
import { useTranslation } from '@/composables/useTranslation'
import TechnologyNav from '@/components/TechnologyNav.vue'
import automation from '@/assets/img/robot-automation.png'
const props = defineProps<{ id: string }>()
const company = useCompanyContent()
const { currentLanguage } = useTranslation()
const solution = computed(() => company.value.solutions.find(s => s.id === props.id)!)
const detail = computed(() => technologyDetails[props.id]!)
const local = (text: [string, string]) => text[currentLanguage.value === 'ko' ? 0 : 1]
const video = computed(() => props.id === 'humanoid' ? '/videos/humanoid.mp4' : props.id === 'twin-r-ax' ? '/videos/twin-r-ax.mp4' : '')
</script>
<template>
  <main class="technology-detail">
    <header class="detail-hero">
      <div class="inner">
        <p class="eyebrow">{{ solution.category }}</p>
        <h1>{{ solution.name }}</h1>
        <p class="hero-description">{{ solution.title }}</p>
        <div class="hero-links">
          <a href="#overview">{{ local(['기술 개요', 'Overview']) }} ↓</a>
          <a href="#features">{{ local(id === 'humanoid' ? ['기술 분야', 'Technical areas'] : ['주요 기능', 'Capabilities']) }} ↓</a>
          <a href="#applications">{{ local(['현장 적용', 'Applications']) }} ↓</a>
        </div>
      </div>
    </header>
    <TechnologyNav :active="id" />
    <section id="overview" class="detail-section inner">
      <div class="overview-copy">
        <p class="eyebrow">OVERVIEW</p>
        <h2>{{ solution.title }}</h2>
        <p>{{ solution.description }}</p>
        <p>{{ local(detail.intro) }}</p>
      </div>
      <figure v-if="id !== 'humanoid'" class="overview-media">
        <video v-if="video" :key="video" :src="video" :aria-label="solution.name" controls muted playsinline preload="metadata"></video>
        <img v-else :src="automation" :alt="solution.name" />
      </figure>
      <ul class="capability-strip"><li v-for="(point, index) in solution.points" :key="point"><span>0{{ index + 1 }}</span>{{ point }}</li></ul>
    </section>
    <section v-if="id === 'humanoid'" class="inner motion-section">
      <p class="eyebrow">HUMANOID MOTION</p>
      <h2>{{ local(['움직임으로 살펴보는 휴머노이드', 'Humanoids in motion']) }}</h2>
      <div class="motion-gallery">
        <figure class="motion-video">
          <h3>{{ local(['휴머노이드 동작', 'Humanoid motion']) }}</h3>
          <video src="/videos/humanoid-motion.mp4" poster="/videos/humanoid-motion-poster.jpg" :aria-label="local(['휴머노이드 동작', 'Humanoid motion'])" controls muted loop playsinline preload="metadata"></video>
        </figure>
        <figure>
          <h3>{{ local(['시뮬레이션 환경', 'Simulation environment']) }}</h3>
          <video src="/videos/humanoid.mp4" :aria-label="local(['휴머노이드 시뮬레이션', 'Humanoid simulation'])" controls muted playsinline preload="metadata"></video>
        </figure>
      </div>
    </section>
    <section class="flow-section">
      <div class="inner">
        <p class="eyebrow">{{ id === 'humanoid' ? 'TECHNOLOGY FOCUS' : id === 'twin-r-ax' ? 'PLATFORM WORKFLOW' : 'SERVICE FLOW' }}</p>
        <h2>{{ local(id === 'humanoid' ? ['휴머노이드와 현장을 잇는 기술 요소', 'Technical connections between humanoids and the factory floor'] : id === 'twin-r-ax' ? ['공장 구성에서 운영까지, 하나의 흐름으로', 'From factory configuration to operations'] : ['공정 검토부터 현장 가동까지', 'From process review to commissioning']) }}</h2>
        <ol class="flow-grid" :style="{ '--flow-count': detail.flow.length }">
          <li v-for="(step, index) in detail.flow" :key="step.title[0]"><span class="flow-number">0{{ index + 1 }}</span><h3>{{ local(step.title) }}</h3><p>{{ local(step.text) }}</p></li>
        </ol>
      </div>
    </section>
    <section id="features" class="detail-section inner">
      <p class="eyebrow">CORE TECHNOLOGY</p>
      <h2>{{ local(id === 'humanoid' ? ['현장 연계를 위한 기술', 'Technology for factory integration'] : ['주요 기술과 기능', 'Technology and capabilities']) }}</h2>
      <article v-for="(feature, index) in detail.features" :key="feature.title[0]" class="feature-row" :class="{ reverse: index % 2 === 1 }">
        <div class="feature-copy">
          <span class="feature-number">0{{ index + 1 }}</span>
          <h3>{{ local(feature.title) }}</h3>
          <p v-for="paragraph in feature.paragraphs" :key="paragraph[0]">{{ local(paragraph) }}</p>
          <ul class="tags"><li v-for="label in feature.labels" :key="label[0]">{{ local(label) }}</li></ul>
        </div>
        <figure v-if="feature.image" class="feature-visual">
          <img :src="feature.image" :alt="local(feature.alt || feature.title)" loading="lazy" />
        </figure>
        <div v-else class="architecture" :aria-label="local(feature.title)">
          <p class="diagram-label">{{ local(id === 'humanoid' ? ['연계 요소', 'Integration elements'] : ['기능 구성', 'Functional structure']) }}</p>
          <template v-if="id === 'humanoid' && index === 1">
            <div class="diagram-node">{{ local(['작업 명령', 'Task command']) }}</div><span class="connector">↓</span>
            <div class="diagram-node primary">{{ local(['휴머노이드 실행제어', 'Humanoid execution control']) }}</div>
            <div class="diagram-pair"><span>{{ local(['로봇 인터페이스', 'Robot interface']) }}</span><span>{{ local(['PLC · 설비 신호', 'PLC · Equipment signals']) }}</span></div>
            <p class="diagram-foot">{{ local(['명령 전달 → 작업 실행 → 완료 신호 확인', 'Command → Execution → Completion feedback']) }}</p>
          </template>
          <template v-else-if="id === 'humanoid'">
            <div class="diagram-node primary">{{ local(['로봇별 운영 이력', 'Per-robot operating history']) }}</div>
            <div v-for="label in feature.labels" :key="label[0]" class="history-row"><span class="history-dot"></span>{{ local(label) }}<span class="history-line"></span></div>
            <p class="diagram-foot">{{ local(['작업 단계와 결과를 함께 확인', 'Review task stages alongside results']) }}</p>
          </template>
          <template v-else-if="index === 1">
            <div class="diagram-pair"><span>{{ local(['설비 · 센서', 'Equipment · Sensors']) }}</span><span>MES · DB · AI</span></div>
            <span class="connector">↓</span><div class="diagram-node primary">TWIN R-AX</div><span class="connector">↓</span>
            <div class="diagram-pair"><span>{{ local(['운영 대시보드', 'Dashboards']) }}</span><span>{{ local(['현장 시스템', 'Site systems']) }}</span></div>
          </template>
          <template v-else>
            <div class="diagram-node primary">{{ local(['공간 정보 + 운영데이터', 'Spatial context + Operational data']) }}</div>
            <span class="connector">↓</span><div class="diagram-node">{{ local(['상태 · 대기 · 오류 · 복구', 'Status · Waiting · Errors · Recovery']) }}</div>
            <span class="connector">↓</span><div class="diagram-node">{{ local(['현장 확인과 대응 절차', 'Site review and response procedures']) }}</div>
          </template>
        </div>
      </article>
    </section>
    <section id="applications" class="applications-section">
      <div class="inner">
        <p class="eyebrow">APPLICATION</p><h2>{{ local(id === 'humanoid' ? ['제조현장과의 접점', 'Connections with manufacturing'] : ['현장에 맞춘 적용 구성', 'Configured for your factory floor']) }}</h2>
        <p class="section-intro">{{ local(['공정과 설비 조건을 검토해 적용 범위와 연동 방식을 구성합니다.', 'Define integration and application scope around your process and equipment conditions.']) }}</p>
        <div class="application-grid"><article v-for="item in detail.applications" :key="item.title[0]"><h3>{{ local(item.title) }}</h3><p>{{ local(item.text) }}</p></article></div>
      </div>
    </section>
    <section class="detail-section inner">
      <div class="contact-panel"><div><p class="eyebrow">LET’S CONNECT</p><h2>{{ local(['우리 현장에는 어떻게 적용할까요?', 'How would this work at your site?']) }}</h2><p>{{ local(['작업 대상과 설비 구성, 운영 환경을 알려주세요. 현장에 맞는 기술 구성을 함께 검토하겠습니다.', 'Share your workpieces, equipment and operating environment. We will review the right technical configuration together.']) }}</p></div><router-link to="/contact" class="contact-button">{{ company.contact }} →</router-link></div>
      <router-link to="/technologies" class="back-link">← {{ local(['주요기술 전체 보기', 'Explore all technologies']) }}</router-link>
    </section>
  </main>
</template>
<style scoped>
.technology-detail { color:#13263d; }
.detail-hero { padding:76px 0 62px; background:#0d0f18; color:white; }
.eyebrow { color:#28b4f3; font-size:13px; font-weight:800; letter-spacing:.14em; margin-bottom:18px; }
h1 { font-size:clamp(34px,4vw,56px); font-weight:800; line-height:1.2; }
h2 { font-size:clamp(25px,2.6vw,36px); font-weight:800; line-height:1.4; word-break:keep-all; }
.hero-description { margin-top:20px; font-size:21px; color:#cbd5e1; }
.hero-links { display:flex; gap:28px; flex-wrap:wrap; margin-top:36px; font-size:14px; color:#bde9fc; }
.hero-links a:hover,.back-link:hover { color:#0284c7; }
.detail-section { padding-top:80px; padding-bottom:80px; scroll-margin-top:24px; }
.overview-copy { max-width:880px; margin:auto; text-align:center; }
.overview-copy > p:not(.eyebrow) { color:#516174; line-height:1.9; margin-top:20px; word-break:keep-all; }
.overview-media { max-width:1000px; margin:38px auto 0; }
video,.overview-media img { width:100%; border-radius:8px; }
video { background:#0d0f18; max-height:600px; }
.capability-strip { display:grid; grid-template-columns:repeat(auto-fit,minmax(210px,1fr)); margin-top:44px; border:1px solid #e2e8f0; border-radius:6px; overflow:hidden; }
.capability-strip li { padding:24px; font-size:15px; font-weight:700; line-height:1.7; background:#f8fafc; }
.capability-strip span { display:block; color:#0284c7; font-size:13px; margin-bottom:8px; }
.flow-section { padding:64px 0; background:#eff6fa; text-align:center; }
.flow-grid { display:grid; grid-template-columns:repeat(var(--flow-count),minmax(0,1fr)); gap:20px; margin-top:36px; text-align:left; }
.flow-grid li { border-top:2px solid #38bdf8; padding-top:20px; }
.flow-number { font-size:14px; font-weight:800; color:#0284c7; }
.flow-grid h3 { font-size:18px; font-weight:800; margin-top:12px; }
.flow-grid p { font-size:14px; color:#516174; line-height:1.8; margin-top:10px; word-break:keep-all; }
.feature-row { display:grid; grid-template-columns:1fr 1fr; align-items:center; gap:64px; padding:60px 0; border-bottom:1px solid #e2e8f0; }
.feature-row:last-child { border-bottom:0; padding-bottom:0; }
.feature-row.reverse .feature-copy { order:2; }
.feature-number { font-size:36px; font-weight:800; color:#b4e5fa; }
.feature-copy h3 { font-size:clamp(23px,2.2vw,29px); font-weight:800; margin:12px 0 24px; line-height:1.4; word-break:keep-all; }
.feature-copy p { color:#516174; line-height:1.9; margin-top:16px; word-break:keep-all; }
.tags { display:flex; flex-wrap:wrap; gap:8px; margin-top:24px; }
.tags li { font-size:12px; color:#036995; background:#eaf7fd; border-radius:4px; padding:8px 12px; }
.feature-visual img { width:100%; border-radius:8px; }
.motion-section { padding-bottom:80px; }
.motion-gallery { display:grid; grid-template-columns:minmax(0, .8fr) minmax(0, 1.2fr); gap:40px; align-items:center; margin-top:32px; }
.motion-gallery h3 { font-size:18px; font-weight:700; margin-bottom:16px; }
@media(max-width:640px) { .motion-gallery { grid-template-columns:1fr; } .motion-section { padding-bottom:48px; } }
.motion-video { width:100%; max-width:440px; justify-self:center; }
.motion-video video { display:block; width:100%; max-height:none; aspect-ratio:4 / 5; object-fit:contain; }
.architecture { background:#f2f6fa; border:1px solid #dce6ee; padding:32px; border-radius:8px; text-align:center; }
.diagram-label { font-size:12px; color:#64748b; margin-bottom:24px; letter-spacing:.1em; }
.diagram-node { padding:18px 12px; border:1px solid #d7e2eb; background:white; border-radius:5px; font-weight:700; }
.diagram-node.primary { background:#12324f; color:white; border-color:#12324f; }
.connector { display:block; color:#38a9dc; padding:10px; font-size:22px; }
.diagram-pair { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
.diagram-pair span { padding:18px 10px; background:white; border:1px solid #d7e2eb; border-radius:5px; font-size:14px; }
.primary + .diagram-pair { margin-top:16px; }
.diagram-foot { font-size:12px; color:#516174; margin-top:22px; line-height:1.8; }
.history-row { display:flex; align-items:center; gap:12px; margin-top:16px; background:white; padding:17px; font-size:14px; }
.history-dot { width:8px; height:8px; border-radius:50%; background:#38bdf8; flex-shrink:0; }
.history-line { height:3px; flex:1; background:#e2e8f0; }
.applications-section { padding:64px 0; background:#f4f5f6; scroll-margin-top:24px; }
.section-intro { color:#516174; margin-top:18px; line-height:1.8; }
.application-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-top:32px; }
.application-grid article { background:white; border:1px solid #e2e8f0; border-radius:6px; padding:28px; }
.application-grid h3 { font-size:19px; font-weight:800; }
.application-grid p { line-height:1.8; color:#516174; margin-top:14px; word-break:keep-all; }
.contact-panel { display:flex; align-items:center; gap:40px; justify-content:space-between; padding:40px; border:1px solid #dce6ee; border-radius:8px; }
.contact-panel p:not(.eyebrow) { margin-top:18px; color:#516174; line-height:1.8; max-width:700px; }
.contact-button { background:#0ea5e9; color:white; padding:17px 24px; border-radius:4px; white-space:nowrap; font-weight:700; }
.contact-button:hover { background:#0284c7; }
.back-link { display:inline-block; margin-top:30px; font-size:14px; color:#516174; }
a:focus-visible { outline:3px solid #0284c7; outline-offset:5px; }
@media(max-width:900px) { .feature-row{gap:32px;} .flow-grid{grid-template-columns:repeat(3,1fr);} .contact-panel{align-items:flex-start;flex-direction:column;} }
@media(max-width:640px) { .detail-hero{padding:48px 0;} .detail-section{padding-top:48px;padding-bottom:48px;} .flow-section,.applications-section{padding:44px 0;} .flow-grid{grid-template-columns:repeat(2,1fr);} .feature-row{grid-template-columns:1fr;padding:36px 0;gap:28px;} .feature-row.reverse .feature-copy{order:0;} .application-grid{grid-template-columns:1fr;} .capability-strip{grid-template-columns:1fr;} .architecture,.contact-panel{padding:24px;} .hero-links{gap:20px;} }
</style>
