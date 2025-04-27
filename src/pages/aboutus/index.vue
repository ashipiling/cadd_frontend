<template>
  <PageFrame backgroundColor="light" headerBackgroundColor="light" class="bg-white">
    <!-- 顶部区域 - 更加大胆的设计 -->
    <div class="bg-gray-50 ">
      <div class="pt-24 pb-6 max-w-6xl xl:max-w-7xl mx-auto">
        <div class="container mx-auto px-8">
          <div class="mb-8">
            <div class="w-16 h-2 bg-primary mb-6"></div>
            <h1 class="text-5xl font-bold">关于我们</h1>
            <p class="mt-6 text-lg text-gray-600 max-w-2xl">
              创新科技企业，十余年专注行业前沿，致力通过技术改变生活，创造更美好的世界。
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 公司介绍 -->
    <section id="company-intro" class="py-20 md:py-32 relative overflow-hidden max-w-6xl xl:max-w-7xl mx-auto">
      <div class="absolute inset-0 bg-[url('/images/dot-pattern.svg')] opacity-5"></div>
      <div class="container mx-auto px-8 relative">
        <div class="flex flex-col md:flex-row gap-16 items-center">
          <div class="md:w-1/2 order-2 md:order-1">
            <div class="max-w-xl space-y-6">
              <div class="inline-flex items-center gap-2 text-blue-600 font-medium mb-2">
                <div class="w-8 h-0.5 bg-blue-600"></div>
                <span>我们的故事</span>
              </div>
              <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                十年专注<br />科技创新
              </h2>
              <div class="space-y-6 text-gray-600 text-lg">
                <p>我们是一家致力于创新科技的企业，成立于2010年。十余年来，我们不断探索行业前沿，为客户提供最优质的产品和服务。我们的使命是通过技术改变生活，让世界变得更美好。</p>
                <p>公司拥有一支高素质的研发团队，专注于前沿技术的研究与应用。我们的产品覆盖了多个领域，赢得了广泛的市场认可和用户好评。</p>
              </div>
              
              <div class="grid grid-cols-2 gap-8 pt-8">
                <div class="space-y-2">
                  <h3 class="text-blue-600 text-5xl font-bold">120+</h3>
                  <p class="text-gray-600">专业团队成员</p>
                </div>
                <div class="space-y-2">
                  <h3 class="text-blue-600 text-5xl font-bold">50+</h3>
                  <p class="text-gray-600">成功交付项目</p>
                </div>
              </div>
            </div>
          </div>
          <div class="md:w-1/2 order-1 md:order-2">
            <div class="flex items-center justify-center">
              <img src="@/assets/imgs/building-blocks.svg" class="w-full h-auto" alt="工作场景" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 投资者关系 -->
    <section class="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden max-w-6xl xl:max-w-7xl mx-auto">
      <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-blue-50 to-indigo-50 -z-10 transform -skew-y-6"></div>
      
      <div class="container mx-auto px-8 relative">
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div class="inline-flex items-center gap-2 text-blue-600 font-medium">
            <div class="w-8 h-0.5 bg-blue-600"></div>
            <span>合作伙伴</span>
            <div class="w-8 h-0.5 bg-blue-600"></div>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900">投资与战略合作</h2>
          <p class="text-lg text-gray-600">强大的资金和技术支持，共同推动技术创新</p>
        </div>
        
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <div v-for="(investor, index) in investors" :key="index" 
               class="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200">
            <div class="h-32 flex items-center justify-center">
              <div class="w-full h-20 flex items-center justify-center" :class="investor.bgClass">
                <span class="text-xl font-bold" :class="investor.textClass">{{ investor.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 公司荣誉 -->
    <section class="py-20 md:py-32 relative overflow-hidden max-w-6xl xl:max-w-7xl mx-auto">
      <div class="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5"></div>
      <div class="container mx-auto px-8 relative">
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div class="inline-flex items-center gap-2 text-blue-600 font-medium">
            <div class="w-8 h-0.5 bg-blue-600"></div>
            <span>荣誉与成就</span>
            <div class="w-8 h-0.5 bg-blue-600"></div>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900">我们的里程碑</h2>
          <p class="text-lg text-gray-600">多年来，我们获得了业内的广泛认可</p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(honor, index) in honors" :key="index" 
               class="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-50 before:to-indigo-50 before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-300 before:rounded-2xl overflow-hidden">
            <div class="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300 relative">
              <img :src="honor.icon" :alt="honor.title" class="w-8 h-8" />
            </div>
            <div class="relative">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ honor.title }}</h3>
              <p class="text-gray-600 mb-4">{{ honor.description }}</p>
              <p class="text-blue-600 font-medium inline-flex items-center gap-1">
                <span class="text-xs px-3 py-1 bg-blue-100 rounded-full">{{ honor.year }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 办公地点与联系我们 -->
    <section class="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden max-w-6xl xl:max-w-7xl mx-auto">
      <div class="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-50 to-indigo-50 -z-10 transform skew-y-6"></div>
      <div class="container mx-auto px-8 relative">
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-6">
          <div class="inline-flex items-center gap-2 text-blue-600 font-medium">
            <div class="w-8 h-0.5 bg-blue-600"></div>
            <span>沟通渠道</span>
            <div class="w-8 h-0.5 bg-blue-600"></div>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900">联系我们</h2>
          
          <!-- 一行四列联系信息 -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div class="flex flex-col items-center p-4 rounded-lg bg-white">
              <h4 class="text-gray-800 font-medium mb-2">业务合作</h4>
              <p class="text-gray-600 text-sm">bd@carbonsilicon.ai</p>
            </div>
            
            <div class="flex flex-col items-center p-4 rounded-lg bg-white">
              <h4 class="text-gray-800 font-medium mb-2">简历投递</h4>
              <p class="text-gray-600 text-sm">dream@carbonsilicon.ai</p>
            </div>
            
            <div class="flex flex-col items-center p-4 rounded-lg bg-white">
              <h4 class="text-gray-800 font-medium mb-2">投资合作</h4>
              <p class="text-gray-600 text-sm">invest@carbonsilicon.ai</p>
            </div>
            
            <div class="flex flex-col items-center p-4 rounded-lg bg-white">
              <h4 class="text-gray-800 font-medium mb-2">联系电话</h4>
              <p class="text-gray-600 text-sm">0571-86066628</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white rounded-3xl shadow-xl max-w-5xl mx-auto overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <!-- 左侧：办公地点 -->
            <div class="relative">
              <div class="h-full min-h-[500px] overflow-hidden relative">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
                <img src="@/assets/imgs/zjforest.jpg" alt="杭州研发中心" class="w-full h-full object-cover" />
                <div class="absolute left-8 bottom-8 z-20 text-white">
                  <h3 class="text-3xl font-bold mb-3">杭州研发中心</h3>
                  <div class="w-16 h-1 bg-yellow-400 rounded mb-4"></div>
                  <div class="space-y-4 max-w-sm">
                    <p class="text-blue-100">创新科技的孵化基地，汇聚顶尖人才</p>
                    <div class="flex items-start gap-3 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>浙江省杭州市西湖区云栖小镇创新大厦</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- 右侧：联系表单 -->
            <div class="p-10 bg-white">
              <div class="space-y-6">               
                <!-- 联系表单 -->
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">发送消息</h3>
                  <p class="text-gray-600 mb-6">我们期待聆听您的想法和需求</p>
                
                  <form class="space-y-5">
                    <div>
                      <label for="name" class="block text-sm font-medium text-gray-700 mb-1">您的姓名</label>
                      <input type="text" id="name" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition" placeholder="请输入您的姓名" />
                    </div>
                    <div>
                      <label for="email" class="block text-sm font-medium text-gray-700 mb-1">电子邮箱</label>
                      <input type="email" id="email" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition" placeholder="请输入您的电子邮箱" />
                    </div>
                    <div>
                      <label for="message" class="block text-sm font-medium text-gray-700 mb-1">留言内容</label>
                      <textarea id="message" rows="4" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition" placeholder="请输入您的留言内容"></textarea>
                    </div>
                    <button type="submit" class="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                      发送消息
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageFrame>
</template>

<script setup>
import PageFrame from '@/components/Layout/page_frame.vue'

// 团队成员数据
const teamMembers = [
  {
    name: '张总经理',
    title: '创始人兼CEO',
    bio: '拥有20年行业经验，曾任职于多家知名企业，带领团队创造了多个行业标杆产品。',
    avatar: '/images/team/ceo.jpg'
  },
  {
    name: '李技术',
    title: '技术总监',
    bio: '计算机科学博士，专注于人工智能和大数据分析，拥有多项技术专利。',
    avatar: '/images/team/cto.jpg'
  },
  {
    name: '王产品',
    title: '产品总监',
    bio: '深耕产品设计10年，善于洞察用户需求，打造了多款深受用户喜爱的产品。',
    avatar: '/images/team/product.jpg'
  },
  {
    name: '赵市场',
    title: '市场总监',
    bio: '拥有丰富的市场营销经验，擅长品牌策划和市场推广，多次成功策划大型营销活动。',
    avatar: '/images/team/marketing.jpg'
  }
]

// 公司荣誉数据
const honors = [
  {
    title: '年度最佳创新企业',
    description: '被权威机构评为行业内最具创新力的企业',
    year: '2023',
    icon: '/images/honors/innovation.svg'
  },
  {
    title: '科技突破奖',
    description: '因在技术领域的突出贡献获得国家级奖项',
    year: '2022',
    icon: '/images/honors/tech.svg'
  },
  {
    title: '用户体验设计金奖',
    description: '产品用户体验设计获得国际设计大赛金奖',
    year: '2021',
    icon: '/images/honors/design.svg'
  },
  {
    title: '高新技术企业认证',
    description: '连续5年获得国家高新技术企业认证',
    year: '2020',
    icon: '/images/honors/hightech.svg'
  },
  {
    title: '最佳雇主奖',
    description: '被评为年度最受员工欢迎的雇主企业',
    year: '2019',
    icon: '/images/honors/employer.svg'
  },
  {
    title: '企业社会责任奖',
    description: '因在社会公益领域的贡献获得表彰',
    year: '2018',
    icon: '/images/honors/csr.svg'
  }
]

// 办公地点数据
const offices = [
  {
    city: '北京算法中心',
    address: '北京市海淀区中关村科技园区8号楼',
    image: '@/assets/imgs/bjshenzhou.jpg'
  },
  {
    city: '杭州研发中心',
    address: '浙江省杭州市西湖区云栖小镇创新大厦',
    image: '@/assets/imgs/zjforest.jpg'
  }
]

// 投资方数据
const investors = [
  {
    name: '占位符',
    bgClass: 'bg-blue-100',
    textClass: 'text-blue-600'
  },
  {
    name: '占位符',
    bgClass: 'bg-green-100',
    textClass: 'text-green-600'
  },
  {
    name: '占位符',
    bgClass: 'bg-purple-100',
    textClass: 'text-purple-600'
  },
  {
    name: '占位符',
    bgClass: 'bg-yellow-100',
    textClass: 'text-yellow-600'
  },
  {
    name: '占位符',
    bgClass: 'bg-red-100',
    textClass: 'text-red-600'
  },
  {
    name: '占位符',
    bgClass: 'bg-indigo-100',
    textClass: 'text-indigo-600'
  },
  {
    name: '占位符',
    bgClass: 'bg-pink-100',
    textClass: 'text-pink-600'
  },
  {
    name: '占位符',
    bgClass: 'bg-teal-100',
    textClass: 'text-teal-600'
  }
]
</script>

<route lang="yaml">
  meta:
    layout: blank
</route>

