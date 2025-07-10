/**
 * Zustand stores barrel export file
 * 
 * This file exports all Zustand stores for centralized state management.
 * 
 * Example usage:
 * import { useCounterStore } from '@/stores'
 */

// Store exports
export { useCounterStore, initializeCounterStore } from './counter-store'
export type { CounterState } from './counter-store'

/**
 * Store initialization utilities
 */

/**
 * Reset all stores to their initial state
 * Useful for testing or user logout
 */
export function resetAllStores() {
  // Import the store locally to avoid circular dependency issues
  const { useCounterStore } = require('./counter-store')
  
  // Reset counter store
  useCounterStore.getState().reset()
  
  // Add other store resets here as you create more stores
  console.log('All stores reset to initial state')
}

/**
 * Store devtools configuration
 */
export const storeDevtools = {
  enabled: process.env.NODE_ENV === 'development',
  name: 'tiny-machines-vibe-stack',
}

export {}; // Prevent TypeScript from treating this as a script