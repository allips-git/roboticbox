<template>
  <main>
    <section class="relative">
      <img
        src="/src/assets/img/article_img.png"
        class="min-h-[240px] max-h-[400px] w-full object-cover"
        alt=""
      />
      <div class="flex absolute inset-0 justify-center items-center w-full h-full text-white">
        <h1 class="text-2xl font-extrabold text-center sm:text-3xl md:text-4xl lg:text-5xl">
          {{ t('article.title') }}
        </h1>
      </div>
    </section>

    <section
      class="pt-4 pb-10 sm:pb-12 sm:pt-6 md:pb-15 md:pt-8 lg:pb-18 lg:pt-10 xl:pb-20 xl:pt-12"
    >
      <ul class="inner [&>li:first-child]:border-b [&>li:first-child]:border-gray-200">
        <li
          class="flex flex-col gap-5 justify-between py-8 w-full sm:gap-6 sm:flex-row lg:gap-8 xl:gap-10"
        >
          <a
            href="https://science.ytn.co.kr/program/view.php?mcd=1213&key=202412161201109943"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col flex-1 sm:pt-1"
          >
            <div class="flex flex-col gap-3 h-full md:gap-4 lg:gap-5">
              <strong class="w-full text-xl md:text-[1.375rem] font-bold lg:text-2xl">
                {{ t('article.item1.title') }}
              </strong>
              <p class="line-clamp-3 sm:line-clamp-4 md:line-clamp-5 lg:line-clamp-6">
                {{ t('article.item1.description') }}
              </p>
              <div class="flex justify-between w-full">
                <div class="text-sm text-gray-400 lg:text-base">
                  {{ t('article.item1.source') }}
                </div>
              </div>
            </div>
          </a>
          <img
            src="@/assets/img/article_ex_img.png"
            alt=""
            class="shrink-0 sm:aspect-[1/1] lg:aspect-[4/3] object-cover sm:w-[160px] md:w-[200px] lg:w-[300px] border"
          />
        </li>
        <li
          class="flex flex-col gap-5 justify-between py-8 w-full sm:gap-6 sm:flex-row lg:gap-8 xl:gap-10"
        >
          <a
            href="https://www.donga.com/news/Economy/article/all/20241210/130609414/1"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col flex-1 sm:pt-1"
          >
            <div class="flex flex-col gap-3 h-full md:gap-4 lg:gap-5">
              <strong class="w-full text-xl md:text-[1.375rem] font-bold lg:text-2xl">
                {{ t('article.item2.title') }}
              </strong>
              <p class="line-clamp-3 sm:line-clamp-4 md:line-clamp-5 lg:line-clamp-6">
                {{ t('article.item2.description') }}
              </p>
              <div class="flex justify-between w-full">
                <div class="text-sm text-gray-400 lg:text-base">
                  {{ t('article.item2.source') }}
                </div>
              </div>
            </div>
          </a>
          <img
            src="@/assets/img/article_ex_img.png"
            alt=""
            class="shrink-0 sm:aspect-[1/1] lg:aspect-[4/3] object-cover sm:w-[160px] md:w-[200px] lg:w-[300px] border"
          />
        </li>
      </ul>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { useTranslation } from '@/composables/useTranslation'

const { t } = useTranslation()
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
