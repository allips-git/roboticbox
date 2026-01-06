<template>
  <main>
    <section class="relative">
      <img
        src="/src/assets/img/about_img.png"
        class="min-h-[240px] max-h-[400px] w-full object-cover"
        alt=""
      />
      <div class="flex absolute inset-0 justify-center items-center w-full h-full text-white">
        <h1 class="text-2xl font-extrabold text-center sm:text-3xl md:text-4xl lg:text-5xl">
          {{ t('about.title') }}
        </h1>
      </div>
    </section>

    <section class="py-10 bg-gray-100 sm:py-12 md:py-15 lg:py-18 xl:py-20">
      <div class="inner">
        <h2
          class="mb-3 text-xl font-extrabold sm:mb-4 lg:mb-5 xl:mb-6 sm:text-2xl lg:text-3xl xl:text-4xl"
        >
          {{ t('about.overview.title') }}
        </h2>
        <div class="flex flex-col gap-6 lg:justify-between lg:flex-row">
          <div class="flex flex-col gap-4">
            <p class="text-lg font-bold sm:text-[1.1875rem] md:text-xl xl:text-2xl text-blue-950">
              {{ t('about.overview.heading') }}
            </p>
            <p class="mt-1 lg:mt-3 lg:text-[1.0625rem] xl:text-lg">
              <span class="sm:block">{{ t('about.overview.description1') }}</span>
            </p>
            <p class="lg:text-[1.0625rem] xl:text-lg">
              {{ t('about.overview.description2') }}
            </p>
          </div>
          <div
            class="flex flex-col gap-2 lg:gap-3 xl:gap-4 [&_dl]:flex [&_dl]:text-sm xl:[&_dl]:text-[0.9375rem] [&_dt]:shrink-0 [&_dt]:w-20 [&_dd]:flex-1 mb-2 lg:mb-0"
          >
            <dl>
              <dt>{{ t('about.overview.label.companyName') }}</dt>
              <dd>{{ t('about.overview.companyName') }}</dd>
            </dl>
            <dl>
              <dt>{{ t('about.overview.label.established') }}</dt>
              <dd>{{ t('about.overview.established') }}</dd>
            </dl>
            <dl>
              <dt>{{ t('about.overview.label.ceo') }}</dt>
              <dd>{{ t('about.overview.ceo') }}</dd>
            </dl>
            <dl>
              <dt>{{ t('about.overview.label.contact') }}</dt>
              <dd>{{ t('about.overview.contact') }}</dd>
            </dl>
            <dl>
              <dt>{{ t('about.overview.label.address') }}</dt>
              <dd>
                {{ t('about.overview.address') }}
              </dd>
            </dl>
            <dl>
              <dt>{{ t('about.overview.label.specialty') }}</dt>
              <dd>{{ t('about.overview.specialty') }}</dd>
            </dl>
            <dl>
              <dt>{{ t('about.overview.label.process') }}</dt>
              <dd>{{ t('about.overview.process') }}</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 sm:py-12 md:py-15 lg:py-18 xl:py-20">
      <div class="inner">
        <h2
          class="mb-3 text-xl font-extrabold sm:mb-4 lg:mb-5 xl:mb-6 sm:text-2xl lg:text-3xl xl:text-4xl"
        >
          {{ t('about.business.title') }}
        </h2>
        <p class="text-lg font-bold sm:text-[1.1875rem] md:text-xl xl:text-2xl text-blue-950">
          {{ t('about.business.heading') }}
        </p>
        <ul class="grid grid-cols-1 gap-10 pb-6 mt-6 lg:grid-cols-3 lg:gap-6">
          <li class="relative">
            <div class="relative z-0">
              <div class="absolute top-0 right-0 bottom-0 left-0 white-gra-col"></div>
              <img
                src="/src/assets/img/banner_01.png"
                class="w-full aspect-[3/4] max-h-[300px] object-cover"
                alt="상용 PLC 및 로봇암 관리 엣지 디바이스"
              />
            </div>
            <div class="relative px-4 -mt-12 z-1">
              <h3 class="text-xl xl:text-[1.375rem] font-bold break-keep">
                {{ t('about.business.item1.title') }}
              </h3>
              <p class="mt-2 text-sm md:text-[0.9375rem] xl:text-base">
                {{ t('about.business.item1.desc') }}
              </p>
            </div>
          </li>
          <li class="relative">
            <div class="relative z-0">
              <div class="absolute top-0 right-0 bottom-0 left-0 white-gra-col"></div>
              <img
                src="/src/assets/img/banner_02.png"
                class="w-full aspect-[3/4] max-h-[300px] object-cover"
                alt="AI 기반 안전 관제 솔루션"
              />
            </div>
            <div class="relative px-4 -mt-12 z-1">
              <h3 class="text-xl xl:text-[1.375rem] font-bold break-keep">
                {{ t('about.business.item2.title') }}
              </h3>
              <p class="mt-2 text-sm md:text-[0.9375rem] xl:text-base">
                {{ t('about.business.item2.desc') }}
              </p>
            </div>
          </li>
          <li class="relative">
            <div class="relative z-0">
              <div class="absolute top-0 right-0 bottom-0 left-0 white-gra-col"></div>
              <img
                src="/src/assets/img/banner_03.png"
                class="w-full aspect-[3/4] max-h-[300px] object-cover"
                alt="스마트 물류 이송 공정 구축"
              />
            </div>
            <div class="relative px-4 -mt-12 z-1">
              <h3 class="text-xl xl:text-[1.375rem] font-bold break-keep">
                {{ t('about.business.item3.title') }}
              </h3>
              <p class="mt-2 text-sm md:text-[0.9375rem] xl:text-base">
                {{ t('about.business.item3.desc') }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="py-10 bg-gray-100 sm:py-12 md:py-15 lg:py-18 xl:py-20">
      <div class="inner">
        <h2
          class="mb-3 text-xl font-extrabold sm:mb-4 lg:mb-5 xl:mb-6 sm:text-2xl lg:text-3xl xl:text-4xl"
        >
          {{ t('about.values.title') }}
        </h2>
        <div class="flex justify-center items-center pt-4 pb-2">
          <img 
            :src="valuesImage" 
            alt="" 
            class="w-full max-w-[1024px]"
            :class="{ 'scale-110': currentLanguage === 'en' }"
          />
        </div>
      </div>
    </section>

    <section class="py-10 mb-4 sm:py-12 md:py-15 lg:py-18 xl:py-20">
      <div class="sm:gap-20 lg:gap-[8rem] xl:gap-[10rem] inner sm:flex">
        <h2
          class="mb-3 text-xl font-extrabold sm:mb-4 lg:mb-5 xl:mb-6 sm:text-2xl lg:text-3xl xl:text-4xl"
        >
          {{ t('about.history.title') }}
        </h2>
        <div
          class="flex relative flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 pt-2 sm:pt-1 [&_h3]:w-[5.5rem] sm:[&_h3]:w-[8rem] md:[&_h3]:w-[10rem] lg:[&_h3]:w-[12rem] xl:[&_h3]:w-[15rem] [&_h3]:text-[1rem] sm:[&_h3]:text-xl md:[&_h3]:text-2xl lg:[&_h3]:text-3xl [&_h3]:shrink-0 [&_h3]:font-black [&_h3]:text-blue-900 [&_ul]:flex-1 [&_ul]:space-y-1 sm:[&_ul]:space-y-2 lg:[&_ul]:space-y-3 [&_ul]:font-medium [&_ul]:text-sm sm:[&_ul]:text-[0.9375rem] md:[&_ul]:text-base lg:[&_ul]:text-[1.0625rem] [&_ul]:pt-0.5 sm:[&_ul]:pt-1"
        >
          <div class="flex relative">
            <h3>2021'</h3>
            <ul>
              <li>{{ t('about.history.2021.item1') }}</li>
              <li>{{ t('about.history.2021.item2') }}</li>
              <li>{{ t('about.history.2021.item3') }}</li>
            </ul>
            <div
              class="absolute top-1 sm:top-[0.375rem] md:top-[0.5rem] lg:top-[0.5rem] xl:top-[0.5rem] left-[4rem] sm:left-[5.5rem] md:left-[6.5rem] lg:left-[8.5rem] xl:left-[10rem] size-4 border-[3px] rounded-full border-gray-500 bg-white"
            ></div>
          </div>
          <div class="flex relative">
            <h3>2022'</h3>
            <ul>
              <li>{{ t('about.history.2022.item1') }}</li>
              <li>{{ t('about.history.2022.item2') }}</li>
            </ul>
            <div
              class="absolute top-1 sm:top-[0.375rem] md:top-[0.5rem] lg:top-[0.5rem] xl:top-[0.5rem] left-[4rem] sm:left-[5.5rem] md:left-[6.5rem] lg:left-[8.5rem] xl:left-[10rem] size-4 border-[3px] rounded-full border-gray-500 bg-white"
            ></div>
          </div>
          <div class="flex relative">
            <h3>2024'</h3>
            <ul>
              <li>{{ t('about.history.2024.item1') }}</li>
            </ul>
            <div
              class="absolute top-1 sm:top-[0.375rem] md:top-[0.5rem] lg:top-[0.5rem] xl:top-[0.5rem] left-[4rem] sm:left-[5.5rem] md:left-[6.5rem] lg:left-[8.5rem] xl:left-[10rem] size-4 border-[3px] rounded-full border-gray-500 bg-white"
            ></div>
          </div>
          <div
            class="absolute h-[calc(100%-28px)] w-0.5 bg-gray-500 -z-10 left-[4.4375rem] sm:left-[5.9375rem] md:left-[6.9375rem] lg:left-[8.9375rem] xl:left-[10.4375rem] bottom-3"
          ></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useTranslation } from '@/composables/useTranslation'
import valuesKo from '@/assets/img/values.png'
import valuesEn from '@/assets/img/values_en.png'

const { t, currentLanguage } = useTranslation()

const valuesImage = computed(() => {
  return currentLanguage.value === 'en' ? valuesEn : valuesKo
})
</script>

<style lang="scss">
.white-gra-col {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0.882573) 80%,
    rgba(255, 255, 255, 1) 90%
  );
}
</style>
