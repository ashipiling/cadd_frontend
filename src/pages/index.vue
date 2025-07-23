<template>
  <PageFrame :headerBackgroundColor="headerBackgroundColor">
    <!-- 英雄区域 - 使用自定义轮播图组件 -->
    <Carousel />

    <!-- 1. 数据展示区域 -->
    <DataShow />

    <!-- 2. 四个研究方向 -->
    <Reseach />


    <!-- 4. 软件平台展示 -->
    <section class="py-24 bg-slate-100">
      <div class="container mx-auto px-4 md:px-8">
        <h2 class="text-3xl font-bold text-center mb-4 text-gray-900">{{ t('index.softwarePlatform.title') }}</h2>
        <p class="text-center text-gray-600 mb-12">{{ t('index.softwarePlatform.subtitle') }}</p>

        <div class="relative overflow-hidden space-y-8">
          <!-- First Row (Original Direction) -->
          <div class="overflow-hidden">
            <div class="partner-scroller scroller-left">
              <div class="partner-group">
                <div v-for="software in allSoftware" :key="software.name + '-fwd'" class="software-item">
                  <div class="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                    <h3 class="text-lg font-semibold mb-3 text-primary whitespace-normal">{{ software.name }}</h3>
                    <p class="text-sm text-gray-600 flex-grow whitespace-normal line-clamp-5 overflow-hidden">{{ locale === 'zh-CN' ? software.description_cn : software.description_en }}</p>
                  </div>
                </div>
              </div>
              <!-- Duplicate content for seamless looping -->
              <div class="partner-group">
                <div v-for="software in allSoftware" :key="software.name + '-fwd-dup'" class="software-item">
                  <div class="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                    <h3 class="text-lg font-semibold mb-3 text-primary whitespace-normal">{{ software.name }}</h3>
                    <p class="text-sm text-gray-600 flex-grow whitespace-normal line-clamp-5 overflow-hidden">{{ locale === 'zh-CN' ? software.description_cn : software.description_en }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Second Row (Reverse Direction) -->
          <div class="overflow-hidden">
            <div class="partner-scroller scroller-right">
              <div class="partner-group">
                <div v-for="software in allSoftwareReversed" :key="software.name + '-rev'" class="software-item">
                  <div class="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                    <h3 class="text-lg font-semibold mb-3 text-primary whitespace-normal">{{ software.name }}</h3>
                    <p class="text-sm text-gray-600 flex-grow whitespace-normal line-clamp-5 overflow-hidden">{{ locale === 'zh-CN' ? software.description_cn : software.description_en }}</p>
                  </div>
                </div>
              </div>
              <!-- Duplicate content for seamless looping -->
              <div class="partner-group">
                <div v-for="software in allSoftwareReversed" :key="software.name + '-rev-dup'" class="software-item">
                  <div class="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                    <h3 class="text-lg font-semibold mb-3 text-primary whitespace-normal">{{ software.name }}</h3>
                    <p class="text-sm text-gray-600 flex-grow whitespace-normal line-clamp-5 overflow-hidden">{{ locale === 'zh-CN' ? software.description_cn : software.description_en }}</p>
                  </div>
                </div>
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
import { useI18n } from 'vue-i18n'
import PageFrame from '@/components/Layout/page_frame.vue'
import Reseach from '@/pages/home/components/reseach.vue'
import Carousel from '@/pages/home/components/carousel.vue'
import DataShow from '@/pages/home/components/datashow.vue'
import { softwareData } from '@/pages/software/components/data.js'

// 定义软件类型接口
interface Software {
  name: string
  description_cn: string
  description_en: string
  link?: string
  citation?: string
}

const { t, locale } = useI18n()

// Add these reactive refs for carousel widths
const carouselWidth = ref(0);
const carouselItemWidth = ref(312);
const headerBackgroundColor = ref('dark');

// 监听滚动，更新当前选中的卡片
onMounted(() => {
  initSoftwareCarousel()
  // Calculate carousel width for Safari compatibility
  calculateCarouselWidth()
  
  // Add window resize listener
  window.addEventListener('resize', calculateCarouselWidth)
  
  // Add scroll event listener to detect section visibility
  window.addEventListener('scroll', handleScroll)
  // Initial check for header color
  handleScroll()
})

onUnmounted(() => {
  // 清理事件监听器
  window.removeEventListener('resize', calculateCarouselWidth)
  window.removeEventListener('scroll', handleScroll)
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

// Function to handle scroll events and update header color
const handleScroll = () => {
  // Find sections with light backgrounds that should trigger light header
  const lightSections = document.querySelectorAll('.bg-slate-100, .from-slate-100')

  let shouldBeLightHeader = false
  
  lightSections.forEach(section => {
    const rect = section.getBoundingClientRect()
    // If section is near the top of the viewport (within 100px)
    if (rect.top < 100 && rect.bottom > 0) {
      shouldBeLightHeader = true
    }
  })
  
  // Update header background color based on visible sections
  headerBackgroundColor.value = shouldBeLightHeader ? 'light' : 'dark'
}

// Edit 5: Added computed property to flatten software data
const allSoftware = computed((): Software[] => {
  // Duplicate the array to make the loop seamless
  const flatSoftware = Object.values(softwareData).flat() as Software[];
  return [...flatSoftware];
});

// Edit 8: Added computed property for reversed software data
const allSoftwareReversed = computed((): Software[] => {
  const flatSoftware = Object.values(softwareData).flat() as Software[];
  return [...flatSoftware].reverse(); // Return a reversed copy
});
</script>

<style scoped>
/* Replace the existing software-carousel styles with these */
.partner-scroller {
  display: flex;
  white-space: nowrap;
}

.partner-group {
  display: flex;
  animation-duration: 180s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.scroller-left .partner-group {
  animation-name: scroll-left;
}

.scroller-right .partner-group {
  animation-name: scroll-right;
}

.software-item {
  flex: 0 0 auto;
  width: 18rem; /* 72 * 4 = 288px / 16 = 18rem */
  padding: 0 0.75rem;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes scroll-right {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

/* 鼠标悬停时暂停滚动 */
.partner-scroller:hover {
  animation-play-state: paused;
}
.partner-scroller:hover .partner-group {
  animation-play-state: paused;
}

/* 保留其他现有样式 */
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

/* 其他样式保持不变 */
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
