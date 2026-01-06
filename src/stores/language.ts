import { ref } from 'vue'
import { defineStore } from 'pinia'

export type Language = 'ko' | 'en'

export const useLanguageStore = defineStore('language', () => {
  const currentLanguage = ref<Language>('ko')

  const setLanguage = (lang: Language) => {
    currentLanguage.value = lang
    // localStorage에 저장하여 새로고침 후에도 유지
    localStorage.setItem('language', lang)
  }

  const initLanguage = () => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'ko' || savedLanguage === 'en')) {
      currentLanguage.value = savedLanguage
    }
  }

  return {
    currentLanguage,
    setLanguage,
    initLanguage
  }
})

