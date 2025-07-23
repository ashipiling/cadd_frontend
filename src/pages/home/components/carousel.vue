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
          <div class="w-full h-full inset-0 bg-gradient-to-b from-blue-600/60 to-gray-800/80 z-10 overflow-hidden">
            <img 
              src="@/assets/imgs/hero-1.jpg" 
              alt="AI药物研发" 
              class="w-full h-full object-cover opacity-50"
            />
          </div>
          <div class="absolute inset-0 z-20 flex items-center ">
            <div class="container mx-auto px-4 md:px-24 mt-20">
              <div class="max-w-full md:max-w-3xl text-center md:text-left">
                <h1 class="text-3xl md:text-5xl mb-6 bg-clip-text text-white tracking-wide max-w-[580px] font-bold animate-fade-in-up">
                  <span>{{ t('index.welcome1') }}</span>
                  <br />
                  <span>{{ t('index.welcome2') }}</span>
                </h1>
                <p class="text-base md:text-xl text-gray-300 mb-10 max-w-[550px] font-light animate-fade-in-up animation-delay-200">
                  {{ t('index.welcome_intro') }}
                </p>
                <!-- 荣誉展示区 -->
                <!-- 调整上边距，使其更靠近上方文字，让整体内容块在垂直方向上更居中 -->
                <div class="mt-36">
                  <!-- 横向滚动容器 -->
                  <!-- 美化样式：增加高度、内边距、改变背景效果、添加边框和圆角 -->
                  <div class="h-16 overflow-hidden relative bg-white/5 rounded-lg backdrop-blur-sm p-5 group">
                    <!-- 滚动的实际内容区域 - 添加 items-center h-full 使文字垂直居中 -->
                    <div class="text-sm md:text-base flex animate-scroll-horizontal group-hover:pause-animation whitespace-nowrap items-center h-full font-light">
                      <!-- 荣誉项 - 使用动态数据 -->
                      <template v-for="honor in displayHonors" :key="`first-${honor.id}`">
                        <span class="text-gray-300 mx-4 inline-block">
                          - {{ honor.year }}年 {{ locale === 'zh-CN' ? honor.title : honor.title_en }}
                        </span>
                      </template>
                      <!-- 重复荣誉项以实现无缝滚动 -->
                      <template v-for="honor in displayHonors" :key="`second-${honor.id}`">
                        <span class="text-gray-300 mx-4 inline-block">
                          - {{ honor.year }}年 {{ locale === 'zh-CN' ? honor.title : honor.title_en }}
                        </span>
                      </template>
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
              :src="papers[0].image" 
              :alt="papers[0].title" 
              class="w-full h-full object-cover opacity-60"
            />
          </div>
          <div class="absolute inset-0 z-20 flex items-center">
            <div class="container mx-auto px-4 md:px-24">
              <div class="max-w-full md:max-w-4xl text-center md:text-left">
                <!-- 期刊标签 -->
                <div class="inline-block bg-green-500/20 backdrop-blur-sm text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-green-500/30">
                  {{ papers[0].journal }}
                </div>
                
                <h1 class="text-2xl md:text-4xl font-bold mb-6 text-white leading-tight max-w-4xl">
                  {{ papers[0].title }}
                </h1>
                
                <p class="text-base md:text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
                  {{ locale === 'zh-CN' ? papers[0].description_cn : papers[0].description_en }}
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4">
                  <a 
                    :href="papers[0].link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="relative overflow-hidden bg-green-600 hover:bg-green-700 text-white rounded-full py-3 px-8 font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <Sparkle class="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span>{{ t('index.read_original') }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 第三张轮播 -->
        <div class="min-w-full h-full relative">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-purple-900/60 z-10"></div>
          <div class="absolute inset-0 z-0">
            <img 
              :src="papers[1].image" 
              :alt="papers[1].title" 
              class="w-full h-full object-cover opacity-60"
            />
          </div>
          <div class="absolute inset-0 z-20 flex items-center">
            <div class="container mx-auto px-4 md:px-24">
              <div class="max-w-full md:max-w-4xl text-center md:text-left">
                <!-- 期刊标签 -->
                <div class="inline-block bg-blue-500/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-blue-500/30">
                  {{ papers[1].journal }}
                </div>
                
                <h1 class="text-2xl md:text-4xl font-bold mb-6 text-white leading-tight max-w-4xl">
                  {{ papers[1].title }}
                </h1>
                
                <p class="text-base md:text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
                  {{ locale === 'zh-CN' ? papers[1].description_cn : papers[1].description_en }}
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4">
                  <a 
                    :href="papers[1].link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3 px-8 font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <Sparkle class="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span>{{ t('index.read_original') }}</span>
                  </a>
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
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Sparkle } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { collectiveHonors } from '@/pages/honor/components/data'

