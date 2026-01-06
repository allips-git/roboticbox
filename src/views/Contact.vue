<template>
  <main>
    <section class="flex relative justify-center items-center text-white">
      <img src="@/assets/img/contact.png" alt="" class="object-cover absolute top-0 left-0 w-full h-full">
      <div class="relative z-10 pt-12 pb-20 md:pt-16 lg:pt-20 xl:py-24 inner">
        <h1 class="text-2xl font-extrabold text-center sm:text-3xl md:text-4xl lg:text-5xl roboto">CONTACT US</h1>
        <div class="justify-between mt-9 md:mt-[3rem] lg:mt-[4rem] md:flex md:gap-10">
          <div class="text-center md:text-left md:pt-4">
              <h2 class="text-[1.0625rem] font-extrabold sm:mb-4 lg:mb-5 xl:mb-6 sm:text-2xl lg:text-3xl" v-html="t('contact.heading').replace('로보틱박스', '<br>로보틱박스').replace('RoboticBox', '<br>RoboticBox')">
              </h2>
              <p class="mt-4 mb-5 sm:mt-6 sm:mb-7 md:mt-8 md:mb-9 text-[0.9375rem] sm:text-base whitespace-nowrap" v-html="t('contact.description').replace(/! /g, '!<br>').replace(/\. /g, '.<br>')">
              </p>
              <button class="border border-white rounded-sm  flex-none w-[200px] text-white py-3 flex items-center justify-center mx-[auto] md:mx-0" @click="getDownload">{{ t('contact.download') }}<span class="ml-2">></span></button>
              <div class="h-0 w-px md:h-[calc(100%-460px)] bg-white my-8"></div>
              <div class="flex flex-col gap-0.5">
                  <p>{{ t('contact.info.ceo') }}</p>
                  <p>{{ t('contact.info.mobile') }}</p>
                  <p>{{ t('contact.info.tel') }}</p>
                  <p>{{ t('contact.info.fax') }}</p>
              </div>
          </div>
          <div class="mt-8 md:mt-0 mx-[auto] lg:mx-0 max-w-[560px] flex flex-col px-4 py-6 sm:p-6 gap-2 md:gap-3 xl:gap-4 rounded-md text-gray-900 bg-white">
              <input type="text" id="company" v-model="contact['formData']['company']" :placeholder="t('contact.form.company')" class="input-st">
              <small v-if="contact['msg']['company'] !== ''" class="text-red-500">{{ contact['msg']['company'] }}</small>

              <input type="text" id="name" v-model="contact['formData']['name']" :placeholder="t('contact.form.name')" class="input-st">
              <small v-if="contact['msg']['name'] !== ''" class="text-red-500">{{ contact['msg']['name'] }}</small>

              <input type="text" id="rank" v-model="contact['formData']['rank']" :placeholder="t('contact.form.rank')" class="input-st">
              <small v-if="contact['msg']['rank'] !== ''" class="text-red-500">{{ contact['msg']['rank'] }}</small>

              <input type="text" id="tel" v-model="contact['formData']['tel']" :placeholder="t('contact.form.tel')" class="input-st">
              <small v-if="contact['msg']['tel'] !== ''" class="text-red-500">{{ contact['msg']['tel'] }}</small>

              <input type="text" id="email" v-model="contact['formData']['email']" :placeholder="t('contact.form.email')" class="input-st">
              <small v-if="contact['msg']['email'] !== ''" class="text-red-500">{{ contact['msg']['email'] }}</small>

              <textarea type="text" id="message" v-model="contact['formData']['message']" :placeholder="t('contact.form.message')" class="resize-none input-st" rows="6"/>
              <small v-if="contact['msg']['message'] !== ''" class="text-red-500">{{ contact['msg']['message'] }}</small>
              <div class="flex gap-3 items-start text-sm">
                  <Checkbox v-model="contact['checked']" :binary="true"/>
                  <p v-html="t('contact.form.agree').replace(/\. /g, '.<br>') + '<br><span class=\'text-gray-500\'>' + t('contact.form.agreeDesc') + '</span>'">
                  </p>
              </div>
              <div class="flex justify-end mt-2">
                  <button class="px-4 py-2 text-white rounded-sm bg-blue-950" :disabled="contact['state']" @click="getContact">{{ t('contact.form.submit') }} ></button>
              </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { onMounted, computed } from 'vue'
import { useContactStore } from '@/stores/contact';
import { useTranslation } from '@/composables/useTranslation';
import Checkbox from 'primevue/checkbox';
import { contactMsg } from '@/assets/js/msg';
import compressed from '@/assets/file/compressed.pdf'; // 파일 경로 가져오기

const contact = useContactStore();
const { t } = useTranslation();

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
        alert(t('contact.form.agree'));
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
