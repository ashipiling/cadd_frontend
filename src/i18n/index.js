import { createI18n } from 'vue-i18n'
import enUS from './locales/en-US.js'
import zhCN from './locales/zh-CN.js'

const messages = {
  'en-US': enUS,
  'zh-CN': zhCN
}

// 从localStorage获取语言设置或使用浏览器默认语言或中文作为默认值
const getDefaultLanguage = () => {
  const savedLang = localStorage.getItem('language')
  if (savedLang && ['en-US', 'zh-CN'].includes(savedLang)) {
    return savedLang
  }
  
  const browserLang = navigator.language
  if (browserLang.includes('zh')) {
    return 'zh-CN'
  }
  return 'en-US'
}

const i18n = createI18n({
  legacy: false, // 使用Composition API
  locale: getDefaultLanguage(),
  fallbackLocale: 'en-US',
  messages
})

export default i18n