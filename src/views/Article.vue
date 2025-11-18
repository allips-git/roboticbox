<template>
  <main>
    <section class="relative">
      <img src="/src/assets/img/article_img.png" class="min-h-[240px] max-h-[400px] w-full object-cover" alt="">
      <div class="flex absolute inset-0 justify-center items-center w-full h-full text-white">
        <h1 class="text-2xl font-extrabold text-center sm:text-3xl md:text-4xl lg:text-5xl">언론·홍보</h1>
      </div>
    </section>

    <section class="pt-4 pb-10 sm:pb-12 sm:pt-6 md:pb-15 md:pt-8 lg:pb-18 lg:pt-10 xl:pb-20 xl:pt-12">
      <ul class="inner [&>li:first-child]:border-b [&>li:first-child]:border-gray-200">
        <li class="flex flex-col gap-5 justify-between py-8 w-full sm:gap-6 sm:flex-row lg:gap-8 xl:gap-10">
          <a href="https://science.ytn.co.kr/program/view.php?mcd=1213&key=202412161201109943" target="_blank" rel="noopener noreferrer" class="flex flex-col flex-1 sm:pt-1">
            <div class="flex flex-col gap-3 h-full md:gap-4 lg:gap-5">
              <strong class="w-full text-xl md:text-[1.375rem] font-bold lg:text-2xl">
                인공지능 대전환! 제조 혁신의 날개를 달다
              </strong>
              <p class="line-clamp-3 sm:line-clamp-4 md:line-clamp-5 lg:line-clamp-6">
                세계 경제의 패러다임을 바꾸고 있는 인공지능 기술! AI와 빅데이터의 결합을 통해 초지능 대융합의 시대가 열리고 있습니다. 한때 위기에 내몰렸던 국내 제조업 현장에도 AI 기술이 빠르게 적용되며 새로운 변화의 바람을 일으키고 있는 지금! '국내 제조업의 산실’인 영남권 5개 지역을 중심으로 제조 혁신이 가속화되고 있습니다.
              </p>
              <div class="flex justify-between w-full">
                <div class="text-sm text-gray-400 lg:text-base">
                  출처: YTN / 2024-10-11
                </div>
              </div>
            </div>
          </a>
          <img src="@/assets/img/article_ex_img.png" alt="" class="shrink-0 sm:aspect-[1/1] lg:aspect-[4/3] object-cover sm:w-[160px] md:w-[200px] lg:w-[300px] border">
        </li>
        <li class="flex flex-col gap-5 justify-between py-8 w-full sm:gap-6 sm:flex-row lg:gap-8 xl:gap-10">
          <a href="https://www.donga.com/news/Economy/article/all/20241210/130609414/1" target="_blank" rel="noopener noreferrer" class="flex flex-col flex-1 sm:pt-1">
            <div class="flex flex-col gap-3 h-full md:gap-4 lg:gap-5">
              <strong class="w-full text-xl md:text-[1.375rem] font-bold lg:text-2xl">
                AI로 제조 현장 안전성 강화…로보틱박스, ‘AI 지게차 영상 관제 솔루션’ 개발
              </strong>
              <p class="line-clamp-3 sm:line-clamp-4 md:line-clamp-5 lg:line-clamp-6">
                산업 데이터 플랫폼 및 AI 자동화 전문 기업 로보틱박스는 물류창고나 제조업 현장에서 지게차와 작업자 간의 충돌 사고를 방지하는 ‘AI 지게차 영상 관제 솔루션’을 구현했다고 10일 밝혔다. 경남 창원에 소재한 자동차 부품 기업 우수AMS에서 실증이 완료됐다.
              </p>
              <div class="flex justify-between w-full">
                <div class="text-sm text-gray-400 lg:text-base">
                  출처: 동아일보 / 2024-10-11
                </div>
              </div>
            </div>
          </a>
          <img src="@/assets/img/article_ex_img.png" alt="" class="shrink-0 sm:aspect-[1/1] lg:aspect-[4/3] object-cover sm:w-[160px] md:w-[200px] lg:w-[300px] border">
        </li>
      </ul>
    </section>
  </main>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.white-gra-col{
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%,  rgba(255, 255, 255, 0.882573) 80%, rgba(255, 255, 255, 1) 90%);
}
</style>
