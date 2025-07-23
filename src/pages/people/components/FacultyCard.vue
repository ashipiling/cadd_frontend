<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
    <div class="flex flex-col md:flex-row">
      <!-- Image column -->
      <div class="md:w-1/3 p-6 flex items-start justify-center" :class="member.name_cn === '李丹' || member.name_cn === '谢昌谕' || member.name_cn === '侯廷军' ? 'mt-4' : 'mt-0'">
        <img :src="member.image" :alt="member.name_en" class="w-full max-w-[250px] object-cover rounded" />
      </div>
      
      <!-- Information column -->
      <div class="md:w-2/3 p-6">
        <div class="mb-4">
          <h3 class="text-2xl font-bold mb-1 text-gray-800">{{ language === 'en-US' ? member.name_en : member.name_cn }}</h3>
          <p class="text-gray-600 font-medium mb-1">{{ language === 'en-US' ? member.title_en : member.title_cn }}</p>
          <p class="text-gray-500 text-sm flex items-center">
            <MapPinIcon class="h-4 w-4 mr-1 inline-block" />
            {{ language === 'en-US' ? member.location_en : member.location_cn }}
          </p>
        </div>
        
        <div class="flex flex-wrap gap-2 mb-4">
          <Button size="sm" variant="outline" v-if="member.email">
            <MailIcon class="h-4 w-4 mr-1" />
            {{ member.email }}
          </Button>
          <Button size="sm" variant="outline" v-if="member.phone">
            <PhoneIcon class="h-4 w-4 mr-1" />
            {{ member.phone }}
          </Button>
        </div>
        
        <!-- Expandable Sections -->
        <Accordion type="multiple" class="w-full" :defaultValue="[]">
          <AccordionItem value="education" v-if="member.education && member.education.length">
            <AccordionTrigger class="hover:text-primary transition-colors">{{ language === 'en-US' ? 'Education & Career' : '学习工作经历' }}</AccordionTrigger>
            <AccordionContent>
              <ul class="text-sm space-y-3">
                <li v-for="(edu, index) in member.education" :key="index" class="mb-2">
                  <p>{{ language === 'en-US' ? edu.description_en : edu.description_cn }}</p>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="research_direction" v-if="member.research_direction">
            <AccordionTrigger class="hover:text-primary transition-colors">{{ language === 'en-US' ? 'Research Direction' : '研究方向' }}</AccordionTrigger>
            <AccordionContent>
              <div class="text-sm space-y-3">
                <!-- Show English version if available and language is English -->
                <div v-if="language === 'en-US' && member.research_direction_en">
                  <div class="mb-2" v-for="(direction, index) in member.research_direction" :key="index">
                    <p>{{ direction.description_en }}</p>
                  </div>
                </div>
                <!-- Show Chinese version as fallback or when language is Chinese -->
                <div v-else>
                  <div class="mb-2" v-for="(direction, index) in member.research_direction" :key="index">
                    <p>{{ direction.description_cn }}</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="positions" v-if="member.academic_positions && member.academic_positions.length">
            <AccordionTrigger class="hover:text-primary transition-colors">{{ language === 'en-US' ? 'Academic Positions' : '重要学术兼职' }}</AccordionTrigger>
            <AccordionContent>
              <ul class="text-sm space-y-3">
                <li v-for="(pos, index) in member.academic_positions" :key="index" class="mb-2">
                  <p class="font-medium">{{ language === 'en-US' ? pos.title_en : pos.title_cn }}</p>
                  <p>{{ language === 'en-US' ? pos.description_en : pos.description_cn }}</p>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="awards" v-if="member.awards && member.awards.length">
            <AccordionTrigger class="hover:text-primary transition-colors">{{ language === 'en-US' ? 'Awards & Honors' : '重要学术奖项' }}</AccordionTrigger>
            <AccordionContent>
              <ul class="text-sm space-y-3">
                <li v-for="(award, index) in member.awards" :key="index" class="mb-2">
                  <p>{{ language === 'en-US' ? award.description_en : award.description_cn }}</p>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="papers" v-if="member.papers && member.papers.length">
            <AccordionTrigger class="hover:text-primary transition-colors">
              <span>{{ language === 'en-US' ? 'Representative Papers' : '代表性论文' }}</span>
            </AccordionTrigger>
            <AccordionContent>
              <ul class="text-sm space-y-3">
                <li v-for="(paper, index) in member.papers" :key="index" class="mb-2">
                  <a :href="paper.url" target="_blank" class="text-blue-600 hover:underline">
                    {{ paper.title }}
                  </a>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-vue-next'

defineProps({
  member: {
    type: Object,
    required: true
  },
  language: {
    type: String,
    default: 'cn',
    validator: (value: string) => ['en-US', 'zh-CN'].includes(value)
  }
})
</script> 