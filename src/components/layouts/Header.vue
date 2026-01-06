<template>
  <header class="relative flex justify-center items-center w-full bg-white md:h-20">
    <div
      class="flex flex-col items-center pt-4 w-full sm:pt-4.5 sm:pb-3.5 sm:pl-4 sm:flex-row sm:justify-between max-w-[1280px]"
    >
      <h1>
        <router-link to="/">
          <img src="@/assets/img/logo.png" alt="주식회사 로보틱박스" class="w-[7rem] sm:w-[9rem]" />
        </router-link>
      </h1>
      <div class="flex justify-between items-center sm:justify-end sm:gap-4">
        <router-link
          class="px-4 py-3 whitespace-nowrap font-bold text-[0.9375rem] sm:text-base hover:text-sky-500"
          v-for="item in menuItems"
          :key="item.text"
          :to="item.link"
          >{{ item.text }}</router-link
        >
      </div>
    </div>

    <!-- Language Dropdown - Fixed to right edge -->
    <div class="absolute right-4 top-1/2 -translate-y-1/2 sm:right-4 z-50">
      <div class="relative" ref="dropdownRef">
        <button
          @click.stop="toggleDropdown"
          class="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <span>{{ t('header.language') }}</span>
          <svg
            class="w-4 h-4 transition-transform"
            :class="{ 'rotate-180': isDropdownOpen }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <!-- Dropdown Menu -->
        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <div
            v-if="isDropdownOpen"
            class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none z-50"
          >
            <div class="py-1">
              <button
                @click.stop="selectLanguage('ko')"
                class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                :class="{ 'bg-blue-50 text-blue-700 font-medium': currentLanguage === 'ko' }"
              >
                한국어 (Korean)
              </button>
              <button
                @click.stop="selectLanguage('en')"
                class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                :class="{ 'bg-blue-50 text-blue-700 font-medium': currentLanguage === 'en' }"
              >
                영어 (English)
              </button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLanguageStore } from '@/stores/language'
import { useTranslation } from '@/composables/useTranslation'

const languageStore = useLanguageStore()
const { t } = useTranslation()

const menuItems = computed(() => [
  { text: t('header.menu.about'), link: '/about' },
  { text: t('header.menu.technologies'), link: '/technologies' },
  { text: t('header.menu.article'), link: '/article' },
  { text: t('header.menu.contact'), link: '/contact' },
])

const isDropdownOpen = ref(false)
const currentLanguage = computed(() => languageStore.currentLanguage)
const dropdownRef = ref<HTMLElement | null>(null)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const selectLanguage = (lang: 'ko' | 'en') => {
  languageStore.setLanguage(lang)
  isDropdownOpen.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as Node
  if (dropdownRef.value && !dropdownRef.value.contains(target)) {
    isDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
