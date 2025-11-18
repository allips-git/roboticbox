<template>
  <section class="flex flex-col justify-center items-center py-8 bg-gray-100">
    <footer class="px-5 md:px-6 w-full flex flex-col sm:flex-row sm:justify-start sm:gap-20 md:flex-col md:gap-5 items-start justify-center max-w-[1280px] lg:flex-row lg:justify-between">
      <img src="@/assets/img/logo.png" alt="주식회사 로보틱박스" class="w-[7rem]" />
      <section class="flex flex-col gap-5 mt-6 text-gray-500 sm:mt-0 md:flex-row sm:gap-6 md:justify-between md:w-full lg:w-[auto] lg:gap-[5rem]">
        <div>
          <h3 class="text-base font-medium lg:mb-2 roboto">COMPANY</h3>
          <ul class="flex flex-col gap-1 mt-1 text-sm">
            <li>
              <router-link to="/contact">솔루션 문의하기</router-link>
            </li>
            <li class="cursor-pointer" @click="getDownload">회사소개서 다운로드</li>
          </ul>
        </div>
        <div>
          <h3 class="text-base font-medium lg:mb-2 roboto">ADDRESS</h3>
          <ul class="flex flex-col gap-1 mt-1 text-sm">
            <li>본사 :  경상남도 창원시 성산구 전기의길 10, 102호</li>
            <li>부산지사 : 부산광역시 남구 전포대로 133, 위워크 109호</li>
          </ul>
        </div>
        <div>
          <h3 class="text-base font-medium lg:mb-2 roboto">CONTACT</h3>
          <ul class="flex flex-col gap-1 mt-1 text-sm">
            <li>대표 : 하현수</li>
            <li>Mobile : 010-2951-0068</li>
            <li>Tel : 051-711-3468</li>
            <li>Fax : 051-518-8901</li>
          </ul>
        </div>
      </section>
    </footer>
    <div class="max-w-[1280px] w-full">
      <p class="px-5 mt-5 text-[0.8125rem] text-left text-gray-500">ⓒ 2025. (주)로보틱박스</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import compressed from '@/assets/file/compressed.pdf'; // 파일 경로 가져오기

const getDownload = () => {
    const link      = document.createElement('a');
    link.href       = compressed;
    link.download   = 'compressed.pdf';
    link.click();
}

</script>
