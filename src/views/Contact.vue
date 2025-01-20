<template>
  <main>
    <section class="relative flex items-center justify-center text-white">
      <img src="@/assets/img/contact.png" alt="" class="absolute top-0 left-0 object-cover w-full h-full">
      <div class="relative z-10 pt-24 pb-20 max-w-[1200px] w-full">
        <h1 class="text-5xl font-black text-center text-white roboto">CONTACT US</h1>
        <div class="flex justify-between mt-9 ">
            <div class="text-left">
                <h1 class="text-3xl">제조 및 로보틱스 분야의 미래를 여는 AI 솔루션,<br>
                    로보틱박스와 함께하세요.</h1>
                <p class="my-10">언제든지 문의해주세요! <br> 궁금한 점이나 협업 제안이 있으시다면 편하게 연락 주세요.<br>로보틱박스가 혁신적인 솔루션으로 함께하겠습니다.</p>
                <button class="border border-white rounded-sm  flex-none w-[200px] text-white py-3 flex items-center justify-center">회사소개서 다운로드<span class="ml-2">></span></button>
                <div class="w-px h-[calc(100%-430px)] bg-white my-8"></div>
                <div class="flex flex-col gap-0.5">
                    <p>대표 : 하현수</p>
                    <p>Mobile 010-2951-0068</p>
                    <p>Tel 051-711- 3468</p>
                    <p>Fax 051-518-8901</p>
                </div>
            </div>
            <div class=" input-gap-box w-full max-w-[600px] flex  flex-col p-6 gap-4 rounded-md text-gray-900 bg-white">
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

                <textarea type="text" id="message" v-model="contact['formData']['message']" placeholder="문의 내용 입력 *" class="resize-none input-st" rows="10"/>
                <small v-if="contact['msg']['message'] !== ''" class="text-red-500">{{ contact['msg']['message'] }}</small>
                <div class="flex items-start gap-3 text-sm">
                    <Checkbox v-model="contact['checked']" :binary="true"/>
                    <p>개인정보 수집 및 이용에 동의합니다. <br>
                        <span class="text-gray-500">
                            처리 목적: 이름, 이메일, 연락처, 회사명, 직급 필수 항목: 문의 회신을 위한 기본 정보 수집
                        </span></p>
                </div>
                <div class="flex justify-end mt-2">
                    <button class="px-4 py-2 text-white rounded-sm bg-blue-950 " @click="getContact">문의하기 ></button>
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

onMounted(() => {
    contact.getReset();
});
</script>

<style lang="scss">
.white-gra-col{
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%,  rgba(255, 255, 255, 0.882573) 80%, rgba(255, 255, 255, 1) 90%);
}
</style>
