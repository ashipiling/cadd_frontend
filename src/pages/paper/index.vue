<template>
  <PageFrame backgroundColor="light" headerBackgroundColor="light">
    <!-- 学术成果标题区域 -->
    <div class="bg-white">
      <div class="bg-gray-50">
        <div class="pt-24 pb-6 max-w-6xl xl:max-w-7xl mx-auto">
          <div class="container px-8">
            <div class="w-16 h-2 bg-green-500 mb-4"></div>
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800">学术成果</h1>
            <p class="mt-6 text-lg text-gray-600 max-w-2xl">
              创新科技企业，十余年专注行业前沿，致力通过技术改变生活，创造更美好的世界。
            </p>
          </div>
        </div>
      </div>
      <!-- 页面内容区域 -->
      <div class="container mx-auto py-8 px-8 max-w-6xl xl:max-w-7xl">
        <!-- 顶部重要论文 -->
        <div v-if="featuredPaper" class="mb-12">
          <Card class="overflow-hidden hover:shadow-lg transition-shadow bg-white">
            <div class="grid md:grid-cols-3 gap-6">
              <div class="md:col-span-2 h-96 md:h-[32rem] bg-gray-100 flex items-center justify-center">
                <div class="text-gray-600">论文封面</div>
              </div>
              <div class="p-6">
                <CardHeader class="px-0 pt-0">
                  <div class="text-sm text-gray-600 mb-2">{{ formatDate(featuredPaper.date) }}</div>
                  <CardTitle class="text-2xl font-bold hover:text-primary transition-colors">
                    {{ featuredPaper.title }}
                  </CardTitle>
                </CardHeader>
                <CardContent class="px-0 pt-4 pb-0">
                  <p class="text-gray-800 leading-relaxed">{{ featuredPaper.summary }}</p>
                  <button class="mt-4 text-primary font-medium hover:underline" @click="gotoPaperDetail(featuredPaper.id)">查看详情</button>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
        
        <!-- 论文列表 -->
        <div>
          <h2 class="text-2xl font-semibold mb-6">最新论文</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card v-for="paper in papersData.items" :key="paper.id" 
                  class="overflow-hidden hover:shadow-md transition-shadow bg-white">
              <div class="h-48 bg-gray-100 flex items-center justify-center">
                <div class="text-gray-600">论文封面</div>
              </div>
              <CardHeader>
                <div class="text-sm text-gray-600 mb-1">{{ formatDate(paper.date) }}</div>
                <CardTitle class="text-lg font-bold hover:text-primary transition-colors">
                  {{ paper.title }}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-800 text-sm line-clamp-3">{{ paper.summary }}</p>
                <button class="mt-3 text-sm text-primary font-medium hover:underline" @click="gotoPaperDetail(paper.id)">阅读详情</button>
              </CardContent>
            </Card>
          </div>
          
          <!-- 分页控件 -->
          <div class="mt-12 flex justify-center space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              :disabled="papersData.page <= 1" 
              @click="changePage(papersData.page - 1)"
            >
              <ChevronLeft class="h-4 w-4 mr-1" />
              上一页
            </Button>
            
            <Button 
              v-if="papersData.page > 2" 
              variant="outline" 
              size="sm"
              @click="changePage(1)"
            >
              1
            </Button>
            
            <div v-if="papersData.page > 3" class="px-2 flex items-center">...</div>
            
            <Button 
              v-if="papersData.page > 1" 
              variant="outline" 
              size="sm"
              @click="changePage(papersData.page - 1)"
            >
              {{ papersData.page - 1 }}
            </Button>
            
            <Button 
              variant="default" 
              size="sm"
            >
              {{ papersData.page }}
            </Button>
            
            <Button 
              v-if="papersData.page < totalPages" 
              variant="outline" 
              size="sm"
              @click="changePage(papersData.page + 1)"
            >
              {{ papersData.page + 1 }}
            </Button>
            
            <div v-if="papersData.page < totalPages - 2" class="px-2 flex items-center">...</div>
            
            <Button 
              v-if="papersData.page < totalPages - 1" 
              variant="outline" 
              size="sm"
              @click="changePage(totalPages)"
            >
              {{ totalPages }}
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              :disabled="papersData.page >= totalPages" 
              @click="changePage(papersData.page + 1)"
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
  Card, CardHeader, CardTitle, CardContent 
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import PageFrame from '@/components/Layout/page_frame.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const gotoPaperDetail = (id) => {
  router.push(`/paper/content?id=${id}`)
}

