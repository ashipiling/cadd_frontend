<template>
  <PageFrame backgroundColor="light" headerBackgroundColor="light">
    <div class="bg-gray-50">
      <div class="container mx-auto px-8 pt-24 pb-6 max-w-6xl">
        <!-- Loading state -->
        <div v-if="!newsData" class="flex justify-center items-center py-20">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
        
        <!-- News content -->
        <div v-else class="space-y-6">
          <!-- Markdown content -->
          <div class="prose prose-blue max-w-none" v-html="renderedContent"></div>
          
          <!-- Recent News Section -->
          <div class="mt-16 pt-8 border-t border-gray-200">
            <h2 class="text-2xl font-semibold mb-6">近期新闻</h2>
            <div class="grid md:grid-cols-3 gap-6">
              <Card v-for="news in recentNews" :key="news.id" 
                    class="overflow-hidden hover:shadow-md transition-shadow bg-white">
                <div class="h-40 bg-gray-100 flex items-center justify-center">
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
                  <button class="mt-3 text-sm text-primary font-medium hover:underline" 
                          @click="gotoNewsDetail(news.id)">阅读全文</button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageFrame>
</template>

<script setup lang="ts">
import PageFrame from '@/components/Layout/page_frame.vue'
import { useRoute, useRouter } from 'vue-router'
import markdownit from 'markdown-it'
import { computed, ref } from 'vue'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const marked = markdownit({
  html: true,
  linkify: true,
  typographer: true,
  langPrefix: 'language-',
  highlight: function (str: string, lang: string) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }
    return ''; // use external default escaping
  }
})

const router = useRouter()
const route = useRoute()
const id = route.query.id

const newsData = ref(null)

// 获取新闻详情
const getNewsDetail = async () => {
  // const res = await getNewsDetail(id)
  // newsData.value = res.data
  newsData.value = {
    id: 1,
    title: '公司完成新一轮融资',
    date: '2023-11-15',
    content: '我们很高兴地宣布，公司已完成1亿元的B轮融资，由知名风投领投。此次融资将用于扩大研发团队和加速产品迭代。',
    author: '张三',
    markdown: '# 公司完成新一轮融资\n\n发布时间：2023-11-15\n\n![融资庆祝现场](/images/financing.jpg)\n\n我们很高兴地宣布，公司已完成1亿元的B轮融资，由知名风投领投。此次融资将用于扩大研发团队和加速产品迭代。\n\n## 融资详情\n\n本轮融资由远景资本领投，多家知名机构跟投。这是公司成立以来的第三轮融资，也是规模最大的一次。投资方对我们的技术创新能力和市场前景给予了高度认可。\n\n## 未来规划\n\n资金将主要用于以下几个方面：\n\n1. **扩大研发团队**：计划在未来6个月内招募100名顶尖AI工程师\n2. **加速产品迭代**：推出全新的AI助手3.0版本，提升用户体验\n3. **拓展国际市场**：建立海外分支机构，重点开拓北美和东南亚市场\n\n我们相信，在各位投资人的支持下，公司将迎来更加辉煌的发展阶段！'
  }
}

getNewsDetail()

const renderedContent = computed(() => {
  if (!newsData.value?.markdown) return ''
  return marked.render(newsData.value.markdown)
})

// Mock data for recent news
const recentNews = ref([
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
  }
])

// Navigate to news detail
const gotoNewsDetail = (id) => {
  router.push(`/news/content?id=${id}`)
}

// Format date
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
.prose img {
  @apply rounded-lg shadow-md;
}

.prose h1 {
  @apply text-3xl font-bold mt-8 mb-4;
}

.prose h2 {
  @apply text-2xl font-bold mt-6 mb-3;
}

.prose p {
  @apply my-4 text-gray-800;
}

.prose ol {
  @apply list-decimal pl-5 my-4;
}

.prose ul {
  @apply list-disc pl-5 my-4;
}

.prose strong {
  @apply font-bold text-gray-900;
}
</style>

<route lang="yaml">
  meta:
    layout: blank
</route>