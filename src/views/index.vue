<template>
  <main class="flex flex-col justify-center items-center w-full">
    <section
      class="w-full relative overflow-hidden max-h-[22rem] sm:max-h-[30rem] lg:max-h-[40rem] xl:max-h-[48rem] h-screen"
    >
      <div class="absolute inset-0 w-full">
        <div class="absolute left-0 z-10 w-full h-full gra-back-row"></div>
        <img
          src="@/assets/img/main_back.png"
          class="translate-x-[20%] w-full z-10 h-full object-cover"
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

      <swiper ref="swiperRef" v-bind="swiperOptions" class="mt-8 sm:mt-10 lg:mt-12">
        <swiper-slide>
          <div class="swiper_container">
            <div class="swiper_contents gra-back-row">
              <h4 class="w-full text-xl font-bold text-sky-300 sm:text-2xl lg:text-3xl">
                {{ t('home.slider.aiSafety') }}
              </h4>
              <p
                class="mt-2 text-sm text-white sm:mt-4 lg:mt-4 sm:text-base lg:text-lg"
                v-html="t('home.slider.aiSafetyDesc')"
              ></p>
            </div>
            <div class="swiper-dim">
              <div class="w-40 h-40"></div>
              <img src="@/assets/img/banner_03.png" class="slide-image aspect-[4/3] rounded-sm" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper_container">
            <div class="swiper_contents gra-back-row">
              <h4 class="w-full text-xl font-bold text-sky-300 sm:text-2xl lg:text-3xl">
                {{ t('home.slider.plcDevice') }}
              </h4>
              <p
                class="mt-2 text-sm text-white sm:mt-4 lg:mt-4 sm:text-base lg:text-lg"
                v-html="t('home.slider.plcDeviceDesc')"
              ></p>
            </div>
            <div class="swiper-dim">
              <div class="absolute inset-0 bg-[#0D0F18] opacity-40 z-10 h-full"></div>
              <div class="w-40 h-40"></div>
              <img src="@/assets/img/banner_01.png" class="slide-image aspect-[5/3] rounded-sm" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper_container">
            <div class="swiper_contents gra-back-row">
              <h4 class="w-full text-xl font-bold text-sky-300 sm:text-2xl lg:text-3xl">
                {{ t('home.slider.smartLogistics') }}
              </h4>
              <p
                class="mt-2 text-sm text-white sm:mt-4 lg:mt-4 sm:text-base lg:text-lg"
                v-html="t('home.slider.smartLogisticsDesc')"
              ></p>
            </div>
            <div class="swiper-dim">
              <div class="w-40 h-40"></div>
              <img src="@/assets/img/banner_02.png" class="slide-image aspect-[4/3] rounded-sm" />
            </div>
          </div>
        </swiper-slide>
      </swiper>
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
          {{ t('home.technologies.heading') }}
        </h3>
        <p class="mt-3 text-center text-gray-400 lg:mt-4 break-keep">
          {{ t('home.technologies.description') }}
        </p>
        <!-- <div class="relative mt-4">
          <div class="text-[12vw] lg:text-[8rem] font-black text-center text-gray-200 roboto">
            TECHNOLOGIES
          </div>
          <ul class="grid relative -top-[8.5vw] -mb-[5vw] lg:-mb-[4rem] lg:-top-[5.75rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <li
              v-for="(item, index) in items"
              :key="index"
              class="px-4 py-6 text-center bg-white rounded-md border border-gray-100 shadow-sm sm:py-7"
            >
              <div class="flex justify-center">
                <img :src="item.image" alt="" class="h-[3.5rem] lg:h-[4.375rem] mb-3 lg:mb-5">
              </div>
              <p class="font-bold text-lg lg:text-xl leading-[1.4] mb-1.5 lg:mb-2 text-[#1483DF]" v-html="item.title"></p>
              <p class="text-sm break-keep" v-html="item.description"></p>
            </li>
          </ul>
        </div> -->
      </div>
    </section>

    <section class="relative pb-[4rem] lg:pb-0 w-full">
      <img
        src="/src/assets/img/index_mock.png"
        alt=""
        class="object-cover lg:max-w-[800px] relative z-0 w-full max-h-[25rem] md:max-h-[32rem] lg:h-[36rem] lg:max-h-[36rem] xl:h-[40rem] xl:max-h-[40rem]"
      />
      <div
        class="relative lg:absolute inset-0 z-10 -mt-[20rem] pt-[12rem] lg:mt-0 lg:pt-0 w-full lg:h-[40rem] white-gra-col-to-b"
      >
        <div class="flex justify-center items-center w-full h-full inner">
          <div class="lg:pl-[24vw] xl:pl-[18rem]">
            <h2 class="text-2xl font-extrabold text-sky-400 md:text-3xl lg:text-4xl roboto">
              {{ t('home.solution.title') }}
            </h2>
            <h3
              class="mt-6 text-2xl font-extrabold md:mt-8 md:text-3xl lg:text-4xl"
              v-html="t('home.solution.heading')"
            ></h3>
            <p class="mt-4 lg:mt-6 xl:mt-8 break-keep">
              {{ t('home.solution.description') }}
            </p>
            <router-link
              to="/technologies"
              class="border border-gray-900 rounded-sm mt-6 lg:mt-12 xl:mt-16 flex-none w-[120px] text-gray-900 py-3 flex items-center justify-center"
            >
              {{ t('home.solution.button') }}<span class="ml-2">&gt;</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import { Navigation } from 'swiper/modules'
import { useTranslation } from '@/composables/useTranslation'

const { t } = useTranslation()
const swiperRef = ref(null) // Swiper 참조
const modules = [Navigation] // 사용할 모듈 배열에 추가

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

// 다음 슬라이드로 이동
const goToNextSlide = (): void => {
  if (swiperRef.value?.swiper) {
    swiperRef.value.swiper.slideNext()
    console.log('다음 슬라이드로 이동')
  } else {
    console.log('Swiper 인스턴스가 없습니다.')
  }
}

// 이전 슬라이드로 이동
const goToPrevSlide = (): void => {
  if (swiperRef.value?.swiper) {
    swiperRef.value.swiper.slidePrev()
    console.log('이전 슬라이드로 이동')
  } else {
    console.log('Swiper 인스턴스가 없습니다.')
  }
}

// 컴포넌트 마운트 후 Swiper 인스턴스 확인
onMounted(() => {
  if (swiperRef.value) {
    console.log('Swiper instance:', swiperRef.value.swiper)
  } else {
    console.log('Swiper 컴포넌트가 아직 렌더링되지 않았습니다.')
  }
})

const swiperOptions = {
  slidesPerView: 1.8,
  initialSlide: 1,
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
