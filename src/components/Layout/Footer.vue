<template>
  <footer :class="[
    backgroundColor === 'dark' ? 'bg-gray-950 border-gray-800' : 'bg-gray-100 border-gray-300',
    'border-t py-16'
  ]">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1 md:grid-cols-9 gap-2">
        <div class="col-span-3"> 
          <div class="flex items-center gap-2 mb-6">
            <div class="w-10 h-10 relative flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-md">
              <span class="text-white font-bold text-lg">H</span>
            </div>
            <div class="flex flex-col">
              <span :class="backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'" class="text-xl font-bold leading-tight tracking-tight">Hou Lab</span>
              <span :class="backgroundColor === 'dark' ? 'text-blue-400/90' : 'text-blue-600/90'" class="text-xs font-medium">Drug Design and Computational Biology Group</span>
            </div>
          </div>
          <ul class="space-y-2 text-sm ml-12" :class="backgroundColor === 'dark' ? 'text-gray-400' : 'text-gray-600'">
            <li>致力于计算机辅助药物分子设计方法和应用研究</li>
            <li>欢迎加入我们</li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-medium mb-4" :class="backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'">人员组成</h4>
          <ul class="space-y-2 text-sm" :class="backgroundColor === 'dark' ? 'text-gray-400' : 'text-gray-600'">
            <li><a href="/people#faculty" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">教师</a></li>
            <li><a href="/people#postdoc" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">博士后</a></li>
            <li><a href="/people#graduate" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">研究生</a></li>
            <li><a href="/people#undergraduate" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">本科生</a></li>
            <li><a href="/people#alumni" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">前成员</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-medium mb-4" :class="backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'">论文专利</h4>
          <ul class="space-y-2 text-sm" :class="backgroundColor === 'dark' ? 'text-gray-400' : 'text-gray-600'">
            <li><a href="/publication#publication" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">论文著作</a></li>
            <li><a href="/publication#software" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">软件著作</a></li>
            <li><a href="/publication#patent" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">发明专利</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-medium mb-4" :class="backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'">程序开发</h4>
          <ul class="space-y-2 text-sm" :class="backgroundColor === 'dark' ? 'text-gray-400' : 'text-gray-600'">
            <li><a href="/software#database" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">数据库</a></li>
            <li><a href="/software#molecular" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">分子表征</a></li>
            <li><a href="/software#qsar" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">QSAR建模</a></li>
            <li><a href="/software#admet" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">成药性预测</a></li>
            <li><a href="/software#docking" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">蛋白-配体对接</a></li>
            <li><a href="/software#freeenergy" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">结合自由能预测</a></li>
            <li><a href="/software#ppdocking" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">蛋白-蛋白对接</a></li>
            <li><a href="/software#imgrec" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">分子图片识别</a></li>
            <li><a href="/software#tools" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">药物设计工具</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-medium mb-4" :class="backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'">友情链接</h4>
          <ul class="space-y-2 text-sm" :class="backgroundColor === 'dark' ? 'text-gray-400' : 'text-gray-600'">
            <li><a href="/links#cooperation_group" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">合作课题组</a></li>
            <li><a href="/links#important_journal" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">重要期刊</a></li>
          </ul>
        </div>
        
        <div class="col-span-2">
          <h4 class="font-medium mb-4" :class="backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'">联系我们</h4>
          <ul class="space-y-4 text-sm" :class="backgroundColor === 'dark' ? 'text-gray-400' : 'text-gray-600'">
            <li class="flex items-start">
              <span class="w-16 flex-shrink-0 font-medium flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                地址：
              </span>
              <span>浙江大学药学院</span>
            </li>
            <li class="flex items-start">
              <span class="w-16 flex-shrink-0 font-medium flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                电话：
              </span>
              <span>+86-571-88208412</span>
            </li>
            <li class="flex flex-col space-y-2">
              <span class="font-medium flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                邮箱：
              </span>
              <div class="ml-5 flex flex-col space-y-2 mt-1">
                <div class="flex items-center gap-2">
                  <span class="font-medium min-w-16">侯廷军：</span>
                  <span class="text-blue-400 hover:underline">tingjunhou@zju.edu.cn</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="font-medium min-w-16">李丹：</span>
                  <span class="text-blue-400 hover:underline">lidancps@zju.edu.cn</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="font-medium min-w-16">潘培辰：</span>
                  <span class="text-blue-400 hover:underline">panpeichen@zju.edu.cn</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div :class="[
        backgroundColor === 'dark' ? 'border-gray-800 text-gray-500' : 'border-gray-300 text-gray-600',
        'border-t mt-12 pt-8 text-center text-sm'
      ]">
        Copyright © 2012-{{ new Date().getFullYear() }} 侯廷军课题组版权所有
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'

const currentLanguage = ref('zh') // 默认中文

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === 'zh' ? 'en' : 'zh'
  // 这里可以添加语言切换的逻辑，例如触发事件或修改全局状态
}

defineProps({
  backgroundColor: {
    type: String,
    default: 'dark',
    validator: (value) => ['dark', 'light'].includes(value)
  }
});
</script>
