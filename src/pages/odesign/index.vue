<template>
  <PageFrame :headerBackgroundColor="headerBackgroundColor" backgroundColor="light" class="bg-white">
    <!-- ==================== HERO SECTION (Black) ==================== -->
    <section class="relative min-h-screen flex items-center justify-center bg-black overflow-hidden header-dark-section">
      <!-- Animated background particles -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
        <div class="particle particle-5"></div>
        <!-- Subtle grid overlay -->
        <div class="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <!-- Radial gradient glow -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div class="relative z-10 container mx-auto px-4 md:px-8 text-center pt-24 pb-16">
        <!-- Logo / Brand -->
        <div class="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <div class="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
          <span class="text-sm text-gray-300 tracking-wider uppercase">Biomolecular Interaction Design</span>
        </div>

        <!-- Title -->
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span class="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">ODesign</span>
        </h1>
        <p class="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-4 max-w-4xl mx-auto leading-relaxed">
          A World Model for <span class="text-blue-400 font-normal">Biomolecular</span> Interaction Design
        </p>
        <p class="text-base md:text-lg text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed">
          An all-atom generative world model for all-to-all biomolecular interaction design that unifies proteins, nucleic acids, and small molecules within a single framework.
        </p>

        <!-- PDB Animation -->
        <div class="relative mx-auto mb-12 w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px]">
          <div class="relative w-full h-full">
            <img
              v-for="(frame, idx) in pdbFrames"
              :key="idx"
              :src="frame"
              v-show="idx === currentFrame"
              class="absolute inset-0 w-full h-full object-cover"
              alt="PDB structure animation"
            />
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-wrap justify-center gap-4 mb-16">
          <a href="https://odesign.lglab.ac.cn/" target="_blank"
            class="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"/></svg>
            Web Server
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
          <a href="https://github.com/The-Institute-for-AI-Molecular-Design/ODesign" target="_blank"
            class="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-medium transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub Code
          </a>
          <a href="https://odesign1.github.io/static/pdfs/technical_report.pdf" target="_blank"
            class="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-medium transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            Technical Report
          </a>
        </div>

        <!-- Authors preview (collapsed) -->
        <div class="max-w-4xl mx-auto">
          <div
            class="cursor-pointer select-none"
            @click="showAuthors = !showAuthors"
          >
            <p class="text-sm text-gray-500 mb-2 flex items-center justify-center gap-2">
              <span>Odin Zhang*, Xujun Zhang*, Haitao Lin*, Cheng Tan*, et al.</span>
              <svg
                class="w-4 h-4 transition-transform duration-300"
                :class="{ 'rotate-180': showAuthors }"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </p>
          </div>
          <transition name="slide-down">
            <div v-if="showAuthors" class="text-xs text-gray-600 leading-relaxed mt-2 px-4">
              <p class="mb-2">
                Odin Zhang<sup>1,3,5,*,&dagger;</sup>, Xujun Zhang<sup>1,3,*</sup>, Haitao Lin<sup>1,5,*</sup>, Cheng Tan<sup>5,6,*</sup>,
                Qinghan Wang<sup>1,3,*</sup>, Yuanle Mo<sup>1,5,*</sup>, Qiantai Feng<sup>4,6,*</sup>, Gang Du<sup>1,3</sup>,
                Yuntao Yu<sup>1,3</sup>, Zichang Jin<sup>1,3</sup>, Ziyi You<sup>1,3</sup>, Peicong Lin<sup>1</sup>,
                Yijie Zhang<sup>7</sup>, Yuyang Tao<sup>1</sup>, Shicheng Chen<sup>3</sup>, Jack Xiaoyu Chen<sup>8</sup>,
                Chenqing Hua<sup>7</sup>, Weibo Zhao<sup>5</sup>, Runze Ma<sup>1,2</sup>, Yunpeng Xia<sup>1</sup>,
                Kejun Ying<sup>1</sup>, Jun Li<sup>9</sup>, Yundian Zeng<sup>3</sup>, Lijun Lang<sup>5</sup>,
                Peichen Pan<sup>3</sup>, Hanqun Cao<sup>5</sup>, Zihao Song<sup>10</sup>, Bo Qiang<sup>10</sup>,
                Jiaqi Wang<sup>10</sup>, Pengfei Ji<sup>11</sup>, Lei Bai<sup>6</sup>, Jian Zhang<sup>12</sup>,
                Chang-yu Hsieh<sup>3</sup>, Pheng Ann Heng<sup>5,&dagger;</sup>, Siqi Sun<sup>6,&dagger;</sup>,
                Tingjun Hou<sup>3,&dagger;</sup>, Shuangjia Zheng<sup>2,1,&dagger;</sup>
              </p>
              <p class="text-gray-500 text-[10px] leading-relaxed">
                <sup>1</sup>Lingang Laboratory &nbsp;
                <sup>2</sup>Shanghai Jiao Tong University &nbsp;
                <sup>3</sup>Zhejiang University &nbsp;
                <sup>4</sup>Fudan University &nbsp;
                <sup>5</sup>CUHK &nbsp;
                <sup>6</sup>Shanghai AI Laboratory &nbsp;
                <sup>7</sup>McGill University &nbsp;
                <sup>8</sup>MIT &nbsp;
                <sup>9</sup>Harvard University &nbsp;
                <sup>10</sup>University of Washington &nbsp;
                <sup>11</sup>Zhejiang University &nbsp;
                <sup>12</sup>Shanghai Jiao Tong University
              </p>
              <p class="text-gray-600 text-[10px] mt-1">*Equal contribution &nbsp; &dagger;Corresponding authors</p>
            </div>
          </transition>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg class="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- ==================== ARCHITECTURE (White) ==================== -->
    <section class="relative py-24 bg-white overflow-hidden header-light-section">
      <div class="container mx-auto px-4 md:px-8 max-w-7xl">
        <div class="mb-14">
          <h2 class="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">How It Works</h2>
          <h3 class="text-3xl md:text-4xl font-bold text-gray-900">Architecture</h3>
          <p class="text-gray-600 mt-4 max-w-3xl">
            ODesign follows a modular pipeline from representation and conditioning to structure generation and inverse folding.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
          <!-- Left: module flow -->
          <div class="space-y-4">
            <article
              v-for="mod in archModules"
              :key="mod.id"
              class="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4"
            >
              <div class="flex items-start gap-4">
                <span class="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                  {{ mod.id }}
                </span>
                <div>
                  <h4 class="text-base font-semibold text-gray-900 mb-1">{{ mod.title }}</h4>
                  <p class="text-sm text-gray-600 leading-relaxed">{{ mod.desc }}</p>
                </div>
              </div>
            </article>
          </div>

          <!-- Right: architecture figure -->
          <figure class="rounded-2xl border border-slate-200 bg-white p-3 md:p-4 shadow-sm">
            <img
              :src="structureImg"
              alt="ODesign Architecture Overview"
              class="w-full h-auto rounded-lg"
            />
            <figcaption class="text-xs text-slate-500 mt-3 text-center">
              Overview of ODesign modules and conditional generation workflow.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- ==================== DESIGN CASES (White) ==================== -->
    <section class="relative py-24 bg-white overflow-hidden header-light-section">
      <div class="container mx-auto px-4 md:px-8 max-w-6xl">
        <div class="mb-12">
          <h2 class="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Dynamic Design</h2>
          <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Design Cases</h3>
          <p class="text-gray-600 max-w-3xl">
            Showcasing the dynamic design process of protein, cyclic peptides, nucleic acids and ligand molecules.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article
            v-for="item in designCases"
            :key="item.id"
            class="rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
          >
            <div class="overflow-hidden rounded-lg bg-black">
              <video
                :src="item.video"
                class="w-full h-auto aspect-video object-cover"
                autoplay
                muted
                loop
                playsinline
                preload="metadata"
              />
            </div>
            <div class="mt-3 px-1">
              <p class="text-xs font-semibold text-blue-700 tracking-wider mb-1">{{ item.id }}</p>
              <h4 class="text-base font-semibold text-gray-900">{{ item.title }}</h4>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ==================== HIGHLIGHTS (Light blue) ==================== -->
    <section class="relative py-28 bg-blue-50/50 header-light-section">
      <div class="container mx-auto px-4 md:px-8 max-w-6xl">
        <div class="mb-12">
          <h2 class="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-3">Why ODesign</h2>
          <h3 class="text-3xl md:text-4xl font-bold text-gray-900">Highlights</h3>
          <p class="text-gray-600 mt-4 max-w-3xl">
            A unified and controllable framework for biomolecular interaction design across proteins,
            nucleic acids, and ligands.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <article
            v-for="item in highlights"
            :key="item.id"
            class="border-l-2 border-blue-200 pl-5"
          >
            <p class="text-xs font-semibold text-blue-700 tracking-wider mb-2">{{ item.id }}</p>
            <h4 class="text-lg font-semibold text-gray-900 mb-2">{{ item.title }}</h4>
            <p class="text-sm text-gray-600 leading-relaxed">{{ item.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ==================== WET-LAB VALIDATION (White) ==================== -->
    <section class="relative py-24 bg-white overflow-hidden header-light-section">
      <div class="container mx-auto px-4 md:px-8 max-w-5xl">
        <div class="text-center mb-10">
          <h2 class="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Results</h2>
          <h3 class="text-3xl md:text-4xl font-bold text-gray-900">Wet-lab Validation</h3>
          <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
            ODesign has achieved high-affinity results in protein mini-binder designs, with additional modality validations in progress.
          </p>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 gap-4 md:gap-6 mb-8 max-w-xl mx-auto">
          <div class="rounded-xl border border-slate-200 bg-white px-6 py-5 text-center">
            <div class="text-3xl font-bold text-blue-700">8</div>
            <div class="text-sm text-slate-500 mt-1">Targets Tested</div>
          </div>
          <div class="rounded-xl border border-slate-200 bg-white px-6 py-5 text-center">
            <div class="text-3xl font-bold text-slate-800">4</div>
            <div class="text-sm text-slate-500 mt-1">pM-scale Hits</div>
          </div>
        </div>

        <!-- Wet-lab binder image -->
        <figure class="max-w-4xl mx-auto rounded-2xl border border-slate-200 bg-white p-3 md:p-4 shadow-sm">
          <img
            :src="wetlabImg"
            alt="Wet-lab protein binder design results"
            class="w-full h-auto rounded-lg"
          />
          <figcaption class="text-center text-xs text-slate-500 mt-3">
            Experimental validation by SPR: mini-protein binders across 8 targets, with top binders reaching nM to pM affinity.
          </figcaption>
        </figure>
      </div>
    </section>

    <!-- ==================== WEB SERVER CTA (Dark blue) ==================== -->
    <section class="relative py-24 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 overflow-hidden header-dark-section">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 md:px-8 max-w-4xl relative z-10 text-center">
        <h2 class="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Get Started</h2>
        <h3 class="text-3xl md:text-5xl font-bold text-white mb-6">Try ODesign Web Server</h3>
        <p class="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          Design your targets in the browser with zero setup — no installs required. Start designing biomolecular interactions today.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="https://odesign.lglab.ac.cn/" target="_blank"
            class="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5">
            Launch Web Server
            <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
          <a href="https://github.com/The-Institute-for-AI-Molecular-Design/ODesign" target="_blank"
            class="inline-flex items-center gap-2 px-10 py-4 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5">
            View on GitHub
          </a>
        </div>
      </div>
    </section>

  </PageFrame>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import PageFrame from '@/components/Layout/page_frame.vue'

// Import all 26 PDB frames
import pdb0 from '@/assets/imgs/pdb0.png'
import pdb1 from '@/assets/imgs/pdb1.png'
import pdb2 from '@/assets/imgs/pdb2.png'
import pdb3 from '@/assets/imgs/pdb3.png'
import pdb4 from '@/assets/imgs/pdb4.png'
import pdb5 from '@/assets/imgs/pdb5.png'
import pdb6 from '@/assets/imgs/pdb6.png'
import pdb7 from '@/assets/imgs/pdb7.png'
import pdb8 from '@/assets/imgs/pdb8.png'
import pdb9 from '@/assets/imgs/pdb9.png'
import pdb10 from '@/assets/imgs/pdb10.png'
import pdb11 from '@/assets/imgs/pdb11.png'
import pdb12 from '@/assets/imgs/pdb12.png'
import pdb13 from '@/assets/imgs/pdb13.png'
import pdb14 from '@/assets/imgs/pdb14.png'
import pdb15 from '@/assets/imgs/pdb15.png'
import pdb16 from '@/assets/imgs/pdb16.png'
import pdb17 from '@/assets/imgs/pdb17.png'
import pdb18 from '@/assets/imgs/pdb18.png'
import pdb19 from '@/assets/imgs/pdb19.png'
import pdb20 from '@/assets/imgs/pdb20.png'
import pdb21 from '@/assets/imgs/pdb21.png'
import pdb22 from '@/assets/imgs/pdb22.png'
import pdb23 from '@/assets/imgs/pdb23.png'
import pdb24 from '@/assets/imgs/pdb24.png'
import pdb25 from '@/assets/imgs/pdb25.png'
import structureImg from '@/assets/imgs/structure.jpg'
import wetlabImg from '@/assets/imgs/wet-lab_binder_2.jpg'
import proteinVideo from '@/assets/imgs/protein_reversed.mp4'
import cyclicPeptideVideo from '@/assets/imgs/cyclic_peptide_reversed.mp4'
import rnaVideo from '@/assets/imgs/RNA_reversed.mp4'
import ligandVideo from '@/assets/imgs/ligand_reversed.mp4'

const pdbFrames = [
  pdb0, pdb1, pdb2, pdb3, pdb4, pdb5, pdb6, pdb7, pdb8, pdb9,
  pdb10, pdb11, pdb12, pdb13, pdb14, pdb15, pdb16, pdb17, pdb18, pdb19,
  pdb20, pdb21, pdb22, pdb23, pdb24, pdb25,
]

const NORMAL_DELAY = 120    // ms per frame for normal frames
const PAUSE_DELAY = 1500    // ms pause on first and last two frames

const currentFrame = ref(0)
const headerBackgroundColor = ref<'dark' | 'light'>('dark')
let animationTimer: ReturnType<typeof setTimeout> | null = null

function getFrameDelay(frameIdx: number): number {
  // Pause longer on first frame, last frame, and second-to-last frame
  if (frameIdx === 0 || frameIdx === pdbFrames.length - 1 || frameIdx === pdbFrames.length - 2) {
    return PAUSE_DELAY
  }
  return NORMAL_DELAY
}

function playNextFrame() {
  const nextFrame = (currentFrame.value + 1) % pdbFrames.length
  currentFrame.value = nextFrame
  animationTimer = setTimeout(playNextFrame, getFrameDelay(nextFrame))
}

const handleScroll = () => {
  // Find sections with light backgrounds
  const lightSections = document.querySelectorAll('.header-light-section')
  // Find sections with dark backgrounds
  const darkSections = document.querySelectorAll('.header-dark-section')

  let shouldBeLightHeader = false
  let shouldBeDarkHeader = false

  // Check if any light section is at the top
  lightSections.forEach((section) => {
    const rect = section.getBoundingClientRect()
    if (rect.top < 100 && rect.bottom > 0) {
      shouldBeLightHeader = true
    }
  })

  // Check if any dark section is at the top
  darkSections.forEach((section) => {
    const rect = section.getBoundingClientRect()
    if (rect.top < 100 && rect.bottom > 0) {
      shouldBeDarkHeader = true
    }
  })

  // Prioritize dark sections when both are visible
  if (shouldBeDarkHeader) {
    headerBackgroundColor.value = 'dark'
  } else if (shouldBeLightHeader) {
    headerBackgroundColor.value = 'light'
  } else {
    // Default to dark if no specific section is detected
    headerBackgroundColor.value = 'dark'
  }
}

onMounted(() => {
  // Start with a pause on the first frame
  animationTimer = setTimeout(playNextFrame, PAUSE_DELAY)
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  if (animationTimer) {
    clearTimeout(animationTimer)
  }
  window.removeEventListener('scroll', handleScroll)
})

const showAuthors = ref(false)

const designCases = [
  { id: '01', title: 'Protein Design', video: proteinVideo },
  { id: '02', title: 'Cyclic Peptide Design', video: cyclicPeptideVideo },
  { id: '03', title: 'Nucleic Acid Design', video: rnaVideo },
  { id: '04', title: 'Ligand Design', video: ligandVideo },
]

// Highlights data
const highlights = [
  {
    id: '01',
    title: 'All-to-All World Model',
    desc: 'Unified framework enables cross-modality molecular generation — proteins, nucleic acids, and small molecules — within a single architecture built upon AlphaFold3-like structure prediction.',
  },
  {
    id: '02',
    title: 'Multi-level Control',
    desc: 'Task-oriented masking mechanism provides fine-grained conditional control at entity-, token-, and atom-levels, supporting binder design, motif scaffolding, and atomic motif engineering.',
  },
  {
    id: '03',
    title: 'Flexible & Rigid Modes',
    desc: 'Supports both fixed-target (rigid receptor) and co-design (flexible receptor) strategies, enabling epitope-specific generation through hotspot residue guidance.',
  },
  {
    id: '04',
    title: 'Superior Throughput',
    desc: 'Consistently outperforms modality-specific baselines across 11 benchmark tasks, achieving 2-4 orders of magnitude improvement in design throughput with minutes per sample.',
  },
  {
    id: '05',
    title: 'Novel Interactions',
    desc: 'Enables previously inaccessible design capabilities including protein-binding RNA/DNA aptamers and nucleic acid-binding small molecules.',
  },
  {
    id: '06',
    title: 'Wet-lab Validated',
    desc: 'Achieved high-affinity results in protein mini-binder designs, with optimal binders for multiple targets reaching the pM scale.',
  },
]

// Architecture modules
const archModules = [
  {
    id: '1',
    title: 'Embedding Module',
    desc: 'Unified generative tokens abstract minimal chemical units across modalities. Target 3D structures are incorporated as initial coordinates and distance constraints.',
  },
  {
    id: '2',
    title: 'Conditional Module',
    desc: 'Dual control mechanism: initial coordinate "guess" and distance-based interaction modeling. Hotspot residue features enable epitope-specific design.',
  },
  {
    id: '3',
    title: 'OInvFold Module',
    desc: 'Unified inverse folding assigns sequences to protein/nucleic acid backbones and atom types to ligand scaffolds with modality-specific decoders.',
  },
]


</script>

<style scoped>
/* Particle decorations */
.particle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.15;
}

.particle-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #3b82f6, transparent);
  top: 10%;
  left: 15%;
  animation: float 20s ease-in-out infinite;
}

.particle-2 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, #8b5cf6, transparent);
  top: 60%;
  right: 10%;
  animation: float 25s ease-in-out infinite reverse;
}

.particle-3 {
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, #06b6d4, transparent);
  bottom: 20%;
  left: 30%;
  animation: float 18s ease-in-out infinite 2s;
}

.particle-4 {
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, #10b981, transparent);
  top: 30%;
  right: 25%;
  animation: float 22s ease-in-out infinite 5s;
}

.particle-5 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, #6366f1, transparent);
  bottom: 10%;
  right: 30%;
  animation: float 28s ease-in-out infinite 3s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(30px, -30px) scale(1.05);
  }
  50% {
    transform: translate(-20px, 20px) scale(0.95);
  }
  75% {
    transform: translate(15px, 15px) scale(1.02);
  }
}

/* Grid pattern */
.bg-grid-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Radial gradient helper */
.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to));
}

/* Author expand transition */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  max-height: 500px;
  transform: translateY(0);
}
</style>

<route lang="yaml">
  meta:
    layout: blank
</route>
