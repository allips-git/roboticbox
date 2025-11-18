<template>
  <main>
    <section class="relative">
      <img src="/src/assets/img/tec_img.png" class="min-h-[240px] max-h-[400px] w-full object-cover" alt="">
      <div class="flex absolute inset-0 justify-center items-center w-full h-full text-white">
        <h1 class="text-2xl font-extrabold text-center sm:text-3xl md:text-4xl lg:text-5xl">주요 기술</h1>
      </div>
    </section>

    <section class="py-10 sm:py-12 md:py-15 lg:py-18 xl:py-20">
      <div class="inner">
        <h2 class="mb-3 text-xl font-extrabold text-center sm:mb-4 lg:mb-5 xl:mb-6 sm:text-2xl lg:text-3xl xl:text-4xl">
          물류 사고 감소를 위한 <span class="block sm:inline">AI 지게차 안전 관제 솔루션</span>
        </h2>
        <p class="text-center break-keep mt-1 lg:mt-3 lg:text-[1.0625rem] xl:text-lg">
          AI 지게차 안전 관제 솔루션은 지게차 및 작업자의 움직임을 관측할 수 있는 TopView 관제 시스템을 도입하여 <span class="md:block">영상 속 지게차와 작업자의 라벨링 및이동 동선 예측 모델링을 통하여 객체 이동 동선의 사고를 예측하고, </span><span class="md:block">태블릿을 통해 지게차 운전자에게 알람을 제공하여 사전에 지게차와 작업자간의 충돌을 예방하는 시스템입니다.</span>
        </p>
        <div class="flex flex-col gap-2 justify-center items-center pt-6 sm:gap-5 sm:pt-14">
          <iframe
            :src="video"
            frameborder="0"
            allowfullscreen
            class="w-full aspect-video"
            >
          </iframe>
          <a href="https://www.youtube.com/watch?v=dFcvxotdgFE" about="blank" class="text-xs text-center text-gray-500 sm:text-sm hover:underline">
            출처 : [YTN 다큐S프라임] 인공지능 대전환! 제조혁신의 날개를 달다
          </a>
        </div>
      </div>
    </section>

    <section class="py-10 sm:py-12 md:py-15 lg:py-18 xl:py-20 flex relative justify-center items-center h-full bg-[url(@/assets/img/tec_con_img.png)]">
      <div class="inner">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4 [&>div]:border [&>div]:border-gray-400 [&>div]:rounded-md [&>div]:py-4 lg:[&>div]:py-6">
          <div class="flex gap-2 items-center text-white sm:flex-col sm:justify-start inshadow">
            <span class="text-2xl font-extrabold w-[5rem] text-center">01</span>
            <div class="text-[0.9375rem] md:text-base sm:text-center break-keep sm:pb-1">
              지게차 및 작업자의 움직임을 <br>
              관측할 수 있는 TopView 관제 구축
            </div>
          </div>
          <div class="flex gap-2 items-center text-white sm:flex-col sm:justify-start inshadow">
            <span class="text-2xl font-extrabold w-[5rem] text-center">02</span>
            <div class="text-[0.9375rem] md:text-base sm:text-center break-keep sm:pb-1">
              영상 속 지게차 및 작업자의 객체 <br>
              라벨링 및 이동 동선 예측 모델링
            </div>
          </div>
          <div class="flex gap-2 items-center text-white sm:flex-col sm:justify-start inshadow">
            <span class="text-2xl font-extrabold w-[5rem] text-center">03</span>
            <div class="text-[0.9375rem] md:text-base sm:text-center break-keep sm:pb-1">
              인공지능 기반 작업 환경<br>
              위험 상황 예측 기술 개발
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 bg-gray-100 sm:py-12 md:py-15 lg:py-18 xl:py-20">
      <div class="inner">
        <h2 class="mb-3 text-xl font-extrabold text-center sm:mb-4 lg:mb-5 xl:mb-6 sm:text-2xl lg:text-3xl xl:text-4xl roboto">
          SERVICE FLOW
        </h2>
        <div class="grid grid-cols-2 gap-6 justify-between items-start px-1 pb-4 mt-6 w-full lg:px-0 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 sm:gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div class="flex flex-col items-center">
            <div class="flex items-center justify-start size-[120px] relative">
              <img src="@/assets/img/flow_img_01.png" alt="" class="w-[120px]">
              <div class="shdow-ratial"></div>
            </div>
            <div class="mt-6 md:text-[1.0625rem] xl:text-lg">
              <div class="font-extrabold">01</div>
              <div class="mt-[0.125rem] font-bold break-keep">TopView 관제 시스템 구축</div>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="flex items-center justify-start size-[120px] relative">
              <img src="@/assets/img/flow_img_02.png" alt="" class="w-[120px]">
              <div class="shdow-ratial"></div>
            </div>
            <div class="mt-6 md:text-[1.0625rem] xl:text-lg">
              <div class="font-extrabold">02</div>
              <div class="mt-[0.125rem] font-bold break-keep">데이터 수집 및 머신러닝 구동</div>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="flex items-center justify-start size-[120px] relative ">
              <img src="@/assets/img/flow_img_03.png" alt="" class="w-[120px]">
              <div class="shdow-ratial"></div>
            </div>
            <div class="mt-6 md:text-[1.0625rem] xl:text-lg">
              <div class="font-extrabold">03</div>
              <div class="mt-[0.125rem] font-bold break-keep">
                영상 데이터 처리,<br>
                이미지 스티칭 및 객체 인식
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="flex items-center justify-start size-[120px] relative">
              <img src="@/assets/img/flow_img_04.png" alt="" class="w-[120px]">
              <div class="shdow-ratial"></div>
            </div>
            <div class="mt-6 md:text-[1.0625rem] xl:text-lg">
              <div class="font-extrabold">04</div>
              <div class="mt-[0.125rem] font-bold break-keep">
                동선 예측 및 <br>
                위험 감지 알람 서비스
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="flex items-center justify-start size-[120px] relative">
              <img src="@/assets/img/flow_img_05.png" alt="" class="w-[120px]">
              <div class="shdow-ratial"></div>
            </div>
            <div class="mt-6 md:text-[1.0625rem] xl:text-lg">
              <div class="font-extrabold">05</div>
              <div class="mt-[0.125rem] font-bold break-keep">
                태블릿 APP 및 <br>
                현장 상황 관제 대시보드 제공
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 sm:py-12 md:py-15 lg:py-18 xl:py-20">
      <div class="inner">
        <h2 class="mb-3 text-xl font-extrabold text-center sm:mb-4 lg:mb-5 xl:mb-6 sm:text-2xl lg:text-3xl xl:text-4xl">주요 서비스 소개</h2>
        <div class="grid grid-cols-1 gap-[3rem] pb-5 md:gap-[4rem] lg:gap-[4.5rem] xl:gap-[6rem] pt-6 md:pt-8">
          <div class="flex flex-col gap-6 md:gap-10 lg:gap-12 md:flex-row">
            <div class="flex flex-col gap-3 justify-between h-full md:flex-1 lg:shrink-0 md:w-[50%] lg:w-[42%] lg:flex-none pb-1">
              <h3 class="text-xl font-black xl:text-2xl text-blue-950">
                  <span class="mr-2">01</span>
                  <span class="font-bold">TopView 관제 시스템</span>
              </h3>
              <div class="space-y-4 xl:text-[1.0625rem]">
                <p>
                  사각지대가 발생하지 않도록 작업 현장 천장에 다수의 카메라를 설치하여 실시간으로 현장 상황을 촬영하고 촬영된 영상정보를 수집하기 위한 TOPVIEW 관제 시스템을 구축합니다.
                </p>
                <p>
                  천장에 설치된 여러 카메라는 작업자와 지게차 같은 물체를 인식하고, 위험한 동선을 예측하는 기술을 적용했습니다.
                </p>
                <p>
                  이 과정에서 작업자가 사용하는 태블릿 위치를 추적해 정보를 실시간으로 제공하고, 이를 통해 태블릿 화면에서 지게차 주변을 360도 시야로 보여주어, 사고를 예방해 작업 현장의 안전과 효율성을 높이는 기술을 제공합니다.
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-3 self-end md:flex-1">
                <img src="@/assets/img/service_01.png" alt="TopView 관제 시스템1" class="col-span-2">
                <img src="@/assets/img/service_02.png" alt="TopView 관제 시스템2" class="object-cover h-full">
                <img src="@/assets/img/service_03.png" alt="TopView 관제 시스템3">
            </div>
          </div>
          <div class="flex flex-col gap-6 md:gap-10 lg:gap-12 md:flex-row-reverse">
            <div class="flex flex-col gap-3 justify-between h-full md:flex-1 lg:shrink-0 md:w-[50%] lg:w-[42%] lg:flex-none pb-1">
              <h3 class="text-xl font-black xl:text-2xl text-blue-950">
                <span class="mr-2">02</span>
                  <span class="font-bold">동선 예측 및 위험 알람 시스템</span>
              </h3>
              <div class="space-y-4 xl:text-[1.0625rem]">
                <p>
                  Top-View 영상에서 관측한 작업자와 지게차의 실시간 위치정보를 기반으로, 다중객체 추적 기술과 동선 예측 기술 사용을 통해 객체의 현재 상태를 분석하고 각 객체의 동선을 예측하여 잠재적인 위험 상황을 사전에 방지하는 미래 상황 예측 기술을 통해 충돌 예방 사고를 사전에 방지합니다.
                </p>
                <p>
                  현장의 지게차에 AI 영상 관제 앱을 설치하여 지게차 주변 영상(어라운드 뷰)와 작업장 내의 지게차 및 작업자의 위치를 실시간으로 확인할 수 있는 기능과 위험동선예측 알고리즘을 적용하여 지게차와 작업자간의 충돌을 사전에 예방할 수 있도록 앱에서 위험 알람과, 지게차에 부착되는 위험 알림 IoT 디바이스와 연동된 지게차 외부에도 위험 알람을 발생합니다.
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-3 self-end md:flex-1">
              <img src="@/assets/img/service_04.png" alt="동선 예측 및 위험 알람 시스템1" class="col-span-2">
              <div class="flex col-span-2 gap-4 justify-end text-xs">
                  <div><span class="text-green-500">초록색</span>: 실제 이동 경로</div>
                  <div><span class="text-yellow-500">노란색</span><span>: 관측 데이터</span></div>
                  <div><span class="text-red-500">빨간색</span><span>: 얘측 데이터</span></div>
              </div>
              <img src="@/assets/img/service_05.png" alt="동선 예측 및 위험 알람 시스템2" class="col-span-2">
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import video from '@/assets/img/robo_video_40.mp4';
</script>

<style lang="scss">
.white-gra-col{
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%,  rgba(255, 255, 255, 0.882573) 80%, rgba(255, 255, 255, 1) 90%);
}
.inshadow{
    box-shadow: 4px 4px 4px 0px rgba(79, 89, 103, 0.25) inset;
    box-shadow: -4px -4px 4px 0px rgba(79, 89, 103, 0.25) inset;
}
.shdow-ratial{
    background: radial-gradient(49.31% 50% at 50% 50%, rgba(181, 182, 194, 0.6) 0%, rgba(244, 244, 244, 0.6) 100%);
    width: 100%;
    height: 10px;
    position: absolute;
    bottom: -16px;
}
</style>
