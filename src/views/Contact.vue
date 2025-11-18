<template>
  <main>
    <section class="flex relative justify-center items-center text-white">
      <img src="@/assets/img/contact.png" alt="" class="object-cover absolute top-0 left-0 w-full h-full">
      <div class="relative z-10 pt-12 pb-20 md:pt-16 lg:pt-20 xl:py-24 inner">
        <h1 class="text-2xl font-extrabold text-center sm:text-3xl md:text-4xl lg:text-5xl roboto">CONTACT US</h1>
        <div class="justify-between mt-9 md:mt-[3rem] lg:mt-[4rem] md:flex md:gap-10">
          <div class="text-center md:text-left md:pt-4">
              <h2 class="text-[1.0625rem] font-extrabold sm:mb-4 lg:mb-5 xl:mb-6 sm:text-2xl lg:text-3xl">
                  제조 및 로보틱스 분야의 미래를 여는 AI 솔루션,<br>
                  로보틱박스와 함께하세요.</h2>
              <p class="mt-4 mb-5 sm:mt-6 sm:mb-7 md:mt-8 md:mb-9 text-[0.9375rem] sm:text-base whitespace-nowrap">
                언제든지 문의해주세요! <br>
                궁금한 점이나 협업 제안이 있으시다면 편하게 연락 주세요.<br>
                로보틱박스가 혁신적인 솔루션으로 함께하겠습니다.
              </p>
              <button class="border border-white rounded-sm  flex-none w-[200px] text-white py-3 flex items-center justify-center mx-[auto] md:mx-0" @click="getDownload">회사소개서 다운로드<span class="ml-2">></span></button>
              <div class="h-0 w-px md:h-[calc(100%-460px)] bg-white my-8"></div>
              <div class="flex flex-col gap-0.5">
                  <p>대표 : 하현수</p>
                  <p>Mobile 010-2951-0068</p>
                  <p>Tel 051-711- 3468</p>
                  <p>Fax 051-518-8901</p>
              </div>
          </div>
          <div class="mt-8 md:mt-0 mx-[auto] lg:mx-0 max-w-[560px] flex flex-col px-4 py-6 sm:p-6 gap-2 md:gap-3 xl:gap-4 rounded-md text-gray-900 bg-white">
              <input type="text" id="company" v-model="contact['formData']['company']" placeholder="회사명 *" class="input-st">
              <small v-if="contact['msg']['company'] !== ''" class="text-red-500">{{ contact['msg']['company'] }}</small>

              <input type="text" id="name" v-model="contact['formData']['name']" placeholder="이름 *" class="input-st">
              <small v-if="contact['msg']['name'] !== ''" class="text-red-500">{{ contact['msg']['name'] }}</small>

              <input type="text" id="rank" v-model="contact['formData']['rank']" placeholder="직급 *" class="input-st">
              <small v-if="contact['msg']['rank'] !== ''" class="text-red-500">{{ contact['msg']['rank'] }}</small>

              <input type="text" id="tel" v-model="contact['formData']['tel']" placeholder="담당 연락처 *" class="input-st">
              <small v-if="contact['msg']['tel'] !== ''" class="text-red-500">{{ contact['msg']['tel'] }}</small>

              <input type="text" id="email" v-model="contact['formData']['email']" placeholder="담당 이메일 *" class="input-st">
              <small v-if="contact['msg']['email'] !== ''" class="text-red-500">{{ contact['msg']['email'] }}</small>

              <textarea type="text" id="message" v-model="contact['formData']['message']" placeholder="문의 내용 입력 *" class="resize-none input-st" rows="6"/>
              <small v-if="contact['msg']['message'] !== ''" class="text-red-500">{{ contact['msg']['message'] }}</small>
              <div class="flex gap-3 items-start text-sm">
                  <Checkbox v-model="contact['checked']" :binary="true"/>
                  <p>개인정보 수집 및 이용에 동의합니다. <br>
                      <span class="text-gray-500">
                          처리 목적: 이름, 이메일, 연락처, 회사명, 직급 필수 항목: 문의 회신을 위한 기본 정보 수집
                      </span></p>
              </div>
              <div class="flex justify-end mt-2">
                  <button class="px-4 py-2 text-white rounded-sm bg-blue-950" :disabled="contact['state']" @click="getContact">문의하기 ></button>
              </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useContactStore } from '@/stores/contact';
import Checkbox from 'primevue/checkbox';
import { contactMsg } from '@/assets/js/msg';
import compressed from '@/assets/file/compressed.pdf'; // 파일 경로 가져오기

const contact = useContactStore();

const getContact = async () => {
    const checkParams = {
        company     : contact['formData']['company'],
        name        : contact['formData']['name'],
        rank        : contact['formData']['rank'],
        tel         : contact['formData']['tel'],
        email       : contact['formData']['email'],
        message     : contact['formData']['message']
    };

    const result = contactMsg(checkParams);

    if(!result['state'])
    {
        contact.getMsgSet(result['msg'], result['id']);
        const inputElement = document.getElementById(result['id']);
        if (inputElement)
        {
            inputElement.focus();
        }

        return false;
    }

    if(!contact['checked'])
    {
        alert('개인정보 수집 및 이용에 동의해주세요.');
        return;
    }

    await contact.sendEmail();
}

const getDownload = () => {
    const link      = document.createElement('a');
    link.href       = compressed;
    link.download   = 'compressed.pdf';
    link.click();
}

onMounted(() => {
    contact.getReset();
});
</script>

<style lang="scss">
.white-gra-col{
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%,  rgba(255, 255, 255, 0.882573) 80%, rgba(255, 255, 255, 1) 90%);
}
</style>
