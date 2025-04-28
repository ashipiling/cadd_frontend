<template>
  <!-- 页面框架 -->
  <div class="min-h-screen" :class="{'bg-gray-950': headerBackgroundColor === 'dark', 'bg-white': headerBackgroundColor === 'light'}">
    <!-- 导航栏 -->
    <Header :backgroundColor="headerBackgroundColor" :enableScrollHiding="enableScrollHiding" />
    <!-- 内容区域 -->
    <div>
      <slot></slot>
    </div>
    <!-- 页脚 -->
    <Footer :backgroundColor="backgroundColor" />
  </div>
  
  <!-- 反馈窗口 -->

</template>

<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'

defineProps({
  headerBackgroundColor: {
    type: String,
    default: 'dark',
    validator: (value) => ['dark', 'light'].includes(value)
  },
  backgroundColor: {
    type: String,
    default: 'dark',
    validator: (value) => ['dark', 'light'].includes(value)
  },
  enableScrollHiding: {
    type: Boolean,
    default: false
  }
});

</script>
