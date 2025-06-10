<template>
  <header :class="[
    backgroundColor === 'dark' ? 'bg-transparent backdrop-blur-sm' : 'bg-transparent backdrop-blur-sm',
    'fixed top-0 left-0 right-0 z-50 transition-transform duration-300',
    { '-translate-y-full': enableScrollHiding && !headerVisible }
  ]">
    <div class="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 relative flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-md">
          <span class="text-white font-bold text-lg">H</span>
        </div>
        <div class="flex flex-col">
          <span :class="backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'" class="text-2xl font-bold leading-tight tracking-tight">Hou Lab</span>
          <span :class="backgroundColor === 'dark' ? 'text-blue-400/90' : 'text-blue-600/90'" class="text-xs font-medium">Drug Design and Computational Biology</span>
        </div>
      </div>
      
      <div class="flex items-center space-x-6">
        <nav class="hidden md:flex space-x-6" :class="backgroundColor === 'dark' ? 'text-white' : 'text-gray-800'">
          <a href="/" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'">{{ t('headerFooter.home') }}</a>
          
          <div class="relative group">
            <a href="/people" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'" class="flex items-center gap-1">
              {{ t('headerFooter.people') }}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            <div :class="backgroundColor === 'dark' ? 'bg-gray-800/90' : 'bg-white/90'" class="absolute left-0 mt-2 w-48 backdrop-blur-sm shadow-lg rounded-md py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
              <a href="/people#faculty" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                {{ t('headerFooter.faculty') }}
              </a>
              <a href="/people#postdoc" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                {{ t('headerFooter.postdoc') }}
              </a>
              <a href="/people#graduate" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                {{ t('headerFooter.graduate') }}
              </a>
              <a href="/people#undergraduate" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                {{ t('headerFooter.undergraduate') }}
              </a>
              <a href="/people#alumni" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                {{ t('headerFooter.alumni') }}
              </a>
            </div>
          </div>
          <!-- 新闻中心  -->
          <div class="relative group">
            <a href="/publication" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'" class="flex items-center gap-1">
              {{ t('headerFooter.publications') }}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            <div :class="backgroundColor === 'dark' ? 'bg-gray-800/90' : 'bg-white/90'" class="absolute left-0 mt-2 w-48 backdrop-blur-sm shadow-lg rounded-md py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
              <a href="/publication#publication" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                {{ t('headerFooter.papers') }}
              </a>
              <a href="/publication#software" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                {{ t('headerFooter.softwarePatent') }}
              </a>
              <a href="/publication#patent" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                {{ t('headerFooter.patents') }}
              </a>
            </div>
          </div>
          <div class="relative group">
            <a href="/software" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'" class="flex items-center gap-1">
              {{ t('headerFooter.software') }}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            <div :class="backgroundColor === 'dark' ? 'bg-gray-800/90' : 'bg-white/90'" class="absolute left-0 mt-2 w-48 backdrop-blur-sm shadow-lg rounded-md py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
              <a href="/software#database" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                {{ t('headerFooter.database') }}
              </a>
              <a href="/software#molecular" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                {{ t('headerFooter.molecularFeaturization') }}
              </a>
              <a href="/software#qsar" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                {{ t('headerFooter.QSARModeling') }}
              </a>
              <a href="/software#admet" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                {{ t('headerFooter.ADMETPrediction') }}
              </a>
              <a href="/software#docking" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                {{ t('headerFooter.proteinLigandDocking') }}
              </a>
              <a href="/software#freeenergy" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                {{ t('headerFooter.bindingFreeEnergyPrediction') }}
              </a>
              <a href="/software#denovo" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                {{ t('headerFooter.DeNovoDrugDesign') }}
              </a>
              <a href="/software#ppdocking" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                {{ t('headerFooter.proteinProteinDocking') }}
              </a>
              <a href="/software#imgrec" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                {{ t('headerFooter.molecularImageRecognition') }}
              </a>
              <a href="/software#tools" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                {{ t('headerFooter.drugDesignTools') }}
              </a>
            </div>
          </div>
          <div class="relative group">
            <a href="/links" :class="backgroundColor === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600'" class="flex items-center gap-1">
              {{ t('headerFooter.links') }}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            <div :class="backgroundColor === 'dark' ? 'bg-gray-800/90' : 'bg-white/90'" class="absolute left-0 mt-2 w-48 backdrop-blur-sm shadow-lg rounded-md py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
              <a href="/links#cooperation_group" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                {{ t('headerFooter.collaborators') }}
              </a>
              <a href="/links#important_journal" :class="backgroundColor === 'dark' ? 'text-gray-100 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'" class="block px-4 py-2">
                {{ t('headerFooter.importantJournals') }}
              </a>
            </div>
          </div>
        </nav>
        
        <!-- Mobile menu button -->
        <button 
          class="md:hidden text-2xl p-1 transition-colors duration-200 rounded-full"
          :class="backgroundColor === 'dark' ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-gray-800/10'"
          @click="toggleMobileMenu"
          aria-label="Menu"
        >
          <Menu />
        </button>
        
        <!-- Language button - hide on mobile -->
        <Button 
          variant="icon" 
          :class="backgroundColor === 'dark' ? 'border-blue-500 text-blue-400 hover:bg-blue-500/20' : 'border-blue-600 text-blue-600 hover:bg-blue-600/10'"
          class="hidden md:block px-3 py-1 text-sm min-w-0 w-auto"
          @click="toggleLanguage"
        >
          {{ locale === 'zh-CN' ? 'EN' : '中' }}
        </Button>
      </div>
    </div>
  </header>

  <!-- Mobile menu overlay with transition -->
  <Transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition ease-in duration-150"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="mobileMenuOpen" 
         class="fixed inset-0 z-[100] md:hidden overflow-y-auto"
         :class="backgroundColor === 'dark' ? 'bg-gray-900' : 'bg-white'">
      <div class="container mx-auto px-6 py-6 flex items-center justify-between border-b" 
           :class="backgroundColor === 'dark' ? 'border-gray-700/30' : 'border-gray-200'">
        <!-- Logo in mobile menu -->
        <div class="flex items-center">
          <a href="/" class="text-xl font-semibold" 
            :class="backgroundColor === 'dark' ? 'text-white' : 'text-gray-900'">
            Hou Lab
          </a>
        </div>
        
        <!-- Close button -->
        <button 
          class="text-2xl p-1 transition-colors duration-200 rounded-full"
          :class="backgroundColor === 'dark' ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-gray-800/10'"
          @click="toggleMobileMenu"
          aria-label="Close menu"
        >
          <X />
        </button>
      </div>
      
      <div class="container mx-auto px-6 py-4 h-[calc(100vh-80px)] overflow-y-auto">
        <div class="space-y-2">
          <a href="/" 
             class="flex items-center py-3 px-4 rounded-lg transition-colors duration-200" 
             :class="backgroundColor === 'dark' ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-100'"
             @click="closeMobileMenu">
            <Home class="w-5 h-5 mr-3" />
            <span class="font-medium">{{ t('headerFooter.home') }}</span>
          </a>
          
          <!-- 人员组成 -->
          <div class="mb-4">
            <div class="flex items-center py-3 px-4 rounded-lg text-lg font-medium"
                 :class="backgroundColor === 'dark' ? 'text-white bg-gray-800/50' : 'text-gray-900 bg-gray-100/80'">
              <Users class="w-5 h-5 mr-3" />
              <span>{{ t('headerFooter.people') }}</span>
            </div>
            <div class="mt-1 ml-4 space-y-1">
              <a href="/people#faculty" 
                 class="flex items-center py-2 px-4 rounded-lg transition-colors duration-200" 
                 :class="backgroundColor === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'"
                 @click="closeMobileMenu">
                <User class="w-4 h-4 mr-3 opacity-70" />
                <span>{{ t('headerFooter.faculty') }}</span>
              </a>
              <a href="/people#postdoc" 
                 class="flex items-center py-2 px-4 rounded-lg transition-colors duration-200" 
                 :class="backgroundColor === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'"
                 @click="closeMobileMenu">
                <UserSquare class="w-4 h-4 mr-3 opacity-70" />
                <span>{{ t('headerFooter.postdoc') }}</span>
              </a>
              <a href="/people#graduate" 
                 class="flex items-center py-2 px-4 rounded-lg transition-colors duration-200" 
                 :class="backgroundColor === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'"
                 @click="closeMobileMenu">
                <GraduationCap class="w-4 h-4 mr-3 opacity-70" />
                <span>{{ t('headerFooter.graduate') }}</span>
              </a>
              <a href="/people#undergraduate" 
                 class="flex items-center py-2 px-4 rounded-lg transition-colors duration-200" 
                 :class="backgroundColor === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'"
                 @click="closeMobileMenu">
                <Backpack class="w-4 h-4 mr-3 opacity-70" />
                <span>{{ t('headerFooter.undergraduate') }}</span>
              </a>
              <a href="/people#alumni" 
                 class="flex items-center py-2 px-4 rounded-lg transition-colors duration-200" 
                 :class="backgroundColor === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'"
                 @click="closeMobileMenu">
                <History class="w-4 h-4 mr-3 opacity-70" />
                <span>{{ t('headerFooter.alumni') }}</span>
              </a>
            </div>
          </div>
          
          <!-- 论文专利 -->
          <div class="mb-4">
            <div class="flex items-center py-3 px-4 rounded-lg text-lg font-medium"
                 :class="backgroundColor === 'dark' ? 'text-white bg-gray-800/50' : 'text-gray-900 bg-gray-100/80'">
              <FileText class="w-5 h-5 mr-3" />
              <span>{{ t('headerFooter.publications') }}</span>
            </div>
            <div class="mt-1 ml-4 space-y-1">
              <a href="/publication#publication" 
                 class="flex items-center py-2 px-4 rounded-lg transition-colors duration-200" 
                 :class="backgroundColor === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'"
                 @click="closeMobileMenu">
                <BookOpen class="w-4 h-4 mr-3 opacity-70" />
                <span>{{ t('headerFooter.papers') }}</span>
              </a>
              <a href="/publication#software" 
                 class="flex items-center py-2 px-4 rounded-lg transition-colors duration-200" 
                 :class="backgroundColor === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'"
                 @click="closeMobileMenu">
                <Code class="w-4 h-4 mr-3 opacity-70" />
                <span>{{ t('headerFooter.softwarePatent') }}</span>
              </a>
              <a href="/publication#patent" 
                 class="flex items-center py-2 px-4 rounded-lg transition-colors duration-200" 
                 :class="backgroundColor === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'"
                 @click="closeMobileMenu">
                <Award class="w-4 h-4 mr-3 opacity-70" />
                <span>{{ t('headerFooter.patents') }}</span>
              </a>
            </div>
          </div>
          
          <!-- 程序开发 -->
          <div class="mb-4">
            <div class="flex items-center py-3 px-4 rounded-lg text-lg font-medium"
                 :class="backgroundColor === 'dark' ? 'text-white bg-gray-800/50' : 'text-gray-900 bg-gray-100/80'">
              <Laptop class="w-5 h-5 mr-3" />
              <span>{{ t('headerFooter.software') }}</span>
            </div>
            <div class="mt-1 ml-4 space-y-1">
              <a href="/software#database" 
                 class="flex items-center py-2 px-4 rounded-lg transition-colors duration-200" 
                 :class="backgroundColor === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'"
                 @click="closeMobileMenu">
                <Database class="w-4 h-4 mr-3 opacity-70" />
                <span>{{ t('headerFooter.database') }}</span>
              </a>
              <!-- Include other software links with appropriate icons -->
              <a href="/software#molecular" 
                 class="flex items-center py-2 px-4 rounded-lg transition-colors duration-200" 
                 :class="backgroundColor === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'"
                 @click="closeMobileMenu">
                <Atom class="w-4 h-4 mr-3 opacity-70" />
                <span>{{ t('headerFooter.molecularFeaturization') }}</span>
              </a>
              <a href="/software#qsar" 
                 class="flex items-center py-2 px-4 rounded-lg transition-colors duration-200" 
                 :class="backgroundColor === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'"
                 @click="closeMobileMenu">
                <Atom class="w-4 h-4 mr-3 opacity-70" />
                <span>{{ t('headerFooter.QSARModeling') }}</span>
              </a>
              <a href="/software#admet" 
                 class="flex items-center py-2 px-4 rounded-lg transition-colors duration-200" 
                 :class="backgroundColor === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'"
                 @click="closeMobileMenu">
                <Atom class="w-4 h-4 mr-3 opacity-70" />
                <span>{{ t('headerFooter.ADMETPrediction') }}</span>
              </a>
              <a href="/software#docking" 
                 class="flex items-center py-2 px-4 rounded-lg transition-colors duration-200" 
                 :class="backgroundColor === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'"
                 @click="closeMobileMenu">
                <Atom class="w-4 h-4 mr-3 opacity-70" />
                <span>{{ t('headerFooter.proteinLigandDocking') }}</span>
              </a>
              <a href="/software#freeenergy" 
                 class="flex items-center py-2 px-4 rounded-lg transition-colors duration-200" 
                 :class="backgroundColor === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'"
                 @click="closeMobileMenu">
                <Atom class="w-4 h-4 mr-3 opacity-70" />
                <span>{{ t('headerFooter.bindingFreeEnergyPrediction') }}</span>
              </a>
              <a href="/software#denovo" 
                 class="flex items-center py-2 px-4 rounded-lg transition-colors duration-200" 
                 :class="backgroundColor === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'"
                 @click="closeMobileMenu">
                <Atom class="w-4 h-4 mr-3 opacity-70" />
                <span>{{ t('headerFooter.DeNovoDrugDesign') }}</span>
              </a>
              <a href="/software#ppdocking" 
                 class="flex items-center py-2 px-4 rounded-lg transition-colors duration-200" 
                 :class="backgroundColor === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'"
                 @click="closeMobileMenu">
                <Atom class="w-4 h-4 mr-3 opacity-70" />
                <span>{{ t('headerFooter.proteinProteinDocking') }}</span>
              </a>
              <a href="/software#imgrec" 
                 class="flex items-center py-2 px-4 rounded-lg transition-colors duration-200" 
                 :class="backgroundColor === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'"
                 @click="closeMobileMenu">
                <Atom class="w-4 h-4 mr-3 opacity-70" />
                <span>{{ t('headerFooter.molecularImageRecognition') }}</span>
              </a>
              <a href="/software#tools" 
                 class="flex items-center py-2 px-4 rounded-lg transition-colors duration-200" 
                 :class="backgroundColor === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'"
                 @click="closeMobileMenu">
                <Atom class="w-4 h-4 mr-3 opacity-70" />
                <span>{{ t('headerFooter.drugDesignTools') }}</span>
              </a>
            </div>
          </div>
          
          <!-- 友情链接 -->
          <div class="mb-4">
            <div class="flex items-center py-3 px-4 rounded-lg text-lg font-medium"
                 :class="backgroundColor === 'dark' ? 'text-white bg-gray-800/50' : 'text-gray-900 bg-gray-100/80'">
              <Link class="w-5 h-5 mr-3" />
              <span>{{ t('headerFooter.links') }}</span>
            </div>
            <div class="mt-1 ml-4 space-y-1">
              <a href="/links#cooperation_group" 
                 class="flex items-center py-2 px-4 rounded-lg transition-colors duration-200" 
                 :class="backgroundColor === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'"
                 @click="closeMobileMenu">
                <Users2 class="w-4 h-4 mr-3 opacity-70" />
                <span>{{ t('headerFooter.collaborators') }}</span>
              </a>
              <a href="/links#important_journal" 
                 class="flex items-center py-2 px-4 rounded-lg transition-colors duration-200" 
                 :class="backgroundColor === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'"
                 @click="closeMobileMenu">
                <Newspaper class="w-4 h-4 mr-3 opacity-70" />
                <span>{{ t('headerFooter.importantJournals') }}</span>
              </a>
            </div>
          </div>
          
          <!-- Language toggle in mobile menu -->
          <div class="mt-6 mb-4 py-4 rounded-lg"
               :class="backgroundColor === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100/80'">
            <div class="flex items-center justify-between px-6">
              <div class="flex items-center text-lg font-medium"
                   :class="backgroundColor === 'dark' ? 'text-white' : 'text-gray-900'">
                <Globe class="w-5 h-5 mr-3" />
                <span>{{ t('headerFooter.language') }}</span>
              </div>
              <Button 
                variant="icon" 
                size="sm"
                :class="backgroundColor === 'dark' ? 'border-blue-500 text-blue-400 hover:bg-blue-500/20 bg-gray-800/50' : 'border-blue-600 text-blue-600 hover:bg-blue-600/10 bg-white/50'"
                class="px-3 py-1 text-sm min-w-0 w-auto font-medium"
                @click="toggleLanguage"
              >
                {{ locale === 'zh-CN' ? 'EN' : '中' }}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Button } from '@/components/ui/button'
