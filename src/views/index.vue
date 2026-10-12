<template>
  <main class="flex flex-col justify-center items-center w-full">
    <section
      class="w-full relative overflow-hidden max-h-[22rem] sm:max-h-[30rem] lg:max-h-[40rem] xl:max-h-[48rem] h-screen"
    >
      <div class="absolute inset-0 w-full bg-[#0d0f18]">
        <div class="absolute inset-0 z-10 hero-navy-overlay"></div>
        <img
          src="@/assets/img/hero-manufacturing.png"
          class="hero-artwork"
          alt=""
        />
      </div>
      <div class="absolute inset-0 z-20 w-full">
        <div class="inner pt-[5rem] sm:pt-[7rem] lg:pt-[12rem]">
          <h1
            class="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl line-h-20"
            v-html="t('home.hero.title')"
          ></h1>
          <p class="mt-2 text-lg font-bold text-white sm:mt-4 lg:text-xl lg:mt-6">
            {{ t('home.hero.subtitle') }}
          </p>
          <button
            @click.prevent="scrollToSection"
            class="mt-12 sm:mt-14 lg:mt-[6rem] border border-white rounded-sm flex-none w-[8rem] text-white py-3 flex items-center justify-center"
          >
            {{ t('home.hero.button') }}<span class="ml-2">&gt;</span>
          </button>
        </div>
      </div>
    </section>

    <section id="about" class="flex items-center justify-center w-full flex-col bg-[#0D0F18] py-14">
      <h2 class="text-2xl font-extrabold text-center text-sky-400 md:text-3xl lg:text-4xl roboto">
        {{ t('home.about.title') }}
      </h2>
      <h3
        class="mt-6 text-lg font-bold text-center text-white md:mt-8 md:text-xl lg:text-2xl break-keep"
        v-html="t('home.about.heading')"
      ></h3>
      <p class="mt-3 text-center text-gray-500 lg:mt-4 break-keep">
        {{ t('home.about.description') }}
      </p>
      <router-link
        to="/about"
        class="flex justify-center items-center w-[8rem] py-3 mt-4 sm:mt-5 lg:mt-8 text-white rounded-sm border border-whitet"
      >
        {{ t('home.about.button') }}<span class="ml-2">></span>
      </router-link>

      <swiper v-bind="swiperOptions" @swiper="onSwiper" class="mt-8 sm:mt-10 lg:mt-12" :aria-label="currentLanguage === 'ko' ? '주요 솔루션' : 'Our solutions'">
        <swiper-slide v-for="slide in carouselSlides" :key="slide.id">
          <div class="swiper_container">
            <div class="swiper_contents gra-back-row">
              <h4 class="w-full text-xl font-bold text-sky-300 sm:text-2xl lg:text-3xl">{{ slide.title }}</h4>
              <p class="mt-2 text-sm text-white sm:mt-4 lg:mt-4 sm:text-base lg:text-lg break-keep">{{ slide.description }}</p>
            </div>
            <div class="swiper-dim">
              <div class="w-40 h-40"></div>
              <img :src="slide.image" :alt="slide.alt" class="slide-image aspect-[4/3] rounded-sm" />
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <button type="button" class="mt-5 px-4 py-2 text-sm text-sky-200 border border-sky-200/50 rounded-sm" :aria-pressed="isPaused" @click="toggleAutoplay">
        {{ currentLanguage === 'ko' ? (isPaused ? '자동 재생' : '일시정지') : (isPaused ? 'Play slideshow' : 'Pause slideshow') }}
      </button>
    </section>
    <div class="relative w-full">
      <div class="triangle absolute z-[100]"></div>
      <div class="absolute -top-2 w-full">
        <div class="bg-[#0D0F18] w-full h-6"></div>
        <div class="triangle-2"></div>
      </div>
    </div>

    <section
      class="w-full pt-[13rem] lg:pt-[15rem] pb-[6rem] sm:pb-12 md:pb-[10rem] lg:pb-pb-[10rem] xl:pb-[10rem] bg-[#f4f5f6]"
    >
      <div class="inner">
        <h2 class="text-2xl font-extrabold text-center text-sky-400 md:text-3xl lg:text-4xl roboto">
          {{ t('home.technologies.title') }}
        </h2>
        <h3 class="mt-6 text-lg font-bold text-center md:mt-8 md:text-xl lg:text-2xl break-keep">
          {{ currentLanguage === 'ko' ? '로봇을 움직이고, 데이터를 연결하고, 현장을 살피는 기술' : 'Technology that moves robots, connects data and monitors operations' }}
        </h3>
        <p class="mt-3 text-center text-slate-600 lg:mt-4 break-keep">
          {{ currentLanguage === 'ko' ? '로봇·설비의 실행제어부터 제조데이터 연계와 안전 모니터링까지, 실제 현장에서 작동하는 시스템을 만듭니다.' : 'We build systems for real factory floors—from robot and equipment execution control to manufacturing data integration and safety monitoring.' }}
        </p>
        <div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article v-for="(item, index) in technicalCapabilities" :key="item.title" class="rounded-md border border-slate-200 bg-white p-6 lg:p-7">
            <div class="mb-6 flex items-center justify-between">
              <span :class="['pi', item.icon, 'text-2xl text-sky-500']" aria-hidden="true"></span>
              <span class="text-sm font-bold tracking-widest text-slate-400">0{{ index + 1 }}</span>
            </div>
            <h4 class="text-lg font-bold text-slate-900">{{ item.title }}</h4>
            <p class="mt-3 text-sm leading-7 text-slate-600 break-keep">{{ item.description }}</p>
            <p class="mt-5 border-t border-slate-100 pt-4 text-xs font-semibold leading-6 text-sky-700">{{ item.tags }}</p>
          </article>
        </div>
        <div class="mt-8 flex flex-col gap-5 rounded-md border border-slate-200 px-6 py-5 md:flex-row md:items-center md:justify-between">
          <p class="font-bold text-slate-800">{{ currentLanguage === 'ko' ? '현장에 맞게 연결하고, 실제 운영까지' : 'From on-site integration to daily operations' }}</p>
          <ol class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
            <li v-for="(step, index) in technicalSteps" :key="step" class="flex items-center gap-4">
              <span v-if="index" aria-hidden="true" class="text-sky-500">→</span>{{ step }}
            </li>
          </ol>
        </div>
      </div>
    </section>

    <KeySolutions />
  </main>
