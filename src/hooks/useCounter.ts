'use client'

import { useCounterStore } from '@/stores/counter-store'

/**
 * Custom hook for counter operations
 * 
 * Provides a clean interface for counter operations without
 * exposing the store implementation to consumers.
 */
export function useCounter() {
  const count = useCounterStore((state) => state.count)
  const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state) => state.decrement)
  const reset = useCounterStore((state) => state.reset)
  const setCount = useCounterStore((state) => state.setCount)

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
    // Expose the store for advanced use cases
    store: useCounterStore,
  }
}