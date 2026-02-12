<template>
  <footer :class="[
    backgroundColor === 'dark' ? 'bg-gray-950 border-gray-800' : 'bg-gray-100 border-gray-300',
    'border-t py-16'
  ]">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1 md:grid-cols-9 sm:grid-cols-2 gap-2">
        <div class="col-span-2 md:col-span-3 mb-6 pr-8"> 
          <div class="flex items-center gap-2 mb-6">
            <div class="w-10 h-10 relative flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-md">
              <span class="text-white font-bold text-lg">H</span>
            </div>
            <div class="flex flex-col">
              <span :class="backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'" class="text-xl font-bold leading-tight tracking-tight">{{ t('headerFooter.labName') }}</span>
              <span :class="backgroundColor === 'dark' ? 'text-blue-400/90' : 'text-blue-600/90'" class="text-xs font-medium">{{ t('headerFooter.labSubtitle') }}</span>
            </div>
          </div>
          <ul class="space-y-2 text-sm ml-12" :class="backgroundColor === 'dark' ? 'text-gray-400' : 'text-gray-600'">
            <li>{{ t('index.welcome_intro') }}</li>
          </ul>
        </div>
        
        <div class="mb-6">
          <h4 class="font-medium mb-4" :class="backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'">{{ t('headerFooter.people') }}</h4>
          <ul class="space-y-2 text-sm" :class="backgroundColor === 'dark' ? 'text-gray-400' : 'text-gray-600'">
            <li><a href="/people#faculty" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">{{ t('headerFooter.faculty') }}</a></li>
            <li><a href="/people#postdoc" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">{{ t('headerFooter.postdoc') }}</a></li>
            <li><a href="/people#graduate" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">{{ t('headerFooter.graduate') }}</a></li>
            <li><a href="/people#undergraduate" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">{{ t('headerFooter.undergraduate') }}</a></li>
            <li><a href="/people#alumni" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">{{ t('headerFooter.alumni') }}</a></li>
          </ul>
        </div>

        <div class="mb-6">
          <h4 class="font-medium mb-4" :class="backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'">{{ t('headerFooter.publications') }}</h4>
          <ul class="space-y-2 text-sm" :class="backgroundColor === 'dark' ? 'text-gray-400' : 'text-gray-600'">
            <li><a href="/publication#books" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">{{ t('publications.books') }}</a></li>
            <li><a href="/publication#publication" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">{{ t('headerFooter.papers') }}</a></li>
            <li><a href="/publication#software" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">{{ t('publications.softwareCopyright') }}</a></li>
            <li><a href="/publication#patent" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">{{ t('headerFooter.patents') }}</a></li>
          </ul>
        </div>
        
        <div class="mb-6">
          <h4 class="font-medium mb-4" :class="backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'">{{ t('headerFooter.software') }}</h4>
          <ul class="space-y-2 text-sm" :class="backgroundColor === 'dark' ? 'text-gray-400' : 'text-gray-600'">
            <li><a href="/drugflow" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">{{ t('headerFooter.drugflow') }}</a></li>
            <li><a href="/odesign" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">ODesign</a></li>
            <li><a href="/software#databases" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">{{ t('software.databases') }}</a></li>
            <li><a href="/software#molecularFeaturization" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">{{ t('software.molecularFeaturization') }}</a></li>
            <li><a href="/software#QSARModeling" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">{{ t('software.QSARModeling') }}</a></li>
            <li><a href="/software#ADMETPrediction" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">{{ t('software.ADMETPrediction') }}</a></li>
            <li><a href="/software#bindingFreeEnergyPrediction" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">{{ t('software.bindingFreeEnergyPrediction') }}</a></li>
            <li><a href="/software#proteinLigandDocking" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">{{ t('software.proteinLigandDocking') }}</a></li>
            <li><a href="/software#proteinProteinDocking" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">{{ t('software.proteinProteinDocking') }}</a></li>
            <li><a href="/software#proteinPeptideDocking" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">{{ t('software.proteinPeptideDocking') }}</a></li>
            <li><a href="/software#proteinStructurePrediction" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">{{ t('software.proteinStructurePrediction') }}</a></li>
            <li><a href="/software#molecularImageRecognition" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">{{ t('software.molecularImageRecognition') }}</a></li>
            <li><a href="/software#reverseSynthesis" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">{{ t('software.reverseSynthesis') }}</a></li>
            <li><a href="/software#drugDesignTools" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">{{ t('software.drugDesignTools') }}</a></li>
          </ul>
        </div>
        
        <div class="col-span-2 md:col-span-3">
          <h4 class="font-medium mb-4" :class="backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'">{{ t('headerFooter.contactUs') }}</h4>
          <ul class="space-y-4 text-sm" :class="backgroundColor === 'dark' ? 'text-gray-400' : 'text-gray-600'">
            <li class="flex items-start">
              <span class="w-16 flex-shrink-0 font-medium flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                {{ t('headerFooter.address') }}
              </span>
              <span>{{ t('headerFooter.addressContent') }}</span>
            </li>
            <li class="flex items-start">
              <span class="w-16 flex-shrink-0 font-medium flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                {{ t('headerFooter.phone') }}
              </span>
              <span>{{ t('headerFooter.phoneContent') }}</span>
            </li>
            <li class="flex flex-col space-y-2">
              <span class="font-medium flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                {{ t('headerFooter.email') }}
              </span>
              <div class="ml-5 flex flex-col space-y-2 mt-1">
                <div class="flex items-center gap-2">
                  <span class="font-medium min-w-16">侯廷军: </span>
                  <span class="text-blue-400 hover:underline">tingjunhou@zju.edu.cn</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="font-medium min-w-16">李丹: </span>
                  <span class="text-blue-400 hover:underline">lidancps@zju.edu.cn</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="font-medium min-w-16">谢昌谕: </span>
                  <span class="text-blue-400 hover:underline">kimhsieh@zju.edu.cn</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="font-medium min-w-16">潘培辰: </span>
                  <span class="text-blue-400 hover:underline">panpeichen@zju.edu.cn</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="font-medium min-w-16">沈超: </span>
                  <span class="text-blue-400 hover:underline">shenchao513@zju.edu.cn</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div :class="[
        backgroundColor === 'dark' ? 'border-gray-800 text-gray-500' : 'border-gray-300 text-gray-600',
        'border-t mt-12 pt-8 text-center text-sm space-y-2'
      ]">
        <div>
          Copyright © 2012-{{ new Date().getFullYear() }} {{ t('headerFooter.copyright') }}
        </div>
        <div class="flex items-center justify-center gap-4 text-xs">
          <span class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            {{ t('headerFooter.totalVisits') }}：<span id="busuanzi_value_site_pv" class="font-mono">0</span>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { Button } from '@/components/ui/button'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps({
  backgroundColor: {
    type: String,
    default: 'dark',
    validator: (value) => ['dark', 'light'].includes(value)
  }
});

// 设置初始访问量基数（可以根据实际情况调整）
const initialVisitCount = {
  pv: 415548,  // 页面访问量初始值
}

// 加载不蒜子统计脚本
onMounted(() => {
  // 检查是否已经加载过脚本
  if (!document.getElementById('busuanzi-script')) {
    const script = document.createElement('script')
    script.id = 'busuanzi-script'
    script.async = true
    script.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
    
    // 脚本加载完成后处理数据
    script.onload = () => {
      // 等待不蒜子更新DOM
      setTimeout(() => {
        const pvElement = document.getElementById('busuanzi_value_site_pv')
        const uvElement = document.getElementById('busuanzi_value_site_uv')
        
        if (pvElement && uvElement) {
          // 获取不蒜子的原始数据并加上初始值
          const originalPv = parseInt(pvElement.textContent) || 0
          const originalUv = parseInt(uvElement.textContent) || 0
          
          // 更新显示值
          pvElement.textContent = (originalPv + initialVisitCount.pv).toLocaleString()
          uvElement.textContent = (originalUv + initialVisitCount.uv).toLocaleString()
        }
      }, 1000)
    }
    
    document.head.appendChild(script)
  }
})
</script>
