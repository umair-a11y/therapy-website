"use client";

import Link from "next/link";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body>
        <main className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="max-w-xl text-center">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-therapeutic-primary/10 text-therapeutic-primary">
              !
            </div>
            <h1 className="text-3xl font-bold mb-2">Something went wrong</h1>
            <p className="text-slate-600 mb-6">An unexpected error occurred. You can try again or return home.</p>
            <div className="flex gap-3 justify-center">
              <button onClick={reset} className="inline-flex items-center px-4 py-2 rounded-md bg-therapeutic-primary text-white hover:bg-therapeutic-primary/90">
                Try Again
              </button>
              <Link href="/" className="inline-flex items-center px-4 py-2 rounded-md border border-therapeutic-primary text-therapeutic-primary hover:bg-therapeutic-primary/10">
                Go Home
              </Link>
            </div>
            {process.env.NODE_ENV !== 'production' && (
              <pre className="mt-6 text-xs text-left whitespace-pre-wrap text-slate-500">
                {error?.message}
              </pre>
            )}
          </div>
        </main>
      </body>
    </html>
  );
}