</template>

<script lang="ts" setup>
import { ref, shallowRef, computed } from 'vue'
import { businessAreas } from '@/content/businessAreas'
import KeySolutions from '@/components/KeySolutions.vue'
import type { Swiper as SwiperInstance } from 'swiper'
import { useCompanyContent } from '@/content/company'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import { Navigation, Autoplay, A11y } from 'swiper/modules'
import { useTranslation } from '@/composables/useTranslation'

const { t, currentLanguage } = useTranslation()
const technicalCapabilities = computed(() => currentLanguage.value === 'ko' ? [
  { icon: 'pi-cog', title: '로봇·설비 실행제어', description: '휴머노이드와 산업용 로봇의 작업 명령을 설비 신호와 연결합니다. PLC·비전·센서를 통합해 현장 조건에 맞는 작업 실행을 지원합니다.', tags: '로봇 인터페이스 · PLC · 작업셀 연동' },
  { icon: 'pi-database', title: '제조데이터 연결', description: '설비 상태와 생산데이터를 수집하고 MES·데이터베이스와 연계합니다. 흩어진 현장 정보를 모니터링과 운영에 활용합니다.', tags: '설비 데이터 · MES 연계 · 데이터 흐름' },
  { icon: 'pi-desktop', title: '3D 현장 모니터링', description: '공장과 설비를 3D 환경으로 구성하고 실제 운영데이터를 연결합니다. 작업 상태와 대기·오류·복구 이력을 함께 확인합니다.', tags: '3D 공장 구성 · 상태 시각화 · 운영 이력' },
  { icon: 'pi-eye', title: 'AI 비전·안전 모니터링', description: '천장 CCTV와 AprilTag로 지게차를 식별하고 운전자에게 주변 탑뷰를 제공합니다. 현장 영상으로 작업 공간의 상황을 확인합니다.', tags: '영상 인식 · AprilTag · 운전자 탑뷰' },
] : [
  { icon: 'pi-cog', title: 'Robot & equipment control', description: 'Connect humanoid and industrial robot commands with equipment signals. Integrate PLCs, vision and sensors for execution under on-site conditions.', tags: 'Robot interfaces · PLCs · Workcell integration' },
  { icon: 'pi-database', title: 'Manufacturing data', description: 'Collect equipment states and production data, then connect MES and databases to support monitoring and operations.', tags: 'Equipment data · MES integration · Data flows' },
  { icon: 'pi-desktop', title: '3D factory monitoring', description: 'Build 3D factory and equipment environments connected to operating data. View task states, waiting, errors and recovery history.', tags: '3D environments · Status views · Operating history' },
  { icon: 'pi-eye', title: 'AI vision & safety', description: 'Identify forklifts using overhead CCTV and AprilTag markers, providing drivers with a top view of their surroundings.', tags: 'Vision · AprilTag · Driver top view' },
])
const technicalSteps = computed(() => currentLanguage.value === 'ko'
  ? ['현장 요구 분석', '시스템 연동', '설치·시운전', '운영 지원']
  : ['Site assessment', 'Integration', 'Commissioning', 'Operational support'])
