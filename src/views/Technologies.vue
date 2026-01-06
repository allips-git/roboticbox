<template>
  <main>
    <section class="relative">
      <img
        src="/src/assets/img/tec_img.png"
        class="min-h-[240px] max-h-[400px] w-full object-cover"
        alt=""
      />
      <div class="flex absolute inset-0 justify-center items-center w-full h-full text-white">
        <h1 class="text-2xl font-extrabold text-center sm:text-3xl md:text-4xl lg:text-5xl">
          {{ t('technologies.title') }}
        </h1>
      </div>
    </section>

    <section class="py-10 sm:py-12 md:py-15 lg:py-18 xl:py-20">
      <div class="inner">
        <h2
          class="mb-3 text-xl font-extrabold text-center sm:mb-4 lg:mb-5 xl:mb-6 sm:text-2xl lg:text-3xl xl:text-4xl"
        >
          <template v-if="t('technologies.hero.heading').includes('AI 지게차')">
            물류 사고 감소를 위한 <span class="block sm:inline">AI 지게차 안전 관제 솔루션</span>
          </template>
          <template v-else>
            {{ t('technologies.hero.heading') }}
          </template>
        </h2>
        <p
          class="text-center break-keep mt-1 lg:mt-3 lg:text-[1.0625rem] xl:text-lg"
          v-html="formattedDescription"
        ></p>
        <div class="flex flex-col gap-2 justify-center items-center pt-6 sm:gap-5 sm:pt-14">
          <iframe :src="video" frameborder="0" allowfullscreen class="w-full aspect-video">
          </iframe>
          <a
            href="https://www.youtube.com/watch?v=dFcvxotdgFE"
            about="blank"
            class="text-xs text-center text-gray-500 sm:text-sm hover:underline"
          >
            {{ t('technologies.hero.source') }}
          </a>
        </div>
      </div>
    </section>

    <section
      class="py-10 sm:py-12 md:py-15 lg:py-18 xl:py-20 flex relative justify-center items-center h-full bg-[url(@/assets/img/tec_con_img.png)]"
    >
      <div class="inner">
        <div
          class="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4 [&>div]:border [&>div]:border-gray-400 [&>div]:rounded-md [&>div]:py-4 lg:[&>div]:py-6"
        >
          <div class="flex gap-2 items-center text-white sm:flex-col sm:justify-start inshadow">
            <span class="text-2xl font-extrabold w-[5rem] text-center">01</span>
            <div
              class="text-[0.9375rem] md:text-base sm:text-center break-keep sm:pb-1"
              v-html="
                t('technologies.feature1.title')
                  .replace('TopView 관제 구축', '<br>TopView 관제 구축')
                  .replace(
                    'TopView Monitoring System Construction',
                    '<br>TopView Monitoring System Construction',
                  )
              "
            ></div>
          </div>
          <div class="flex gap-2 items-center text-white sm:flex-col sm:justify-start inshadow">
            <span class="text-2xl font-extrabold w-[5rem] text-center">02</span>
            <div
              class="text-[0.9375rem] md:text-base sm:text-center break-keep sm:pb-1"
              v-html="
                t('technologies.feature2.title')
                  .replace('객체', '<br>객체')
                  .replace('Object', '<br>Object')
                  .replace('object', '<br>object')
              "
            ></div>
          </div>
          <div class="flex gap-2 items-center text-white sm:flex-col sm:justify-start inshadow">
            <span class="text-2xl font-extrabold w-[5rem] text-center">03</span>
            <div
              class="text-[0.9375rem] md:text-base sm:text-center break-keep sm:pb-1"
              v-html="
                t('technologies.feature3.title')
                  .replace('작업 환경', '작업 환경<br>')
                  .replace('Work Environment', 'Work Environment<br>')
                  .replace('work environment', 'work environment<br>')
              "
            ></div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 bg-gray-100 sm:py-12 md:py-15 lg:py-18 xl:py-20">
      <div class="inner">
        <h2
          class="mb-3 text-xl font-extrabold text-center sm:mb-4 lg:mb-5 xl:mb-6 sm:text-2xl lg:text-3xl xl:text-4xl roboto"
        >
          SERVICE FLOW
        </h2>
        <div
          class="grid grid-cols-2 gap-6 justify-between items-start px-1 pb-4 mt-6 w-full lg:px-0 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 sm:gap-10 sm:grid-cols-3 lg:grid-cols-5"
        >
          <div class="flex flex-col items-center">
            <div class="flex items-center justify-start size-[120px] relative">
              <img src="@/assets/img/flow_img_01.png" alt="" class="w-[120px]" />
              <div class="shdow-ratial"></div>
            </div>
            <div class="mt-6 md:text-[1.0625rem] xl:text-lg">
              <div class="font-extrabold">01</div>
              <div class="mt-[0.125rem] font-bold break-keep">
                {{ t('technologies.flow.item1') }}
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="flex items-center justify-start size-[120px] relative">
              <img src="@/assets/img/flow_img_02.png" alt="" class="w-[120px]" />
              <div class="shdow-ratial"></div>
            </div>
            <div class="mt-6 md:text-[1.0625rem] xl:text-lg">
              <div class="font-extrabold">02</div>
              <div class="mt-[0.125rem] font-bold break-keep">
                {{ t('technologies.flow.item2') }}
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="flex items-center justify-start size-[120px] relative">
              <img src="@/assets/img/flow_img_03.png" alt="" class="w-[120px]" />
              <div class="shdow-ratial"></div>
            </div>
            <div class="mt-6 md:text-[1.0625rem] xl:text-lg">
              <div class="font-extrabold">03</div>
              <div
                class="mt-[0.125rem] font-bold break-keep"
                v-html="t('technologies.flow.item3').replace(', ', ',<br>')"
              ></div>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="flex items-center justify-start size-[120px] relative">
              <img src="@/assets/img/flow_img_04.png" alt="" class="w-[120px]" />
              <div class="shdow-ratial"></div>
            </div>
            <div class="mt-6 md:text-[1.0625rem] xl:text-lg">
              <div class="font-extrabold">04</div>
              <div
                class="mt-[0.125rem] font-bold break-keep"
                v-html="
                  t('technologies.flow.item4')
                    .replace(' 및 ', ' 및 <br>')
                    .replace(' and ', ' and <br>')
                "
              ></div>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="flex items-center justify-start size-[120px] relative">
              <img src="@/assets/img/flow_img_05.png" alt="" class="w-[120px]" />
              <div class="shdow-ratial"></div>
            </div>
            <div class="mt-6 md:text-[1.0625rem] xl:text-lg">
              <div class="font-extrabold">05</div>
              <div
                class="mt-[0.125rem] font-bold break-keep"
                v-html="
                  t('technologies.flow.item5')
                    .replace(' 및 ', ' 및 <br>')
                    .replace(' and ', ' and <br>')
                "
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 sm:py-12 md:py-15 lg:py-18 xl:py-20">
      <div class="inner">
        <h2
          class="mb-3 text-xl font-extrabold text-center sm:mb-4 lg:mb-5 xl:mb-6 sm:text-2xl lg:text-3xl xl:text-4xl"
        >
          {{ t('technologies.service.title') }}
        </h2>
        <div
          class="grid grid-cols-1 gap-[3rem] pb-5 md:gap-[4rem] lg:gap-[4.5rem] xl:gap-[6rem] pt-6 md:pt-8"
        >
          <div class="flex flex-col gap-6 md:gap-10 lg:gap-12 md:flex-row">
            <div
              class="flex flex-col gap-3 justify-between h-full md:flex-1 lg:shrink-0 md:w-[50%] lg:w-[42%] lg:flex-none pb-1"
            >
              <h3 class="text-xl font-black xl:text-2xl text-blue-950">
                <span class="mr-2">01</span>
                <span class="font-bold">{{ t('technologies.service.item1.title') }}</span>
              </h3>
              <div class="space-y-4 xl:text-[1.0625rem]">
                <p>
                  {{ t('technologies.service.item1.desc1') }}
                </p>
                <p>
                  {{ t('technologies.service.item1.desc2') }}
                </p>
                <p>
                  {{ t('technologies.service.item1.desc3') }}
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-3 self-end md:flex-1">
              <img
                src="@/assets/img/service_01.png"
                alt="TopView 관제 시스템1"
                class="col-span-2"
              />
              <img
                src="@/assets/img/service_02.png"
                alt="TopView 관제 시스템2"
                class="object-cover h-full"
              />
              <img src="@/assets/img/service_03.png" alt="TopView 관제 시스템3" />
            </div>
          </div>
          <div class="flex flex-col gap-6 md:gap-10 lg:gap-12 md:flex-row-reverse">
            <div
              class="flex flex-col gap-3 justify-between h-full md:flex-1 lg:shrink-0 md:w-[50%] lg:w-[42%] lg:flex-none pb-1"
            >
              <h3 class="text-xl font-black xl:text-2xl text-blue-950">
                <span class="mr-2">02</span>
                <span class="font-bold">{{ t('technologies.service.item2.title') }}</span>
              </h3>
              <div class="space-y-4 xl:text-[1.0625rem]">
                <p>
                  {{ t('technologies.service.item2.desc1') }}
                </p>
                <p>
                  {{ t('technologies.service.item2.desc2') }}
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-3 self-end md:flex-1">
              <img
                src="@/assets/img/service_04.png"
                alt="동선 예측 및 위험 알람 시스템1"
                class="col-span-2"
              />
              <div class="flex col-span-2 gap-4 justify-end text-xs">
                <div>
                  <span class="text-green-500">{{
                    t('technologies.service.legend.green').split(':')[0]
                  }}</span
                  >: {{ t('technologies.service.legend.green').split(':')[1] }}
                </div>
                <div>
                  <span class="text-yellow-500">{{
                    t('technologies.service.legend.yellow').split(':')[0]
                  }}</span
                  ><span>: {{ t('technologies.service.legend.yellow').split(':')[1] }}</span>
                </div>
                <div>
                  <span class="text-red-500">{{
                    t('technologies.service.legend.red').split(':')[0]
                  }}</span
                  ><span>: {{ t('technologies.service.legend.red').split(':')[1] }}</span>
                </div>
              </div>
              <img
                src="@/assets/img/service_05.png"
                alt="동선 예측 및 위험 알람 시스템2"
                class="col-span-2"
              />
            </div>
          </div>
          <!-- <div class="flex flex-col gap-6 md:gap-10 lg:gap-12 md:flex-row">
            <div class="flex flex-col gap-3 justify-between h-full md:flex-1 lg:shrink-0 md:w-[50%] lg:w-[42%] lg:flex-none pb-1">
              <h3 class="text-xl font-black xl:text-2xl text-blue-950">
                  <span class="mr-2">03</span>
                  <span class="font-bold">실시간 태블릿 알람</span>
              </h3>
              <div class="space-y-4 xl:text-[1.0625rem]">
                <p>
                  태블릿에서는 AI 기반 지게차 안전 관제 시스템의 실시간 경고 동작을 보여줍니다. 지게차가 전진 또는 후진 중일 때 약 2m 이내에서 작업자가 감지되면, 시스템이 잠재적인 충돌 위험을 자동으로 판단하고 운전자 태블릿으로 경고 알람을 전송합니다.
                </p>
                <p>
                  태블릿 화면은 즉각적인 인지를 위해 붉은색 화면과 함께 경고 효과로 전환되며, 동시에 알람 발생 시점과 이벤트 시작·종료 시간이 데이터베이스에 기록되어 사후 확인 및 안전 관리에 활용 가능합니다.
                </p>
              </div>
            </div>
            <div class="self-end md:flex-1">
              <video
                :src="tabletVideo"
                class="w-full rounded-md shadow-lg"
                controls
                playsinline
                preload="metadata"
              >
                브라우저가 동영상을 지원하지 않습니다.
              </video>
            </div>
          </div> -->
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useTranslation } from '@/composables/useTranslation'
import video from '@/assets/img/robo_video_40.mp4'
import tabletVideo from '@/assets/img/v4.mp4'

