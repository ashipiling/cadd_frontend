<template>
  <PageFrame backgroundColor="light" headerBackgroundColor="light" class="bg-white">
    <!-- Header section with title -->
    <div class="bg-gray-50 ">
      <div class="pt-24 pb-6 max-w-6xl xl:max-w-7xl mx-auto">
        <div class="container mx-auto px-8">
          <div class="mb-8">
            <div class="w-16 h-2 bg-primary mb-6"></div>
            <h1 class="text-5xl font-bold">加入我们</h1>
            <p class="mt-6 text-lg text-gray-600 max-w-2xl">
              携手共创未来，让我们一起构建更美好的世界
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Talent philosophy section -->
    <div class="max-w-6xl xl:max-w-7xl mx-auto">
    <div class="py-20 relative">
      <div class="absolute inset-0 opacity-5"></div>
      <div class="container mx-auto px-8 relative">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="flex flex-col justify-center">
            <div class="inline-block mb-4">
              <div class="w-fit px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">我们的XX</div>
            </div>
            <h2 class="text-3xl font-bold mb-8 text-gray-900">公司理念</h2>
            <p class="text-gray-700 leading-relaxed text-lg">
              我们希望聚拢一批志同道合的小伙伴，一起做一件让自己自豪很久的有价值的事情；一起建设一个充满快乐、帮助每个人成长的组织。
            </p>
            <p class="text-gray-700 leading-relaxed text-lg mt-4">
              我们倡导"求是、卓越、本份、分享"的价值观；崇尚简单直接的沟通、结果导向的评价、技术卓越的信仰、信任有担当的授权。
            </p>
          </div>
          <div class="flex items-center justify-center ">
            <img src="@/assets/imgs/group-chat.svg" alt="Team Illustration" class="max-w-full h-auto " />
          </div>
        </div>
      </div>
    </div>

    <!-- Company benefits section -->
    <div class="bg-white py-20">
      <div class="container mx-auto px-8">
        <div class="text-center mb-16">
          <div class="inline-block mb-4">
            <div class="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">我们的福利</div>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">公司福利</h2>
          <div class="w-16 h-1 bg-primary/30 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Benefit Card 1 -->
          <div class="bg-card rounded-xl px-8 py-12 shadow-sm border border-border hover:shadow-md">
            <div class="flex flex-col items-center mb-6">
              <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span class="text-primary text-3xl">🏆</span>
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-center">
              具有行业竞争力的薪酬福利
            </h3>
            <p class="text-muted-foreground text-base text-center">
              我们为大家提供具有行业竞争力的薪酬和丰富的福利，包括国家法定休假，正常缴纳的五险一金，还有额外的商业医疗保险，让大家没有后顾之忧。
            </p>
          </div>
          
          <!-- Benefit Card 2 -->
          <div class="bg-card rounded-xl px-8 py-12 shadow-sm border border-border hover:shadow-md">
            <div class="flex flex-col items-center mb-6">
              <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span class="text-primary text-3xl">📈</span>
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-center">
              超额期权回报
            </h3>
            <p class="text-muted-foreground text-base text-center">
              作为创业公司，对于特别优秀的同学，我们会提供超额的期权回报，让你分享硬科技赛道的早期红利，同时会在资源、晋升、奖金等层面进行特殊倾斜，让人才脱颖而出，绝不论资排辈。
            </p>
          </div>
          
          <!-- Benefit Card 3 -->
          <div class="bg-card rounded-xl px-8 py-12 shadow-sm border border-border hover:shadow-md">
            <div class="flex flex-col items-center mb-6">
              <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span class="text-primary text-3xl">🎓</span>
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-center">
              实习生友好
            </h3>
            <p class="text-muted-foreground text-base text-center">
              我们特别欢迎优秀的实习生同学，在这里，我们为优秀的同学提供非常具有竞争力的薪酬待遇，表现优秀者上不封顶，对于外地实习同学还会提供租房补贴。
            </p>
          </div>
          
          <!-- Benefit Card 4 -->
          <div class="bg-card rounded-xl px-8 py-12 shadow-sm border border-border hover:shadow-md">
            <div class="flex flex-col items-center mb-6">
              <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span class="text-primary text-3xl">🚀</span>
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-center">
              学习型组织
            </h3>
            <p class="text-muted-foreground text-base text-center">
              我们希望将公司建设成学习型组织，在这里，每周会举办跨学科技术分享，期待你与大家进行思想碰撞，我们会为优秀员工提供教育培训，你的成长就是公司的财富。
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Team Photo Wall section -->
    <div class="bg-gray-50 py-20">
      <div class="container mx-auto px-8">
        <div class="text-center mb-16">
          <div class="inline-block mb-4">
            <div class="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">团队风采</div>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">团建照片墙</h2>
          <div class="w-16 h-1 bg-primary/30 mx-auto mt-6 rounded-full"></div>
          <p class="mt-4 text-gray-600 max-w-2xl mx-auto">我们不仅一起工作，更一起创造美好回忆</p>
        </div>
        
        <!-- Horizontal scrollable photo gallery -->
        <div class="relative">
          <div ref="scrollContainer" class="overflow-x-auto pb-6 hide-scrollbar">
            <div class="flex gap-4 min-w-max">
              <div v-for="(photo, index) in teamPhotos" :key="index" 
                   class="flex-shrink-0 w-80 h-60 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105">
                <img :src="photo.src" :alt="photo.alt" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div class="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-r-lg shadow-md hidden md:block">
            <button @click="scrollLeft" class="text-gray-700 hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          </div>
          <div class="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-l-lg shadow-md hidden md:block">
            <button @click="scrollRight" class="text-gray-700 hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Job listings section -->
    <div class="py-20">
      <div class="container mx-auto px-8">
        <div class="text-center mb-16">
          <div class="inline-block mb-4">
            <div class="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">职业机会</div>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">岗位列表</h2>
          <div class="w-16 h-1 bg-primary/30 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <!-- Filters -->
        <div class="bg-gradient-to-br from-blue-600 to-indigo-900 rounded-xl p-8 border border-border shadow-sm">
          <div class="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full max-w-4xl mx-auto">
            <div class="relative flex-1 w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                v-model="searchTerm"
                placeholder="搜索职位关键词..."
                class="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
            
            <div class="flex gap-4">
              <Select v-model="selectedCity" class="w-32">
                <SelectTrigger>
                  <SelectValue placeholder="选择城市" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem v-for="city in cities" :key="city.value" :value="city.value">
                    {{ city.label }}
                  </SelectItem>
                </SelectContent>
              </Select>
              
              <Select v-model="selectedDepartment" class="w-32">
                <SelectTrigger>
                  <SelectValue placeholder="选择部门" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem v-for="dept in departments" :key="dept.value" :value="dept.value">
                    {{ dept.label }}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        
          <!-- Job listings -->
          <div class="space-y-6 mx-auto">
            <div 
              v-for="job in filteredJobs" 
              :key="job.id" 
              class="p-6 border border-border rounded-xl bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div class="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h3 class="text-xl font-semibold">{{ job.title }}</h3>
                  <div class="flex flex-wrap gap-2 mt-3">
                    <Badge variant="outline" class="rounded-full px-3 py-0.5 bg-primary/5 border-primary/20 text-primary">{{ job.department }}</Badge>
                    <Badge variant="outline" class="rounded-full px-3 py-0.5 bg-blue-50 border-blue-200 text-blue-600">{{ job.city }}</Badge>
                    <Badge variant="outline" class="rounded-full px-3 py-0.5 bg-green-50 border-green-200 text-green-600">{{ job.type }}</Badge>
                  </div>
                  <p class="mt-4 text-muted-foreground leading-relaxed">{{ job.description }}</p>
                </div>
                <Button class="rounded-full px-6 hover:shadow-md transition-all">申请职位</Button>
              </div>
            </div>
          </div>
        
          <!-- No results message -->
          <div v-if="filteredJobs.length === 0" class="text-center py-12 bg-white rounded-xl border border-border">
            <div class="text-6xl mb-4">🔍</div>
            <h3 class="text-xl font-medium mb-2">暂无匹配的职位</h3>
            <p class="text-muted-foreground">请尝试调整筛选条件</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </PageFrame>
