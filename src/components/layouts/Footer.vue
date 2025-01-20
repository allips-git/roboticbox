<template>
<section class="px-20 py-10 bg-gray-100">
  <footer class="flex justify-center w-full">
    <div class="flex justify-between w-full">
      <section class="w-1/2">
        <img src="/src/assets/img/logo.png" class="w-[120px]" alt="">
      </section>
      <section class="flex justify-end w-1/2 gap-20 text-gray-400">
          <ul class="flex flex-col gap-1 text-sm">
              <li class="mb-3 text-base font-bold">COMPANY</li>
              <li>
                <router-link to="/contact">솔루션 문의하기</router-link></li>
              <li class="cursor-pointer" @click="getDownload">회사소개서 다운로드</li>
          </ul>

          <ul class="flex flex-col gap-1 text-sm">
              <li class="mb-3 text-base font-bold">ADDRESS</li>
              <li>본사 :  경상남도 창원시 성산구 전기의길 10, 102호</li>
              <li>부산지사 : 부산광역시 남구 전포대로 133, 위워크 109호</li>
          </ul>

          <ul class="flex flex-col gap-1 text-sm">
              <li class="mb-3 text-base font-bold">CONTACT</li>
              <li>대표 : 하현수</li>
              <li>Mobile 010-2951-0068</li>
              <li>Tel 051-711- 3468</li>
              <li>Fax 051-518-8901</li>
          </ul>
      </section>
    </div>
</footer>
<p class="w-full mt-5 text-xs text-gray-400">ⓒ 2025. (주)로보틱박스</p>
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
