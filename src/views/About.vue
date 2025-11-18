<template>
  <main>
    <section class="relative">
      <img src="/src/assets/img/about_img.png" class="min-h-[240px] max-h-[400px] w-full object-cover" alt="">
      <div class="flex absolute inset-0 justify-center items-center w-full h-full text-white">
        <h1 class="text-2xl font-extrabold text-center sm:text-3xl md:text-4xl lg:text-5xl">회사소개</h1>
      </div>
    </section>

    <section class="py-10 bg-gray-100 sm:py-12 md:py-15 lg:py-18 xl:py-20">
      <div class="inner">
        <h2 class="mb-3 text-xl font-extrabold sm:mb-4 lg:mb-5 xl:mb-6 sm:text-2xl lg:text-3xl xl:text-4xl">회사 개요</h2>
        <div class="flex flex-col gap-6 lg:justify-between lg:flex-row">
          <div class="flex flex-col gap-4">
              <p class="text-lg font-bold sm:text-[1.1875rem] md:text-xl xl:text-2xl text-blue-950">
                로보틱박스는 자동화 기계와 데이터·AI 기술을 바탕으로
                <span class="sm:block">제조 및 로보틱스 분야에서 혁신적인 솔루션을 제공하는 전문 기업입니다.</span>
              </p>
              <p class="mt-1 lg:mt-3 lg:text-[1.0625rem] xl:text-lg">
                <span class="sm:block">(주)로보틱박스는 2021년 설립된 연구소 기업으로,</span>
                경남 창원에 본사를 두고 있으며 한국전기연구원과의 합작법인으로 출범하였습니다.<br>
              </p>
              <p class="lg:text-[1.0625rem] xl:text-lg">
                고객의 안전과 효율성을 최우선으로 고려하며,산업 환경에서의 실시간 데이터 분석과
                <span class="sm:block">리스크 예측을 통해 생산성 향상 및 안전 강화를 위한 첨단 기술을 개발하고 있습니다.</span>
              </p>
          </div>
          <div class="flex flex-col gap-2 lg:gap-3 xl:gap-4 [&_dl]:flex [&_dl]:text-sm xl:[&_dl]:text-[0.9375rem] [&_dt]:shrink-0 [&_dt]:w-20 [&_dd]:flex-1 mb-2 lg:mb-0">
            <dl>
              <dt>회사명</dt>
              <dd>(주)로보틱박스</dd>
            </dl>
            <dl>
              <dt>설립일</dt>
              <dd>2021.02.04.</dd>
            </dl>
            <dl>
              <dt>대표</dt>
              <dd>하현수</dd>
            </dl>
            <dl>
              <dt>연락처</dt>
              <dd>+82-10-2951-0068</dd>
            </dl>
            <dl>
              <dt>주소</dt>
              <dd>경상남도 창원시 성산구 전기의길 10 기술창업센터 102호 <br>(성주동, 한국전기연구원 기술창업센터)</dd>
            </dl>
            <dl>
              <dt>전문 분야</dt>
              <dd>자동차, 전지, 철강</dd>
            </dl>
            <dl>
              <dt>전문 공정</dt>
              <dd>품질검사, 인케이싱/포장, 이송</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 sm:py-12 md:py-15 lg:py-18 xl:py-20">
      <div class="inner">
        <h2 class="mb-3 text-xl font-extrabold sm:mb-4 lg:mb-5 xl:mb-6 sm:text-2xl lg:text-3xl xl:text-4xl">사업 영역</h2>
        <p class="text-lg font-bold sm:text-[1.1875rem] md:text-xl xl:text-2xl text-blue-950">
          로보틱박스는 로보틱스 및 AI 전문가들로 구성되어 첨단 기술 개발 및 고도화에 주력하고 있습니다.
        </p>
        <ul class="grid grid-cols-1 gap-10 pb-6 mt-6 lg:grid-cols-3 lg:gap-6">
            <li class="relative">
                <div class="relative z-0">
                  <div class="absolute top-0 right-0 bottom-0 left-0 white-gra-col"></div>
                  <img src="/src/assets/img/banner_01.png" class="w-full aspect-[3/4] max-h-[300px] object-cover" alt="상용 PLC 및 로봇암 관리 엣지 디바이스">
                </div>
                <div class="relative px-4 -mt-12 z-1">
                    <h3 class="text-xl xl:text-[1.375rem] font-bold break-keep">상용 PLC 및 로봇암 관리 엣지 디바이스</h3>
                    <p class="mt-2 text-sm md:text-[0.9375rem] xl:text-base">
                      로봇 및 공정 상태를 실시간으로 관리하는 엣지 디바이스를 개발하여 효율적인 공정 운영을 지원합니다.
                    </p>
                </div>
            </li>
            <li class="relative">
                <div class="relative z-0">
                  <div class="absolute top-0 right-0 bottom-0 left-0 white-gra-col"></div>
                  <img src="/src/assets/img/banner_02.png" class="w-full aspect-[3/4] max-h-[300px] object-cover" alt="AI 기반 안전 관제 솔루션">
                </div>
                <div class="relative px-4 -mt-12 z-1">
                    <h3 class="text-xl xl:text-[1.375rem] font-bold break-keep">AI 기반 안전 관제 솔루션</h3>
                    <p class="mt-2 text-sm md:text-[0.9375rem] xl:text-base">
                      물류 사고를 줄이기 위한 지게차 안전 관제 시스템 등 IOT와 AI 기술을 융합한 안전 관리 솔루션을 제공합니다.
                    </p>
                </div>
            </li>
            <li class="relative">
                <div class="relative z-0">
                  <div class="absolute top-0 right-0 bottom-0 left-0 white-gra-col"></div>
                  <img src="/src/assets/img/banner_03.png" class="w-full aspect-[3/4] max-h-[300px] object-cover" alt="스마트 물류 이송 공정 구축">
                </div>
                <div class="relative px-4 -mt-12 z-1">
                    <h3 class="text-xl xl:text-[1.375rem] font-bold break-keep">스마트 물류 이송 공정 구축</h3>
                    <p class="mt-2 text-sm md:text-[0.9375rem] xl:text-base">
                      웹 기반 상태인식 기능을 통해 공정 효율성을 극대화한 스마트 장치를 설계 및 구현합니다.
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </section>

    <section class="py-10 bg-gray-100 sm:py-12 md:py-15 lg:py-18 xl:py-20">
      <div class="inner">
        <h2 class="mb-3 text-xl font-extrabold sm:mb-4 lg:mb-5 xl:mb-6 sm:text-2xl lg:text-3xl xl:text-4xl">핵심 가치</h2>
        <div class="flex justify-center items-center pt-4 pb-2">
            <img src="@/assets/img/values.png" alt="" class="w-full max-w-[1024px]">
        </div>
      </div>
    </section>

    <section class="py-10 mb-4 sm:py-12 md:py-15 lg:py-18 xl:py-20">
      <div class="sm:gap-20 lg:gap-[8rem] xl:gap-[10rem] inner sm:flex">
        <h2 class="mb-3 text-xl font-extrabold sm:mb-4 lg:mb-5 xl:mb-6 sm:text-2xl lg:text-3xl xl:text-4xl">연혁</h2>
        <div class="flex relative flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 pt-2 sm:pt-1 [&_h3]:w-[5.5rem] sm:[&_h3]:w-[8rem] md:[&_h3]:w-[10rem] lg:[&_h3]:w-[12rem] xl:[&_h3]:w-[15rem] [&_h3]:text-[1rem] sm:[&_h3]:text-xl md:[&_h3]:text-2xl lg:[&_h3]:text-3xl [&_h3]:shrink-0 [&_h3]:font-black [&_h3]:text-blue-900 [&_ul]:flex-1 [&_ul]:space-y-1 sm:[&_ul]:space-y-2 lg:[&_ul]:space-y-3 [&_ul]:font-medium [&_ul]:text-sm sm:[&_ul]:text-[0.9375rem] md:[&_ul]:text-base lg:[&_ul]:text-[1.0625rem] [&_ul]:pt-0.5 sm:[&_ul]:pt-1">
          <div class="flex relative">
            <h3>2021'</h3>
            <ul>
              <li>02. 연구소 설립</li>
              <li>03. 경상남도 스타트업 데모 IR 대회 수상</li>
              <li>07. 한국전기연구원 기술이전 완료</li>
            </ul>
            <div class="absolute top-1 sm:top-[0.375rem] md:top-[0.5rem] lg:top-[0.5rem] xl:top-[0.5rem] left-[4rem] sm:left-[5.5rem] md:left-[6.5rem] lg:left-[8.5rem] xl:left-[10rem] size-4 border-[3px] rounded-full border-gray-500 bg-white"></div>
          </div>
          <div class="flex relative">
            <h3>2022'</h3>
            <ul>
              <li>06. 제조빅데이터 포집 게이트 웨이 ‘R-GATE’ 런칭</li>
              <li>09. AI 엣지 컴퓨팅 ‘R-BOX’ 런칭</li>
            </ul>
            <div class="absolute top-1 sm:top-[0.375rem] md:top-[0.5rem] lg:top-[0.5rem] xl:top-[0.5rem] left-[4rem] sm:left-[5.5rem] md:left-[6.5rem] lg:left-[8.5rem] xl:left-[10rem] size-4 border-[3px] rounded-full border-gray-500 bg-white"></div>
          </div>
          <div class="flex relative">
            <h3>2024'</h3>
            <ul>
              <li>06. 경상남도 정보 보안 IR 대회 수상</li>
            </ul>
            <div class="absolute top-1 sm:top-[0.375rem] md:top-[0.5rem] lg:top-[0.5rem] xl:top-[0.5rem] left-[4rem] sm:left-[5.5rem] md:left-[6.5rem] lg:left-[8.5rem] xl:left-[10rem] size-4 border-[3px] rounded-full border-gray-500 bg-white"></div>
          </div>
          <div class="absolute h-[calc(100%-28px)] w-0.5 bg-gray-500 -z-10 left-[4.4375rem] sm:left-[5.9375rem] md:left-[6.9375rem] lg:left-[8.9375rem] xl:left-[10.4375rem] bottom-3"></div>
        </div>
      </div>
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
