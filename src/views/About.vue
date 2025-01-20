<template>
<main>
  <section class="relative">
    <img src="/src/assets/img/about_img.png" class="max-h-[400px] w-full object-cover" alt="">
    <div class="items-center flex justify-center w-full h-full text-white absolute inset-0">
        <h1 class="text-center text-5xl font-extrabold ">회사소개</h1>
    </div>
  </section>

  <section class="px-40  py-24 bg-gray-100">
    <h1 class="text-4xl mb-8 font-extrabold ">회사 개요</h1>
    <div class="flex justify-between">
      <div class="flex flex-col gap-12">

          <p class="text-2xl text-blue-950 font-bold">로보틱박스는 자동화 기계와 데이터·AI 기술을 바탕으로 <br>
              제조 및 로보틱스 분야에서 혁신적인 솔루션을 제공하는 전문 기업입니다.</p>
              <p class="mt-3">(주)로보틱박스는 2021년 설립된 연구소 기업으로,<br>경남 창원에 본사를 두고 있으며 한국전기연구원과의 합작법인으로 출범하였습니다.<br>고객의 안전과 효율성을 최우선으로 고려하며,산업 환경에서의 실시간 데이터 분석과<br>리스크 예측을 통해 생산성 향상 및 안전 강화를 위한 첨단 기술을 개발하고 있습니다.
              </p>
      </div>

      <div class="flex justify-end">
      <ul class="*:flex *:gap-2 w-full flex flex-col gap-2 text-sm">
    <li>
      <h3 class="w-20">회사명</h3>
      <p>(주)로보틱박스</p>
    </li>
    <li>
      <h3 class="w-20">설립일</h3>
      <p>2021.02.04.</p>
    </li>
    <li>
      <h3 class="w-20">대표</h3>
      <p>하현수</p>
    </li>
    <li>
      <h3 class="w-20">연락처</h3>
      <p>+82-10-2951-0068</p>
    </li>
    <li>
      <h3 class="w-20">주소</h3>
      <p>경상남도 창원시 성산구 전기의길 10 기술창업센터 102호 <br>(성주동, 한국전기연구원 기술창업센터)</p>
    </li>
    <li>
      <h3 class="w-20">전문 분야</h3>
      <p>자동차, 전지, 철강</p>
    </li>
    <li>
      <h3 class="w-20">전문 공정</h3>
      <p>품질검사, 인케이싱/포장, 이송</p>
    </li>
  </ul>
      </div>
    </div>
  </section>


  <section class="px-40  py-24">
    <h1 class="text-4xl mb-8 font-extrabold ">사업 영역</h1>
    <p class="text-2xl text-blue-950 font-bold">로보틱박스는 로보틱스 및 AI 전문가들로 구성되어 첨단 기술 개발 및 고도화에 주력하고 있습니다.</p>

    <ul class="grid grid-cols-3 gap-2 mt-6">
        <li class="h-[400px] relative rounded-sm overflow-hidden border border-gray-50">
            <div class="white-gra-col h-full absolute inset-0 flex flex-col justify-end px-4 py-8 gap-2">
                <h1 class="text-xl font-bold">상용 PLC 및 로봇암 관리 엣지 디바이스</h1>
                <p class="text-sm">로봇 및 공정 상태를 실시간으로 관리하는 엣지 디바이스를
                    개발하여 효율적인 공정 운영을 지원합니다.</p>
            </div>
            <img src="/src/assets/img/banner_01.png" class="w-full aspect-[3/4] max-h-[400px] object-cover" alt="">
        </li>

        <li class="h-[400px] relative rounded-sm overflow-hidden border border-gray-50">
            <div class="white-gra-col h-full absolute inset-0 flex flex-col justify-end px-4 py-8 gap-2">
                <h1 class="text-xl font-bold">AI 기반 안전 관제 솔루션</h1>
                <p class="text-sm">물류 사고를 줄이기 위한 지게차 안전 관제 시스템 등 IOT와 AI 기술을 융합한 안전 관리 솔루션을 제공합니다.</p>
            </div>
            <img src="/src/assets/img/banner_02.png" class="w-full aspect-[3/4] max-h-[400px] object-cover" alt="">
        </li>

        <li class="h-[400px] relative rounded-sm overflow-hidden border border-gray-50">
            <div class="white-gra-col h-full absolute inset-0 flex flex-col justify-end px-4 py-8 gap-2">
                <h1 class="text-xl font-bold">스마트 물류 이송 공정 구축</h1>
                <p class="text-sm">웹 기반 상태인식 기능을 통해 공정 효율성을 극대화한 스마트 장치를 설계 및 구현합니다.</p>
            </div>
            <img src="/src/assets/img/banner_03.png" class="w-full aspect-[3/4] max-h-[400px] object-cover" alt="">
        </li>
    </ul>
    </section>
    <section class="px-40  py-24 bg-gray-100">
        <h1 class="text-4xl mb-8 font-extrabold ">핵심 가치</h1>
        <div class="flex items-center justify-center pt-1">
            <img src="@/assets/img/values.png" alt="" class="max-w-[1024px]">
        </div>
    </section>

    <section class="px-40  py-24">
        <h1 class="text-4xl mb-8 font-extrabold ">연혁</h1>
        <ul class="flex flex-col relative gap-20 pl-20">
            <li class="flex gap-32 relative">
                <h1 class="text-blue-900 font-black text-3xl">2021'</h1>
                <div class="flex flex-col gap-8 font-medium pt-1">
                  <p>02. 연구소 설립</p>
                  <p>03. 경상남도 스타트업 데모 IR 대회 수상</p>
                  <p>07. 한국전기연구원 기술이전 완료</p>
                </div>
                <div class="h-full absolute left-36 -top-7">
                  <div class="size-4 border-[3px] rounded-full border-gray-500 bg-white absolute top-9 z-10"></div>
                </div>
            </li>

            <li class="flex gap-32 relative">
                <h1 class="text-blue-900 font-black text-3xl">2022'</h1>
                <div class="flex flex-col gap-8 font-medium pt-1">
                  <p>06. 제조빅데이터 포집 게이트 웨이 ‘R-GATE’ 런칭</p>
                  <p>09. AI 엣지 컴퓨팅 ‘R-BOX’ 런칭</p>
                </div>
                <div class="h-full absolute left-36 -top-7">
                  <div class="size-4 border-[3px] rounded-full border-gray-500 bg-white absolute top-9 z-10"></div>
                </div>
            </li>

            <li class="flex gap-32 relative">
                <h1 class="text-blue-900 font-black text-3xl">2024'</h1>
                <div class="flex flex-col gap-8 font-medium pt-1">
                  <p>06. 경상남도 정보 보안 IR 대회ㅏ 수상</p>
                </div>
                <div class="h-full absolute left-36 -top-7">
                  <div class="size-4 border-[3px] rounded-full border-gray-500 bg-white absolute top-9 z-10"></div>
                  <!-- <div class=" absolute h-full w-0.5 bg-gray-500 -z-10"></div> -->
                </div>
            </li>
            <div class="absolute h-[calc(100%-28px)] w-0.5 bg-gray-500 -z-10 left-[231px] bottom-3"></div>
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
