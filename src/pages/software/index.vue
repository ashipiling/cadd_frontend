<template>
  <PageFrame headerBackgroundColor="light" backgroundColor="light" enableScrollHiding="true">
    <div class="container py-8 mx-auto relative">
      <!-- Decorative background elements -->
      <div class="absolute inset-0 overflow-hidden md:overflow-visible pointer-events-none">
        <div class="absolute -top-24 md:-right-24 -right-8 w-60 md:w-96 h-60 md:h-96 bg-primary/15 rounded-full blur-3xl"></div>
        <div class="absolute top-20 -left-10 md:-left-20 w-48 md:w-80 h-48 md:h-80 bg-amber-300/20 rounded-full blur-2xl"></div>
      </div>
      
      <div class="max-w-6xl mx-auto relative">
        <!-- Enhanced Hero Section -->
        <div class="mt-16 mb-12 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-3 text-primary bg-clip-text">研究软件</h1>
          <div class="w-24 h-1 bg-gradient-to-r from-primary/60 to-primary mx-auto mb-4 rounded-full"></div>
        </div>
        
        <!-- Navigation with category names -->
        <div class="mb-10 sticky top-2 z-10 hidden md:block">
          <div class="bg-white/90 backdrop-blur-md shadow-md rounded-xl py-3 px-4 border border-gray-100">
            <div class="flex flex-wrap justify-center gap-2">
              <!-- Category navigation items -->
              <Button 
                v-for="category in categories" 
                :key="category.id"
                variant="ghost" 
                size="sm"
                :class="{'bg-primary/10 text-primary font-medium': activeSection === category.id}"
                @click="scrollToSection(category.id)"
              >
                {{ category.title }}
              </Button>
            </div>
          </div>
        </div>

        <!-- Software Category Sections -->
        <div class="space-y-16">
          <section 
            v-for="category in categories" 
            :key="category.id"
            :id="category.id" 
            class="scroll-mt-20"
          >
            <h2 class="text-2xl font-semibold mb-3 mt-8 pb-2 border-b border-gray-200">{{ category.title }}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SoftwareCard 
                v-for="(software, index) in softwareData[category.id]" 
                :key="`${category.id}-${index}`" 
                :software="software" 
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  </PageFrame>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import PageFrame from '@/components/Layout/page_frame.vue'
import { Button } from '@/components/ui/button'
import { softwareData, categories } from './components/data.js'
import SoftwareCard from './components/SoftwareCard.vue'

// Track active section for highlighting in navigation
const activeSection = ref(categories[0].id)

// Scroll to section with smooth behavior
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Update active section based on scroll position
const handleScroll = () => {
  const sectionElements = categories.map(category => ({
    id: category.id,
    element: document.getElementById(category.id)
  }))

  for (const section of sectionElements) {
    if (!section.element) continue
    
    const rect = section.element.getBoundingClientRect()
    // Consider a section in view if its top is within 200px of viewport top
    if (rect.top <= 200 && rect.bottom > 0) {
      activeSection.value = section.id
      break
    }
  }
}

// Set up and clean up scroll event listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Any additional scoped styles if needed */
</style>

<route lang="yaml">
  meta:
    layout: blank
</route>
