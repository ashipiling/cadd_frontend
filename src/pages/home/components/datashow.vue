<template>
  <section ref="sectionRef" class="py-16 bg-gradient-to-b from-slate-900 to-slate-950">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="p-6 text-center flex flex-col items-center justify-center transition-colors duration-300">
          <div class="text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">{{ animatedPapers }}+</div>
          <div class="text-gray-400 text-lg">发表论文</div>
        </div>
        <div class="p-6 text-center flex flex-col items-center justify-center transition-colors duration-300">
          <div class="text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">{{ animatedPatents }}+</div>
          <div class="text-gray-400 text-lg">申请专利</div>
        </div>
        <div class="p-6 text-center flex flex-col items-center justify-center transition-colors duration-300">
          <div class="text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">{{ animatedPlatforms }}+</div>
          <div class="text-gray-400 text-lg">软件平台</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Add a template ref for the section element
const sectionRef = ref<HTMLElement | null>(null);

const targetPapers = 3000;
const targetPatents = 24;
const targetPlatforms = 37;

const animatedPapers = ref(0);
const animatedPatents = ref(0);
const animatedPlatforms = ref(0);

const animationDuration = 1500; // milliseconds

const animateNumber = (targetRef: typeof animatedPapers, targetValue: number) => {
  const startTime = performance.now();

  const step = (currentTime: number) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / animationDuration, 1);
    targetRef.value = Math.floor(progress * targetValue);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      targetRef.value = targetValue; // Ensure final value is exact
    }
  };

  requestAnimationFrame(step);
};

// Store the observer instance to disconnect it later
let observer: IntersectionObserver | null = null;

onMounted(() => {
  // Ensure the element exists before creating the observer
  if (sectionRef.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check if the element is intersecting (visible)
          if (entry.isIntersecting) {
            // Start animations
            animateNumber(animatedPapers, targetPapers);
            animateNumber(animatedPatents, targetPatents);
            animateNumber(animatedPlatforms, targetPlatforms);
            // Stop observing once animation is triggered to prevent re-triggering
            if (observer && sectionRef.value) {
              observer.unobserve(sectionRef.value);
            }
          }
        });
      },
      {
        // 调整为更合理的触发点，当元素进入视口底部20%时触发
        rootMargin: "50% 0px 0px 0px",
        threshold: 0,
      }
    );

    // Start observing the section element
    observer.observe(sectionRef.value);
    
    // 检查元素是否在初始加载时就已经可见
    const rect = sectionRef.value.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      // 元素已经可见，直接触发动画
      animateNumber(animatedPapers, targetPapers);
      animateNumber(animatedPatents, targetPatents);
      animateNumber(animatedPlatforms, targetPlatforms);
      // 不需要继续观察
      observer.unobserve(sectionRef.value);
    }
  }
});

// Clean up the observer when the component is unmounted
onUnmounted(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value);
  }
  observer = null; // Release the observer instance
});

</script>

<style scoped>
/* Add any component-specific styles here if needed */
</style>
