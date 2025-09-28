import { ConsultationFormSkeleton } from "@/components/ui/LoadingSkeleton"

export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Page header skeleton */}
        <div className="text-center mb-12 space-y-4">
          <div className="animate-pulse">
            <div className="h-10 bg-muted rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-6 bg-muted rounded w-1/2 mx-auto"></div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form skeleton */}
          <div>
            <ConsultationFormSkeleton />
          </div>

          {/* Contact info skeleton */}
          <div className="space-y-6">
            <div className="animate-pulse space-y-4">
              <div className="h-6 bg-muted rounded w-1/2"></div>
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-2/3"></div>
            </div>

            <div className="animate-pulse space-y-4">
              <div className="h-6 bg-muted rounded w-1/3"></div>
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="h-4 bg-muted rounded w-3/5"></div>
                <div className="h-4 bg-muted rounded w-2/5"></div>
              </div>
            </div>

            <div className="animate-pulse space-y-4">
              <div className="h-6 bg-muted rounded w-2/5"></div>
              <div className="h-4 bg-muted rounded w-full"></div>
              <div className="h-4 bg-muted rounded w-4/5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}