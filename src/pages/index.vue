<template>
  <PageFrame>
    <!-- 英雄区域 - 使用自定义轮播图组件 -->
    <Carousel />

    <!-- 页脚 -->
  </PageFrame>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Button } from '@/components/ui/button'
import { Sparkle } from 'lucide-vue-next'
import PageFrame from '@/components/Layout/page_frame.vue'
import { 
  Card, 
  CardHeader,
  CardTitle, 
  CardDescription, 
  CardContent 
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import ParticleBackground from '@/components/ParticleBackground.vue'
import Carousel from '@/pages/home/components/carousel.vue'

// 化学计算服务卡片相关
const currentServiceCard = ref(0)
const cardContainer = ref<HTMLElement | null>(null)

// 监听滚动，更新当前选中的卡片
onMounted(() => {
  // 设置滚动显示动画
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed')
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })
  
  document.querySelectorAll('.reveal-item').forEach(item => {
    observer.observe(item)
  })

  // 添加滚动监听，更新当前选中的服务卡片
  window.addEventListener('scroll', updateActiveCard)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveCard)
})

// 更新激活的服务卡片
const updateActiveCard = () => {
  if (!cardContainer.value) return
  
  // 获取所有卡片元素
  const cards = [0, 1, 2].map(i => document.getElementById(`service-card-${i}`))
  
  // 找到当前在视口中心的卡片
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i]
    if (!card) continue
    
    const rect = card.getBoundingClientRect()
    const windowHeight = window.innerHeight
    
    // 如果卡片在视口中心附近，设为激活
    if (rect.top <= windowHeight/2 && rect.bottom >= windowHeight/2) {
      currentServiceCard.value = i
      break
    }
  }
}

// 点击导航按钮时滚动到对应卡片
const scrollToCard = (index: number) => {
  const card = document.getElementById(`service-card-${index}`)
  if (!card) return
  
  currentServiceCard.value = index
  
  // 滚动到卡片位置（平滑滚动）
  card.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* 合作伙伴滚动样式 */
.partner-scroller {
  display: flex;
  white-space: nowrap;
}

.partner-group {
  display: flex;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.scroller-left .partner-group {
  animation-name: scroll-left;
}

.scroller-right .partner-group {
  animation-name: scroll-right;
}

.partner-item {
  flex: 0 0 auto;
  background: white;
  padding: 1rem;
  margin: 0 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  min-width: 160px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.partner-item:hover {
  border-color: #93c5fd;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes scroll-right {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

/* 滚动显示动画 */
.reveal-item {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal-item.is-revealed {
  opacity: 1;
  transform: translateY(0);
}

.animation-delay-100 {
  transition-delay: 0.1s;
}

.animation-delay-200 {
  transition-delay: 0.2s;
}

.animation-delay-300 {
  transition-delay: 0.3s;
}

.animation-delay-400 {
  transition-delay: 0.4s;
}

/* 卡片淡入淡出过渡 */
.card-fade-enter-active,
.card-fade-leave-active {
  transition: all 0.4s ease;
}

.card-fade-enter-from,
.card-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>

<route lang="yaml">
  meta:
    layout: blank
</route>