const modules = [Navigation, Autoplay, A11y]
const swiperInstance = shallowRef<SwiperInstance>()
const isPaused = ref(false)
const company = useCompanyContent()
const onSwiper = (swiper: SwiperInstance) => {
  swiperInstance.value = swiper
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    isPaused.value = true
    swiper.autoplay.stop()
  }
}
const toggleAutoplay = () => {
  isPaused.value = !isPaused.value
  if (isPaused.value) swiperInstance.value?.autoplay.stop()
  else swiperInstance.value?.autoplay.start()
}
const carouselSlides = computed(() => businessAreas(currentLanguage.value === 'ko'))

import indexList01 from '@/assets/img/index_list_01.png'
import indexList02 from '@/assets/img/index_list_02.png'
import indexList03 from '@/assets/img/index_list_03.png'
import indexList04 from '@/assets/img/index_list_04.png'
import indexList05 from '@/assets/img/index_list_05.png'

const items = ref([
  {
    image: indexList01,
    title: '이륜차 빅데이터 기반<br>교통 안전 시스템',
    description:
      '이륜차의 교통 데이터를 분석하여 <br>사고를 예방하고 운전자의 안전을 향상시키는 기술',
  },
  {
    image: indexList02,
    title: '빅데이터 활용<br>강재특성 도출 시스템',
    description:
      '대량의 데이터를 분석하여<br>강재의 물리적, 화학적 특성을 정확하게 예측하고 도출하는 기술',
  },
  {
    image: indexList03,
    title: '맞춤제조 AI<br>빅데이터 시스템',
    description:
      '생산 요구에 맞춰 원자재 데이터를<br>분석하고 예측하여 최적의 원자재 공급을 자동화하는 기술',
  },
  {
    image: indexList04,
    title: '압출 생산자동화<br>AI 예측 시스템',
    description: '생산 과정에서 데이터를 분석하여<br>효율적인 작업을 예측하고 자동화하는 기술',
  },
  {
    image: indexList05,
    title: '압연공정 이상 예지 <br> AI 예측 시스템',
    description:
      '압연 과정에서 발생할 수 있는<br>이상 상황을 데이터를 분석하여 미리 예측하고 대응하는 기술',
  },
])

const scrollToSection = () => {
  const section = document.getElementById('about')
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth', // 부드럽게 스크롤
      block: 'start', // 섹션의 시작 부분을 뷰포트 상단에 맞춤
    })
  }
}

