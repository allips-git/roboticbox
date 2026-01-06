import { computed } from 'vue'
import { useLanguageStore } from '@/stores/language'
import { translations, type TranslationKey } from '@/locales/translations'

export const useTranslation = () => {
  const languageStore = useLanguageStore()

  const t = (key: TranslationKey): string => {
    return translations[languageStore.currentLanguage][key] || key
  }

  const currentLanguage = computed(() => languageStore.currentLanguage)

  return {
    t,
    currentLanguage
  }
}

