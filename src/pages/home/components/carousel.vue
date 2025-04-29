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
              src="@/assets/imgs/hero-1.jpg" 
              alt="AI药物研发" 
              class="w-full h-full object-cover opacity-30"
            />
          </div>
          <div class="absolute inset-0 z-20 flex items-center ">
            <div class="container mx-auto px-4 md:px-24 mt-20">
              <div class="max-w-full md:max-w-3xl text-center md:text-left">
                <h1 class="text-3xl md:text-5xl mb-6 bg-clip-text text-white tracking-wide max-w-[580px] font-bold animate-fade-in-up">
                  欢迎访问侯廷军教授<br />课题组网站
                </h1>
                <p class="text-base md:text-xl text-gray-300 mb-10 max-w-[550px] font-light animate-fade-in-up animation-delay-200">
                  本课题组致力于计算机辅助药物分子设计方法和应用研究，加速药物分子的发现
                </p>
                <!-- 荣誉展示区 -->
                <!-- 调整上边距，使其更靠近上方文字，让整体内容块在垂直方向上更居中 -->
                <div class="mt-36">
                  <!-- 横向滚动容器 -->
                  <!-- 美化样式：增加高度、内边距、改变背景效果、添加边框和圆角 -->
                  <div class="h-16 overflow-hidden relative bg-white/5 rounded-lg backdrop-blur-sm p-5 group">
                    <!-- 滚动的实际内容区域 - 添加 items-center h-full 使文字垂直居中 -->
                    <div class="text-sm md:text-base flex animate-scroll-horizontal group-hover:pause-animation whitespace-nowrap items-center h-full font-light">
                      <!-- 荣誉项 - 为了无缝滚动，需要复制列表 -->
                      <span class="text-gray-300 mx-4 inline-block">- 2023年 XX自然科学基金重点项目</span>
                      <span class="text-gray-300 mx-4 inline-block">- 2022年 教育部科技进步X等奖</span>
                      <span class="text-gray-300 mx-4 inline-block">- 2021年 XX市科技进步X等奖</span>
                      <span class="text-gray-300 mx-4 inline-block">- 2020年 XXXX学者称号</span>
                      <!-- 重复荣誉项以实现无缝滚动 -->
                      <span class="text-gray-300 mx-4 inline-block">- 2023年 XX自然科学基金重点项目</span>
                      <span class="text-gray-300 mx-4 inline-block">- 2022年 教育部科技进步X等奖</span>
                      <span class="text-gray-300 mx-4 inline-block">- 2021年 XX市科技进步X等奖</span>
                      <span class="text-gray-300 mx-4 inline-block">- 2020年 XXXX学者称号</span>
                    </div>
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
              <div class="max-w-full md:max-w-3xl text-center md:text-left">
                <h1 class="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
                  最新科研成果1
                </h1>
                <p class="text-base md:text-xl text-gray-300 mb-10">
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
              <div class="max-w-full md:max-w-3xl text-center md:text-left">
                <h1 class="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
                  最新科研成果2
                </h1>
                <p class="text-base md:text-xl text-gray-300 mb-10">
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
/* 添加横向滚动动画 */
@keyframes scroll-horizontal {
  from {
    transform: translateX(0);
  }
  to {
    /* 将内容向左移动其自身宽度的一半（因为我们复制了内容） */
    transform: translateX(-50%);
  }
}

/* 添加淡入向上动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards; /* 应用动画 */
  opacity: 0; /* 初始状态为透明 */
}

/* 辅助类，用于添加延迟 */
.animation-delay-200 {
  animation-delay: 0.2s;
}
.animation-delay-400 {
  animation-delay: 0.4s;
}
/* ... 可以添加更多延迟类 ... */

.animate-scroll-horizontal {
  /* 应用动画：名称 时长 速度曲线 循环次数 */
  animation: scroll-horizontal 20s linear infinite; /* 调整 20s 来改变滚动速度 */
  display: inline-block; /* 确保容器宽度适应内容 */
}

/* 鼠标悬停时暂停动画 (可选) */
.group:hover .pause-animation {
  animation-play-state: paused;
}

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
