<template>
  <section class="flex flex-col justify-center items-center py-8 bg-gray-100">
    <footer class="px-5 md:px-6 w-full flex flex-col sm:flex-row sm:justify-start sm:gap-20 md:flex-col md:gap-5 items-start justify-center max-w-[1280px] lg:flex-row lg:justify-between">
      <img src="@/assets/img/logo.png" alt="주식회사 로보틱박스" class="w-[7rem]" />
      <section class="flex flex-col gap-5 mt-6 text-gray-500 sm:mt-0 md:flex-row sm:gap-6 md:justify-between md:w-full lg:w-[auto] lg:gap-[5rem]">
        <div>
          <h3 class="text-base font-medium lg:mb-2 roboto">COMPANY</h3>
          <ul class="flex flex-col gap-1 mt-1 text-sm">
            <li>
              <router-link to="/contact">{{ t('footer.company.inquiry') }}</router-link>
            </li>
            <li class="cursor-pointer" @click="getDownload">{{ t('footer.company.download') }}</li>
          </ul>
        </div>
        <div>
          <h3 class="text-base font-medium lg:mb-2 roboto">ADDRESS</h3>
          <ul class="flex flex-col gap-1 mt-1 text-sm">
            <li>{{ t('footer.address.headquarters') }}</li>
            <li>{{ t('footer.address.busan') }}</li>
          </ul>
        </div>
        <div>
          <h3 class="text-base font-medium lg:mb-2 roboto">CONTACT</h3>
          <ul class="flex flex-col gap-1 mt-1 text-sm">
            <li>{{ t('footer.contact.ceo') }}</li>
            <li>{{ t('footer.contact.mobile') }}</li>
            <li>{{ t('footer.contact.tel') }}</li>
            <li>{{ t('footer.contact.fax') }}</li>
          </ul>
        </div>
      </section>
    </footer>
    <div class="max-w-[1280px] w-full">
      <p class="px-5 mt-5 text-[0.8125rem] text-left text-gray-500">{{ t('footer.copyright') }}</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useTranslation } from '@/composables/useTranslation'
import compressed from '@/assets/file/compressed.pdf'; // 파일 경로 가져오기

const { t } = useTranslation()

const getDownload = () => {
    const link      = document.createElement('a');
    link.href       = compressed;
    link.download   = 'compressed.pdf';
    link.click();
}

</script>