const { locale, t } = useI18n()

// 轮播图状态管理
const currentSlide = ref(0)
const slideCount = 3
const autoplayInterval = ref<number | null>(null)

// 计算要显示的荣誉（取前8个）
const displayHonors = computed(() => {
  return collectiveHonors
    .filter(honor => honor.year === '2024') // 只显示2024年的荣誉
    .slice(0, 8) // 最多显示8个
})

const importImage = (imgPath: string) => {
  if (!imgPath) {
    console.error('Image path is undefined');
    return '';
  }
  const imgUrl = new URL(`../../../assets/imgs/${imgPath}`, import.meta.url).href;
  return imgUrl;
};

const papers = [
  {
    title: 'Token-Mol 1.0: tokenized drug design with large language models',
    journal: 'Nature Communications',
    description_cn: '我们提出了Token-Mol,一个仅基于token的3D药物设计模型,它将2D和3D结构信息以及分子性质编码为离散的token。基于transformer解码器并使用因果掩码进行训练,Token-Mol引入了专门针对回归任务的高斯交叉熵损失函数,从而在多个下游应用中实现了卓越的性能。',
    description_en: 'Here, we present Token-Mol, a token-only 3D drug design model that encodes both 2D and 3D structural information, along with molecular properties, into discrete tokens. Built on a transformer decoder and trained with causal masking, Token-Mol introduces a Gaussian cross-entropy loss function tailored for regression tasks, enabling superior performance across multiple downstream applications.',
    link: 'https://www.nature.com/articles/s41467-025-59628-y',
    image: importImage('paper1.jpg')
  },
  {
    title: 'Discovery of antimicrobial peptides with notable antibacterial potency by an LLM-based foundation model',
    journal: 'Science Advances',
    description_cn: '该研究提出了一种基于大语言模型的抗菌肽（AMPs）设计方法AMP-Designer，在48天内，完成了18种抗菌肽的从头设计与湿实验的验证。体外抗菌实验结果表明，17种抗菌肽对革兰氏阴性菌展现出广谱抗菌活性，成功率高达94.4%。其中，2个优选抗菌肽不仅表现出优异的体内抗菌效果，同时兼具极低的溶血毒性、良好的人体血浆稳定性以及很低的耐药性诱导风险。这一研究成果为应对日益严峻的抗生素耐药性问题提供了新的解决方案和研究方向。',
    description_en: 'This study presents AMP-Designer, a large language model-based approach for designing antimicrobial peptides (AMPs). Within 48 days, it completed the de novo design and wet-lab validation of 18 AMPs. In vitro antibacterial experiments showed that 17 AMPs exhibited broad-spectrum antibacterial activity against Gram-negative bacteria, achieving a success rate of 94.4%. Among them, 2 selected AMPs demonstrated excellent in vivo antibacterial effects while featuring extremely low hemolytic toxicity, good human plasma stability, and low risk of resistance induction. This research provides new solutions and directions for addressing the increasingly severe problem of antibiotic resistance.',
    link: 'https://www.science.org/doi/10.1126/sciadv.ads8932',
    image: importImage('paper2.jpg')
  }
]

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

/* 添加光效脉冲和浮动动画 */
@keyframes pulse-slow {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.3; }
}

@keyframes pulse-slower {
  0%, 100% { opacity: 0.15; }
  50% { opacity: 0.25; }
}

@keyframes float {
  0%, 100% { transform: translateY(0) translateX(-50%); }
  50% { transform: translateY(-15px) translateX(-50%); }
}

.animate-pulse-slow {
  animation: pulse-slow 5s ease-in-out infinite;
}

.animate-pulse-slower {
  animation: pulse-slower 7s ease-in-out infinite;
}

.animate-float {
  animation: float 9s ease-in-out infinite;
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
  animation: scroll-horizontal 25s linear infinite; /* 调整 25s 来改变滚动速度 */
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
