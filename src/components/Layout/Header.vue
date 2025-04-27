<template>
  <header :class="[
    backgroundColor === 'dark' ? 'bg-transparent backdrop-blur-sm' : 'bg-transparent backdrop-blur-sm',
    'fixed top-0 left-0 right-0 z-50'
  ]">
    <div class="container mx-auto px-8 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 relative flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-md">
          <span class="text-white font-bold text-lg">H</span>
        </div>
        <div class="flex flex-col">
          <span :class="backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'" class="text-2xl font-bold leading-tight tracking-tight">Hou Lab</span>
          <span :class="backgroundColor === 'dark' ? 'text-blue-400/90' : 'text-blue-600/90'" class="text-xs font-medium">Drug Design and Computational Biology Group</span>
        </div>
      </div>
      
      <div class="flex items-center space-x-6">
        <nav class="hidden md:flex space-x-6" :class="backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'">
          <a href="/" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">首页</a>
          
          <div class="relative group">
            <a href="/people" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'" class="flex items-center gap-1">
              人员组成
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            <div :class="backgroundColor === 'dark' ? 'bg-gray-800/90' : 'bg-white/90'" class="absolute left-0 mt-2 w-48 backdrop-blur-sm shadow-lg rounded-md py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
              <a href="/people#faculty" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                教师
              </a>
              <a href="/people#postdoc" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                博士后
              </a>
              <a href="/people#graduate" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                研究生
              </a>
              <a href="/people#undergraduate" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                本科生
              </a>
              <a href="/people#alumni" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                前成员
              </a>
            </div>
          </div>
          <!-- 新闻中心  -->
          <div class="relative group">
            <a href="/publication" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'" class="flex items-center gap-1">
              论文专利
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            <div :class="backgroundColor === 'dark' ? 'bg-gray-800/90' : 'bg-white/90'" class="absolute left-0 mt-2 w-48 backdrop-blur-sm shadow-lg rounded-md py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
              <a href="/publication#publication" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                论文著作
              </a>
              <a href="/publication#software" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                软件著作
              </a>
              <a href="/publication#patent" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                发明专利
              </a>
            </div>
          </div>
          <div class="relative group">
            <a href="/software" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'" class="flex items-center gap-1">
              程序开发
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            <div :class="backgroundColor === 'dark' ? 'bg-gray-800/90' : 'bg-white/90'" class="absolute left-0 mt-2 w-48 backdrop-blur-sm shadow-lg rounded-md py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
              <a href="/software#database" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                数据库
              </a>
              <a href="/software#molecular" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                分子表征
              </a>
              <a href="/software#qsar" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                QSAR建模
              </a>
              <a href="/software#admet" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                成药性预测
              </a>
              <a href="/software#docking" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                蛋白-配体对接
              </a>
              <a href="/software#freeenergy" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                结合自由能预测
              </a>
              <a href="/software#admet" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                成药性预测
              </a>
              <a href="/software#docking" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                蛋白-配体对接
              </a>
              <a href="/software#freeenergy" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                结合自由能预测
              </a>
              <a href="/software#admet" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                全新药物设计
              </a>
              <a href="/software#ppdocking" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                蛋白-蛋白对接
              </a>
              <a href="/software#imgrec" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                分子图片识别
              </a>
              <a href="/software#tools" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                药物设计工具
              </a>
            </div>
          </div>
          <div class="relative group">
            <a href="/links" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'" class="flex items-center gap-1">
              友情链接
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            <div :class="backgroundColor === 'dark' ? 'bg-gray-800/90' : 'bg-white/90'" class="absolute left-0 mt-2 w-48 backdrop-blur-sm shadow-lg rounded-md py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
              <a href="/links#cooperation_group" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                合作课题组
              </a>
              <a href="/links#important_journal" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                重要期刊
              </a>
            </div>
          </div>
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
