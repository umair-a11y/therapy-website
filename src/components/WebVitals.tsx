'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log all metrics for development
    if (process.env.NODE_ENV === 'development') {
      console.log('[WebVitals]', metric)
    }

    // Track critical metrics for therapy website performance
    const { name, value, id, label } = metric

    // Send to analytics (Google Analytics 4)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', name, {
        event_category: 'Web Vitals',
        event_label: id,
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        custom_parameter_1: label === 'web-vital',
        // Add therapy-specific context
        page_type: getPageType(),
        user_journey_stage: getUserJourneyStage(),
      })
    }

    // Track specific metrics important for therapy practice
    switch (name) {
      case 'FCP': // First Contentful Paint
        if (value > 2500) {
          console.warn('[Performance] Slow FCP detected:', value, 'ms')
        }
        break
      case 'LCP': // Largest Contentful Paint
        if (value > 2500) {
          console.warn('[Performance] Slow LCP detected:', value, 'ms')
        }
        break
      case 'CLS': // Cumulative Layout Shift
        if (value > 0.1) {
          console.warn('[Performance] High CLS detected:', value)
        }
        break
      case 'FID': // First Input Delay
        if (value > 100) {
          console.warn('[Performance] High FID detected:', value, 'ms')
        }
        break
      case 'INP': // Interaction to Next Paint (Core Web Vital)
        if (value > 200) {
          console.warn('[Performance] High INP detected:', value, 'ms')
        }
        break
      case 'TTFB': // Time to First Byte
        if (value > 800) {
          console.warn('[Performance] Slow TTFB detected:', value, 'ms')
        }
        break
    }

    // Send to Vercel Speed Insights if available
    if (typeof window !== 'undefined' && (window as Window & { va?: (command: string, event: string, data?: Record<string, unknown>) => void }).va) {
      ;(window as Window & { va: (command: string, event: string, data?: Record<string, unknown>) => void }).va('track', 'WebVital', {
        metric: name,
        value,
        label,
      })
    }
  })

  return null
}

// Helper functions to add therapy-specific context
function getPageType(): string {
  if (typeof window === 'undefined') return 'unknown'

  const path = window.location.pathname

  if (path === '/') return 'homepage'
  if (path.includes('/consultation') || path.includes('/contact')) return 'conversion'
  if (path.includes('/assessment') || path.includes('/self-check')) return 'assessment'
  if (path.includes('/services') || path.includes('/about')) return 'informational'
  if (path.includes('/anxiety') || path.includes('/depression') || path.includes('/adhd')) return 'condition_specific'

  return 'other'
}

function getUserJourneyStage(): string {
  if (typeof window === 'undefined') return 'unknown'

  const path = window.location.pathname
  const hasVisited = localStorage.getItem('hasVisited')

  if (!hasVisited) {
    localStorage.setItem('hasVisited', 'true')
    return 'first_visit'
  }

  if (path.includes('/consultation') || path.includes('/contact')) {
    return 'ready_to_convert'
  }

  if (path.includes('/assessment') || path.includes('/self-check')) {
    return 'exploring_needs'
  }

  return 'returning_visitor'
}

// TypeScript declarations for external libraries
declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      eventParams?: Record<string, unknown>
    ) => void
    va?: (command: string, event: string, data?: Record<string, unknown>) => void
  }
}