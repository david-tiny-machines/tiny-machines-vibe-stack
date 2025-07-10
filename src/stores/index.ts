/**
 * Zustand stores barrel export file
 * 
 * This file exports all Zustand stores for centralized state management.
 * 
 * Example usage:
 * import { useAuthStore, useUIStore } from '@/stores'
 */

// Example store structure (will be implemented in Phase 6)
// export { useAuthStore } from './auth-store'
// export { useUIStore } from './ui-store'

/**
 * Store initialization utilities
 */

/**
 * Reset all stores to their initial state
 * Useful for testing or user logout
 */
export function resetAllStores() {
    // This will be implemented when we add actual stores
    console.log('Resetting all stores...')
  }
  
  /**
   * Store devtools configuration
   */
  export const storeDevtools = {
    enabled: process.env.NODE_ENV === 'development',
    name: 'tiny-machines-vibe-stack',
  }
  
  export {}; // Prevent TypeScript from treating this as a script