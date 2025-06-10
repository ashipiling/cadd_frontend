<template>
  <div class="bg-gradient-to-b from-slate-100 to-white py-12">
    <div class="container mx-auto px-4 md:px-8 relative z-10">
      <div class="text-center mb-16 pt-8 reveal-item" ref="titleSection">
        <h2 class="text-4xl font-bold mb-4">DrugFlow</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          AI驱动的一站式创新药发现平台，将前沿人工智能与物理计算技术深度结合，覆盖从靶标发现到先导化合物优化的全流程，大幅提升药物研发效率。
        </p>
        <Button variant="outline" class="mt-4" asChild>
          <a href="https://drugflow.com" target="_blank">了解更多 <ArrowRight class="ml-1 h-4 w-4" /></a>
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
                    AI辅助药物设计平台
                  </div>
                </div>
                <div class="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/10 rounded-full backdrop-blur-sm"></div>
                <div class="absolute -top-6 -right-6 w-16 h-16 bg-blue-500/10 rounded-full backdrop-blur-sm"></div>
              </div>
            </div>
            
            <!-- 右侧数据统计 (宽度从2/3减少到3/5) -->
            <div class="lg:col-span-2 bg-white p-6 flex flex-col justify-center">
              <h3 class="text-2xl font-bold mb-6 text-center lg:text-left border-b border-slate-100 pb-3">
                <span class="text-primary">AI赋能</span> 显著提升药物研发效率
              </h3>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-slate-50 rounded-lg p-5 hover:shadow-md transition-shadow flex items-center border border-slate-100">
                  <div class="flex-shrink-0 mr-4 p-3 bg-primary/10 rounded-full">
                    <Clock class="h-9 w-9 text-primary" />
                  </div>
                  <div>
                    <p class="text-gray-600 text-sm">降低早期研发时间</p>
                    <div class="flex items-baseline">
                      <p class="text-3xl font-bold text-primary">50%</p>
                      <TrendingDown class="h-5 w-5 text-green-500 ml-2" />
                    </div>
                    <p class="text-xs text-gray-500 mt-1">相比传统研发方法</p>
                  </div>
                </div>
                
                <div class="bg-slate-50 rounded-lg p-5 hover:shadow-md transition-shadow flex items-center border border-slate-100">
                  <div class="flex-shrink-0 mr-4 p-3 bg-blue-500/10 rounded-full">
                    <Database class="h-9 w-9 text-blue-500" />
                  </div>
                  <div>
                    <p class="text-gray-600 text-sm">降低早期研发成本</p>
                    <div class="flex items-baseline">
                      <p class="text-3xl font-bold text-blue-500">70%</p>
                      <TrendingDown class="h-5 w-5 text-green-500 ml-2" />
                    </div>
                    <p class="text-xs text-gray-500 mt-1">显著节约研发投入</p>
                  </div>
                </div>
                
                <div class="bg-slate-50 rounded-lg p-5 hover:shadow-md transition-shadow flex items-center border border-slate-100 md:col-span-2">
                  <div class="flex-shrink-0 mr-4 p-3 bg-green-500/10 rounded-full">
                    <Server class="h-9 w-9 text-green-500" />
                  </div>
                  <div class="flex-grow">
                    <p class="text-gray-600 text-sm">高效筛选能力</p>
                    <div class="flex items-baseline">
                      <p class="text-3xl font-bold text-green-500">2天</p>
                      <span class="text-base ml-2 text-gray-700">单机完成亿级底库筛选</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Feature Cards Section -->
      <h3 class="text-2xl font-bold mb-8 text-center reveal-item" ref="featuresTitle">核心功能</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 reveal-item" ref="featuresSection">
        <!-- Feature Card 1 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 feature-card h-full">
          <div class="p-6 flex flex-col h-full">
            <div class="flex items-center mb-4">
              <FlaskConical class="h-6 w-6 text-primary mr-2" />
              <h4 class="text-lg font-bold">活性预测</h4>
            </div>
            <p class="text-gray-600 mb-4">通过先进的AI算法精确预测药物候选分子与目标蛋白的亲和力，提高命中率，加速药物发现过程。</p>
            
            <div class="mt-auto pt-4">
              <div class="bg-slate-50 rounded-lg p-3 mb-4 h-32 flex items-center justify-center overflow-hidden">
                <img src="/src/assets/imgs/drugflow_1.png" alt="活性预测" class="max-w-full max-h-full object-contain" />
              </div>
              <a target="_blank" href="https://documents.drugflow.com/zh/guide/Docking.html" class="inline-flex items-center text-primary hover:underline">
                查看详情 <ArrowRight class="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
        
        <!-- Feature Card 2 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 feature-card h-full">
          <div class="p-6 flex flex-col h-full">
            <div class="flex items-center mb-4">
              <Pill class="h-6 w-6 text-primary mr-2" />
              <h4 class="text-lg font-bold">成药性预测</h4>
            </div>
            <p class="text-gray-600 mb-4">评估候选分子的吸收、分布、代谢、排泄和毒性特征，确保开发的药物具有理想的药代动力学特性。</p>
            
            <div class="mt-auto pt-4">
              <div class="bg-slate-50 rounded-lg p-3 mb-4 h-32 flex items-center justify-center overflow-hidden">
                <img src="/src/assets/imgs/drugflow_2.png" alt="成药性预测" class="max-w-full max-h-full object-contain" />
              </div>
              <a target="_blank" href="https://documents.drugflow.com/zh/guide/ADMET.html" class="inline-flex items-center text-primary hover:underline">
                查看详情 <ArrowRight class="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
        
        <!-- Feature Card 3 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 feature-card h-full">
          <div class="p-6 flex flex-col h-full">
            <div class="flex items-center mb-4">
              <Atom class="h-6 w-6 text-primary mr-2" />
              <h4 class="text-lg font-bold">分子生成</h4>
            </div>
            <p class="text-gray-600 mb-4">利用生成式AI技术，设计全新的具有特定特性的分子结构，扩展化学空间，促进新药创新。</p>
            
            <div class="mt-auto pt-4">
              <div class="bg-slate-50 rounded-lg p-3 mb-4 h-32 flex items-center justify-center overflow-hidden">
                <img src="/src/assets/imgs/drugflow_3.png" alt="分子生成" class="max-w-full max-h-full object-contain" />
              </div>
              <a target="_blank" href="https://documents.drugflow.com/zh/guide/Molecular-Factory.html" class="inline-flex items-center text-primary hover:underline">
                查看详情 <ArrowRight class="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
        
        <!-- Feature Card 4 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 feature-card h-full">
          <div class="p-6 flex flex-col h-full">
            <div class="flex items-center mb-4">
              <Brain class="h-6 w-6 text-primary mr-2" />
              <h4 class="text-lg font-bold">AI建模</h4>
            </div>
            <p class="text-gray-600 mb-4">基于海量药物数据构建定制化AI模型，针对特定疾病靶点提供精准的药物设计方案。</p>
            
            <div class="mt-auto pt-4">
              <div class="bg-slate-50 rounded-lg p-3 mb-4 h-32 flex items-center justify-center overflow-hidden">
                <img src="/src/assets/imgs/drugflow_4.png" alt="AI建模" class="max-w-full max-h-full object-contain" />
              </div>
              <a target="_blank" href="https://documents.drugflow.com/zh/guide/QSAR.html" class="inline-flex items-center text-primary hover:underline">
                查看详情 <ArrowRight class="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
        
        <!-- Feature Card 5 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 feature-card h-full">
          <div class="p-6 flex flex-col h-full">
            <div class="flex items-center mb-4">
              <Filter class="h-6 w-6 text-primary mr-2" />
              <h4 class="text-lg font-bold">虚拟筛选</h4>
            </div>
            <p class="text-gray-600 mb-4">从复杂的生物学数据中提取关键结构信息，辅助研究人员理解药物-靶点相互作用机制。</p>
            
            <div class="mt-auto pt-4">
              <div class="bg-slate-50 rounded-lg p-3 mb-4 h-32 flex items-center justify-center overflow-hidden">
                <img src="/src/assets/imgs/drugflow_5.png" alt="结构提取" class="max-w-full max-h-full object-contain" />
              </div>
              <a target="_blank" href="https://documents.drugflow.com/zh/guide/Virtual-Screening.html" class="inline-flex items-center text-primary hover:underline">
                查看详情 <ArrowRight class="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
        
        <!-- Feature Card 6 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 feature-card h-full">
          <div class="p-6 flex flex-col h-full">
            <div class="flex items-center mb-4">
              <Microscope class="h-6 w-6 text-primary mr-2" />
              <h4 class="text-lg font-bold">结构提取</h4>
            </div>
            <p class="text-gray-600 mb-4">从复杂的生物学数据中提取关键结构信息，辅助研究人员理解药物-靶点相互作用机制。</p>
            
            <div class="mt-auto pt-4">
              <div class="bg-slate-50 rounded-lg p-3 mb-4 h-32 flex items-center justify-center overflow-hidden">
                <img src="/src/assets/imgs/drugflow_6.png" alt="结构提取" class="max-w-full max-h-full object-contain" />
              </div>
              <a target="_blank" href="https://documents.drugflow.com/zh/guide/Structure-Extraction.html" class="inline-flex items-center text-primary hover:underline">
                查看详情 <ArrowRight class="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 联系我们 -->
      <div class="text-center pb-8 reveal-item" ref="contactSection">
        <h3 class="text-2xl font-bold mb-4">想了解更多信息？</h3>
        <p class="text-gray-600 mb-4">我们的专业团队随时准备为您提供一对一咨询服务</p>
        <Button asChild>
          <a >联系我们 <MessageSquare class="ml-1 h-4 w-4" /></a>
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