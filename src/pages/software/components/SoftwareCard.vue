<template>
  <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden">
    <div class="p-5">
      <h3 class="text-lg font-semibold text-primary mb-2">{{ software.name }}</h3>
      <p class="text-gray-600 text-sm mb-3">{{ software.description }}</p>
      
      <div class="space-y-2">
        <div class="flex items-center text-sm">
          <Link class="h-4 w-4 text-primary mr-2" />
          <a :href="software.link" target="_blank" rel="noopener noreferrer" 
             class="text-primary hover:underline truncate">
            {{ software.link }}
          </a>
        </div>
        
        <div class="flex items-start text-sm">
          <BookOpen class="h-4 w-4 text-primary mr-2 flex-shrink-0" />
          <p class="text-gray-600 text-xs">{{ software.citation }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Link, BookOpen } from 'lucide-vue-next'

defineProps({
  software: {
    type: Object,
    required: true
  }
})
</script> 