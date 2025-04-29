<template>
  <PageFrame headerBackgroundColor="light" backgroundColor="light" enableScrollHiding="true">
    <div class="container py-8 mx-auto relative">
      <!-- Decorative background elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-24 md:-right-24 -right-8 w-60 md:w-96 h-60 md:h-96 bg-primary/15 rounded-full blur-3xl"></div>
        <div class="absolute top-20 -left-10 md:-left-20 w-48 md:w-80 h-48 md:h-80 bg-amber-300/20 rounded-full blur-2xl"></div>
      </div>
      
      <div class="max-w-6xl mx-auto relative">
        <!-- Hero Section -->
        <div class="mt-16 mb-12 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-3 text-primary bg-clip-text">友情链接</h1>
          <div class="w-24 h-1 bg-gradient-to-r from-primary/60 to-primary mx-auto mb-4 rounded-full"></div>
        </div>
        
        <!-- Navigation Section -->
        <div class="mb-10 sticky top-2 z-10 hidden md:block">
          <div class="bg-white/90 backdrop-blur-md shadow-md rounded-xl py-3 px-4 border border-gray-100">
            <div class="flex flex-wrap justify-center gap-2">
              <Button 
                v-for="section in sections" 
                :key="section.id"
                variant="ghost" 
                size="sm"
                :class="{'bg-primary/10 text-primary font-medium': activeSection === section.id}"
                @click="scrollToSection(section.id)"
              >
                {{ section.title }}
              </Button>
            </div>
          </div>
        </div>

        <!-- Collaborating Research Groups Section -->
        <section id="collaborators" class="mb-16 scroll-mt-20">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="(collaborator, index) in collaborators" :key="index" 
                class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 class="text-lg font-medium text-primary">{{ collaborator.name }}</h3>
              <p class="text-gray-600">{{ collaborator.affiliation }}</p>
            </div>
          </div>
        </section>

        <!-- Important Journals Section -->
        <section id="journals" class="mb-16 scroll-mt-20">
          <h2 class="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200 text-center">重要期刊</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="(journal, index) in journals" :key="index" 
                class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <p class="font-medium">{{ journal.name }}</p>
              <p class="text-sm text-gray-500">{{ journal.publisher }}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </PageFrame>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import PageFrame from '@/components/Layout/page_frame.vue'
import { Button } from '@/components/ui/button'
import { collaborators } from './components/data'
import { journals } from './components/data'

// Define sections
const sections = [
  { id: 'collaborators', title: '合作课题组' },
  { id: 'journals', title: '重要期刊' }
]

// Track active section
const activeSection = ref('collaborators')

// Scroll to section with smooth behavior
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Update active section based on scroll position
const handleScroll = () => {
  const sectionElements = sections.map(section => ({
    id: section.id,
    element: document.getElementById(section.id)
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
/* Additional styles if needed */
</style>

<route lang="yaml">
  meta:
    layout: blank
</route>