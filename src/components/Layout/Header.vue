<template>
  <header :class="[
    backgroundColor === 'dark' ? 'bg-transparent backdrop-blur-sm' : 'bg-transparent backdrop-blur-sm',
    'fixed top-0 left-0 right-0 z-50'
  ]">
    <div class="container mx-auto px-8 py-4 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <img v-if="backgroundColor === 'dark'" src="@/assets/imgs/logowhite.png" alt="logo" class="w-40">
        <img v-else src="@/assets/imgs/logoblack.png" alt="logo" class="w-40">
      </div>
      
      <div class="flex items-center space-x-6">
        <nav class="hidden md:flex space-x-6" :class="backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'">
          <a href="/" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">首页</a>
          
          <!-- 产品方案下拉菜单 -->
          <div class="relative group">
            <a href="#" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'" class="flex items-center gap-1">
              产品方案
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            <div :class="backgroundColor === 'dark' ? 'bg-gray-800/90' : 'bg-white/90'" class="absolute left-0 mt-2 w-40 backdrop-blur-sm shadow-lg rounded-md py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
              <a href="/drugflow" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">DrugFlow</a>
              <a href="/scigpt" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">SciGPT</a>
            </div>
          </div>
          
          <!-- 计算服务下拉菜单 -->
          <div class="relative group">
            <a href="#" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'" class="flex items-center gap-1">
              计算服务
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            <div :class="backgroundColor === 'dark' ? 'bg-gray-800/90' : 'bg-white/90'" class="absolute left-0 mt-2 w-48 backdrop-blur-sm shadow-lg rounded-md py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
              <a href="#" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">苗头化合物发现</a>
              <a href="#" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">先导化合物优化</a>
              <a href="#" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">计算设计与服务</a>
            </div>
          </div>

          <!-- 新闻中心  -->
          <div class="relative group">
            <a href="#" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'" class="flex items-center gap-1">
              新闻中心
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            <div :class="backgroundColor === 'dark' ? 'bg-gray-800/90' : 'bg-white/90'" class="absolute left-0 mt-2 w-48 backdrop-blur-sm shadow-lg rounded-md py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
              <a href="/news" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">公司动态</a>
              <a href="/paper" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">学术成果</a>
            </div>
          </div>
          
          <a href="/aboutus" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">关于我们</a>
          <a href="/joinus" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">加入我们</a>
        </nav>
        
        <Button 
          variant="icon" 
          :class="backgroundColor === 'dark' ? 'border-blue-500 text-blue-400 hover:bg-blue-500/20' : 'border-blue-600 text-blue-600 hover:bg-blue-600/10'"
          class="px-3 py-1 text-sm min-w-0 w-auto"
          @click="toggleLanguage"
        >
          {{ currentLanguage === 'zh' ? 'EN' : '中' }}
        </Button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'

const currentLanguage = ref('zh') // 默认中文

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === 'zh' ? 'en' : 'zh'
  // 这里可以添加语言切换的逻辑，例如触发事件或修改全局状态
}

defineProps({
  backgroundColor: {
    type: String,
    default: 'dark',
    validator: (value) => ['dark', 'light'].includes(value)
  }
});
</script>
