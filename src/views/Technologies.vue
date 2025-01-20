<template>
    <main>
      <section class="relative">
        <img src="/src/assets/img/tec_img.png" class="max-h-[400px] w-full object-cover" alt="">
        <div class="absolute inset-0 flex items-center justify-center w-full h-full text-white">
            <h1 class="text-5xl font-extrabold text-center ">주요 기술</h1>
        </div>
      </section>

      <section class="px-40 py-24">
      <h1 class="mb-8 text-4xl font-extrabold text-center">물류 사고 감소를 위한 AI 지게차 안전 관제 솔루션</h1>
      <p class="text-center">AI 지게차 안전 관제 솔루션은 지게차 및 작업자의 움직임을 관측할 수 있는 TopView 관제 시스템을 도입하여 영상 속 지게차와 작업자의 라벨링 및이동 동선 예측 모델링을 통하여 <br>
        객체 이동 동선의 사고를 예측하고, 태블릿을 통해 지게차 운전자에게 알람을 제공하여 사전에 지게차와 작업자간의 충돌을 예방하는 시스템입니다.</p>
        <div class="flex items-center justify-center pt-14">
          <iframe
            :src="video"
            frameborder="0"
            allowfullscreen
            class="aspect-video w-full max-w-[1200px]"
            >
          </iframe>
        </div>
      </section>
      <section class="relative flex items-center justify-center h-full">
        <img src="@/assets/img/tec_con_img.png" alt="" class="top-0 left-0">
        <div class="w-full z-10 max-w-[1200px] grid grid-cols-3 gap-8 *:rounded-md *:border *:border-gray-400 *:px-6 *:py-8 items-center justify-center h-full absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2">
            <div class="flex items-center justify-center gap-10 text-white inshadow">
                <p class="text-2xl font-extrabold">01</p>
                <p>지게차 및 작업자의 움직임을 <br>
                    관측할 수 있는 TopView 관제 구축</p>
            </div>

            <div class="flex items-center justify-center gap-10 text-white inshadow">
                <p class="text-2xl font-extrabold">02</p>
                <p>영상 속 지게차 및 작업자의 객체 <br>
                    라벨링 및 이동 동선 예측 모델링</p>
            </div>

            <div class="flex items-center justify-center gap-10 text-white inshadow">
                <p class="text-2xl font-extrabold">03</p>
                <p>인공지능 기반 작업 환경 <br>
                    위험 상황 예측 기술 개발</p>
            </div>
        </div>
      </section>
      <section class="flex flex-col items-center justify-center w-full py-40 bg-gray-100 ">
        <h1 class="text-2xl font-black text-center text-blue-950 robo">SERVICE FLOW</h1>
        <div class="max-w-[1200px] w-full">
          <div class="grid items-start justify-between w-full grid-cols-5 gap-10 mt-10">
              <div class="">
                <div class="flex items-center justify-start size-[120px] relative">
                  <img src="@/assets/img/flow_img_01.png" alt="" class="w-[120px]">
                  <div class="shdow-ratial"></div>
                </div>
                <div class="mt-6">
                  <p class="text-lg font-extrabold">01</p>
                  <p class="text-lg font-bold">TopView 관제 시스템 구축</p>
                </div>
              </div>

              <div class="">
                <div class="flex items-center justify-start size-[120px] relative">
                  <img src="@/assets/img/flow_img_02.png" alt="" class="w-[120px]">
                  <div class="shdow-ratial"></div>
                </div>
                <div class="mt-6">
                  <p class="text-lg font-extrabold">02</p>
                  <p class="text-lg font-bold">데이터 수집 및 머신러닝 구동</p>
                </div>
              </div>

              <div class="">
                <div class="flex items-center justify-start size-[120px] relative ">
                  <img src="@/assets/img/flow_img_03.png" alt="" class="w-[120px]">
                  <div class="shdow-ratial"></div>
                </div>
                <div class="mt-6">
                  <p class="text-lg font-extrabold">03</p>
                  <p class="text-lg font-bold">영상 데이터 처리,<br>
                    이미지 스티칭 및 객체 인식</p>
                </div>
              </div>

              <div>
                <div class="flex items-center justify-start size-[120px] relative">
                  <img src="@/assets/img/flow_img_04.png" alt="" class="w-[120px]">
                  <div class="shdow-ratial"></div>
                </div>
                <div class="mt-6">
                  <p class="text-lg font-extrabold">04</p>
                  <p class="text-lg font-bold">동선 예측 및 <br>
                    위험 감지 알람 서비스</p>
                </div>
              </div>

              <div>
                <div class="flex items-center justify-start size-[120px] relative">
                  <img src="@/assets/img/flow_img_05.png" alt="" class="w-[120px]">
                  <div class="shdow-ratial"></div>
                </div>
                <div class="mt-6">
                  <p class="text-lg font-extrabold">05</p>
                  <p class="text-lg font-bold">태블릿 APP 및 <br>
                    현장 상황 관제 대시보드 제공</p>
                </div>
              </div>
          </div>
        </div>
      </section>
    <section class="flex flex-col items-center justify-center w-full py-20 ">
        <h1 class="pb-12 text-2xl font-black text-center text-blue-950 robo">주요 서비스 소개</h1>
        <div class="grid grid-cols-2 w-full max-w-[1200px] gap-6">
            <div class="flex flex-col justify-between h-full">
                <h1 class="text-2xl font-black text-blue-950 ">01
                    <br>
                    <span class="font-bold">TopView 관제 시스템</span>
                </h1>
                <p class="">사각지대가 발생하지 않도록 작업 현장 천장에 다수의 카메라를 설치하여 실시간으로 현장 상황을 촬영하고 촬영된
