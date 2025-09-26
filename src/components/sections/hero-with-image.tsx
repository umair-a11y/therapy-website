import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getUnsplashImage } from "@/lib/therapy-images";

interface HeroWithImageProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl: string;
  imageAlt?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  height?: "small" | "medium" | "large" | "full";
}

export function HeroWithImage({
  title,
  subtitle,
  description,
  imageUrl,
  imageAlt = "Hero image",
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  overlay = true,
  overlayOpacity = 0.4,
  height = "large",
}: HeroWithImageProps) {
  const heightClasses = {
    small: "h-[400px]",
    medium: "h-[500px]",
    large: "h-[600px]",
    full: "h-screen",
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      {/* Background Image */}
      <Image
        src={getUnsplashImage(imageUrl, { w: 1920, h: 1080, q: 85 })}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        quality={85}
      />

      {/* Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {subtitle && (
          <p className="text-therapeutic-primary text-sm font-medium mb-4 uppercase tracking-wide">
            {subtitle}
          </p>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {title}
        </h1>

        {description && (
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            {description}
          </p>
        )}

        {(primaryButtonText || secondaryButtonText) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryButtonText && primaryButtonHref && (
              <Link href={primaryButtonHref}>
                <Button size="lg" className="w-full sm:w-auto">
                  {primaryButtonText}
                </Button>
              </Link>
            )}
            {secondaryButtonText && secondaryButtonHref && (
              <Link href={secondaryButtonHref}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 text-white border-white hover:bg-white/20">
                  {secondaryButtonText}
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}