<template>
  <PageFrame>
    <!-- 英雄区域 - 使用自定义轮播图组件 -->
    <Carousel />

    <!-- 1. 数据展示区域 -->
    <DataShow />

    <!-- 2. 四个研究方向 -->
    <section class="py-16 bg-slate-950">
      <div class="container mx-auto px-4 md:px-8">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-100">研究方向</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300 overflow-hidden flex flex-col">
            <img src="@/assets/imgs/research-new_d1-1.png" alt="AI Drug Design" class="w-full h-64 object-cover">
            <div class="p-6 flex flex-col flex-grow">
              <Brain class="w-12 h-12 text-primary mb-4" />
              <h3 class="text-xl font-semibold mb-2 text-gray-100">基于人工智能的药物设计方法研究</h3>
              <p class="text-gray-400 text-sm flex-grow">
                围绕药物设计中的难点问题，应用大数据和AI技术发展高精度及高效的活性分子虚拟筛选方法、成药性预测方法、全新结构设计方法、逆合成预测方法以及靶标预测方法等，并开发整合的高精度药物设计和筛选软件平台。
              </p>
            </div>
          </div>
          <div class="bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300 overflow-hidden flex flex-col">
            <img src="@/assets/imgs/research-new_d2-1.png" alt="Physics-based Drug Design" class="w-full h-64 object-cover">
            <div class="p-6 flex flex-col flex-grow">
              <Atom class="w-12 h-12 text-primary mb-4" />
              <h3 class="text-xl font-semibold mb-2 text-gray-100">基于物理方法的药物设计方法研究</h3>
              <p class="text-gray-400 text-sm flex-grow">
                基于分子对接的虚拟筛选成本低、效率高，已成为药物发现的关键技术。为提高虚拟筛选的预测精度，我们围绕靶标-配体相互作用预测展开了深入系统的方法学研究，开发了一系列针对药物设计和筛选的计算工具和软件，并应用于多个重要靶标的药物研究。
              </p>
            </div>
          </div>
          <div class="bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300 overflow-hidden flex flex-col">
            <img src="@/assets/imgs/research-new_d3-1.png" alt="Target-based Drug Design" class="w-full h-64 object-cover">
            <div class="p-6 flex flex-col flex-grow">
              <Target class="w-12 h-12 text-primary mb-4" />
              <h3 class="text-xl font-semibold mb-2 text-gray-100">重要靶点的药物分子设计</h3>
              <p class="text-gray-400 text-sm flex-grow">
                先导化合物的发现和优化是新药开发中不可或缺的关键环节。我们通过整合计算模拟以及体内/体外生物活性评价，针对多个重要药物靶点进行了先导化合物的筛选与优化，广泛涉足药物临床前开发的各个阶段，加快药物发现和开发的速度。
              </p>
            </div>
          </div>
          <div class="bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300 overflow-hidden flex flex-col">
            <img src="@/assets/imgs/research-new_d4-1.png" alt="Multi-scale Simulation" class="w-full h-64 object-cover">
            <div class="p-6 flex flex-col flex-grow">
              <Microscope class="w-12 h-12 text-primary mb-4" />
              <h3 class="text-xl font-semibold mb-2 text-gray-100">基于多尺度分子模拟的靶标-配体识别作用机制研究</h3>
              <p class="text-gray-400 text-sm flex-grow">
                传统实验方法无法描述配体−靶标之间的动态识别过程。全原子模拟（包括常规动力学模拟和增强采样动力学模拟）可以辅助实验技术捕捉原子层次的动力学和热力学作用机制，揭示复杂的分子机制，如药物分子耐药性机制等。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. 重要方向详细描述 -->
    <DrugFlow />

    <!-- 4. 软件平台展示 -->
    <section class="py-16 bg-slate-100">
      <div class="container mx-auto px-4 md:px-8">
        <h2 class="text-3xl font-bold text-center mb-4 text-gray-900">软件平台</h2>
        <p class="text-center text-gray-600 mb-12">我们开发的计算药物设计软件与平台</p>

        <div class="relative overflow-hidden space-y-6">
          <!-- First Row (Original Direction) -->
          <div class="software-carousel flex gap-6 py-4">
            <div v-for="software in allSoftware" :key="software.name + '-fwd'" class="flex-none w-72">
              <div class="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                <h3 class="text-lg font-semibold mb-2 text-primary">{{ software.name }}</h3>
                <p class="text-sm text-gray-600 flex-grow">{{ software.description }}</p>
              </div>
            </div>
            <!-- Duplicate content for seamless looping -->
            <div v-for="software in allSoftware" :key="software.name + '-fwd-dup'" class="flex-none w-72">
              <div class="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                <h3 class="text-lg font-semibold mb-2 text-primary">{{ software.name }}</h3>
                <p class="text-sm text-gray-600 flex-grow">{{ software.description }}</p>
              </div>
            </div>
          </div>

          <!-- Second Row (Reverse Direction) -->
          <div class="software-carousel-reverse flex gap-6 py-4">
            <div v-for="software in allSoftwareReversed" :key="software.name + '-rev'" class="flex-none w-72">
              <div class="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                <h3 class="text-lg font-semibold mb-2 text-primary">{{ software.name }}</h3>
                <p class="text-sm text-gray-600 flex-grow">{{ software.description }}</p>
              </div>
            </div>
             <!-- Duplicate content for seamless looping -->
            <div v-for="software in allSoftwareReversed" :key="software.name + '-rev-dup'" class="flex-none w-72">
              <div class="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                <h3 class="text-lg font-semibold mb-2 text-primary">{{ software.name }}</h3>
                <p class="text-sm text-gray-600 flex-grow">{{ software.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 页脚 -->
  </PageFrame>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import PageFrame from '@/components/Layout/page_frame.vue'
import Carousel from '@/pages/home/components/carousel.vue'
import DataShow from '@/pages/home/components/datashow.vue'
import DrugFlow from '@/pages/home/components/drugflow.vue'
import { FileText, FileCheck, Server, Brain, Atom, Target, Microscope, 
         Lightbulb, Database, LineChart, ArrowRight } from 'lucide-vue-next'
import { categories, softwareData } from '@/pages/software/components/data.js'

// Add these reactive refs for carousel widths
const carouselWidth = ref(0);
const carouselItemWidth = ref(306); // 18rem (288px) + 1.5rem (24px) gap

// 监听滚动，更新当前选中的卡片
onMounted(() => {
  initSoftwareCarousel()
  // Calculate carousel width for Safari compatibility
  calculateCarouselWidth()
  
  // Add window resize listener
  window.addEventListener('resize', calculateCarouselWidth)
})

onUnmounted(() => {
  // 清理事件监听器
  window.removeEventListener('resize', calculateCarouselWidth)
})

const initSoftwareCarousel = () => {
  // 实现软件平台的滚动效果
  const carousel = document.querySelector('.software-carousel')
  if (carousel) {
    // 可以在这里添加自动滚动逻辑
  }
}

// Function to calculate carousel width
const calculateCarouselWidth = () => {
  carouselWidth.value = carouselItemWidth.value * allSoftware.value.length;
}

// Edit 5: Added computed property to flatten software data
const allSoftware = computed(() => {
  // Duplicate the array to make the loop seamless
  const flatSoftware = Object.values(softwareData).flat();
  return [...flatSoftware];
});

// Edit 8: Added computed property for reversed software data
const allSoftwareReversed = computed(() => {
  const flatSoftware = Object.values(softwareData).flat();
  return [...flatSoftware].reverse(); // Return a reversed copy
});
</script>

<style scoped>
.software-carousel, .software-carousel-reverse {
  /* Use the ref instead of v-bind in calc() */
  width: v-bind('carouselWidth * 2 + "px"');
}

.software-carousel {
  animation: scroll 180s linear infinite;
  -webkit-animation: scroll 180s linear infinite;
}

/* Edit 10: Added reverse carousel class and animation */
.software-carousel-reverse {
  animation: scroll-reverse 180s linear infinite;
  -webkit-animation: scroll-reverse 180s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
    -webkit-transform: translateX(0);
  }
  100% {
    /* Use the ref for animation distance instead of calc with v-bind */
    transform: translateX(v-bind('carouselWidth * -1 + "px"'));
    -webkit-transform: translateX(v-bind('carouselWidth * -1 + "px"'));
  }
}

@-webkit-keyframes scroll {
  0% {
    -webkit-transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(v-bind('carouselWidth * -1 + "px"'));
  }
}

/* Edit 11: Added reverse scroll animation */
@keyframes scroll-reverse {
  0% {
    transform: translateX(v-bind('carouselWidth * -1 + "px"'));
    -webkit-transform: translateX(v-bind('carouselWidth * -1 + "px"'));
  }
  100% {
    transform: translateX(0);
    -webkit-transform: translateX(0);
  }
}

@-webkit-keyframes scroll-reverse {
  0% {
    -webkit-transform: translateX(v-bind('carouselWidth * -1 + "px"'));
  }
  100% {
    -webkit-transform: translateX(0);
  }
}

/* 鼠标悬停时暂停滚动 */
.software-carousel:hover,
.software-carousel-reverse:hover {
  animation-play-state: paused;
  -webkit-animation-play-state: paused;
}
</style>

<route lang="yaml">
  meta:
    layout: blank
</route>
