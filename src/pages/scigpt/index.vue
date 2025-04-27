<template>
  <PageFrame backgroundColor="light" headerBackgroundColor="light">
    <div class="min-h-screen bg-white text-gray-800">
      <!-- 首屏区域 - 无右侧展示版 -->
      <section class="relative py-16 md:py-24 overflow-hidden h-[90vh] flex items-center justify-center bg-blue-50">
        <!-- 最近更新通知 -->
        <div class="absolute top-6 left-0 right-0 flex justify-center z-20">
          <div class="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-blue-100 flex items-center gap-2">
            <span class="flex h-2 w-2">
              <span class="animate-ping absolute h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
              <span class="relative rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span class="text-sm font-medium text-blue-700">最近更新: 新增分子结构预测功能</span>
            <a href="#" class="text-xs text-blue-600 hover:text-blue-800 underline underline-offset-2">了解详情</a>
          </div>
        </div>
        
        <!-- 背景效果 -->
        <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-50 to-white -z-10"></div>
        
        <!-- 微妙背景图案 -->
        <div class="absolute inset-0 opacity-5 -z-5">
          <div class="h-full w-full" style="background-image: radial-gradient(#2563eb 1px, transparent 1px); background-size: 40px 40px;"></div>
        </div>
        
        <!-- 装饰元素 -->
        <div class="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl -z-5"></div>
        <div class="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-blue-300 opacity-20 blur-3xl -z-5"></div>
        
        <!-- 主要内容 -->
        <div class="container px-6 mx-auto relative z-10">
          <div class="max-w-3xl mx-auto text-center">
            
            <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span class="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-transparent bg-clip-text animate-gradient-x">SciGPT</span><br />
              <span class="text-blue-600 relative inline-block">
                智能医药研发助手
                <span class="absolute bottom-0 left-0 w-full h-1 bg-blue-400 opacity-50 rounded-full"></span>
              </span>
            </h1>
            
            <p class="text-lg md:text-xl text-gray-700 mb-10 mx-auto max-w-2xl leading-relaxed">
              连接专业医药知识与人工智能，加速药物研发全流程
            </p>
            
            <div class="flex flex-col sm:flex-row gap-5 justify-center">
              <button class="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                立即体验
              </button>
              <button class="px-10 py-4 bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 rounded-lg font-medium shadow-sm hover:shadow-md transition-all">
                了解更多
              </button>
            </div>
            
            <!-- 简单特性指示 -->
            <div class="mt-16 flex justify-center space-x-8 text-blue-600">
              <div class="flex items-center">
                <i class="fas fa-flask mr-2 text-blue-500"></i>
                <span class="text-sm">药物研发</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-atom mr-2 text-blue-500"></i>
                <span class="text-sm">分子设计</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-microscope mr-2 text-blue-500"></i>
                <span class="text-sm">靶点分析</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 底部装饰波浪 -->
        <div class="absolute bottom-0 left-0 right-0 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" class="w-full h-auto">
            <path fill="currentColor" fill-opacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,16L1440,11L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      <!-- 功能卡片 - 白色背景 -->
      <section class="py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12 text-blue-700">
          核心功能
        </h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(feature, index) in features" :key="index"
               class="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:border-blue-200 hover:shadow-md transition-all">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-100">
              <i :class="feature.icon" class="text-xl"></i>
            </div>
            <h3 class="mb-2 text-xl font-medium text-gray-900">{{ feature.title }}</h3>
            <p class="text-sm text-gray-600">{{ feature.description }}</p>
            <div class="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full"></div>
          </div>
        </div>
      </section>

      <!-- 工具集 - 浅蓝背景 -->
      <section class="py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12 text-blue-700">
          专业工具集
        </h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- 左侧工具导航 - 使用sticky定位 -->
          <div class="h-fit sticky top-24">
            <p class="text-gray-700 text-xl mb-8 max-w-xl">
              我们提供一系列专业工具，助力药物研发全流程
            </p>
            <p class="text-gray-600 mb-8">
              通过先进的人工智能技术，我们为医药研发的各个阶段提供高效的工具支持，
              帮助您更快地筛选和优化候选药物，提高研发效率。
            </p>
            
            <!-- 工具指示器 -->
            <div class="flex flex-col space-y-3 mb-8">
              <button 
                v-for="(tool, index) in tools" 
                :key="index"
                @click="selectedTool = index"
                class="p-4 rounded-lg transition-all duration-300 flex items-center space-x-3 border text-left"
                :class="selectedTool === index ? 
                  'bg-blue-50 border-blue-300 text-blue-700' : 
                  'bg-white border-gray-200 text-gray-600 hover:bg-blue-50/50 hover:border-blue-200'"
              >
                <div class="w-8 h-8 rounded-full shrink-0 flex items-center justify-center"
                     :class="selectedTool === index ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'">
                  <i :class="tool.icon"></i>
                </div>
                <span>{{ tool.name }}</span>
              </button>
            </div>
            
            <button class="relative inline-flex h-12 overflow-hidden rounded-md bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
              了解更多工具
            </button>
          </div>
          
          <!-- 右侧工具详情区域 -->
          <div class="relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div class="absolute inset-0 -z-10 opacity-30 blur-xl" 
                 style="background: radial-gradient(circle at center, rgba(37, 99, 235, 0.1), transparent 70%);"></div>
            
            <div v-if="selectedTool !== null" class="card-fade-enter-active">
              <div class="flex items-center gap-4 mb-6">
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <i :class="tools[selectedTool].icon"></i>
                </div>
                <h3 class="text-2xl font-medium text-blue-700">{{ tools[selectedTool].name }}</h3>
              </div>
              
              <p class="text-gray-700 mb-8">{{ tools[selectedTool].description }}</p>
              
              <ul class="text-md text-gray-500 space-y-6 mb-8">
                <li v-for="(feature, fIndex) in toolFeatures[selectedTool]" :key="fIndex" class="flex items-start gap-3">
                  <div class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5"></div>
                  <span>{{ feature }}</span>
                </li>
              </ul>
              
              <div class="mt-6 flex items-center justify-between">
                <button class="inline-flex items-center text-sm font-medium text-blue-600">
                  立即体验 <i class="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
            
            <div v-else class="flex items-center justify-center h-64">
              <p class="text-gray-500">请从左侧选择一个工具以查看详情</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 应用场景 - 白色背景 -->
      <section class="py-16 px-4 md:px-6 bg-white border-y border-blue-100">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12 text-blue-700">
            应用场景
          </h2>
          
          <div class="grid gap-8 md:grid-cols-3">
            <div v-for="(useCase, index) in useCases" :key="index"
                 class="group relative overflow-hidden rounded-lg border border-blue-100 bg-white hover:shadow-md transition-all">
              <div class="aspect-[16/9] w-full overflow-hidden bg-blue-100 flex items-center justify-center">
                <i :class="useCase.icon" class="text-5xl text-blue-500 group-hover:text-blue-600 transition-all"></i>
              </div>
              <div class="p-6">
                <h3 class="mb-2 text-xl font-medium text-gray-900">{{ useCase.title }}</h3>
                <p class="text-sm text-gray-600">{{ useCase.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA - 蓝色背景 -->
      <section class="p-6 bg-white">
        <div class="bg-blue-600 text-white py-24 px-4 rounded-lg">

          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-bold mb-4">
              体验智能医药研发
            </h2>
            <p class="mb-8 text-blue-100 max-w-xl mx-auto">
              连接专业知识与AI技术，加速药物研发全流程
            </p>
            <button class="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white/20">
              开始使用 SciGPT
            </button>
          </div>
        </div>
      </section>
    </div>
  </PageFrame>
</template>

<script setup>
import { ref } from 'vue';
import PageFrame from '@/components/Layout/page_frame.vue'

// 核心功能数据
const features = ref([
  {
    icon: 'fas fa-newspaper',
    title: '实时资讯问答',
    description: '获取最新医药研发资讯，实时解答行业动态相关问题'
  },
  {
    icon: 'fas fa-book-medical',
    title: '知识库与文献增强',
    description: '基于专业医药知识库和学术文献，提供深度解析和见解'
  },
  {
    icon: 'fas fa-project-diagram',
    title: '知识图谱问答增强',
    description: '通过知识图谱技术，呈现药物分子、靶点及疾病间的复杂关系'
  },
  {
    icon: 'fas fa-file-medical-alt',
    title: '一键生成药物立项报告',
    description: '智能整合相关信息，快速生成专业、全面的药物立项报告'
  },
  {
    icon: 'fas fa-calculator',
    title: '专业计算工具调用',
    description: '无缝对接药物研发计算工具，进行药物分子性质预测等复杂计算'
  },
  {
    icon: 'fas fa-search',
    title: '专利分子检索',
    description: '高效检索相关专利分子结构，助力新药研发专利布局'
  }
]);

// 统计数据
const stats = ref([
  { value: '500K+', label: '医学文献' },
  { value: '10K+', label: '分子结构' },
  { value: '99.8%', label: '精确率' },
  { value: '3.5x', label: '效率提升' }
]);

// 工具集数据
const tools = ref([
  {
    name: '分子搜索',
    icon: 'fas fa-atom',
    description: '通过结构式或关键词快速检索相关分子结构与属性。支持相似性搜索、子结构搜索和精确匹配，快速定位候选分子，加速药物研发进程。'
  },
  {
    name: '文献分析',
    icon: 'fas fa-microscope',
    description: '智能分析医学文献，提取关键信息和研究发现。自动总结文献要点，提供引用关系图谱，快速掌握研究前沿动态。'
  },
  {
    name: '靶点预测',
    icon: 'fas fa-bullseye',
    description: '基于AI算法预测药物靶点和相互作用机制。结合多组学数据和深度学习模型，提供可靠的靶点预测和作用机制分析。'
  },
  {
    name: '药物设计',
    icon: 'fas fa-tablets',
    description: '辅助设计新型药物分子，优化药物结构和特性。通过AI生成药物候选分子，并预测其药效、生物利用度等关键参数。'
  },
  {
    name: '毒性预测',
    icon: 'fas fa-skull-crossbones',
    description: '预测药物分子可能的毒副作用和安全风险。整合多种体外和体内毒性数据，提前识别安全隐患，降低开发风险。'
  },
  {
    name: '立项报告',
    icon: 'fas fa-file-medical',
    description: '自动生成完整的药物立项报告和分析文档。涵盖市场分析、竞争格局、开发策略等关键内容，为决策提供全面支持。'
  }
]);

// 应用场景
const useCases = ref([
  {
    title: '药物发现',
    description: '从海量文献中发现新靶点，设计新型药物分子，加速药物发现过程',
    icon: 'fas fa-flask'
  },
  {
    title: '临床试验',
    description: '辅助临床试验设计，智能分析试验数据，预测试验结果和风险',
    icon: 'fas fa-procedures'
  },
  {
    title: '市场分析',
    description: '深入分析药物市场格局，评估竞争态势，制定精准市场策略',
    icon: 'fas fa-chart-line'
  }
]);

// 工具特性详情数据
const toolFeatures = ref([
  // 分子搜索特性
  [
    '结构相似度搜索 - 查找与目标分子结构相似的化合物',
    '子结构匹配 - 检索包含特定官能团的分子结构',
    '基于属性筛选 - 按照物理化学性质范围进行精确筛选'
  ],
  // 文献分析特性
  [
    '智能文献总结 - 自动提取研究要点和关键发现',
    '引用网络分析 - 构建文献引用关系图谱，发现研究热点',
    '跨语言检索 - 支持多语言文献的智能翻译和分析'
  ],
  // 靶点预测特性
  [
    '靶点亲和力预测 - 预测药物与靶点的结合能力',
    '药物重定位 - 挖掘已有药物的新靶点和适应症',
    '靶点可成药性评估 - 评估靶点的药物开发价值'
  ],
  // 药物设计特性
  [
    '生成式AI分子设计 - 基于目标属性自动设计分子结构',
    '分子优化 - 针对活性、选择性和药代动力学特性进行多参数优化',
    '结构活性关系分析 - 深入解析分子结构与生物活性的关系'
  ],
  // 毒性预测特性
  [
    'ADMET预测 - 预测药物的吸收、分布、代谢、排泄和毒性特性',
    '器官毒性分析 - 评估药物对心脏、肝脏等重要器官的潜在损害',
    '毒性机制解析 - 分析药物产生毒性效应的分子机制'
  ],
  // 立项报告特性
  [
    '市场分析报告 - 自动生成竞争格局和市场前景分析',
    '开发路径规划 - 智能制定药物研发策略和时间线',
    '风险评估 - 全面分析技术和市场风险，提供应对方案'
  ]
]);

const selectedTool = ref(0);
</script>

<route lang="yaml">
  meta:
    layout: blank
</route>