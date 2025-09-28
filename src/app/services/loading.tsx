import { PageContentSkeleton } from "@/components/ui/LoadingSkeleton"

export default function ServicesLoading() {
  return (
    <div className="min-h-screen bg-background">
      <PageContentSkeleton />
    </div>
  )
}