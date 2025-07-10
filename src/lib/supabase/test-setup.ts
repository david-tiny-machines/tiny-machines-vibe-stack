/**
 * Supabase Setup Test
 * 
 * This file tests that our Supabase setup works correctly.
 * Run this to verify everything is configured properly.
 * 
 * Usage:
 * import './lib/supabase/test-setup' // In a component to run tests
 */

import { 
    isSupabaseConfigured, 
    getSupabaseConfig,
    getBrowserSupabaseClient 
  } from '@/lib/supabase'
  
  /**
   * Test Supabase configuration
   */
  export function testSupabaseSetup() {
    console.log('🧪 Testing Supabase Setup...')
    
    const config = getSupabaseConfig()
    console.log('📊 Configuration:', config)
    
    if (!isSupabaseConfigured()) {
      console.log('✅ Supabase is not configured (this is fine!)')
      console.log('💡 To enable Supabase, add environment variables to .env.local')
      return { configured: false, working: true }
    }
    
    try {
      const client = getBrowserSupabaseClient()
      if (client) {
        console.log('✅ Supabase client created successfully!')
        return { configured: true, working: true }
      } else {
        console.log('❌ Failed to create Supabase client')
        return { configured: true, working: false }
      }
    } catch (error) {
      console.error('❌ Error creating Supabase client:', error)
      return { configured: true, working: false }
    }
  }
  
  // Auto-run test in development
  if (process.env.NODE_ENV === 'development') {
    // Only run in browser environment
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        testSupabaseSetup()
      }, 1000)
    }
  }