const { t } = useTranslation()

const formattedDescription = computed(() => {
  const description = t('technologies.hero.description')
  // 한국어인 경우
  if (description.includes('라벨링')) {
    return description
      .replace(
        '영상 속 지게차와 작업자의 라벨링 및이동 동선 예측 모델링을 통하여 객체 이동 동선의 사고를 예측하고, ',
        '<span class="md:block">영상 속 지게차와 작업자의 라벨링 및이동 동선 예측 모델링을 통하여 객체 이동 동선의 사고를 예측하고, </span>',
      )
      .replace(
        '태블릿을 통해 지게차 운전자에게 알람을 제공하여 사전에 지게차와 작업자간의 충돌을 예방하는 시스템입니다.',
        '<span class="md:block">태블릿을 통해 지게차 운전자에게 알람을 제공하여 사전에 지게차와 작업자간의 충돌을 예방하는 시스템입니다.</span>',
      )
  }
  // 영어인 경우
  if (description.includes('predicts accidents')) {
    return description
      .replace(
        'predicts accidents in object movement trajectories through labeling and movement trajectory prediction modeling of forklifts and workers in video, ',
        '<span class="md:block">predicts accidents in object movement trajectories through labeling and movement trajectory prediction modeling of forklifts and workers in video, </span>',
      )
      .replace(
        'and provides alarms to forklift drivers through tablets to prevent collisions between forklifts and workers in advance.',
        '<span class="md:block">and provides alarms to forklift drivers through tablets to prevent collisions between forklifts and workers in advance.</span>',
      )
  }
  return description
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
.inshadow {
  box-shadow: 4px 4px 4px 0px rgba(79, 89, 103, 0.25) inset;
  box-shadow: -4px -4px 4px 0px rgba(79, 89, 103, 0.25) inset;
}
.shdow-ratial {
  background: radial-gradient(
    49.31% 50% at 50% 50%,
    rgba(181, 182, 194, 0.6) 0%,
    rgba(244, 244, 244, 0.6) 100%
  );
  width: 100%;
  height: 10px;
  position: absolute;
  bottom: -16px;
}
</style>
