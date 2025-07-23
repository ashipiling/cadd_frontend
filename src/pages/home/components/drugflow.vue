<template>
  <div class="bg-gradient-to-b from-slate-100 to-white py-12">
    <div class="container mx-auto px-4 md:px-8 relative z-10">
      <div class="text-center mb-16 pt-8 reveal-item" ref="titleSection">
        <h2 class="text-4xl font-bold mb-4">{{ t('index.drugflow.title') }}</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          {{ t('index.drugflow.description') }}
        </p>
        <Button variant="outline" class="mt-4" asChild>
          <a href="https://drugflow.com" target="_blank">{{ t('index.drugflow.learnMore') }} <ArrowRight class="ml-1 h-4 w-4" /></a>
        </Button>
      </div>
      
      <!-- 数据统计 -->
      <div class="mb-16 reveal-item" ref="statsSection">
        <div class="bg-white rounded-xl overflow-hidden shadow-lg">
          <div class="grid grid-cols-1 lg:grid-cols-5 gap-0">
            <!-- 左侧界面图片 (宽度从1/3增加到2/5) -->
            <div class="lg:col-span-3 relative overflow-hidden">
              <div class="bg-gradient-to-br from-primary/5 to-slate-50 absolute inset-0"></div>
              <div class="relative h-full flex items-center justify-center p-4">
                <div class="rounded-lg overflow-hidden shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500 max-w-[95%]">
                  <img 
                    src="/src/assets/imgs/drugflow_1.jpg" 
                    alt="DrugFlow操作界面" 
                    class="w-full h-auto object-cover"
                    onerror="this.src='/src/assets/imgs/drugflow_1.jpg'"
                  />
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent text-white p-3 text-sm font-medium">
                    {{ t('index.drugflow.stats.platformInterface') }}
                  </div>
                </div>
                <div class="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/10 rounded-full backdrop-blur-sm"></div>
                <div class="absolute -top-6 -right-6 w-16 h-16 bg-blue-500/10 rounded-full backdrop-blur-sm"></div>
              </div>
            </div>
            
            <!-- 右侧数据统计 (宽度从2/3减少到3/5) -->
            <div class="lg:col-span-2 bg-white p-6 flex flex-col justify-center">
              <h3 class="text-2xl font-bold mb-6 text-center lg:text-left border-b border-slate-100 pb-3">
                <span class="text-primary">{{ t('index.drugflow.stats.title') }}</span> {{ t('index.drugflow.stats.subtitle') }}
              </h3>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-slate-50 rounded-lg p-5 hover:shadow-md transition-shadow flex items-center border border-slate-100">
                  <div class="flex-shrink-0 mr-4 p-3 bg-primary/10 rounded-full">
                    <Clock class="h-9 w-9 text-primary" />
                  </div>
                  <div>
                    <p class="text-gray-600 text-sm">{{ t('index.drugflow.stats.reduceTime') }}</p>
                    <div class="flex items-baseline">
                      <p class="text-3xl font-bold text-primary">{{ t('index.drugflow.stats.timeReduction') }}</p>
                      <TrendingDown class="h-5 w-5 text-green-500 ml-2" />
                    </div>
                    <p class="text-xs text-gray-500 mt-1">{{ t('index.drugflow.stats.comparedTraditional') }}</p>
                  </div>
                </div>
                
                <div class="bg-slate-50 rounded-lg p-5 hover:shadow-md transition-shadow flex items-center border border-slate-100">
                  <div class="flex-shrink-0 mr-4 p-3 bg-blue-500/10 rounded-full">
                    <Database class="h-9 w-9 text-blue-500" />
                  </div>
                  <div>
                    <p class="text-gray-600 text-sm">{{ t('index.drugflow.stats.reduceCost') }}</p>
                    <div class="flex items-baseline">
                      <p class="text-3xl font-bold text-blue-500">{{ t('index.drugflow.stats.costReduction') }}</p>
                      <TrendingDown class="h-5 w-5 text-green-500 ml-2" />
                    </div>
                    <p class="text-xs text-gray-500 mt-1">{{ t('index.drugflow.stats.significantSaving') }}</p>
                  </div>
                </div>
                
                <div class="bg-slate-50 rounded-lg p-5 hover:shadow-md transition-shadow flex items-center border border-slate-100 md:col-span-2">
                  <div class="flex-shrink-0 mr-4 p-3 bg-green-500/10 rounded-full">
                    <Server class="h-9 w-9 text-green-500" />
                  </div>
                  <div class="flex-grow">
                    <p class="text-gray-600 text-sm">{{ t('index.drugflow.stats.efficientScreening') }}</p>
                    <div class="flex items-baseline">
                      <p class="text-3xl font-bold text-green-500">{{ t('index.drugflow.stats.screeningCapability') }}</p>
                      <span class="text-base ml-2 text-gray-700">{{ t('index.drugflow.stats.billionScreening') }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Feature Cards Section -->
      <h3 class="text-2xl font-bold mb-8 text-center reveal-item" ref="featuresTitle">{{ t('index.drugflow.features.title') }}</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 reveal-item" ref="featuresSection">
        <!-- Feature Card 1 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 feature-card h-full">
          <div class="p-6 flex flex-col h-full">
            <div class="flex items-center mb-4">
              <FlaskConical class="h-6 w-6 text-primary mr-2" />
              <h4 class="text-lg font-bold">{{ t('index.drugflow.features.activityPrediction.title') }}</h4>
            </div>
            <p class="text-gray-600 mb-4">{{ t('index.drugflow.features.activityPrediction.description') }}</p>
            
            <div class="mt-auto pt-4">
              <div class="bg-slate-50 rounded-lg p-3 mb-4 h-32 flex items-center justify-center overflow-hidden">
                <img src="/src/assets/imgs/drugflow_1.png" alt="活性预测" class="max-w-full max-h-full object-contain" />
              </div>
              <a target="_blank" href="https://documents.drugflow.com/zh/guide/Docking.html" class="inline-flex items-center text-primary hover:underline">
                {{ t('index.drugflow.features.activityPrediction.viewDetails') }} <ArrowRight class="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
        
        <!-- Feature Card 2 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 feature-card h-full">
          <div class="p-6 flex flex-col h-full">
            <div class="flex items-center mb-4">
              <Pill class="h-6 w-6 text-primary mr-2" />
              <h4 class="text-lg font-bold">{{ t('index.drugflow.features.druglikeness.title') }}</h4>
            </div>
            <p class="text-gray-600 mb-4">{{ t('index.drugflow.features.druglikeness.description') }}</p>
            
            <div class="mt-auto pt-4">
              <div class="bg-slate-50 rounded-lg p-3 mb-4 h-32 flex items-center justify-center overflow-hidden">
                <img src="/src/assets/imgs/drugflow_2.png" alt="成药性预测" class="max-w-full max-h-full object-contain" />
              </div>
              <a target="_blank" href="https://documents.drugflow.com/zh/guide/ADMET.html" class="inline-flex items-center text-primary hover:underline">
                {{ t('index.drugflow.features.activityPrediction.viewDetails') }} <ArrowRight class="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
        
        <!-- Feature Card 3 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 feature-card h-full">
          <div class="p-6 flex flex-col h-full">
            <div class="flex items-center mb-4">
              <Atom class="h-6 w-6 text-primary mr-2" />
              <h4 class="text-lg font-bold">{{ t('index.drugflow.features.molecularGeneration.title') }}</h4>
            </div>
            <p class="text-gray-600 mb-4">{{ t('index.drugflow.features.molecularGeneration.description') }}</p>
            
            <div class="mt-auto pt-4">
              <div class="bg-slate-50 rounded-lg p-3 mb-4 h-32 flex items-center justify-center overflow-hidden">
                <img src="/src/assets/imgs/drugflow_3.png" alt="分子生成" class="max-w-full max-h-full object-contain" />
              </div>
              <a target="_blank" href="https://documents.drugflow.com/zh/guide/Molecular-Factory.html" class="inline-flex items-center text-primary hover:underline">
                {{ t('index.drugflow.features.activityPrediction.viewDetails') }} <ArrowRight class="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
        
        <!-- Feature Card 4 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 feature-card h-full">
          <div class="p-6 flex flex-col h-full">
            <div class="flex items-center mb-4">
              <Brain class="h-6 w-6 text-primary mr-2" />
              <h4 class="text-lg font-bold">{{ t('index.drugflow.features.aiModeling.title') }}</h4>
            </div>
            <p class="text-gray-600 mb-4">{{ t('index.drugflow.features.aiModeling.description') }}</p>
            
            <div class="mt-auto pt-4">
              <div class="bg-slate-50 rounded-lg p-3 mb-4 h-32 flex items-center justify-center overflow-hidden">
                <img src="/src/assets/imgs/drugflow_4.png" alt="AI建模" class="max-w-full max-h-full object-contain" />
              </div>
              <a target="_blank" href="https://documents.drugflow.com/zh/guide/QSAR.html" class="inline-flex items-center text-primary hover:underline">
                {{ t('index.drugflow.features.activityPrediction.viewDetails') }} <ArrowRight class="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
        
        <!-- Feature Card 5 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 feature-card h-full">
          <div class="p-6 flex flex-col h-full">
            <div class="flex items-center mb-4">
              <Filter class="h-6 w-6 text-primary mr-2" />
              <h4 class="text-lg font-bold">{{ t('index.drugflow.features.virtualScreening.title') }}</h4>
            </div>
            <p class="text-gray-600 mb-4">{{ t('index.drugflow.features.virtualScreening.description') }}</p>
            
            <div class="mt-auto pt-4">
              <div class="bg-slate-50 rounded-lg p-3 mb-4 h-32 flex items-center justify-center overflow-hidden">
                <img src="/src/assets/imgs/drugflow_5.png" alt="结构提取" class="max-w-full max-h-full object-contain" />
              </div>
              <a target="_blank" href="https://documents.drugflow.com/zh/guide/Virtual-Screening.html" class="inline-flex items-center text-primary hover:underline">
                {{ t('index.drugflow.features.activityPrediction.viewDetails') }} <ArrowRight class="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
        
        <!-- Feature Card 6 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 feature-card h-full">
          <div class="p-6 flex flex-col h-full">
            <div class="flex items-center mb-4">
              <Microscope class="h-6 w-6 text-primary mr-2" />
              <h4 class="text-lg font-bold">{{ t('index.drugflow.features.structureExtraction.title') }}</h4>
            </div>
            <p class="text-gray-600 mb-4">{{ t('index.drugflow.features.structureExtraction.description') }}</p>
            
            <div class="mt-auto pt-4">
              <div class="bg-slate-50 rounded-lg p-3 mb-4 h-32 flex items-center justify-center overflow-hidden">
                <img src="/src/assets/imgs/drugflow_6.png" alt="结构提取" class="max-w-full max-h-full object-contain" />
              </div>
              <a target="_blank" href="https://documents.drugflow.com/zh/guide/Structure-Extraction.html" class="inline-flex items-center text-primary hover:underline">
                {{ t('index.drugflow.features.activityPrediction.viewDetails') }} <ArrowRight class="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 联系我们 -->
      <div class="text-center pb-8 reveal-item" ref="contactSection">
        <h3 class="text-2xl font-bold mb-4">{{ t('index.drugflow.contact.title') }}</h3>
        <p class="text-gray-600 mb-4">{{ t('index.drugflow.contact.description') }}</p>
        <Button asChild>
          <a >{{ t('index.drugflow.contact.contactUs') }} <MessageSquare class="ml-1 h-4 w-4" /></a>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import { 
  FlaskConical, 
  Pill, 
  Atom, 
  Brain, 
  Microscope, 
  Clock, 
  TrendingDown,
  Server,
  Database,
  ArrowRight,
  MessageSquare,
  Filter
} from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 滚动动画处理
const titleSection = ref(null)
const statsSection = ref(null)
const featuresTitle = ref(null)
const featuresSection = ref(null)
const contactSection = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })
  
  // 观察所有需要动画的元素
  const elements = [
    titleSection.value,
    statsSection.value,
    featuresTitle.value,
    featuresSection.value,
    contactSection.value
  ]
  
  elements.forEach(el => {
    if (el) observer.observe(el)
  })
})
</script>

<style scoped>
.reveal-item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s, transform 0.6s;
}

.reveal-item.visible {
  opacity: 1;
  transform: translateY(0);
}

.feature-card {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
}

.feature-card:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>