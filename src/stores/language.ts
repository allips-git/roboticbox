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

  const getBrowserLanguage = (): Language => {
    // 브라우저 언어 설정 확인
    const browserLang = navigator.language || (navigator as any).userLanguage || 'ko'
    const langCode = browserLang.toLowerCase().split('-')[0] // 'en-US' -> 'en'
    
    // 영어권 국가 확인 (en으로 시작하는 언어 코드)
    if (langCode === 'en') {
      return 'en'
    }
    
    // 기본값은 한국어
    return 'ko'
  }

  const initLanguage = () => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'ko' || savedLanguage === 'en')) {
      currentLanguage.value = savedLanguage
    } else {
      // 저장된 언어가 없으면 브라우저 언어를 기반으로 기본값 설정
      const browserLang = getBrowserLanguage()
      currentLanguage.value = browserLang
      localStorage.setItem('language', browserLang)
    }
  }

  return {
    currentLanguage,
    setLanguage,
    initLanguage
  }
})

