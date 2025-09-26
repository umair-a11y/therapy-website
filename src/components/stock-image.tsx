"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'
import {
  fetchStockImages,
  getRandomQuery,
  PLACEHOLDER_IMAGES,
  type StockImage
} from '@/lib/stock-images'
import { cn } from '@/lib/utils'

interface StockImageComponentProps {
  query?: string
  category?: 'hero' | 'services' | 'about' | 'assessment' | 'general'
  width?: number
  height?: number
  className?: string
  priority?: boolean
  showCredit?: boolean
  fallbackToPlaceholder?: boolean
  alt?: string
}

export function StockImageComponent({
  query,
  category = 'general',
  width = 800,
  height = 600,
  className,
  priority = false,
  showCredit = true,
  fallbackToPlaceholder = true,
  alt = 'Therapy related image'
}: StockImageComponentProps) {
  const [image, setImage] = useState<StockImage | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    async function loadImage() {
      try {
        setIsLoading(true)
        setHasError(false)

        // Use provided query or get a random one from category
        const searchQuery = query || getRandomQuery(category)

        // Try to fetch real images
        const images = await fetchStockImages(searchQuery, 1)

        if (images.length > 0) {
          setImage(images[0])
        } else if (fallbackToPlaceholder) {
          // Use placeholder if no images found
          const randomPlaceholder =
            PLACEHOLDER_IMAGES[Math.floor(Math.random() * PLACEHOLDER_IMAGES.length)]
          setImage(randomPlaceholder)
        } else {
          setHasError(true)
        }
      } catch (error) {
        console.error('Error loading stock image:', error)
        if (fallbackToPlaceholder) {
          const randomPlaceholder =
            PLACEHOLDER_IMAGES[Math.floor(Math.random() * PLACEHOLDER_IMAGES.length)]
          setImage(randomPlaceholder)
        } else {
          setHasError(true)
        }
      } finally {
        setIsLoading(false)
      }
    }

    loadImage()
  }, [query, category, fallbackToPlaceholder])

  if (isLoading) {
    return (
      <Skeleton
        className={cn("bg-resolve-stone/20", className)}
        style={{ width, height }}
      />
    )
  }

  if (hasError || !image) {
    return (
      <div
        className={cn(
          "bg-gradient-to-br from-resolve-forest/20 to-resolve-sage/20",
          "flex items-center justify-center text-resolve-charcoal/50",
          className
        )}
        style={{ width, height }}
      >
        <span>Image unavailable</span>
      </div>
    )
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={image.url}
        alt={image.description || alt}
        width={width}
        height={height}
        priority={priority}
        className="object-cover w-full h-full"
        onError={() => {
          if (fallbackToPlaceholder && !image.id.startsWith('placeholder')) {
            const randomPlaceholder =
              PLACEHOLDER_IMAGES[Math.floor(Math.random() * PLACEHOLDER_IMAGES.length)]
            setImage(randomPlaceholder)
          } else {
            setHasError(true)
          }
        }}
      />

      {showCredit && (
        <div className="absolute bottom-0 right-0 px-2 py-1 bg-black/50 text-white text-xs">
          Photo by{' '}
          <a
            href={image.photographerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            {image.photographerName}
          </a>
          {' on '}
          {image.source === 'unsplash' ? 'Unsplash' : 'Pexels'}
        </div>
      )}
    </div>
  )
}

// Export a server component version that doesn't require client-side state
export function StockImageStatic({
  src,
  alt,
  width = 800,
  height = 600,
  className,
  priority = false
}: {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="object-cover w-full h-full"
      />
    </div>
  )
}