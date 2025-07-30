<template>
  <PageFrame headerBackgroundColor="light" backgroundColor="light" enableScrollHiding="true">
    <div class="container py-8 mx-auto relative">
      <!-- Decorative background elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-24 md:-right-24 -right-8 w-60 md:w-96 h-60 md:h-96 bg-primary/15 rounded-full blur-3xl"></div>
        <div class="absolute top-20 -left-10 md:-left-20 w-48 md:w-80 h-48 md:h-80 bg-amber-300/20 rounded-full blur-2xl"></div>
      </div>
      
      <div class="max-w-6xl mx-auto relative">
        <!-- Enhanced Hero Section -->
        <div class="mt-16 mb-12 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-3 text-primary bg-clip-text">{{ t('publications.title') }}</h1>
          <div class="w-24 h-1 bg-gradient-to-r from-primary/60 to-primary mx-auto mb-4 rounded-full"></div>
        </div>
        
        <!-- Navigation with categories -->
        <div class="mb-10 sticky top-2 z-10 hidden md:block">
          <div class="bg-white/90 backdrop-blur-md shadow-md rounded-xl py-3 px-4 border border-gray-100">
            <div class="flex flex-wrap justify-center gap-2">
              <!-- Publication category navigation -->
              <Button 
                v-for="section in pubSections" 
                :key="section.id"
                variant="ghost" 
                size="sm"
                :class="{'bg-primary/10 text-primary font-medium': activeSection === section.id}"
                @click="scrollToSection(section.id)"
              >
                {{ t(`publications.${section.key}`) }}
              </Button>
            </div>
          </div>
        </div>

        <!-- Books/Monographs Section -->
        <section id="books" class="mb-16 scroll-mt-20">
          <h2 class="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200">{{ t('publications.books') }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="book in books" :key="`book-${book.id}`" class="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all">
              <div class="flex items-start">
                <div class="bg-primary/10 text-primary font-bold rounded-lg w-10 h-10 flex items-center justify-center shrink-0 mr-3">
                  {{ book.id }}
                </div>
                <div>
                  <p class="text-gray-800 font-medium">{{ book.title }}</p>
                  <div class="mt-2" v-if="book.link !== '#'">
                    <a :href="book.link" class="inline-flex items-center text-primary hover:underline text-sm">
                      <span>{{ t('publications.viewDetails') }}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Research Papers Sections by Year -->
        <div id="papers" v-for="[year, yearPapers] in Object.entries(papers).sort(([a], [b]) => Number(b) - Number(a))" :key="`year-section-${year}`">
          <section :id="`year-${year}`" class="mb-16 scroll-mt-20">
            <h2 class="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200">{{ year == '2025' ? t('publications.researchPapers') : year + t('publications.year') }}</h2>
            <div class="grid grid-cols-1 gap-4">
              <div v-for="paper in (yearPapers as any[])" :key="`paper-${paper.id}`" class="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all">
                <div class="flex items-start">
                  <div class="bg-primary/10 text-primary font-bold rounded-lg w-10 h-10 flex items-center justify-center shrink-0 mr-3">
                    {{ paper.id }}
                  </div>
                  <div>
                    <p class="text-gray-800 font-medium">
                      {{ paper.title }}
                      <a :href="paper.link" class="inline-flex items-center text-primary hover:underline text-sm ml-2">
                        <span>{{ t('publications.viewDetails') }}</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Domestic Papers Section -->
        <section id="domestic" class="mb-16 scroll-mt-20">
          <h2 class="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200">{{ t('publications.domesticPapers') }}</h2>
          <div class="grid grid-cols-1 gap-4">
            <div class="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all">
              <div class="flex items-start">
                <div class="bg-primary/10 text-primary font-bold rounded-lg w-16 h-10 flex items-center justify-center shrink-0 mr-3">
                  1 - {{ domesticPapers.count }}
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Software Copyrights Section -->
        <section id="software" class="mb-16 scroll-mt-20">
          <h2 class="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200">{{ t('publications.softwareCopyright') }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="sw in software" :key="`software-${sw.id}`" class="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all">
              <div class="flex items-start">
                <div class="bg-primary/10 text-primary font-bold rounded-lg w-10 h-10 flex items-center justify-center shrink-0 mr-3">
                  {{ sw.id }}
                </div>
                <div class="flex-1">
                  <p class="text-gray-800 font-medium">{{ sw.title }}</p>
                  <p class="text-sm text-gray-600 mt-1">
                    <span v-for="(name, index) in sw.names" :key="index">
                      {{ name }}{{ index < sw.names.length - 1 ? '，' : '' }}
                    </span>
                  </p>
                  <div class="mt-2 text-xs text-gray-500">
                    <p>{{ t('publications.registrationNumber') }} {{ sw.submit_id }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Patents Section -->
        <section id="patents" class="mb-16 scroll-mt-20">
          <h2 class="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200">{{ t('publications.patents') }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="patent in patents" :key="`patent-${patent.id}`" class="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all">
              <div class="flex items-start">
                <div class="bg-primary/10 text-primary font-bold rounded-lg w-10 h-10 flex items-center justify-center shrink-0 mr-3">
                  {{ patent.id }}
                </div>
                <div class="flex-1">
                  <p class="text-gray-800 font-medium">{{ patent.title }}</p>
                  <p class="text-sm text-gray-600 mt-1">
                    <span v-for="(name, index) in patent.names" :key="index">
                      {{ name }}{{ index < patent.names.length - 1 ? '，' : '' }}
                    </span>
                  </p>
                  <div class="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-gray-500">
                    <p>{{ t('publications.authorizationNumber') }} {{ patent.auth_id }}</p>
                    <p>{{ t('publications.authorizationDate') }} {{ patent.auth_time }}</p>
                  </div>
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
import { books, papers, domesticPapers, software, patents } from './components/data.js'
import { useI18n } from 'vue-i18n'

// 定义类型接口
interface PubSection {
  id: string
  key: string
}

interface YearSection {
  id: string
  title: string
}

interface SectionElement {
  id: string
  element: HTMLElement | null
}

const { t } = useI18n()

// Define publication sections
const pubSections: PubSection[] = [
  { id: 'books', key: 'books' },
  { id: 'papers', key: 'papers' },
  { id: 'software', key: 'softwareCopyright' },
  { id: 'patents', key: 'patents' }
]

// Create a combined array of all sections for scroll handling
const allSections = computed(() => {
  const yearSections: YearSection[] = Object.keys(papers as any).map(year => ({
    id: `year-${year}`,
    title: `${year}${t('publications.labels.year')}`
  }))
  
  return [...pubSections, ...yearSections]
})

// Track active section for highlighting in navigation
const activeSection = ref('books')

// Scroll to section with smooth behavior
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Update active section based on scroll position
const handleScroll = () => {
  const sectionElements: SectionElement[] = allSections.value.map(section => ({
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
/* Additional scoped styles if needed */
</style>

<route lang="yaml">
  meta:
    layout: blank
</route>
