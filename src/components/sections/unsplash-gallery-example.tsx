"use client";

import { useState } from "react";
import { useUnsplash } from "@/hooks/use-unsplash";
import { UnsplashCard, UnsplashImage } from "@/components/ui/unsplash-image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, RefreshCw, Loader2 } from "lucide-react";
import { THERAPY_IMAGE_QUERIES } from "@/lib/unsplash";

export function UnsplashGalleryExample() {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    photos,
    loading,
    error,
    searchPhotos,
    loadMorePhotos,
    getRandomPhoto,
    hasMore,
  } = useUnsplash({
    query: "mental health wellness",
    orientation: "landscape",
    perPage: 12,
    autoLoad: true,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      searchPhotos(searchQuery.trim());
    }
  };

  const handleCategoryClick = (category: keyof typeof THERAPY_IMAGE_QUERIES) => {
    const query = THERAPY_IMAGE_QUERIES[category];
    setSearchQuery(query);
    searchPhotos(query);
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Unsplash Image Gallery
          </h2>
          <p className="text-gray-600">
            High-quality images for mental health and wellness content
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-2 max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Search for images..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={loading}>
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Search className="h-4 w-4" />
              )}
              <span className="ml-2">Search</span>
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={getRandomPhoto}
              disabled={loading}
            >
              <RefreshCw className="h-4 w-4" />
              <span className="ml-2">Random</span>
            </Button>
          </div>
        </form>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.keys(THERAPY_IMAGE_QUERIES).map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              onClick={() =>
                handleCategoryClick(category as keyof typeof THERAPY_IMAGE_QUERIES)
              }
              className="capitalize"
            >
              {category.replace(/([A-Z])/g, " $1").trim()}
            </Button>
          ))}
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
            Error: {error}
          </div>
        )}

        {/* Photo Grid */}
        {photos.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {photos.map((photo) => (
                <UnsplashCard
                  key={photo.id}
                  photo={photo}
                  title={photo.alt_description || "Untitled"}
                  description={photo.description || undefined}
                  className="cursor-pointer hover:shadow-xl"
                />
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="text-center mt-8">
                <Button
                  onClick={loadMorePhotos}
                  disabled={loading}
                  variant="outline"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Loading...
                    </>
                  ) : (
                    "Load More"
                  )}
                </Button>
              </div>
            )}
          </>
        ) : (
          !loading && (
            <div className="text-center py-12">
              <p className="text-gray-500">No photos found. Try a different search.</p>
            </div>
          )
        )}

        {/* Loading State */}
        {loading && photos.length === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-200 animate-pulse rounded-lg h-64"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Example of using a single Unsplash image in a hero section
export function UnsplashHeroExample() {
  const { photos, loading } = useUnsplash({
    query: "mental health professional",
    orientation: "landscape",
    perPage: 1,
    autoLoad: true,
  });

  const heroPhoto = photos[0] || null;

  return (
    <section className="relative">
      {loading ? (
        <div className="h-[600px] bg-gray-200 animate-pulse" />
      ) : (
        heroPhoto && (
          <div className="relative h-[600px]">
            <UnsplashImage
              photo={heroPhoto}
              width={1920}
              height={600}
              className="absolute inset-0 w-full h-full object-cover"
              priority
              quality={90}
              showAttribution
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Professional Mental Health Support
                </h1>
                <p className="text-xl text-white/90 max-w-2xl">
                  Evidence-based therapy designed specifically for men&apos;s unique challenges and needs
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
}