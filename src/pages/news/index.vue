<template>
  <PageFrame backgroundColor="light" headerBackgroundColor="light">
    <!-- 新闻中心标题区域 -->
    <div class="bg-white">
      <div class="bg-gray-50">
        <div class="pt-24 pb-6 max-w-6xl xl:max-w-7xl mx-auto">
          <div class="container px-8">
            <div class="w-16 h-2 bg-blue-500 mb-4"></div>
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800">公司动态</h1>
            <p class="mt-6 text-lg text-gray-600 max-w-2xl">
              创新科技企业，十余年专注行业前沿，致力通过技术改变生活，创造更美好的世界。
            </p>
          </div>
        </div>
      </div>
      <!-- 页面内容区域 -->
      <div class="container mx-auto py-8 px-8 max-w-6xl xl:max-w-7xl">
        <!-- 顶部重要新闻 -->
        <div v-if="specialNews" class="mb-12">
          <Card class="overflow-hidden hover:shadow-lg transition-shadow bg-white">
            <div class="grid md:grid-cols-3 gap-6">
              <div class="md:col-span-2 h-96 md:h-[32rem] bg-gray-100 flex items-center justify-center">
                <div class="text-gray-600">新闻图片</div>
              </div>
              <div class="p-6">
                <CardHeader class="px-0 pt-0">
                  <div class="text-sm text-gray-600 mb-2">{{ formatDate(specialNews.date) }}</div>
                  <CardTitle class="text-2xl font-bold hover:text-primary transition-colors">
                    {{ specialNews.title }}
                  </CardTitle>
                </CardHeader>
                <CardContent class="px-0 pt-4 pb-0">
                  <p class="text-gray-800 leading-relaxed">{{ specialNews.summary }}</p>
                  <button class="mt-4 text-primary font-medium hover:underline" @click="gotoNewsDetail(specialNews.id)">阅读更多</button>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
        
        <!-- 新闻列表 -->
        <div class="max-w-6xl xl:max-w-7xl mx-auto">
          <h2 class="text-2xl font-semibold mb-6">最新动态</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card v-for="news in newsData.items" :key="news.id" 
                  class="overflow-hidden hover:shadow-md transition-shadow bg-white">
              <div class="h-48 bg-gray-100 flex items-center justify-center">
                <div class="text-gray-600">新闻图片</div>
              </div>
              <CardHeader>
                <div class="text-sm text-gray-600 mb-1">{{ formatDate(news.date) }}</div>
                <CardTitle class="text-lg font-bold hover:text-primary transition-colors">
                  {{ news.title }}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-800 text-sm line-clamp-3">{{ news.summary }}</p>
                <button class="mt-3 text-sm text-primary font-medium hover:underline" @click="gotoNewsDetail(news.id)">阅读全文</button>
              </CardContent>
            </Card>
          </div>
          
          <!-- 分页控件 -->
          <div class="mt-12 flex justify-center space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              :disabled="newsData.page <= 1" 
              @click="changePage(newsData.page - 1)"
            >
              <ChevronLeft class="h-4 w-4 mr-1" />
              上一页
            </Button>
            
            <Button 
              v-if="newsData.page > 2" 
              variant="outline" 
              size="sm"
              @click="changePage(1)"
            >
              1
            </Button>
            
            <div v-if="newsData.page > 3" class="px-2 flex items-center">...</div>
            
            <Button 
              v-if="newsData.page > 1" 
              variant="outline" 
              size="sm"
              @click="changePage(newsData.page - 1)"
            >
              {{ newsData.page - 1 }}
            </Button>
            
            <Button 
              variant="default" 
              size="sm"
            >
              {{ newsData.page }}
            </Button>
            
            <Button 
              v-if="newsData.page < totalPages" 
              variant="outline" 
              size="sm"
              @click="changePage(newsData.page + 1)"
            >
              {{ newsData.page + 1 }}
            </Button>
            
            <div v-if="newsData.page < totalPages - 2" class="px-2 flex items-center">...</div>
            
            <Button 
              v-if="newsData.page < totalPages - 1" 
              variant="outline" 
              size="sm"
              @click="changePage(totalPages)"
            >
              {{ totalPages }}
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              :disabled="newsData.page >= totalPages" 
              @click="changePage(newsData.page + 1)"
            >
              下一页
              <ChevronRight class="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
    
  </PageFrame>
</template>

<script setup>
import { ref, computed } from 'vue'
import { 
  Card, CardHeader, CardTitle, CardDescription, CardContent 
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { Separator } from '@/components/ui/separator'
import PageFrame from '@/components/Layout/page_frame.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const gotoNewsDetail = (id) => {
  router.push(`/news/content?id=${id}`)
}

