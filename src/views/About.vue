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
          <div class="flex flex-col gap-4 lg:w-[55%]">
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
            class="flex flex-col gap-2 lg:gap-3 xl:gap-4 [&_dl]:flex [&_dl]:text-sm xl:[&_dl]:text-[0.9375rem] lg:w-[40%] [&_dt]:shrink-0 [&_dt]:w-20 [&_dd]:flex-1 mb-2 lg:mb-0"
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
              <dd><a href="mailto:mail@rbtbox.kr" class="hover:text-sky-600">mail@rbtbox.kr</a></dd>
            </dl>
            <dl>
              <dt>{{ company.headquarters }}</dt>
              <dd>
                {{ company.address }}
              </dd>
            </dl>
            <dl><dt>{{ company.branch }}</dt><dd>{{ company.busan }}</dd></dl>
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
        <ul class="grid grid-cols-1 gap-10 pb-6 mt-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <li v-for="area in areas" :key="area.id" class="relative">
            <router-link :to="area.link" class="block h-full rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500">
              <div class="relative z-0">
                <div class="absolute inset-0 white-gra-col"></div>
                <img :src="area.image" class="w-full aspect-[3/4] max-h-[300px] object-cover" :alt="area.alt" loading="lazy" />
              </div>
              <div class="relative px-4 -mt-12 z-1 pb-5">
                <h3 class="text-xl xl:text-[1.375rem] font-bold break-keep">{{ area.title }}</h3>
                <p class="mt-2 text-sm md:text-[0.9375rem] xl:text-base">{{ area.description }}</p>
                <span class="mt-4 inline-block text-sm font-bold text-sky-700">{{ company.more }} →</span>
              </div>
            </router-link>
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
          <div v-for="entry in history" :key="entry.year" class="flex relative">
            <h3>{{ entry.year }}</h3>
            <ul>
              <li class="font-bold text-blue-950">{{ entry.title }}</li>
              <li v-for="event in entry.events" :key="event" class="text-slate-600">{{ event }}</li>
              <li v-if="entry.planned" class="text-slate-600">
                {{ entry.planned }}
                <span class="ml-2 inline-block rounded border border-sky-200 bg-sky-50 px-2 py-0.5 text-xs font-bold text-sky-700">{{ currentLanguage === 'ko' ? '예정' : 'Planned' }}</span>
              </li>
            </ul>
            <div class="absolute top-1 sm:top-[0.375rem] md:top-[0.5rem] left-[4rem] sm:left-[5.5rem] md:left-[6.5rem] lg:left-[8.5rem] xl:left-[10rem] size-4 border-[3px] rounded-full border-gray-500 bg-white"></div>
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
import { businessAreas } from '@/content/businessAreas'
import { useCompanyContent } from '@/content/company'
const company = useCompanyContent()
import { useTranslation } from '@/composables/useTranslation'
import valuesKo from '@/assets/img/values.png'
import valuesEn from '@/assets/img/values_en.png'

const { t, currentLanguage } = useTranslation()

const areas = computed(() => businessAreas(currentLanguage.value === 'ko').map(area => ({
  ...area, link: '/technologies/' + (area.id === 'twin' ? 'twin-r-ax' : ['logistics', 'handling'].includes(area.id) ? 'automation' : area.id),
})))
const history = computed(() => [
  { year: '2021', title: t('about.history.2021.item1'), events: [t('about.history.2021.item2'), t('about.history.2021.item3')] },
  { year: '2022', title: t('about.history.2022.item1'), events: [t('about.history.2022.item2')] },
  { year: '2023', title: t('about.history.2023.item1'), events: [] },
  { year: '2024', title: t('about.history.2024.item1'), events: [t('about.history.2024.item2')] },
  { year: '2025', title: t('about.history.2025.item1'), events: [t('about.history.2025.item2')] },
  { year: '2026', title: t('about.history.2026.item1'), events: [], planned: t('about.history.2026.item2') },
])
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
