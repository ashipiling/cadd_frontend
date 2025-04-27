<template>
  <canvas ref="canvas" class="w-full h-full"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

const canvas = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let animationFrameId: number | null = null
let particles: Particle[] = []
const particleCount = 100
const particleColors = ['#1e40af', '#0369a1', '#0d9488', '#059669', '#2563eb', '#047857']

// 初始化粒子
const initParticles = () => {
  if (!canvas.value) return
  
  particles = []
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.value.width,
      y: Math.random() * canvas.value.height,
      size: Math.random() * 5 + 1,
      speedX: Math.random() * 1 - 0.5,
      speedY: Math.random() * 1 - 0.5,
      color: particleColors[Math.floor(Math.random() * particleColors.length)]
    })
  }
}

// 绘制粒子
const drawParticles = () => {
  if (!ctx || !canvas.value) return
  
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  
  particles.forEach((particle) => {
    ctx!.beginPath()
    ctx!.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
    ctx!.fillStyle = particle.color
    ctx!.globalAlpha = 0.7
    ctx!.fill()
    
    // 连接靠近的粒子
    connectParticles(particle)
    
    // 更新粒子位置
    particle.x += particle.speedX
    particle.y += particle.speedY
    
    // 碰到边界反弹
    if (particle.x > canvas.value!.width || particle.x < 0) {
      particle.speedX = -particle.speedX
    }
    
    if (particle.y > canvas.value!.height || particle.y < 0) {
      particle.speedY = -particle.speedY
    }
  })
  
  animationFrameId = requestAnimationFrame(drawParticles)
}

// 连接靠近的粒子
const connectParticles = (particle: Particle) => {
  if (!ctx) return
  
  const maxDistance = 150
  
  particles.forEach((otherParticle) => {
    const dx = particle.x - otherParticle.x
    const dy = particle.y - otherParticle.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    if (distance < maxDistance) {
      ctx!.beginPath()
      ctx!.strokeStyle = particle.color
      ctx!.globalAlpha = 0.15 * (1 - distance / maxDistance)
      ctx!.lineWidth = 1
      ctx!.moveTo(particle.x, particle.y)
      ctx!.lineTo(otherParticle.x, otherParticle.y)
      ctx!.stroke()
    }
  })
}

// 调整画布大小
const resizeCanvas = () => {
  if (!canvas.value || !ctx) return
  
  canvas.value.width = canvas.value.offsetWidth
  canvas.value.height = canvas.value.offsetHeight
  
  initParticles()
}

onMounted(() => {
  if (!canvas.value) return
  
  ctx = canvas.value.getContext('2d')
  
  if (!ctx) return
  
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
  
  drawParticles()
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeCanvas)
  
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script> 