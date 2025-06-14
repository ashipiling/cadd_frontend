<template>
  <div 
    class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
    :class="{'shadow-md': !expanded, 'shadow-lg': expanded}"
    @mouseenter="expanded = true"
    @mouseleave="expanded = false"
    @click="toggleClick"
  >
    <!-- Basic info (always visible) - horizontal layout -->
    <div class="p-4 flex items-start">
      <!-- Left side - image -->
      <img :src="member.image" :alt="language === 'en-US' ? member.name_en : member.name_cn" class="w-32 object-cover rounded-md mr-4" />
      
      <!-- Right side - info -->
      <div class="flex-1">
        <h3 class="text-lg font-semibold">{{ language === 'en-US' ? member.name_en : member.name_cn }}</h3>
        <p class="text-xs text-gray-500 mt-1">{{ language === 'en-US' ? member.title_en : member.title_cn }}</p>
        
        <!-- Research Direction -->
        <div v-if="language === 'en-US' ? member.research_direction_en : member.research_direction" class="mt-2">
          <h4 class="text-xs font-semibold uppercase text-gray-500 mb-1">{{ language === 'en-US' ? 'Research Direction' : '研究方向' }}</h4>
          <!-- If research_direction is an array -->
          <ul v-if="Array.isArray(language === 'en-US' ? member.research_direction_en : member.research_direction)" class="text-xs text-gray-700 list-disc pl-4">
            <li v-for="(direction, index) in (language === 'en-US' ? member.research_direction_en : member.research_direction)" :key="index" class="mb-1">
              {{ direction }}
            </li>
          </ul>
          <!-- If research_direction is a string -->
          <p v-else class="text-xs text-gray-700">{{ language === 'en-US' ? member.research_direction_en : member.research_direction }}</p>
        </div>
        
        <!-- Contact info -->
        <div class="text-sm mt-3">
          <div v-if="member.email" class="flex items-center text-gray-700 text-xs mb-1">
            <MailIcon class="h-3 w-3 mr-2" />
            <span>{{ member.email }}</span>
          </div>
          
          <div v-if="language === 'en-US' ? member.location_en : member.location_cn" class="flex items-center text-gray-700 text-xs mb-1">
            <MapPinIcon class="h-3 w-3 mr-2" />
            <span>{{ language === 'en-US' ? member.location_en : member.location_cn }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Extended info (visible on hover/click) -->
    <div 
      class="px-4 pb-4 opacity-100 overflow-hidden transition-all duration-300"
    >
      <Separator class="my-2" />
      
      <div class="text-sm space-y-2">
        <div v-if="member.phone" class="flex items-center text-gray-700">
          <PhoneIcon class="h-3 w-3 mr-2" />
          <span>{{ member.phone }}</span>
        </div>
      </div>
      
      <!-- Expandable Sections -->
      <div class="mt-3 space-y-3">
        <div v-if="member.education && member.education.length">
          <h4 class="text-xs font-semibold uppercase text-gray-500 mb-1">{{ language === 'en-US' ? 'Education' : '教育背景' }}</h4>
          <ul class="text-xs text-gray-700">
            <li v-for="(edu, index) in member.education" :key="index" class="mb-1">
              {{ language === 'en-US' ? edu.description_en : edu.description_cn }}
            </li>
          </ul>
        </div>
        
        <div v-if="member.papers && member.papers.length">
          <h4 class="text-xs font-semibold uppercase text-gray-500 mb-1">{{ language === 'en-US' ? 'Selected Papers' : '精选论文' }}</h4>
          <ul class="text-xs text-gray-700">
            <li v-for="(paper, index) in displayedPapers" :key="index" class="mb-1">
              <a class="text-blue-600">
                {{ paper.title }}
              </a>
            </li>
          </ul>
          <div v-if="member.papers.length > 2" class="mt-1">
            <Button 
              @click.stop="togglePapers" 
              size="sm" variant="outline"
              class="text-xs font-normal py-1 px-2"
            >
              {{ papersExpanded ? (language === 'en-US' ? 'Show Less' : '收起') : (language === 'en-US' ? 'Show More' : '展开更多') }}
            </Button>
          </div>
        </div>
        
        <div v-if="member.description_url">
          <Button size="sm" variant="outline" class="w-full text-xs mt-2" @click="openDescriptionUrl(member.description_url)">
            <ExternalLinkIcon class="h-3 w-3 mr-1" />
            {{ language === 'en-US' ? 'View Details' : '查看详情' }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { MailIcon, PhoneIcon, MapPinIcon, ExternalLinkIcon } from 'lucide-vue-next'

const props = defineProps({
  member: {
    type: Object,
    required: true
  },
  type: {
    type: String,
    default: 'student'
  },
  language: {
    type: String,
    default: 'zh-CN',
    validator: (value: string) => ['en-US', 'zh-CN'].includes(value)
  }
})

const expanded = ref(false)
const clicked = ref(false)
const papersExpanded = ref(false)

const toggleClick = () => {
  clicked.value = !clicked.value
  if (clicked.value) {
    expanded.value = true
  }
}

const openDescriptionUrl = (url: string) => {
  window.open(url, '_blank')
}

const togglePapers = (event: Event) => {
  papersExpanded.value = !papersExpanded.value
  event.stopPropagation() // Prevent the card from toggling when clicking the button
}

const displayedPapers = computed(() => {
  if (!props.member.papers) return []
  if (props.member.papers.length <= 2 || papersExpanded.value) {
    return props.member.papers
  } else {
    return props.member.papers.slice(0, 2)
  }
})

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}
</script> 