const swiperOptions = {
  slidesPerView: 1.8,
  initialSlide: 0,
  loop: true,
  speed: 700,
  autoplay: { delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true },
  centeredSlides: true,
  spaceBetween: 60,
  navigation: true,
  modules,
  breakpoints: {
    0: { slidesPerView: 1.1, spaceBetween: 0 },
    640: { slidesPerView: 1.4, spaceBetween: 30 },
    1024: { slidesPerView: 1.8, spaceBetween: 60 },
  },
}
</script>

<style lang="scss">
.hero-artwork {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 65% center;
}
@media (min-width: 1024px) {
  .hero-artwork {
    width: 90%;
    height: 88%;
    right: -5%;
    top: 6%;
    object-position: center;
    mask-image: linear-gradient(to right, transparent, black 12%), linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
    mask-composite: intersect;
  }
}
/* Keep the hero artwork subdued without affecting carousel images. */
.hero-navy-overlay {
  background: linear-gradient(90deg, rgba(8, 15, 30, .88) 0%, rgba(8, 18, 38, .68) 42%, rgba(9, 22, 45, .46) 72%, rgba(8, 18, 38, .5) 100%);
}
.gra-back-row {
  background: linear-gradient(-90deg, rgba(13, 15, 24, 0) 0%, rgba(13, 15, 24, 1) 60%);
}
.gra-back-col {
  background: linear-gradient(0deg, rgba(13, 15, 24, 0) 0%, rgba(13, 15, 24, 1) 60%);
}
.line-h-20 {
  line-height: 1.3;
}
.triangle {
  width: 100%; /* 너비를 100%로 설정 */
  height: 80px; /* 높이 설정 */
  background: #0d0f18;
  clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
}
.triangle-2 {
  width: 100%; /* 너비를 100%로 설정 */
  height: 80px; /* 높이 설정 */
  background: linear-gradient(0deg, #f0f0f0 -26.27%, #1a1e33 65.49%); /* 그라데이션 배경 */
  clip-path: polygon(0% 0%, 100% 0%, 50% 100%); /* 아래쪽으로 향하는 삼각형 모양 */
}
.white-gra {
  background: linear-gradient(
    270deg,
    #ffffff 66.43%,
    rgba(255, 255, 255, 0.518431) 81.77%,
    rgba(255, 255, 255, 0) 96.47%
  );
}
.white-gra-col-to-b {
  background: linear-gradient(
    0,
    #ffffff 66.43%,
    rgba(255, 255, 255, 0.518431) 81.77%,
    rgba(255, 255, 255, 0) 96.47%
  );
  @media (min-width: 1024px) {
    background: linear-gradient(
      270deg,
      #ffffff 66.43%,
      rgba(255, 255, 255, 0.518431) 81.77%,
      rgba(255, 255, 255, 0) 96.47%
    );
  }
}
.slide-image {
  width: calc(100% - 160px);
  object-fit: cover; /* 비율을 유지하면서 잘라냄 */
  object-position: center;
  max-width: 600px;
}
.swiper {
  width: 100%; /* 슬라이더의 폭을 100%로 설정 */
}

/* 기본 네비게이션 버튼 스타일 */
.swiper-button-next,
.swiper-button-prev {
  color: #fff; /* 버튼 색상 */
  background: rgba(0, 0, 0, 0.5);
  border: 4px solid rgba(172, 229, 255, 1);
  border-radius: 50%; /* 둥글게 만들기 */
  width: 40px; /* 버튼 너비 */
  height: 40px; /* 버튼 높이 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  &::after {
    font-size: 18px;
    font-weight: 900;
    color: rgba(172, 229, 255, 1);
    font-family: 'SUIT', sans-serif;
  }
}
.swiper-button-prev {
  left: 2vw !important;
  @media (min-width: 640px) {
    left: 12vw !important;
  }
  @media (min-width: 1024px) {
    left: 22vw !important;
  }
  &::after {
    content: '<';
  }
}
.swiper-button-next {
  right: 2vw !important;
  @media (min-width: 640px) {
    right: 12vw !important;
  }
  @media (min-width: 1024px) {
    right: 22vw !important;
  }
  &::after {
    content: '>';
  }
}
.swiper-button-next::after {
  content: '>';
}
</style>
