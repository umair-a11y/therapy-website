import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-therapeutic-primary/10 text-therapeutic-primary">
          404
        </div>
        <h1 className="text-3xl font-bold mb-2">Page not found</h1>
        <p className="text-slate-600 mb-6">
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/" className="inline-flex items-center px-4 py-2 rounded-md bg-therapeutic-primary text-white hover:bg-therapeutic-primary/90">
            Go Home
          </Link>
          <Link href="/contact" className="inline-flex items-center px-4 py-2 rounded-md border border-therapeutic-primary text-therapeutic-primary hover:bg-therapeutic-primary/10">
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}

