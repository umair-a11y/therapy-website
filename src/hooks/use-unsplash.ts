"use client";

import { useState, useEffect, useCallback } from "react";
import type { UnsplashPhoto } from "@/lib/unsplash";

interface UseUnsplashOptions {
  query?: string;
  orientation?: "landscape" | "portrait" | "squarish";
  perPage?: number;
  autoLoad?: boolean;
}

interface UseUnsplashReturn {
  photos: UnsplashPhoto[];
  loading: boolean;
  error: string | null;
  searchPhotos: (query: string) => Promise<void>;
  loadMorePhotos: () => Promise<void>;
  getRandomPhoto: () => Promise<void>;
  currentPage: number;
  totalPages: number;
  hasMore: boolean;
}

export function useUnsplash(options: UseUnsplashOptions = {}): UseUnsplashReturn {
  const [photos, setPhotos] = useState<UnsplashPhoto[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [currentQuery, setCurrentQuery] = useState(options.query || "");

  const searchPhotos = useCallback(async (query: string) => {
    setLoading(true);
    setError(null);
    setCurrentQuery(query);
    setCurrentPage(1);

    try {
      const params = new URLSearchParams({
        action: "search",
        query,
        page: "1",
        perPage: (options.perPage || 10).toString(),
      });

      if (options.orientation) {
        params.append("orientation", options.orientation);
      }

      const response = await fetch(`/api/unsplash?${params}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch photos");
      }

      setPhotos(data.results || []);
      setTotalPages(data.total_pages || 0);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setPhotos([]);
    } finally {
      setLoading(false);
    }
  }, [options.orientation, options.perPage]);

  const loadMorePhotos = useCallback(async () => {
    if (!currentQuery || loading || currentPage >= totalPages) return;

    setLoading(true);
    setError(null);

    try {
      const nextPage = currentPage + 1;
      const params = new URLSearchParams({
        action: "search",
        query: currentQuery,
        page: nextPage.toString(),
        perPage: (options.perPage || 10).toString(),
      });

      if (options.orientation) {
        params.append("orientation", options.orientation);
      }

      const response = await fetch(`/api/unsplash?${params}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch photos");
      }

      setPhotos(prev => [...prev, ...(data.results || [])]);
      setCurrentPage(nextPage);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, [currentQuery, currentPage, totalPages, loading, options.orientation, options.perPage]);

  const getRandomPhoto = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        action: "random",
        count: "1",
      });

      if (currentQuery) {
        params.append("query", currentQuery);
      }

      if (options.orientation) {
        params.append("orientation", options.orientation);
      }

      const response = await fetch(`/api/unsplash?${params}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch random photo");
      }

      const randomPhoto = Array.isArray(data) ? data[0] : data;
      setPhotos([randomPhoto]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setPhotos([]);
    } finally {
      setLoading(false);
    }
  }, [currentQuery, options.orientation]);

  // Auto-load photos on mount if query is provided and autoLoad is true
  useEffect(() => {
    if (options.query && options.autoLoad !== false) {
      searchPhotos(options.query);
    }
  }, []); // Only run on mount

  const hasMore = currentPage < totalPages;

  return {
    photos,
    loading,
    error,
    searchPhotos,
    loadMorePhotos,
    getRandomPhoto,
    currentPage,
    totalPages,
    hasMore,
  };
}

// Hook for tracking Unsplash photo downloads (required by Unsplash guidelines)
export function useUnsplashDownload() {
  const trackDownload = useCallback(async (downloadLocation: string) => {
    try {
      await fetch("/api/unsplash", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "track-download",
          downloadLocation,
        }),
      });
    } catch (error) {
      console.error("Failed to track download:", error);
    }
  }, []);

  return { trackDownload };
}