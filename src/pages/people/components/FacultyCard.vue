<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
    <div class="flex flex-col md:flex-row">
      <!-- Image column -->
      <div class="md:w-1/3 p-6 flex items-start justify-center">
        <img :src="member.image" :alt="member.name_en" class="w-full max-w-[250px] object-cover rounded" />
      </div>
      
      <!-- Information column -->
      <div class="md:w-2/3 p-6">
        <div class="mb-4">
          <h3 class="text-2xl font-bold mb-1 text-gray-800">{{ language === 'en' ? member.name_en : member.name_cn }}</h3>
          <p class="text-gray-600 font-medium mb-1">{{ language === 'en' ? member.title_en : member.title_cn }}</p>
          <p class="text-gray-500 text-sm flex items-center">
            <MapPinIcon class="h-4 w-4 mr-1 inline-block" />
            {{ language === 'en' ? member.location_en : member.location_cn }}
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
        <Accordion type="multiple" class="w-full" :defaultValue="['education', 'positions', 'awards', 'papers']">
          <AccordionItem value="education" v-if="member.education && member.education.length">
            <AccordionTrigger class="hover:text-primary transition-colors">学习工作经历</AccordionTrigger>
            <AccordionContent>
              <ul class="text-sm space-y-3">
                <li v-for="(edu, index) in member.education" :key="index" class="mb-2">
                  <p>{{ language === 'en' ? edu.description_en : edu.description_cn }}</p>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="positions" v-if="member.academic_positions && member.academic_positions.length">
            <AccordionTrigger class="hover:text-primary transition-colors">重要学术兼职</AccordionTrigger>
            <AccordionContent>
              <ul class="text-sm space-y-3">
                <li v-for="(pos, index) in member.academic_positions" :key="index" class="mb-2">
                  <p class="font-medium">{{ language === 'en' ? pos.title_en : pos.title_cn }}</p>
                  <p>{{ language === 'en' ? pos.description_en : pos.description_cn }}</p>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="awards" v-if="member.awards && member.awards.length">
            <AccordionTrigger class="hover:text-primary transition-colors">重要学术奖项</AccordionTrigger>
            <AccordionContent>
              <ul class="text-sm space-y-3">
                <li v-for="(award, index) in member.awards" :key="index" class="mb-2">
                  <p>{{ language === 'en' ? award.description_en : award.description_cn }}</p>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="papers" v-if="member.papers && member.papers.length">
            <AccordionTrigger class="hover:text-primary transition-colors">代表性论文</AccordionTrigger>
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
import { importImage } from './data.js'

defineProps({
  member: {
    type: Object,
    required: true
  },
  language: {
    type: String,
    default: 'cn',
    validator: (value: string) => ['en', 'cn'].includes(value)
  }
})
</script> 