// 特别论文
const featuredPaper = ref({
  id: 1,
  type: 'paper',
  title: '大规模语言模型中的涌现能力研究',
  date: '2023-11-20',
  summary: '本文探讨了当模型参数超过特定阈值后，大型语言模型中出现的涌现能力现象及其理论解释。该研究提出了一个新的理论框架，用于解释和预测这些涌现能力的出现。'
})

// Mock数据 - 论文
const papersData = ref({
  total: 12,
  page: 1,
  pageSize: 9,
  items: [
    {
      id: 1,
      type: 'paper',
      title: '大规模语言模型中的涌现能力研究',
      date: '2023-11-20',
      summary: '本文探讨了当模型参数超过特定阈值后，大型语言模型中出现的涌现能力现象及其理论解释。'
    },
    {
      id: 2,
      type: 'paper',
      title: '基于transformer架构的多模态融合方法',
      date: '2023-10-12',
      summary: '提出了一种新型多模态融合架构，能够有效整合视觉、文本和音频信息，在多个基准测试中取得了领先结果。'
    },
    {
      id: 3,
      type: 'paper',
      title: '分布式训练中的通信开销优化技术',
      date: '2023-09-30',
      summary: '本文提出了一种新的梯度压缩算法，在保持模型精度的同时，将通信开销减少了65%。'
    },
    {
      id: 4,
      type: 'paper',
      title: '基于注意力机制的时序数据异常检测',
      date: '2023-08-22',
      summary: '本文提出了一种自适应注意力机制，能够有效识别工业时序数据中的异常模式，准确率高达96.7%。'
    },
    {
      id: 5,
      type: 'paper',
      title: '面向大规模知识图谱的嵌入学习算法',
      date: '2023-07-15',
      summary: '提出了一种新的知识图谱嵌入学习方法，能够处理超过10亿实体的超大规模知识图谱，并保持高准确率。'
    },
    {
      id: 6,
      type: 'paper',
      title: '神经网络中的可解释性研究进展',
      date: '2023-06-08',
      summary: '本文综述了深度神经网络可解释性研究的最新进展，并提出了一个统一的评估框架。'
    },
    {
      id: 7,
      type: 'paper',
      title: '自监督学习在医学影像分析中的应用',
      date: '2023-05-22',
      summary: '探讨了利用自监督学习技术解决医学影像数据标注稀缺问题的方法，并在多个医学影像数据集上验证了其有效性。'
    },
    {
      id: 8,
      type: 'paper',
      title: '量子计算在机器学习中的应用前景',
      date: '2023-04-14',
      summary: '本文分析了量子计算在机器学习领域的潜在应用，并实验验证了量子支持向量机在特定问题上的优势。'
    },
    {
      id: 9,
      type: 'paper',
      title: '基于强化学习的自动驾驶决策系统',
      date: '2023-03-05',
      summary: '提出了一种基于深度强化学习的自动驾驶决策框架，能够在复杂交通场景中做出安全且高效的驾驶决策。'
    }
  ]
})

// 计算总页数
const totalPages = computed(() => {
  return Math.ceil(papersData.value.total / papersData.value.pageSize)
})

// 处理页面变更
const changePage = (page) => {
  if (page < 1 || page > totalPages.value) return
  
  // 更新当前页码
  papersData.value.page = page
  
  // 这里应该有API调用来获取新页面的数据
  // fetchPapersData(page)
  
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

<style scoped>

</style>

<route lang="yaml">
  meta:
    layout: blank
</route>
