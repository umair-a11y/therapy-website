"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { buildOptimizedUrl, generateAttribution, type UnsplashPhoto } from "@/lib/unsplash";

interface UnsplashImageProps {
  photo: UnsplashPhoto | null;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  showAttribution?: boolean;
  onLoad?: () => void;
  fallbackSrc?: string;
}

export function UnsplashImage({
  photo,
  alt,
  width = 1920,
  height = 1080,
  className,
  priority = false,
  quality = 80,
  showAttribution = false,
  onLoad,
  fallbackSrc = "/images/placeholder.jpg",
}: UnsplashImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(fallbackSrc);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (photo) {
      const optimizedUrl = buildOptimizedUrl(photo, {
        width,
        height,
        quality,
        format: "webp",
        fit: "crop",
      });
      setImageSrc(optimizedUrl);
      setHasError(false);
    }
  }, [photo, width, height, quality]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    if (fallbackSrc && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
    }
  };

  const attribution = photo ? generateAttribution(photo) : null;
  const imageAlt = alt || photo?.alt_description || photo?.description || "Image";

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      <Image
        src={imageSrc}
        alt={imageAlt}
        width={width}
        height={height}
        priority={priority}
        className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
      />

      {showAttribution && attribution && !hasError && (
        <div className="absolute bottom-2 left-2 text-xs text-white bg-black/50 px-2 py-1 rounded">
          <div dangerouslySetInnerHTML={{ __html: attribution.html }} />
        </div>
      )}

      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <p className="text-gray-500 text-sm">Image unavailable</p>
        </div>
      )}
    </div>
  );
}

// Hero image component with Unsplash integration
interface UnsplashHeroImageProps {
  photo: UnsplashPhoto | null;
  title?: string;
  subtitle?: string;
  className?: string;
  overlayOpacity?: number;
}

export function UnsplashHeroImage({
  photo,
  title,
  subtitle,
  className = "",
  overlayOpacity = 0.5,
}: UnsplashHeroImageProps) {
  return (
    <div className={`relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden ${className}`}>
      {photo && (
        <UnsplashImage
          photo={photo}
          width={1920}
          height={600}
          className="absolute inset-0 w-full h-full object-cover"
          priority
          quality={90}
        />
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      {(title || subtitle) && (
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            {title && (
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl lg:text-2xl text-white/90">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Card component with Unsplash image
interface UnsplashCardProps {
  photo: UnsplashPhoto | null;
  title: string;
  description?: string;
  href?: string;
  className?: string;
}

export function UnsplashCard({
  photo,
  title,
  description,
  href,
  className = "",
}: UnsplashCardProps) {
  const CardWrapper = href ? 'a' : 'div';
  const wrapperProps = href ? { href } : {};

  return (
    <CardWrapper
      {...wrapperProps}
      className={`block group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      <div className="relative h-48 md:h-56 overflow-hidden">
        {photo && (
          <UnsplashImage
            photo={photo}
            width={400}
            height={250}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            quality={75}
          />
        )}
      </div>

      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-therapeutic-primary transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-gray-600 text-sm line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </CardWrapper>
  );
}