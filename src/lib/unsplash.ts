import { createApi } from 'unsplash-js';

// Initialize Unsplash client
export const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || '',
});

// Types for Unsplash API responses
export interface UnsplashPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string | null;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  user: {
    id: string;
    username: string;
    name: string;
    portfolio_url: string | null;
    bio: string | null;
    location: string | null;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
    };
  };
}

export interface UnsplashSearchResult {
  total: number;
  total_pages: number;
  results: UnsplashPhoto[];
}

// Utility function to search photos
export async function searchPhotos(
  query: string,
  options?: {
    page?: number;
    perPage?: number;
    orientation?: 'landscape' | 'portrait' | 'squarish';
    color?: 'black_and_white' | 'black' | 'white' | 'yellow' | 'orange' | 'red' | 'purple' | 'magenta' | 'green' | 'teal' | 'blue';
  }
) {
  try {
    const response = await unsplash.search.getPhotos({
      query,
      page: options?.page || 1,
      perPage: options?.perPage || 10,
      orientation: options?.orientation,
      color: options?.color,
    });

    if (response.errors) {
      console.error('Unsplash API error:', response.errors);
      return null;
    }

    return response.response;
  } catch (error) {
    console.error('Failed to search photos:', error);
    return null;
  }
}

// Utility function to get a single photo
export async function getPhoto(photoId: string) {
  try {
    const response = await unsplash.photos.get({ photoId });

    if (response.errors) {
      console.error('Unsplash API error:', response.errors);
      return null;
    }

    return response.response;
  } catch (error) {
    console.error('Failed to get photo:', error);
    return null;
  }
}

// Utility function to get random photos
export async function getRandomPhotos(
  options?: {
    count?: number;
    query?: string;
    orientation?: 'landscape' | 'portrait' | 'squarish';
    topics?: string[];
  }
) {
  try {
    const response = await unsplash.photos.getRandom({
      count: options?.count || 1,
      query: options?.query,
      orientation: options?.orientation,
      topicIds: options?.topics,
    });

    if (response.errors) {
      console.error('Unsplash API error:', response.errors);
      return null;
    }

    return response.response;
  } catch (error) {
    console.error('Failed to get random photos:', error);
    return null;
  }
}

// Track download for Unsplash guidelines compliance
export async function trackDownload(downloadLocation: string) {
  try {
    const response = await unsplash.photos.trackDownload({
      downloadLocation,
    });

    if (response.errors) {
      console.error('Failed to track download:', response.errors);
    }
  } catch (error) {
    console.error('Failed to track download:', error);
  }
}

// Predefined queries for therapy-related images
export const THERAPY_IMAGE_QUERIES = {
  mentalHealth: 'mental health wellness calm peaceful',
  therapy: 'therapy counseling support healing',
  stress: 'stress relief meditation mindfulness',
  anxiety: 'anxiety calm peaceful relaxation',
  depression: 'hope healing recovery light',
  work: 'work life balance professional office',
  relationships: 'relationships couple family connection',
  nature: 'nature calm peaceful landscape',
  wellness: 'wellness health fitness lifestyle',
  men: 'professional men portrait confidence',
};

// Helper function to get therapy-related images
export async function getTherapyImages(
  category: keyof typeof THERAPY_IMAGE_QUERIES,
  options?: {
    page?: number;
    perPage?: number;
  }
) {
  const query = THERAPY_IMAGE_QUERIES[category];
  return searchPhotos(query, {
    ...options,
    orientation: 'landscape', // Default to landscape for hero images
  });
}

// Helper function to build optimized Unsplash URLs
export function buildOptimizedUrl(
  photo: UnsplashPhoto,
  options?: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'jpg' | 'webp';
    fit?: 'crop' | 'max' | 'fill';
  }
) {
  const baseUrl = photo.urls.raw;
  const params = new URLSearchParams();

  if (options?.width) params.append('w', options.width.toString());
  if (options?.height) params.append('h', options.height.toString());
  if (options?.quality) params.append('q', options.quality.toString());
  if (options?.format) params.append('fm', options.format);
  if (options?.fit) params.append('fit', options.fit);

  // Add auto format and compression for better performance
  if (!options?.format) params.append('auto', 'format');
  params.append('cs', 'tinysrgb'); // Use tiny sRGB color space for smaller file size

  return `${baseUrl}&${params.toString()}`;
}

// Helper function to generate attribution text
export function generateAttribution(photo: UnsplashPhoto) {
  return {
    text: `Photo by ${photo.user.name} on Unsplash`,
    html: `Photo by <a href="${photo.user.links.html}?utm_source=therapy_website&utm_medium=referral" target="_blank" rel="noopener noreferrer">${photo.user.name}</a> on <a href="https://unsplash.com?utm_source=therapy_website&utm_medium=referral" target="_blank" rel="noopener noreferrer">Unsplash</a>`,
  };
}