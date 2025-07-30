<template>
  <HoverCard>
    <HoverCardTrigger asChild>
      <div 
        class="group bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 overflow-hidden transition-all duration-500 hover:scale-[1.02] cursor-pointer hover:border-blue-300/30"
      >
        <!-- Basic info (always visible) - horizontal layout -->
        <div class="p-4 flex items-start space-x-4">
          <!-- Left side - image -->
          <div class="relative">
            <img 
              :src="member.image" 
              :alt="language === 'en-US' ? member.name_en : member.name_cn" 
              class="w-32 object-cover rounded-md transition-all duration-300" 
            />
          </div>
          
          <!-- Right side - info -->
          <div class="flex-1 min-w-0">
            <div class="space-y-3">
              <div>
                <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                  {{ language === 'en-US' ? member.name_en : member.name_cn }}
                </h3>
                <p class="text-sm text-blue-600 font-medium mt-1 inline-block">
                  {{ language === 'en-US' ? member.title_en : member.title_cn }}
                </p>
              </div>
              
              <!-- Research Direction (hide for alumni) -->
              <div v-if="type !== 'alumni' && (language === 'en-US' ? member.research_direction_en : member.research_direction)" class="mt-3 space-y-2">
                <div class="text-xs text-gray-700 flex items-center gap-2 justify-start">
                  <FlaskConicalIcon class="h-4 w-4 flex-shrink-0" />
                  <span>{{ language === 'en-US' ? 'Research Direction' : '研究方向' }}</span>
                </div>
                <!-- If research_direction is an array -->
                <div v-if="Array.isArray(language === 'en-US' ? member.research_direction_en : member.research_direction)" class="text-xs text-gray-700 space-y-1">
                  <div v-for="(direction, index) in (language === 'en-US' ? member.research_direction_en : member.research_direction)" :key="index" class="flex items-start">
                    <span class="w-1 h-1 bg-gray-700 rounded-full mt-1 ml-1.5 mr-3.5 flex-shrink-0"></span>
                    <span class="text-xs text-gray-700">{{ direction }}</span>
                  </div>
                </div>
                <!-- If research_direction is a string -->
                <p v-else class="text-xs text-gray-700">{{ language === 'en-US' ? member.research_direction_en : member.research_direction }}</p>
              </div>
              
              <!-- Contact info -->
              <div class="space-y-2">
                <div v-if="language === 'en-US' ? member.location_en : member.location_cn" 
                  class="flex items-center text-gray-700 text-xs justify-start gap-2">
                  <MapPinIcon class="h-4 w-4 flex-shrink-0" />
                  <span>{{ language === 'en-US' ? member.location_en : member.location_cn }}</span>
                </div>

                <div v-if="member.email"
                  class="text-xs text-gray-700 flex items-center justify-start gap-2">
                  <MailIcon class="h-4 w-4 flex-shrink-0" />
                  <span>{{ member.email }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HoverCardTrigger>
    
    <HoverCardContent 
      :class="'w-120 max-w-lg'"
      :align="align as 'start' | 'center' | 'end'"
      :side="'bottom'"
      :sideOffset="8"
    >
      <!-- Extended info -->
      <div class="text-sm space-y-4">
        <div v-if="member.phone" class="flex items-center text-gray-700">
          <PhoneIcon class="h-3 w-3 mr-2" />
          <span>{{ member.phone }}</span>
        </div>
        
        <div v-if="member.education && member.education.length">
          <h4 class="text-xs font-semibold uppercase text-gray-500 mb-2">{{ language === 'en-US' ? 'Education' : '教育背景' }}</h4>
          <ul class="text-xs text-gray-700 space-y-1">
            <li v-for="(edu, index) in member.education" :key="index">
              {{ language === 'en-US' ? edu.description_en : edu.description_cn }}
            </li>
          </ul>
        </div>
        
        <div v-if="member.papers && member.papers.length">
          <h4 class="text-xs font-semibold uppercase text-gray-500 mb-2">{{ language === 'en-US' ? 'Selected Papers' : '精选论文' }}</h4>
          <ul class="text-xs text-gray-700 space-y-1">
            <li v-for="(paper, index) in member.papers" :key="index">
              <a class="text-blue-600 hover:text-blue-800 cursor-pointer">
                {{ paper.title }}
              </a>
            </li>
          </ul>
        </div>
        
        <div v-if="member.description_url">
          <Button size="sm" variant="outline" class="w-full text-xs" @click="openDescriptionUrl(member.description_url)">
            <ExternalLinkIcon class="h-3 w-3 mr-1" />
            {{ language === 'en-US' ? 'View Details' : '查看详情' }}
          </Button>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { MailIcon, PhoneIcon, MapPinIcon, ExternalLinkIcon, FlaskConicalIcon } from 'lucide-vue-next'

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
  },
  align: {
    type: String,
    default: 'center',
    validator: (value: string) => ['start', 'center', 'end'].includes(value)
  }
})

const papersExpanded = ref(false)

const openDescriptionUrl = (url: string) => {
  window.open(url, '_blank')
}

const togglePapers = (event: Event) => {
  papersExpanded.value = !papersExpanded.value
  event.stopPropagation()
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