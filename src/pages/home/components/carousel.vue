<template>
  <!-- 英雄区域 - 使用自定义轮播图 -->
  <section class="h-[90vh] relative">
    <div class="relative w-full h-full overflow-hidden">
      <!-- 轮播内容 -->
      <div 
        class="w-full h-full flex transition-transform duration-500" 
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <!-- 第一张轮播 -->
        <div class="min-w-full h-full relative">
          <div class="w-full h-full inset-0 bg-gradient-to-br from-blue-900/60 to-gray-900/70 z-10 overflow-hidden">
            <img 
              src="@/assets/imgs/aaa.png" 
              alt="AI药物研发" 
              class="w-full object-cover opacity-30"
            />
          </div>
          <div class="absolute inset-0 z-20 flex items-center ">
            <div class="container mx-auto px-24">
              <div class="max-w-3xl">
                <h1 class="text-5xl mb-6 bg-clip-text text-white tracking-wide max-w-[580px] font-bold">
                  欢迎访问侯廷军教授<br />课题组网站
                </h1>
                <p class="text-xl text-gray-300 mb-10 max-w-[550px] font-light">
                  本课题组致力于计算机辅助药物分子设计方法和应用研究，加速药物分子的发现
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                  <div 
                    class="relative overflow-hidden bg-white rounded-full p-3 px-8 border-1 border-gray-900 text-gray-900 hover:text-blue-500 hover:bg-gray-100 hover:border-blue-500 cursor-pointer transition-all duration-300 flex items-center gap-2"
                  >
                    <Sparkle class="w-5 h-5" />
                    <span>
                      联系我们
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 第二张轮播 -->
        <div class="min-w-full h-full relative">
          <div class="absolute inset-0 bg-gradient-to-br from-green-900/60 to-gray-900/70 z-10"></div>
          <div class="absolute inset-0 z-0">
            <img 
              src="@/assets/imgs/aaa.png" 
              alt="分子设计" 
              class="w-full h-full object-cover opacity-50"
            />
          </div>
          <div class="absolute inset-0 z-20 flex items-center">
            <div class="container mx-auto px-24">
              <div class="max-w-3xl">
                <h1 class="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
                  融资和合作新闻
                </h1>
                <p class="text-xl text-gray-300 mb-10">
                  XXXXXXXXXXXXX
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                  <div class="relative overflow-hidden bg-white rounded-full p-3 px-8 border-1 border-gray-900 text-gray-900 hover:text-blue-500 hover:bg-gray-100 hover:border-blue-500 cursor-pointer transition-all duration-300 flex items-center gap-2">
                    <Sparkle class="w-5 h-5" />
                    <span>
                      了解更多
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 第三张轮播 -->
        <div class="min-w-full h-full relative">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-green-900/60 z-10"></div>
          <div class="absolute inset-0 z-0">
            <img 
              src="@/assets/imgs/aaa.png" 
              alt="研究成果" 
              class="w-full h-full object-cover opacity-50"
            />
          </div>
          <div class="absolute inset-0 z-20 flex items-center">
            <div class="container mx-auto px-24">
              <div class="max-w-3xl">
                <h1 class="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
                  最新研究成果
                </h1>
                <p class="text-xl text-gray-300 mb-10">
                  XXXXXXXXXXXXX
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                  <div class="relative overflow-hidden bg-white rounded-full p-3 px-8 border-1 border-gray-900 text-gray-900 hover:text-blue-500 hover:bg-gray-100 hover:border-blue-500 cursor-pointer transition-all duration-300 flex items-center gap-2">
                    <Sparkle class="w-5 h-5" />
                    <span>
                      阅读研究报告
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 箭头导航 -->
      <button 
        @click="prevSlide" 
        class="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-gray-800/70 hover:bg-gray-700/80 text-white border border-gray-700 rounded-full p-2"
        aria-label="上一张"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>
      <button 
        @click="nextSlide" 
        class="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-gray-800/70 hover:bg-gray-700/80 text-white border border-gray-700 rounded-full p-2"
        aria-label="下一张"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>
      
      <!-- 指示器 -->
      <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
        <button 
          v-for="(_, index) in 3" 
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full hover:bg-white/60 cursor-pointer transition-colors"
          :class="currentSlide === index ? 'bg-white' : 'bg-white/40'"
          :aria-label="`转到幻灯片 ${index + 1}`"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Sparkle } from 'lucide-vue-next'

// 轮播图状态管理
const currentSlide = ref(0)
const slideCount = 3
const autoplayInterval = ref<number | null>(null)

// 切换到上一张幻灯片
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slideCount) % slideCount
  resetAutoplay()
}

// 切换到下一张幻灯片
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slideCount
  resetAutoplay()
}

// 跳转到指定幻灯片
const goToSlide = (index: number) => {
  currentSlide.value = index
  resetAutoplay()
}

// 设置自动播放
const startAutoplay = () => {
  autoplayInterval.value = window.setInterval(() => {
    nextSlide()
  }, 5000) // 5秒自动切换
}

// 重置自动播放计时器
const resetAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
  }
  startAutoplay()
}

onMounted(() => {
  // 启动自动播放
  startAutoplay()
})

onUnmounted(() => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
  }
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
