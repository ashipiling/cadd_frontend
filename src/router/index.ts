import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from '~pages'
import { createRouterGuard } from './guard'

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If there's a hash, scroll to the element with that id
    if (to.hash) {
      return new Promise((resolve) => {
        // Wait for the next tick to ensure the page has rendered
        setTimeout(() => {
          const element = document.querySelector(to.hash)
          if (element) {
            resolve({
              el: to.hash,
              behavior: 'smooth',
              top: 80 // Offset for fixed header
            })
          } else {
            // If element not found, scroll to top
            resolve({ left: 0, top: 0, behavior: 'smooth' })
          }
        }, 100)
      })
    }
    
    // If there's a saved position (e.g., back button), use it
    if (savedPosition) {
      return savedPosition
    }
    
    // Otherwise scroll to top
    return { left: 0, top: 0, behavior: 'smooth' }
  },
})

createRouterGuard(router)

export default router
