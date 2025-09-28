import { AssessmentSkeleton } from "@/components/ui/LoadingSkeleton"

export default function AssessmentLoading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <AssessmentSkeleton />
      </div>
    </div>
  )
}