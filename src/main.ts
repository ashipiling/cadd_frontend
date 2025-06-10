import { createApp } from 'vue'
import App from './App.vue'
import { setupPlugins } from './plugins'
import router from './router'
import './assets/index.css'
import './assets/themes.css'
import '@/utils/env'
import i18n from './i18n'

function bootstrap() {
  const app = createApp(App)

  setupPlugins(app)

  app.use(router)
  app.use(i18n)
  app.mount('#app')
}

bootstrap()
