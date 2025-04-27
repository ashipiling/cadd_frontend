<template>
  <footer :class="[
    backgroundColor === 'dark' ? 'bg-gray-950 border-gray-800' : 'bg-gray-100 border-gray-300',
    'border-t py-16'
  ]">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1 md:grid-cols-9 gap-2">
        <div class="col-span-2"> 
          <div class="flex items-center gap-2 mb-6">
            <img v-if="backgroundColor === 'dark'" src="@/assets/imgs/logowhite.png" alt="AI药物集成" class="w-40 hover:opacity-90 transition-opacity" />
            <img v-else src="@/assets/imgs/logoblack.png" alt="AI药物集成" class="w-40 hover:opacity-90 transition-opacity" />
          </div>
          <ul class="space-y-2 text-sm" :class="backgroundColor === 'dark' ? 'text-gray-400' : 'text-gray-600'">
            <li>用人工智能重塑新药研发</li>
            <li>做中国最好的创新药智能研发平台</li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-medium mb-4" :class="backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'">产品方案</h4>
          <ul class="space-y-2 text-sm" :class="backgroundColor === 'dark' ? 'text-gray-400' : 'text-gray-600'">
            <li><a href="#" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">DrugFlow</a></li>
            <li><a href="#" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">SciGPT</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-medium mb-4" :class="backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'">计算服务</h4>
          <ul class="space-y-2 text-sm" :class="backgroundColor === 'dark' ? 'text-gray-400' : 'text-gray-600'">
            <li><a href="#" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">苗头化合物发现</a></li>
            <li><a href="#" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">先导化合物优化</a></li>
            <li><a href="#" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">计算设计与服务</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-medium mb-4" :class="backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'">新闻中心</h4>
          <ul class="space-y-2 text-sm" :class="backgroundColor === 'dark' ? 'text-gray-400' : 'text-gray-600'">
            <li><a href="#" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">公司动态</a></li>
            <li><a href="#" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">学术成果</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-medium mb-4" :class="backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'">关于我们</h4>
          <ul class="space-y-2 text-sm" :class="backgroundColor === 'dark' ? 'text-gray-400' : 'text-gray-600'">
            <li><a href="/aboutus" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">公司简介</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-medium mb-4" :class="backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'">加入我们</h4>
          <ul class="space-y-2 text-sm" :class="backgroundColor === 'dark' ? 'text-gray-400' : 'text-gray-600'">
            <li><a href="/joinus#company" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">公司氛围</a></li>
            <li><a href="/joinus#benefits" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">公司福利</a></li>
            <li><a href="/joinus#jobs" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">招聘岗位</a></li>
          </ul>
        </div>
        
        <div class="col-span-2">
          <h4 class="font-medium mb-4" :class="backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'">联系我们</h4>
          <ul class="space-y-2 text-sm" :class="backgroundColor === 'dark' ? 'text-gray-400' : 'text-gray-600'">
            <li class="flex items-start gap-2">
              <span>业务合作：bd@carbonsilicon.ai</span>
            </li>
            <li class="flex items-start gap-2">
              <span>简历投递：dream@carbonsilicon.ai</span>
            </li>
            <li class="flex items-start gap-2">
              <span>投资合作：invest@carbonsilicon.ai</span>
            </li>
            <li class="flex items-start gap-2">
              <span>联系电话：0571-86066628</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div :class="[
        backgroundColor === 'dark' ? 'border-gray-800 text-gray-500' : 'border-gray-300 text-gray-600',
        'border-t mt-12 pt-8 text-center text-sm'
      ]">
        <div class="flex justify-center space-x-4 mb-4">
          <a href="#" class="hover:text-blue-400">隐私政策</a>
          <a href="#" class="hover:text-blue-400">法律声明</a>
          <a href="#" class="hover:text-blue-400">营业执照</a>
          <a href="#" class="hover:text-blue-400">浙ICP备2021033527号-1</a>
        </div>
        CarbonSilicon AI Technology Co., Ltd. Copyright 2025 All Rights Reserved
      </div>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  backgroundColor: {
    type: String,
    default: 'dark',
    validator: (value) => ['dark', 'light'].includes(value)
  }
});
</script>
