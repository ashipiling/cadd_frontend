<template>
  <PageFrame :headerBackgroundColor="headerBackgroundColor">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center overflow-hidden">
      <!-- Background image with gradient overlay - similar to carousel style -->
      <div class="absolute inset-0 bg-gradient-to-b from-blue-700/70 to-gray-900/90 z-10 overflow-hidden">
        <img 
          :src="heroBackgroundImage" 
          alt="DrugFlow Platform Interface" 
          class="w-full h-full object-cover"
        />
      </div>
      
      <div class="absolute inset-0 z-20 flex items-center">
        <div class="container mx-auto px-4 md:px-24 mt-20">
          <div class="max-w-full md:max-w-3xl text-center md:text-left">
            <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 text-white text-sm font-medium mb-8 border border-primary/30 backdrop-blur-sm">
              <span class="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              {{ t('drugflow.hero.badge') }}
            </div>
            <h1 class="text-3xl md:text-8xl mb-6 text-white tracking-wide max-w-[660px] font-bold animate-fade-in-up">
              <span class="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent drop-shadow-lg">Drug</span><span class="drop-shadow-lg">Flow</span>
            </h1>
            <p class="text-base md:text-xl text-gray-300 mb-10 max-w-[550px] font-light animate-fade-in-up animation-delay-200">
              {{ t('drugflow.hero.description') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-6 mb-36">
              <Button size="lg" class="text-lg px-10 py-5 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1" asChild>
                <a href="https://drugflow.com" target="_blank">
                  {{ t('drugflow.hero.getStarted') }}
                  <ArrowRight class="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                class="text-lg px-10 py-5 bg-white/10 text-white border-none
                       hover:bg-white/20 backdrop-blur-sm 
                       transition-all duration-300 transform hover:scale-105 hover:-translate-y-1
                       shadow-lg hover:shadow-xl"
                @click="scrollToFeatures"
              >
                {{ t('drugflow.hero.learnMore') }}
                <ChevronDown class="ml-2 h-5 w-5 animate-bounce" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4 md:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16 reveal-item" ref="statsTitle">
            <h2 class="text-4xl font-bold mb-4">{{ t('drugflow.stats.title') }}</h2>
            <p class="text-xl text-gray-600">{{ t('drugflow.stats.subtitle') }}</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal-item" ref="statsGrid">
            <div v-for="(stat, index) in statistics" :key="index" 
                 class="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" :class="stat.bgColor">
                <component :is="stat.icon" class="h-8 w-8" :class="stat.iconColor" />
              </div>
              <div class="text-4xl font-bold mb-2" :class="stat.textColor">{{ stat.value }}</div>
              <div class="text-sm text-gray-600 mb-2">{{ stat.label }}</div>
              <div class="text-xs text-gray-500">{{ stat.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Features Section -->
    <section id="features" class="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4 md:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16 reveal-item" ref="featuresTitle">
            <h2 class="text-4xl font-bold mb-4">{{ t('drugflow.features.title') }}</h2>
            <p class="text-xl text-gray-600">{{ t('drugflow.features.subtitle') }}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-item" ref="featuresGrid">
            <div v-for="(feature, index) in coreFeatures" :key="index"
                 class="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div class="h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <img :src="feature.image" :alt="feature.title" class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <div class="p-2 rounded-lg mr-3" :class="feature.iconBg">
                    <component :is="feature.icon" class="h-6 w-6" :class="feature.iconColor" />
                  </div>
                  <h3 class="text-xl font-bold">{{ feature.title }}</h3>
                </div>
                <p class="text-gray-600 mb-4 leading-relaxed">{{ feature.description }}</p>
                <a :href="feature.link" target="_blank" 
                   class="inline-flex items-center text-primary hover:text-primary/80 font-medium group-hover:translate-x-1 transition-transform duration-300">
                  {{ t('drugflow.features.viewDetails') }}
                  <ArrowRight class="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Use Cases Section -->
    <section class="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4 md:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16 reveal-item" ref="useCasesTitle">
            <h2 class="text-4xl font-bold mb-4">{{ t('drugflow.useCases.title') }}</h2>
            <p class="text-xl text-gray-600">{{ t('drugflow.useCases.subtitle') }}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-item" ref="useCasesGrid">
            <div v-for="(useCase, index) in useCases" :key="index"
                 class="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-2">
              <div class="flex items-center mb-6">
                <div class="p-3 rounded-2xl mr-4" :class="useCase.iconBg">
                  <component :is="useCase.icon" class="h-8 w-8" :class="useCase.iconColor" />
                </div>
                <h3 class="text-2xl font-bold">{{ useCase.title }}</h3>
              </div>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ useCase.description }}</p>
              <div class="space-y-3">
                <div v-for="(benefit, bIndex) in useCase.benefits" :key="bIndex" class="flex items-center text-sm">
                  <CheckCircle class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{{ benefit }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-32 bg-gradient-to-br from-primary via-blue-600 to-indigo-700 text-white relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute top-1/4 left-1/6 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/3 right-1/5 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto px-4 md:px-8 relative z-10">
        <div class="max-w-4xl mx-auto text-center reveal-item" ref="ctaSection">
          <h2 class="text-4xl font-bold mb-6">{{ t('drugflow.cta.title') }}</h2>
          <p class="text-xl text-blue-100 mb-8">{{ t('drugflow.cta.description') }}</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" class="text-lg px-10 py-5 bg-white text-primary hover:bg-white/90 hover:text-primary shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" asChild>
              <a href="https://drugflow.com" target="_blank">
                {{ t('drugflow.cta.tryNow') }}
                <ExternalLink class="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" class="text-lg px-10 py-5 backdrop-blur-sm transition-all duration-300" asChild>
              <a href="https://documents.drugflow.com/zh/guide/" target="_blank">
                {{ t('drugflow.cta.documentation') }}
                <BookOpen class="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </PageFrame>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Button } from '@/components/ui/button'
// @ts-ignore
import PageFrame from '@/components/Layout/page_frame.vue'
import { 
  FlaskConical, 
  Pill, 
  Atom, 
  Brain, 
  Microscope, 
  Filter,
  Clock, 
  TrendingDown,
  Server,
  Database,
  ArrowRight,
  MessageSquare,
  ChevronDown,
  ExternalLink,
  BookOpen,
  CheckCircle,
  Building2,
  Users
} from 'lucide-vue-next'

const { t, locale } = useI18n()

// Reactive refs for animations
const headerBackgroundColor = ref('dark')
const heroContent = ref(null)
const heroImage = ref(null)
const statsTitle = ref(null)
const statsGrid = ref(null)
const featuresTitle = ref(null)
const featuresGrid = ref(null)
const useCasesTitle = ref(null)
const useCasesGrid = ref(null)
const ctaSection = ref(null)

// Hero background image
const heroBackgroundImage = new URL('@/assets/imgs/drugflow_cover.jpg', import.meta.url).href

// Statistics data
const statistics = computed(() => [
  {
    icon: Clock,
    value: '50%',
    label: t('drugflow.stats.timeReduction'),
    description: t('drugflow.stats.timeDesc'),
    bgColor: 'bg-blue-500/10',
    iconColor: 'text-blue-500',
    textColor: 'text-blue-500'
  },
  {
    icon: TrendingDown,
    value: '70%',
    label: t('drugflow.stats.costReduction'),
    description: t('drugflow.stats.costDesc'),
    bgColor: 'bg-green-500/10',
    iconColor: 'text-green-500',
    textColor: 'text-green-500'
  },
  {
    icon: Server,
    value: locale.value === 'zh-CN' ? '2天' : '2 Days',
    label: t('drugflow.stats.screeningSpeed'),
    description: t('drugflow.stats.screeningDesc'),
    bgColor: 'bg-purple-500/10',
    iconColor: 'text-purple-500',
    textColor: 'text-purple-500'
  },
  {
    icon: Database,
    value: locale.value === 'zh-CN' ? '10亿+' : '10B+',
    label: t('drugflow.stats.databaseSize'),
    description: t('drugflow.stats.databaseDesc'),
    bgColor: 'bg-orange-500/10',
    iconColor: 'text-orange-500',
    textColor: 'text-orange-500'
  }
])

const importImage = (imgPath: string) => {
  if (!imgPath) {
    console.error('Image path is undefined');
    return '';
  }
  const imgUrl = new URL(`../../assets/imgs/${imgPath}`, import.meta.url).href;
  return imgUrl;
}
// Core features data
const coreFeatures = computed(() => {
  const langPath = locale.value === 'zh-CN' ? 'zh' : 'en'
  return [
    {
      icon: FlaskConical,
      title: t('drugflow.features.activityPrediction.title'),
      description: t('drugflow.features.activityPrediction.description'),
      image: importImage('drugflow_1.png'),
      link: `https://documents.drugflow.com/${langPath}/guide/Docking.html`,
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-500'
    },
    {
      icon: Pill,
      title: t('drugflow.features.druglikeness.title'),
      description: t('drugflow.features.druglikeness.description'),
      image: importImage('drugflow_2.png'),
      link: `https://documents.drugflow.com/${langPath}/guide/ADMET.html`,
      iconBg: 'bg-green-500/10',
      iconColor: 'text-green-500'
    },
    {
      icon: Atom,
      title: t('drugflow.features.molecularGeneration.title'),
      description: t('drugflow.features.molecularGeneration.description'),
      image: importImage('drugflow_3.png'),
      link: `https://documents.drugflow.com/${langPath}/guide/Molecular-Factory.html`,
      iconBg: 'bg-purple-500/10',
      iconColor: 'text-purple-500'
    },
    {
      icon: Brain,
      title: t('drugflow.features.aiModeling.title'),
      description: t('drugflow.features.aiModeling.description'),
      image: importImage('drugflow_4.png'),
      link: `https://documents.drugflow.com/${langPath}/guide/QSAR.html`,
      iconBg: 'bg-red-500/10',
      iconColor: 'text-red-500'
    },
    {
      icon: Filter,
      title: t('drugflow.features.virtualScreening.title'),
      description: t('drugflow.features.virtualScreening.description'),
      image: importImage('drugflow_5.png'),
      link: `https://documents.drugflow.com/${langPath}/guide/Virtual-Screening.html`,
      iconBg: 'bg-yellow-500/10',
      iconColor: 'text-yellow-500'
    },
    {
      icon: Microscope,
      title: t('drugflow.features.structureExtraction.title'),
      description: t('drugflow.features.structureExtraction.description'),
      image: importImage('drugflow_6.png'),
      link: `https://documents.drugflow.com/${langPath}/guide/Structure-Extraction.html`,
      iconBg: 'bg-indigo-500/10',
      iconColor: 'text-indigo-500'
    }
  ]
})


// Use cases
const useCases = computed(() => [
  {
    icon: Building2,
    title: t('drugflow.useCases.pharma.title'),
    description: t('drugflow.useCases.pharma.description'),
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-500',
    benefits: [
      t('drugflow.useCases.pharma.benefit1'),
      t('drugflow.useCases.pharma.benefit2'),
      t('drugflow.useCases.pharma.benefit3')
    ]
  },
  {
    icon: Users,
    title: t('drugflow.useCases.research.title'),
    description: t('drugflow.useCases.research.description'),
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-500',
    benefits: [
      t('drugflow.useCases.research.benefit1'),
      t('drugflow.useCases.research.benefit2'),
      t('drugflow.useCases.research.benefit3')
    ]
  }
])

// Platform features for scrollable section
const platformFeatures = computed(() => [
  { id: 1, name: t('drugflow.platformFeatures.docking'), name_en: t('drugflow.platformFeatures.docking_en') },
  { id: 2, name: t('drugflow.platformFeatures.admet'), name_en: t('drugflow.platformFeatures.admet_en') },
  { id: 3, name: t('drugflow.platformFeatures.molecularFactory'), name_en: t('drugflow.platformFeatures.molecularFactory_en') },
  { id: 4, name: t('drugflow.platformFeatures.qsar'), name_en: t('drugflow.platformFeatures.qsar_en') },
  { id: 5, name: t('drugflow.platformFeatures.virtualScreening'), name_en: t('drugflow.platformFeatures.virtualScreening_en') },
  { id: 6, name: t('drugflow.platformFeatures.structureExtraction'), name_en: t('drugflow.platformFeatures.structureExtraction_en') }
])

// Scroll to features section
const scrollToFeatures = () => {
  const element = document.getElementById('features')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Function to handle scroll events and update header color
const handleScroll = () => {
  // Find sections with light backgrounds
  const lightSections = document.querySelectorAll('.bg-white, .from-gray-50, .to-white')
  // Find sections with dark backgrounds
  const darkSections = document.querySelectorAll('.from-indigo-950, .from-primary, .to-indigo-700')

  let shouldBeLightHeader = false
  let shouldBeDarkHeader = false
  
  // Check if any light section is at the top
  lightSections.forEach(section => {
    const rect = section.getBoundingClientRect()
    if (rect.top < 100 && rect.bottom > 0) {
      shouldBeLightHeader = true
    }
  })
  
  // Check if any dark section is at the top
  darkSections.forEach(section => {
    const rect = section.getBoundingClientRect()
    if (rect.top < 100 && rect.bottom > 0) {
      shouldBeDarkHeader = true
    }
  })
  
  // Prioritize the determination: if both are visible, dark sections take precedence
  if (shouldBeDarkHeader) {
    headerBackgroundColor.value = 'dark'
  } else if (shouldBeLightHeader) {
    headerBackgroundColor.value = 'light'
  } else {
    // Default to dark if no specific section is detected
    headerBackgroundColor.value = 'dark'
  }
}

onMounted(() => {
  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })
  
  // Observe all elements with reveal-item class
  const elements = [
    heroContent.value,
    heroImage.value,
    statsTitle.value,
    statsGrid.value,
    featuresTitle.value,
    featuresGrid.value,
    useCasesTitle.value,
    useCasesGrid.value,
    ctaSection.value
  ]
  
  elements.forEach(el => {
    if (el) observer.observe(el)
  })

  // Add scroll event listener to detect section visibility
  window.addEventListener('scroll', handleScroll)
  // Initial check for header color
  handleScroll()
})

onUnmounted(() => {
  // 清理事件监听器
  window.removeEventListener('scroll', handleScroll)
})

</script>

<style scoped>
.reveal-item {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal-item.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Background image styling similar to carousel */

/* Enhanced shadow for hero image */
.shadow-3xl {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}

/* Enhanced hover effects for hero image */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.group:hover .group-hover\:scale-\[1\.02\] {
  transform: scale(1.02);
}

.group:hover .group-hover\:rotate-6 {
  transform: rotate(6deg);
}

.group:hover .group-hover\:-rotate-6 {
  transform: rotate(-6deg);
}

/* Backdrop blur support */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Staggered animation for grid items */
.reveal-item:nth-child(1) { transition-delay: 0.1s; }
.reveal-item:nth-child(2) { transition-delay: 0.2s; }
.reveal-item:nth-child(3) { transition-delay: 0.3s; }
.reveal-item:nth-child(4) { transition-delay: 0.4s; }
.reveal-item:nth-child(5) { transition-delay: 0.5s; }
.reveal-item:nth-child(6) { transition-delay: 0.6s; }

/* Clean and simple styling */

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

.animate-scroll-horizontal {
  /* 应用动画：名称 时长 速度曲线 循环次数 */
  animation: scroll-horizontal 25s linear infinite; /* 调整 25s 来改变滚动速度 */
  display: inline-block; /* 确保容器宽度适应内容 */
}

/* 鼠标悬停时暂停动画 (可选) */
.group:hover .pause-animation {
  animation-play-state: paused;
}
</style>

<route lang="yaml">
meta:
  layout: blank
</route> 