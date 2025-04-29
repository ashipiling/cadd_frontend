<template>
  <div class="container mx-auto px-8 relative z-10 bg-slate-100">
    <div class="text-center mb-16 pt-16 reveal-item">
      <h2 class="text-4xl font-bold mb-4">DrugFlowXXX</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        我们的平台整合了最先XXXXXXXXXXXXXXXXXXXXXXX XXX  XXX XX
      </p>
    </div>
    <!-- 大型视频展示区域 -->
    <div class="bg-gray-100 rounded-xl p-6 relative reveal-item">
      <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl opacity-50 blur-xl"></div>
      <div class="relative bg-white rounded-lg overflow-hidden">
        <div class="aspect-[16/9] w-full bg-gray-200 overflow-hidden relative">
          <!-- 视频或演示内容占位 -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-20 h-20 rounded-full bg-blue-500 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 text-white ml-1">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          </div>
        </div>
        <!-- 功能亮点 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
          <div class="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-400 transition-all duration-300 reveal-item animation-delay-100">
            <div class="flex items-start gap-4">
              <div class="p-2 rounded-md bg-blue-500/20 text-blue-400">
                <IconCheck class="w-5 h-5" />
              </div>
              <div>
                <h3 class="font-medium mb-2">分子性质XXX</h3>
                <p class="text-gray-600 text-sm">基于图神经网络的强大算法，精确预测分子的物理化学性质和生物活性</p>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-green-400 transition-all duration-300 reveal-item animation-delay-200">
            <div class="flex items-start gap-4">
              <div class="p-2 rounded-md bg-green-500/20 text-green-400">
                <IconCheck class="w-5 h-5" />
              </div>
              <div>
                <h3 class="font-medium mb-2">生成式分子XX
                </h3>
                <p class="text-gray-600 text-sm">利用生成式AI技术，基于目标属性自动设计全新分子结构，加速先导化合物发现</p>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-purple-400 transition-all duration-300 reveal-item animation-delay-300">
            <div class="flex items-start gap-4">
              <div class="p-2 rounded-md bg-purple-500/20 text-purple-400">
                <IconCheck class="w-5 h-5" />
              </div>
              <div>
                <h3 class="font-medium mb-2">XXXX化学计算</h3>
                <p class="text-gray-600 text-sm">使用先进的量子化学方法，高精度模拟分子电子结构和药物-靶点相互作用</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>