import { 
  Menu, X, Home, Users, User, UserSquare, GraduationCap, Backpack, 
  History, FileText, BookOpen, Code, Award, Laptop, Database, Atom, 
  Link, Users2, Newspaper, Globe 
} from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const { t } = useI18n()
const headerVisible = ref(true)
const lastScrollY = ref(0)
const mobileMenuOpen = ref(false)

// const toggleLanguage = () => {
//   currentLanguage.value = currentLanguage.value === 'zh' ? 'en' : 'zh'
// }
const toggleLanguage = () => {
  // 在中英文之间切换
  locale.value = locale.value === 'zh-CN' ? 'en-US' : 'zh-CN'
  // 保存语言设置到localStorage
  localStorage.setItem('language', locale.value)
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  // Prevent body scrolling when menu is open
  document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleScroll = () => {
  if (!props.enableScrollHiding) return
  
  const currentScrollY = window.scrollY
  
  // Determine scroll direction and update header visibility
  if (currentScrollY > lastScrollY.value && currentScrollY > 50) {
    // Scrolling down and not at the top
    headerVisible.value = false
  } else {
    // Scrolling up or at the top
    headerVisible.value = true
  }
  
  lastScrollY.value = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const props = defineProps({
  backgroundColor: {
    type: String,
    default: 'dark',
    validator: (value) => ['dark', 'light'].includes(value)
  },
  enableScrollHiding: {
    type: Boolean,
    default: false
  }
});
</script>
