<template>
  <PageFrame backgroundColor="light" headerBackgroundColor="light">
    <div class="bg-gray-50">
      <div class="container mx-auto px-8 pt-24 pb-6 max-w-6xl">
        <!-- Loading state -->
        <div v-if="!paperData" class="flex justify-center items-center py-20">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
        
        <!-- Paper content -->
        <div v-else class="space-y-6">
          <!-- Markdown content -->
          <div class="prose prose-blue max-w-none" v-html="renderedContent"></div>
          
          <!-- Related Papers Section -->
          <div class="mt-16 pt-8 border-t border-gray-200">
            <h2 class="text-2xl font-semibold mb-6">近期论文</h2>
            <div class="grid md:grid-cols-3 gap-6">
              <Card v-for="paper in relatedPapers" :key="paper.id" 
                    class="overflow-hidden hover:shadow-md transition-shadow bg-white">
                <div class="h-40 bg-gray-100 flex items-center justify-center">
                  <div class="text-gray-600">论文图片</div>
                </div>
                <CardHeader>
                  <div class="text-sm text-gray-600 mb-1">{{ formatDate(paper.date) }} | {{ paper.journal }}</div>
                  <CardTitle class="text-lg font-bold hover:text-primary transition-colors">
                    {{ paper.title }}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p class="text-sm text-gray-700 mb-2">作者: {{ paper.authors }}</p>
                  <p class="text-gray-800 text-sm line-clamp-3">{{ paper.abstract }}</p>
                  <button class="mt-3 text-sm text-primary font-medium hover:underline" 
                          @click="gotoPaperDetail(paper.id)">阅读详情</button>
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

const paperData = ref(null)

// 获取论文详情
const getPaperDetail = async () => {
  // const res = await getPaperDetail(id)
  // paperData.value = res.data
  paperData.value = {
    id: 1,
    title: '基于深度学习的自然语言处理新方法',
    date: '2023-11-15',
    authors: '张三, 李四, 王五',
    journal: 'Journal of AI Research',
    doi: '10.1234/jair.2023.001',
    markdown: '# 基于深度学习的自然语言处理新方法\n\n**作者**: 张三, 李四, 王五  \n**期刊**: Journal of AI Research  \n**发布日期**: 2023-11-15  \n**DOI**: 10.1234/jair.2023.001\n\n## 摘要\n\n本文提出了一种基于深度学习的自然语言处理新方法，该方法在多项基准测试中表现优异。\n\n![研究方法图示](/images/nlp-method.jpg)\n\n## 1. 引言\n\n随着深度学习技术的发展，自然语言处理领域取得了长足进步。然而，现有方法在处理复杂语境和多语言环境时仍面临诸多挑战。本研究旨在解决这些问题，提出了一种新型的深度学习架构。\n\n## 2. 研究方法\n\n我们设计了一种多层次的注意力机制，能够更好地捕捉文本中的长距离依赖关系。该方法主要包括以下几个模块：\n\n1. **上下文编码器**：使用改进的Transformer结构编码文本信息\n2. **多头自注意力层**：处理不同级别的语义关系\n3. **跨语言适配器**：支持多语言处理能力\n\n## 3. 实验结果\n\n我们在GLUE、XNLI等多个基准数据集上进行了测试，结果表明本文提出的方法较现有技术有显著提升：\n\n| 方法 | GLUE分数 | XNLI分数 |\n| --- | --- | --- |\n| BERT-base | 78.5 | 72.3 |\n| RoBERTa | 84.7 | 79.1 |\n| 本文方法 | **86.2** | **81.5** |\n\n## 4. 结论\n\n本研究提出的方法不仅在性能上超过了现有方法，而且在计算效率和多语言处理能力上也有明显优势。未来我们将进一步探索该方法在更多应用场景中的潜力。\n\n## 参考文献\n\n1. Brown, T. et al. (2020). Language Models are Few-Shot Learners.\n2. Devlin, J. et al. (2019). BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding.\n3. Liu, Y. et al. (2019). RoBERTa: A Robustly Optimized BERT Pretraining Approach.'
  }
}

getPaperDetail()

const renderedContent = computed(() => {
  if (!paperData.value?.markdown) return ''
  return marked.render(paperData.value.markdown)
})

// Mock data for related papers
const relatedPapers = ref([
  {
    id: 2,
    type: 'paper',
    title: '大规模语言模型中的知识表示研究',
    authors: '王五, 赵六',
    date: '2023-10-18',
    journal: 'Computational Linguistics',
    abstract: '本文研究了大规模语言模型中知识的表示方式，探讨了模型参数与外部知识库结合的新方法。'
  },
  {
    id: 3,
    type: 'paper',
    title: '跨语言迁移学习在低资源语种中的应用',
    authors: '李四, 钱七, 孙八',
    date: '2023-09-22',
    journal: 'ACL Transactions',
    abstract: '针对低资源语种的自然语言处理问题，本文提出了一种新型的跨语言迁移学习方法，显著提升了目标语种的性能。'
  },
  {
    id: 4,
    type: 'paper',
    title: '多模态预训练模型在医疗诊断中的应用',
    authors: '张三, 周九',
    date: '2023-08-05',
    journal: 'Medical AI Journal',
    abstract: '本研究将多模态预训练模型应用于医疗诊断领域，结合文本、图像和临床数据，构建了一个准确率高达95%的诊断辅助系统。'
  }
])

// Navigate to paper detail
const gotoPaperDetail = (id) => {
  router.push(`/paper/content?id=${id}`)
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

.prose h3 {
  @apply text-xl font-semibold mt-5 mb-2;
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

.prose table {
  @apply w-full border-collapse my-4;
}

.prose th, .prose td {
  @apply border border-gray-300 p-2;
}

.prose th {
  @apply bg-gray-100;
}

.prose blockquote {
  @apply pl-4 border-l-4 border-gray-300 text-gray-700 italic;
}
</style>

<route lang="yaml">
  meta:
    layout: blank
</route>
