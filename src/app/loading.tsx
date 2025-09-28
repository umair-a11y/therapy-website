import { PageContentSkeleton } from "@/components/ui/LoadingSkeleton"

export default function RootLoading() {
  return (
    <div className="min-h-screen bg-background">
      <PageContentSkeleton />
    </div>
  )
}