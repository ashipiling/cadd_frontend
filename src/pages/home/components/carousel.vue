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
        
        <!-- 论文轮播（使用 v-for 循环） -->
        <div 
          v-for="(paper, index) in papers" 
          :key="`paper-${index}`"
          class="min-w-full h-full relative"
        >
          <div class="absolute inset-0 bg-gradient-to-br z-10" :class="paper.bgGradient"></div>
          <div class="absolute inset-0 z-0">
            <img 
              :src="paper.image" 
              :alt="paper.title" 
              class="w-full h-full object-cover opacity-60"
            />
          </div>
          <div class="absolute inset-0 z-20 flex items-center">
            <div class="container mx-auto px-4 md:px-24">
              <div class="max-w-full md:max-w-4xl text-center md:text-left">
                <!-- 期刊标签 -->
                <div class="inline-block backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4" 
                     :class="[paper.tagBg, paper.tagText, paper.tagBorder, 'border']">
                  {{ paper.journal }}
                </div>
                
                <h1 class="text-2xl md:text-4xl font-bold mb-6 text-white leading-tight max-w-4xl">
                  {{ paper.title }}
                </h1>
                
                <p class="text-base md:text-lg text-gray-300 mb-8 max-w-3xl leading-relaxed">
                  {{ locale === 'zh-CN' ? paper.description_cn : paper.description_en }}
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4">
                  <a 
                    :href="paper.link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="relative overflow-hidden rounded-full py-3 px-8 font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
                    :class="paper.buttonBg"
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
          v-for="(_, index) in slideCount" 
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
    title: 'A Virtual Platform for Automated Hybrid Organic–Enzymatic Synthesis Planning',
    journal: 'Nature Communications',
    description_cn: '本研究提出了一个全新的 AI 驱动混合式合成规划平台 ChemEnzyRetroPlanner，旨在将有机合成与酶催化策略深度融合，为复杂分子的高效与绿色合成提供更加可行的解决方案。传统有机合成具备反应类型丰富的优势，而酶催化在对映选择性和温和条件下的反应效率方面具有显著潜力，但当前酶催化规划算法在路线整合与酶推荐方面仍存在灵活性不足的问题。ChemEnzyRetroPlanner 针对这些瓶颈，构建了一套涵盖混合逆合成设计、反应条件预测、可行性评估、酶反应识别、酶推荐与活性位点计算验证等模块的完整系统，并创新性地提出了 RetroRollout* 搜索算法，在多个基准数据集上均显著优于主流逆合成工具。平台同时提供可视化界面与程序化 API，配合链式推理策略与 Llama3.1 模型，可在多类任务场景中自主激活混合式路线规划，为提升分子合成效率与可持续性开辟了新的技术路径。',
    description_en: 'ChemEnzyRetroPlanner is an AI-powered platform that integrates organic synthesis and enzymatic catalysis for efficient planning of complex molecule syntheses. It provides a comprehensive system with an innovative search algorithm, visual interface, and programmable API, enabling advanced hybrid synthesis design and outperforming mainstream tools.',
    link: 'https://www.nature.com/articles/s41467-025-65898-3',
    image: importImage('paper11.jpg'),
    bgGradient: 'from-sky-900/60 to-blue-900/40',
    tagBg: 'bg-sky-500/20',
    tagText: 'text-blue-300',
    tagBorder: 'border-blue-500/30',
    buttonBg: 'bg-blue-600 hover:bg-blue-700 text-white'
  },
  {
    title: 'SynGFN: learning across chemical space with generative flow-based molecular discovery',
    journal: 'Nature Computational Science',
    description_cn: '本研究提出了一个深度融合合成规划的生成式流网络模型 SynGFN，能够在可合成化学空间中高效发现多样且高性能的新分子。SynGFN通过分层策略网络在反应模板的约束下逐步组合分子砌块，将分子生成过程建模为近似满足细致平衡条件的马尔可夫决策过程。基于生成式流网络的概率流分配机制，SynGFN为每条生成轨迹分配与分子性质相关的奖励，并能够从目标分布中独立、同分布地采样，使得“最优解”以外的解也可以有非零的采样概率，显著提升了模型的化学空间探索能力。实验证明，SynGFN在大规模可合成化学空间中的探索能力相比现有方法最高提升约 70 倍，并能为生成的分子给出可直接执行的合成路线。在GluN1/GluN3A靶点的实验验证中，SynGFN所设计的候选化合物均成功合成，其中多种具有抑制活性，展现出实际药物设计中的可靠性与应用潜力。',
    description_en: 'SynGFN is a generative flow network that efficiently finds diverse and high-performance molecules in synthesizable chemical spaces. It combines retrosynthetic planning with probabilistic algorithms to boost chemical exploration and provides executable synthetic routes, demonstrating strong results and real-world applicability.',
    link: 'https://www.nature.com/articles/s43588-025-00902-w',
    image: importImage('paper22.jpg'),
    bgGradient: 'from-gray-900/60 to-gray-800/40',
    tagBg: 'bg-orange-400/20',
    tagText: 'text-orange-400',
    tagBorder: 'border-gray-500/30',
    buttonBg: 'bg-orange-400 hover:bg-orange-500 text-white'
  },
  {
    title: 'mRNABERT: advancing mRNA sequence design with a universal language model and comprehensive dataset',
    journal: 'Nature Communications', 
    description_cn: '本研究提出了一个名为mRNABERT的通用mRNA基础模型，旨在解决mRNA序列设计中的训练数据匮乏和全长序列建模难的问题。mRNABERT在包含1800万条mRNA序列的迄今最大数据集上进行预训练，创新性地采用了双重词元化（Dual Tokenization）策略，将非翻译区（UTR）的核苷酸和编码区（CDS）的密码子分别编码。此外，该模型引入了跨模态对比学习（Cross-modality Contrastive Learning）框架，融合了蛋白质序列的语义信息。mRNABERT在包括5\'UTR、CDS、3\'UTR及全长mRNA性质预测在内的多种下游任务中均展现出最先进（SOTA）的性能，标志着mRNA疗法研发迈出了重要一步。',
    description_en: 'This study introduces mRNABERT, a universal foundational model for mRNA designed to address the challenges of limited training data and full-length sequence modeling in mRNA sequence design. mRNABERT is pre-trained on the largest dataset to date, consisting of 18 million mRNA sequences, and innovatively adopts a dual tokenization strategy, encoding nucleotides in untranslated regions (UTRs) and codons in coding sequences (CDS) separately. Additionally, the model integrates a cross-modality contrastive learning framework to incorporate semantic information from protein sequences. mRNABERT demonstrates state-of-the-art (SOTA) performance across diverse downstream tasks, including 5\'UTR, CDS, 3\'UTR, and full-length mRNA property prediction, marking a significant advancement in the development of mRNA therapeutics.',
    link: 'https://www.nature.com/articles/s41467-025-65340-8',
    image: importImage('paper33.jpg'),
    bgGradient: 'from-sky-900/60 to-blue-900/40',
    tagBg: 'bg-sky-500/20',
    tagText: 'text-sky-300',
    tagBorder: 'border-sky-500/30', 
    buttonBg: 'bg-sky-600 hover:bg-sky-700 text-white'
  },
  {
    title: 'Token-Mol 1.0: tokenized drug design with large language models',
    journal: 'Nature Communications',
    description_cn: '我们提出了Token-Mol,一个仅基于token的3D药物设计模型,它将2D和3D结构信息以及分子性质编码为离散的token。基于transformer解码器并使用因果掩码进行训练,Token-Mol引入了专门针对回归任务的高斯交叉熵损失函数,从而在多个下游应用中实现了卓越的性能。',
    description_en: 'Here, we present Token-Mol, a token-only 3D drug design model that encodes both 2D and 3D structural information, along with molecular properties, into discrete tokens. Built on a transformer decoder and trained with causal masking, Token-Mol introduces a Gaussian cross-entropy loss function tailored for regression tasks, enabling superior performance across multiple downstream applications.',
    link: 'https://www.nature.com/articles/s41467-025-59628-y',
    image: importImage('paper1.jpg'),
    bgGradient: 'from-green-900/60 to-gray-900/70',
    tagBg: 'bg-green-500/20',
    tagText: 'text-green-300',
    tagBorder: 'border-green-500/30',
    buttonBg: 'bg-green-600 hover:bg-green-700 text-white'
  },
]

// 计算轮播图总数
const slideCount = computed(() => papers.length + 1) // 第一张是欢迎页面，其余是论文

// 切换到上一张幻灯片
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slideCount.value) % slideCount.value
  resetAutoplay()
}

// 切换到下一张幻灯片
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slideCount.value
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
