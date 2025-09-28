import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SanitizedConsultationInput } from '@/lib/security'

interface ConsultationResponse {
  success: boolean
  message: string
  leadId?: string
  error?: string
  retryAfter?: number
}

interface ConsultationMutationContext {
  submittedAt: number
  formData: SanitizedConsultationInput
}

export function useConsultationSubmission() {
  const queryClient = useQueryClient()

  return useMutation<
    ConsultationResponse,
    Error,
    SanitizedConsultationInput,
    ConsultationMutationContext
  >({
    mutationFn: async (data: SanitizedConsultationInput): Promise<ConsultationResponse> => {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        const error = new Error(result.error || 'Submission failed')
        // Attach retry information for rate limiting
        if (response.status === 429 && result.retryAfter) {
          ;(error as Error & { retryAfter?: number }).retryAfter = result.retryAfter
        }
        throw error
      }

      return result
    },
    onMutate: async (formData) => {
      // Optimistic update - immediately show submitting state
      const submittedAt = Date.now()

      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ['consultation'] })

      return { submittedAt, formData }
    },
    onSuccess: (data, variables, context) => {
      // Track successful submissions for analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'consultation_submitted', {
          event_category: 'engagement',
          event_label: 'therapy_consultation',
          value: 1,
        })
      }

      console.log('[Consultation] Submission successful:', {
        leadId: data.leadId,
        submissionTime: Date.now() - context.submittedAt,
      })
    },
    onError: (error, variables, context) => {
      // Log errors for monitoring
      console.error('[Consultation] Submission failed:', {
        error: error.message,
        submissionTime: context ? Date.now() - context.submittedAt : 0,
        retryAfter: (error as Error & { retryAfter?: number }).retryAfter,
      })

      // Track failed submissions for analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'consultation_failed', {
          event_category: 'error',
          event_label: 'therapy_consultation',
          value: 0,
        })
      }
    },
    // Retry configuration for network issues
    retry: (failureCount, error) => {
      // Don't retry rate limit errors (429)
      if ((error as Error & { retryAfter?: number }).retryAfter) {
        return false
      }

      // Don't retry client errors (400-499 except 429)
      if (error.message.includes('400') || error.message.includes('403')) {
        return false
      }

      // Retry network errors up to 3 times
      return failureCount < 3
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 5000),
  })
}

// Hook for tracking form analytics
export function useFormAnalytics() {
  return {
    trackFormStart: () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_start', {
          event_category: 'engagement',
          event_label: 'consultation_form',
        })
      }
    },
    trackFormAbandonment: (field: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_abandonment', {
          event_category: 'engagement',
          event_label: `consultation_form_${field}`,
        })
      }
    },
    trackFieldValidation: (field: string, isValid: boolean) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_validation', {
          event_category: 'ux',
          event_label: `${field}_${isValid ? 'valid' : 'invalid'}`,
        })
      }
    },
  }
}

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      eventParams?: Record<string, unknown>
    ) => void
  }
}