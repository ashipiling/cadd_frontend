<template>
  <PageFrame headerBackgroundColor="light" backgroundColor="light" enableScrollHiding="true">
    <div class="py-8 mx-auto relative">
      <!-- Decorative background elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-24 md:-right-24 -right-8 w-60 md:w-96 h-60 md:h-96 bg-primary/15 rounded-full blur-3xl"></div>
        <div class="absolute top-20 -left-10 md:-left-20 w-48 md:w-80 h-48 md:h-80 bg-amber-300/20 rounded-full blur-2xl"></div>
      </div>
      
      <div class="max-w-6xl mx-auto relative">
        <!-- Enhanced Hero Section -->
        <div class="mt-16 mb-12 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-3 text-primary bg-clip-text">{{ t('people.title') }}</h1>
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
                {{ getMemberName(member) }}{{ getMemberTitle(member) }}
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
                {{ t(`people.${section.id}`) }}
              </Button>
            </div>
          </div>
        </div>

        <!-- Individual Faculty Sections -->
        <div id="faculty" class="space-y-16 mb-20 scroll-mt-20">
          <section 
            v-for="(member, index) in faculty" 
            :key="`faculty-${index}`"
            :id="`faculty-${index}`" 
            class="scroll-mt-20"
          >
            <FacultyCard :member="member" :language="locale" />
          </section>
        </div>

        <!-- Postdoc Section -->
        <section id="postdoc" class="mb-20 scroll-mt-20">
          <h2 class="text-2xl font-semibold mb-8 pb-2 border-b border-gray-200 text-center">{{ t('people.postdoc') }}</h2>
          <div class="auto-fit-grid">
            <MemberCard 
              v-for="(member, index) in postdoc" 
              :key="`postdoc-${index}`" 
              :member="member" 
              type="postdoc"
              :language="locale"
              :align="getCardAlign(index)"
            />
          </div>
        </section>

        <!-- Graduate Students Section -->
        <section id="graduate" class="mb-20 scroll-mt-20">
          <h2 class="text-2xl font-semibold mb-8 pb-2 border-b border-gray-200 text-center">{{ t('people.graduate') }}</h2>
          <div class="auto-fit-grid">
            <MemberCard 
              v-for="(member, index) in graduate" 
              :key="`graduate-${index}`" 
              :member="member" 
              type="graduate"
              :language="locale"
              :align="getCardAlign(index)"
            />
          </div>
        </section>

        <!-- Undergraduates Section -->
        <section id="undergraduate" class="mb-20 scroll-mt-20">
          <h2 class="text-2xl font-semibold mb-8 pb-2 border-b border-gray-200 text-center">{{ t('people.undergraduate') }}</h2>
          <div class="auto-fit-grid">
            <MemberCard 
              v-for="(member, index) in undergraduate" 
              :key="`undergrad-${index}`" 
              :member="member" 
              type="undergraduate"
              :language="locale"
              :align="getCardAlign(index)"
            />
          </div>
        </section>

        <!-- Alumni Section -->
        <section id="alumni" class="mb-20 scroll-mt-20">
          <h2 class="text-2xl font-semibold mb-8 pb-2 border-b border-gray-200 text-center">{{ t('people.alumni') }}</h2>
          <div class="auto-fit-grid">
            <MemberCard 
              v-for="(member, index) in alumni" 
              :key="`alumni-${index}`" 
              :member="member" 
              type="alumni"
              :language="locale"
              :align="getCardAlign(index)"
            />
          </div>
          
          <!-- Simple Alumni List -->
          <div class="mt-12">
            <h3 class="text-xl font-medium mb-4 text-center">{{ t('people.moreAlumni') }}</h3>
            <div class="p-6">
              <div class="flex flex-wrap justify-center gap-3 md:gap-4">
                <div 
                  v-for="(member, index) in simple_alumni" 
                  :key="`simple-alumni-${index}`"
                  class="px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default flex items-center gap-2"
                >
                  <span class="font-medium text-gray-800">{{ getMemberName(member) }}</span>
                  <span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">{{ getMemberJobTitle(member) }}</span>
                </div>
              </div>
            </div>
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
import { faculty, postdoc, graduate, undergraduate, alumni, simple_alumni } from './components/data.js'
import FacultyCard from './components/FacultyCard.vue'
import MemberCard from './components/MemberCard.vue'
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()

// Define other sections (excluding faculty)
const otherSections = [
  { id: 'postdoc' },
  { id: 'graduate' },
  { id: 'undergraduate' },
  { id: 'alumni' }
]

// Helper functions for name and title display
const getMemberName = (member: any) => {
  return locale.value === 'en-US' ? member.name_en || member.name_cn : member.name_cn
}

const getMemberTitle = (member: any) => {
  if (member.name_cn === '侯廷军' || member.name_cn === '谢昌谕' || member.name_cn === '李 丹') {
    return locale.value === 'en-US' ? ' Professor' : '教授'
  } else {
    return locale.value === 'en-US' ? ' Researcher' : '研究员'
  }
}

const getMemberJobTitle = (member: any) => {
  return locale.value === 'en-US' ? member.title_en || member.title_cn : member.title_cn
}

// Helper function to determine card alignment based on grid position
const getCardAlign = (index: number): 'start' | 'center' | 'end' => {
  const position = index % 3
  switch (position) {
    case 0: return 'start'   // Left column
    case 1: return 'center'  // Middle column
    case 2: return 'end'     // Right column
    default: return 'center'
  }
}

// Create a combined array of all sections for scroll handling
const allSections = computed(() => {
  const facultySections = faculty.map((_: any, index: number) => ({
    id: `faculty-${index}`,
    title: faculty[index].name_cn
  }))
  
  return [...facultySections, ...otherSections]
})

// Track active section for highlighting in navigation
const activeSection = ref(`faculty-0`)

// Scroll to section with smooth behavior
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
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
.auto-fit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem 2rem;
  align-items: start;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .auto-fit-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .auto-fit-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem 1.5rem;
  }
}

@media (min-width: 1025px) {
  .auto-fit-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem 2rem;
    max-width: none;
  }
}

/* Ensure equal height for grid items in the same row */
.auto-fit-grid > * {
  height: 100%;
}
</style>

<route lang="yaml">
  meta:
    layout: blank
</route>