</template>

<script setup>
import PageFrame from '@/components/Layout/page_frame.vue'
import { ref, computed } from 'vue'
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// Mock data
const cities = [
  { value: 'all', label: '全部城市' },
  { value: 'beijing', label: '北京' },
  { value: 'shanghai', label: '上海' },
  { value: 'shenzhen', label: '深圳' },
  { value: 'hangzhou', label: '杭州' },
]

const departments = [
  { value: 'all', label: '全部部门' },
  { value: 'engineering', label: '研发部' },
  { value: 'product', label: '产品部' },
  { value: 'design', label: '设计部' },
  { value: 'marketing', label: '市场部' },
  { value: 'operations', label: '运营部' },
]

const jobs = [
  {
    id: 1,
    title: '高级前端工程师',
    department: '研发部',
    city: '北京',
    type: '全职',
    description: '负责公司核心产品的前端开发，参与产品设计与优化，解决技术难题，推动技术创新。'
  },
  {
    id: 2,
    title: '产品经理',
    department: '产品部',
    city: '上海',
    type: '全职',
    description: '负责产品规划与设计，用户调研，与研发团队协作实现产品价值，推动产品持续迭代优化。'
  },
  {
    id: 3,
    title: 'UI/UX设计师',
    department: '设计部',
    city: '深圳',
    type: '全职',
    description: '负责产品视觉与交互设计，提升用户体验，构建设计规范，参与产品体验优化。'
  },
  {
    id: 4,
    title: '后端工程师',
    department: '研发部',
    city: '杭州',
    type: '全职',
    description: '负责服务端架构设计与开发，保障系统稳定性，解决性能问题，参与技术选型。'
  },
  {
    id: 5,
    title: '市场专员',
    department: '市场部',
    city: '北京',
    type: '实习',
    description: '协助市场活动策划与执行，内容创作，数据分析，提升品牌影响力。'
  },
]

const selectedCity = ref('all')
const selectedDepartment = ref('all')
const searchTerm = ref('')

const filteredJobs = computed(() => {
  return jobs.filter(job => {
    const cityMatch = selectedCity.value === 'all' || job.city === cities.find(c => c.value === selectedCity.value)?.label
    const deptMatch = selectedDepartment.value === 'all' || job.department === departments.find(d => d.value === selectedDepartment.value)?.label
    const searchMatch = searchTerm.value === '' || 
      job.title.toLowerCase().includes(searchTerm.value.toLowerCase()) || 
      job.description.toLowerCase().includes(searchTerm.value.toLowerCase())
    
    return cityMatch && deptMatch && searchMatch
  })
})

// Team photos data
const teamPhotos = [
  { 
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c', 
    alt: '团队协作讨论' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1540317580384-e5d43867caa6', 
    alt: '团建活动' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1', 
    alt: '公司聚餐' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786', 
    alt: '户外拓展' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4', 
    alt: '团队庆祝' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998', 
    alt: '工作坊活动' 
  },
]

// Reference to the scrollable container
const scrollContainer = ref(null)

// Scroll methods
const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -340, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 340, behavior: 'smooth' })
  }
}
</script>

<style scoped>
/* Additional styles if needed */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

<route lang="yaml">
  meta:
    layout: blank
</route>
