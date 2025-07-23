<template>
  <div class="min-h-screen bg-white">
    <!-- 导航栏 -->
    <Header backgroundColor="light" :enableScrollHiding="true" />
    
    <!-- 内容区域 -->
    <div class="container py-8 mx-auto relative">
      <!-- Decorative background elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-24 md:-right-24 -right-8 w-60 md:w-96 h-60 md:h-96 bg-primary/15 rounded-full blur-3xl"></div>
        <div class="absolute top-20 -left-10 md:-left-20 w-48 md:w-80 h-48 md:h-80 bg-amber-300/20 rounded-full blur-2xl"></div>
      </div>
      
      <div class="max-w-6xl mx-auto relative">
        <!-- Hero Section -->
        <div class="mt-16 mb-12 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-3 text-primary bg-clip-text">{{ t('honor.title') }}</h1>
          <div class="w-24 h-1 bg-gradient-to-r from-primary/60 to-primary mx-auto mb-4 rounded-full"></div>
        </div>

        <!-- Group Photos Carousel -->
        <div class="mb-16">
          <div 
            class="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl"
            @mouseenter="pauseCarousel"
            @mouseleave="resumeCarousel"
          >
            <div class="absolute inset-0">
              <!-- Slide 1 -->
              <div 
                class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                :class="currentSlide === 0 ? 'opacity-100' : 'opacity-0'"
              >
                <img 
                  src="/src/assets/imgs/group-photo-1.jpg" 
                  alt="Group Photo 1" 
                  class="w-full h-full object-cover"
                />
              </div>
              <!-- Slide 2 -->
              <div 
                class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                :class="currentSlide === 1 ? 'opacity-100' : 'opacity-0'"
              >
                <img 
                  src="/src/assets/imgs/group-photo-2.jpg" 
                  alt="Group Photo 2" 
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <!-- Overlay gradient for better text readability -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            
            <!-- Carousel indicators -->
            <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              <button 
                v-for="index in 2" 
                :key="index - 1"
                @click="setSlide(index - 1)"
                class="w-4 h-4 rounded-full transition-all duration-300 border-2 border-white/50"
                :class="currentSlide === index - 1 ? 'bg-white border-white' : 'bg-transparent hover:bg-white/50'"
              ></button>
            </div>
          </div>
        </div>


        <!-- Student Honors Section -->
        <section id="honors" class="mb-16 scroll-mt-20">
          <!-- Section Header -->
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4 text-gray-900">{{ t('honor.collectiveHonor') }}</h2>
          </div>

          <!-- Enhanced Grid Layout -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="(honor, index) in collectiveHonors" :key="`student-${honor.id}`" 
                class="group bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              
              <!-- Enhanced Header Section -->
              <div class="relative p-8 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <!-- Level Background Text -->
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div class="text-6xl md:text-7xl lg:text-8xl font-black text-gray-300/50 whitespace-nowrap select-none">
                    {{ honor.level }}
                  </div>
                </div>
                
                <!-- Trophy Icon with Honor-based Color -->
                <div 
                  class="relative w-24 h-24 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10"
                >
                  <Medal class="w-24 h-24" :class="`${getHonorGradient(honor.honor)}`" />
                </div>

                <!-- Year Badge -->
                <div class="absolute top-4 right-4 bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm z-10">
                  {{ honor.year }}
                </div>
              </div>
              
              <!-- Content Section -->
              <div class="p-6">
                <!-- Title -->
                <h3 class="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                  {{ honor.title }}
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- 页脚 -->
    <Footer backgroundColor="light" />

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Button } from '@/components/ui/button'
import Header from '@/components/Layout/Header.vue'
import Footer from '@/components/Layout/Footer.vue'
import { collectiveHonors } from './components/data.ts'
import { useI18n } from 'vue-i18n'
import { Medal } from 'lucide-vue-next'

const { t, locale } = useI18n()

// Carousel functionality
const currentSlide = ref(0)
const slideInterval = ref<number | null>(null)
const totalSlides = 2

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides
}

const setSlide = (index: number) => {
  currentSlide.value = index
  // Restart the auto-play timer when manually changing slide
  stopCarousel()
  setTimeout(() => {
    startCarousel()
  }, 100)
}

const startCarousel = () => {
  slideInterval.value = setInterval(() => {
    nextSlide()
  }, 5000) // Change slide every 5 seconds
}

const stopCarousel = () => {
  if (slideInterval.value) {
    clearInterval(slideInterval.value)
    slideInterval.value = null
  }
}

// Pause carousel on hover
const pauseCarousel = () => stopCarousel()
const resumeCarousel = () => startCarousel()

onMounted(() => {
  startCarousel()
})

onUnmounted(() => {
  stopCarousel()
})


// Get background gradient based on honor level (新的基于honor字段的颜色系统)
const getHonorGradient = (honor: string) => {
  switch (honor) {
    case '金奖':
    case 'Gold':
      return 'text-yellow-400'
    case '银奖':
    case 'Silver':
      return 'text-slate-400'
    case '铜奖':
    case 'Bronze':
      return 'text-amber-600'
    case '特等奖':
    case 'Grand Prize':
      return 'text-purple-500'
    case '一等奖':
    case 'First Prize':
      return 'text-red-500'
    case '二等奖':
    case 'Second Prize':
      return 'text-orange-500'
    case '三等奖':
    case 'Third Prize':
      return 'text-green-500'
    default:
      return 'text-blue-500'
  }
}


</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

<route lang="yaml">
  meta:
    layout: blank
</route>
