<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { useId } from 'radix-vue'
import { type HTMLAttributes, provide } from 'vue'
import { FORM_ITEM_INJECTION_KEY } from './injectionKeys'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const id = useId()
provide(FORM_ITEM_INJECTION_KEY, id)
</script>

<template>
  <div v-auto-animate :class="cn('space-y-2', props.class)">
    <slot />
  </div>
</template>