영상정보를 수집하기 위한 TOPVIEW 관제 시스템을 구축합니다.천장에 설치된 여러 카메라는 작업자와 지게차 같은 물체를 인식하고, 위험한 동선을 예측하는 기술을 적용했습니다.
이 과정에서 작업자가 사용하는 태블릿 위치를 추적해 정보를 실시간으로 제공하고, 이를 통해 태블릿 화면에서 지게차
주변을 360도 시야로 보여주어, 사고를 예방해 작업 현장의 안전과 효율성을 높이는 기술을 제공합니다.</p>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <img src="@/assets/img/service_01.png" alt="" class="col-span-2">
                <img src="@/assets/img/service_02.png" alt="" class="object-cover h-full">
                <img src="@/assets/img/service_03.png" alt="">
            </div>
        </div>
    </section>

    <section class="flex flex-col items-center justify-center w-full py-20 pb">
        <div class="grid grid-cols-2 w-full max-w-[1200px] gap-6">
            <div class="grid grid-cols-2 gap-3">
                <img src="@/assets/img/service_04.png" alt="" class="col-span-2">
                <div class="flex justify-end col-span-2 gap-4">
                    <p><span class="text-green-500">초록색</span>: 실제 이동 경로</p>
                    <p><span class="text-yellow-500">노란색</span><span>: 관측 데이터</span></p>
                    <p><span class="text-red-500">빨간색</span><span>: 얘측 데이터</span></p>
                </div>
                <img src="@/assets/img/service_05.png" alt="" class="col-span-2">
            </div>

            <div class="flex flex-col justify-between h-full">
                <h1 class="text-2xl font-black text-blue-950 ">02
                    <br>
                    <span class="font-bold">동선 예측 및 위험 알람 시스템</span>
                </h1>
                <p class="">
                    Top-View 영상에서 관측한 작업자와 지게차의 실시간 위치정보를 기반으로, 다중객체 추적 기술과 동선 예측 기술 사용을 통해 객체의 현재 상태를 분석하고 각 객체의 동선을 예측하여 잠재적인 위험 상황을 사전에 방지하는 미래 상황
예측 기술을 통해 충돌 예방 사고를 사전에 방지합니다.
현장의 지게차에 AI 영상 관제 앱을 설치하여 지게차 주변 영상(어라운드 뷰)와 작업장 내의 지게차 및 작업자의 위치를
실시간으로 확인할 수 있는 기능과 위험동선예측 알고리즘을 적용하여 지게차와 작업자간의 충돌을 사전에 예방할 수
있도록 앱에서 위험 알람과, 지게차에 부착되는 위험 알림 IoT 디바이스와 연동된 지게차 외부에도 위험
알람을 발생합니다.

                </p>
            </div>

        </div>
    </section>

</main>
</template>


<script lang="ts" setup>
import video from '@/assets/img/robo_video.mp4';

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