// 特别新闻
const specialNews = ref({
  id: 1,
  type: 'news',
  title: '公司完成新一轮融资',
  date: '2023-11-15',
  summary: '我们很高兴地宣布，公司已完成1亿元的B轮融资，由知名风投领投。此次融资将用于扩大研发团队和加速产品迭代。'
})
// Mock数据 - 新闻
const newsData = ref({
  total: 12,
  page: 1,
  pageSize: 9,
  items: [
    {
      id: 1,
      type: 'news',
      title: '公司完成新一轮融资',
      date: '2023-11-15',
      summary: '我们很高兴地宣布，公司已完成1亿元的B轮融资，由知名风投领投。此次融资将用于扩大研发团队和加速产品迭代。'
    },
    {
      id: 2,
      type: 'news',
      title: '年度技术大会圆满结束',
      date: '2023-10-28',
      summary: '为期三天的年度技术大会在上海成功举办，来自全球的技术专家分享了前沿科技发展趋势。'
    },
    {
      id: 3,
      type: 'news',
      title: '公司与顶尖大学达成研究合作',
      date: '2023-09-17',
      summary: '我们与清华大学计算机系建立了战略合作伙伴关系，共同推进人工智能领域的研究与应用。'
    },
    {
      id: 4,
      type: 'news',
      title: '新产品发布会即将举行',
      date: '2023-08-05',
      summary: '我们将于下月举办新一代AI芯片的发布会，该芯片性能较上一代提升80%，同时能耗降低40%。'
    },
    {
      id: 5,
      type: 'news',
      title: '公司完成新一轮融资',
      date: '2023-11-15',
      summary: '我们很高兴地宣布，公司已完成1亿元的B轮融资，由知名风投领投。此次融资将用于扩大研发团队和加速产品迭代。'
    },
    {
      id: 6,
      type: 'news',
      title: '公司完成新一轮融资',
      date: '2023-11-15',
      summary: '我们很高兴地宣布，公司已完成1亿元的B轮融资，由知名风投领投。此次融资将用于扩大研发团队和加速产品迭代。'
    },
    {
      id: 7,
      type: 'news',
      title: '公司完成新一轮融资',
      date: '2023-11-15',
      summary: '我们很高兴地宣布，公司已完成1亿元的B轮融资，由知名风投领投。此次融资将用于扩大研发团队和加速产品迭代。'
    },
    {
      id: 8,
      type: 'news',
      title: '公司完成新一轮融资',
      date: '2023-11-15',
      summary: '我们很高兴地宣布，公司已完成1亿元的B轮融资，由知名风投领投。此次融资将用于扩大研发团队和加速产品迭代。'
    },
    {
      id: 9,
      type: 'news',
      title: '公司完成新一轮融资',
      date: '2023-11-15',
      summary: '我们很高兴地宣布，公司已完成1亿元的B轮融资，由知名风投领投。此次融资将用于扩大研发团队和加速产品迭代。'
    }
  ]}
)

// Mock数据 - 论文
// const papersData = ref([
//   {
//     id: 1,
//     type: 'paper',
//     title: '大规模语言模型中的涌现能力研究',
//     date: '2023-11-20',
//     summary: '本文探讨了当模型参数超过特定阈值后，大型语言模型中出现的涌现能力现象及其理论解释。'
//   },
//   {
//     id: 2,
//     type: 'paper',
//     title: '基于transformer架构的多模态融合方法',
//     date: '2023-10-12',
//     summary: '提出了一种新型多模态融合架构，能够有效整合视觉、文本和音频信息，在多个基准测试中取得了领先结果。'
//   },
//   {
//     id: 3,
//     type: 'paper',
//     title: '分布式训练中的通信开销优化技术',
//     date: '2023-09-30',
//     summary: '本文提出了一种新的梯度压缩算法，在保持模型精度的同时，将通信开销减少了65%。'
//   },
//   {
//     id: 4,
//     type: 'paper',
//     title: '基于注意力机制的时序数据异常检测',
//     date: '2023-08-22',
//     summary: '本文提出了一种自适应注意力机制，能够有效识别工业时序数据中的异常模式，准确率高达96.7%。'
//   }
// ])

// 计算总页数
const totalPages = computed(() => {
  return Math.ceil(newsData.value.total / newsData.value.pageSize)
})

// 处理页面变更
const changePage = (page) => {
  if (page < 1 || page > totalPages.value) return
  
  // 更新当前页码
  newsData.value.page = page
  
  // 这里应该有API调用来获取新页面的数据
  // fetchNewsData(page)
  
  // 滚动到页面顶部
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// 格式化日期
const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<route lang="yaml">
  meta:
    layout: blank
</route>