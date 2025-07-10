import { create } from 'zustand'
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware'

/**
 * Counter store state interface
 */
export interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
  setCount: (count: number) => void
}

/**
 * Counter store hook
 * 
 * Simple Zustand store for demonstration purposes.
 * In production, you might want to split this into multiple stores
 * based on feature domains.
 */
export const useCounterStore = create<CounterState>()(
  devtools(
    persist(
      subscribeWithSelector((set, get) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        reset: () => set({ count: 0 }),
        setCount: (count: number) => set({ count }),
      })),
      {
        name: 'counter-storage',
        // Only persist the count value
        partialize: (state) => ({ count: state.count }),
      }
    ),
    {
      name: 'counter-store',
    }
  )
)

/**
 * SSR-safe way to initialize the store with server data
 * Call this in your component if you need to hydrate with server state
 */
export const initializeCounterStore = (initialCount?: number) => {
  if (typeof window !== 'undefined' && initialCount !== undefined) {
    useCounterStore.getState().setCount(initialCount)
  }
}