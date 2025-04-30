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
          <h1 class="text-4xl md:text-5xl font-bold mb-3 text-primary bg-clip-text">课题组成员</h1>
          <div class="w-24 h-1 bg-gradient-to-r from-primary/60 to-primary mx-auto mb-4 rounded-full"></div>
        </div>
        
        <!-- Navigation with faculty names -->
        <div class="mb-10 sticky top-2 z-10 hidden md:block">
          <div class="bg-white/90 backdrop-blur-md shadow-md rounded-xl py-3 px-4 border border-gray-100">
            <div class="flex flex-wrap justify-center gap-2">
              <!-- Faculty member navigation items -->
              <Button 
                v-for="(member, index) in faculty" 
                :key="`nav-faculty-${index}`"
                variant="ghost" 
                size="sm"
                :class="{'bg-primary/10 text-primary font-medium': activeSection === `faculty-${index}`}"
                @click="scrollToSection(`faculty-${index}`)"
              >
                {{ member.name_cn }}{{ (member.name_cn === '侯廷军'|| member.name_cn === '李丹') ? '教授' : '研究员' }}
              </Button>
              
              <!-- Divider between faculty and other categories -->
              <span class="hidden sm:block h-6 w-px bg-gray-300 mx-1"></span>
              
              <!-- Other categories -->
              <Button 
                v-for="section in otherSections" 
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

        <!-- Individual Faculty Sections -->
        <div class="space-y-12 mb-16">
          <section 
            v-for="(member, index) in faculty" 
            :key="`faculty-${index}`"
            :id="`faculty-${index}`" 
            class="scroll-mt-20"
          >
            <FacultyCard :member="member" />
          </section>
        </div>

        <!-- Postdoc Section -->
        <section id="postdoc" class="mb-16 scroll-mt-20">
          <h2 class="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200 text-center">博士后</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <MemberCard 
              v-for="(member, index) in postdoc" 
              :key="`postdoc-${index}`" 
              :member="member" 
              type="postdoc"
            />
          </div>
        </section>

        <!-- Graduate Students Section -->
        <section id="graduate" class="mb-16 scroll-mt-20">
          <h2 class="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200 text-center">研究生</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <MemberCard 
              v-for="(member, index) in graduate" 
              :key="`graduate-${index}`" 
              :member="member" 
              type="graduate"
            />
          </div>
        </section>

        <!-- Undergraduates Section -->
        <section id="undergraduate" class="mb-16 scroll-mt-20">
          <h2 class="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200 text-center">本科生</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <MemberCard 
              v-for="(member, index) in undergraduate" 
              :key="`undergrad-${index}`" 
              :member="member" 
              type="undergraduate"
            />
          </div>
        </section>

        <!-- Alumni Section -->
        <section id="alumni" class="mb-16 scroll-mt-20">
          <h2 class="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200 text-center">校友</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <MemberCard 
              v-for="(member, index) in alumni" 
              :key="`alumni-${index}`" 
              :member="member" 
              type="alumni"
            />
          </div>
        </section>
      </div>
    </div>
  </PageFrame>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import PageFrame from '@/components/Layout/page_frame.vue'
import { Button } from '@/components/ui/button'
import { faculty, postdoc, graduate, undergraduate, alumni } from './components/data.js'
import FacultyCard from './components/FacultyCard.vue'
import MemberCard from './components/MemberCard.vue'

// Define other sections (excluding faculty)
const otherSections = [
  { id: 'postdoc', title: '博士后' },
  { id: 'graduate', title: '研究生' },
  { id: 'undergraduate', title: '本科生' },
  { id: 'alumni', title: '校友' }
]

// Create a combined array of all sections for scroll handling
const allSections = computed(() => {
  const facultySections = faculty.map((_, index) => ({
    id: `faculty-${index}`,
    title: faculty[index].name_cn
  }))
  
  return [...facultySections, ...otherSections]
})

// Track active section for highlighting in navigation
const activeSection = ref(`faculty-0`)

// Scroll to section with smooth behavior
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Update active section based on scroll position
const handleScroll = () => {
  const sectionElements = allSections.value.map(section => ({
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
/* Any additional scoped styles if needed */
</style>

<route lang="yaml">
  meta:
    layout: blank
</route>