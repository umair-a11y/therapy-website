// Stock Image Integration for Resolve Men's Therapy
// Using Unsplash and Pexels APIs for free stock photos

export interface StockImage {
  id: string
  url: string
  thumbnailUrl: string
  photographerName: string
  photographerUrl: string
  source: 'unsplash' | 'pexels'
  description?: string
  width: number
  height: number
}

// NOTE: These APIs are free but require registration
// Get your API keys from:
// Unsplash: https://unsplash.com/developers
// Pexels: https://www.pexels.com/api/

const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || ''
const PEXELS_API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY || ''

// Curated search terms for men's therapy website
export const THERAPY_IMAGE_QUERIES = {
  hero: [
    'man looking thoughtfully out office window',
    'diverse group of men collaborating',
    'man smiling at sunrise',
    'man in business casual walking city street',
    'hopeful man looking up outdoors'
  ],
  services: [
    'man hiking trail with backpack',
    'man navigating with map and compass',
    'man crossing wooden bridge in forest',
    'man climbing rock wall',
    'man walking along winding road'
  ],
  about: [
    'two men talking over coffee',
    'friends supporting each other outdoors',
    'man listening intently in conversation',
    'group of men in a workshop',
    'authentic portrait of a smiling man'
  ],
  assessment: [
    'man journaling by a lake',
    'man sitting on dock looking at water',
    'man practicing yoga outdoors at dawn',
    'man meditating on a quiet beach',
    'man reading a book in a quiet corner'
  ],
  general: [
    'mental health men',
    'mens wellness',
    'male meditation',
    'men support group',
    'professional man thinking'
  ]
}

// Fetch images from Unsplash
export async function fetchUnsplashImages(
  query: string,
  perPage: number = 10
): Promise<StockImage[]> {
  if (!UNSPLASH_ACCESS_KEY) {
    console.warn('Unsplash API key not configured')
    return []
  }

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
        query
      )}&per_page=${perPage}&orientation=landscape`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
        }
      }
    )

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`)
    }

    const data = await response.json()

    return data.results.map((photo: any) => ({
      id: photo.id,
      url: photo.urls.regular,
      thumbnailUrl: photo.urls.small,
      photographerName: photo.user.name,
      photographerUrl: `${photo.user.links.html}?utm_source=resolve_mens_therapy&utm_medium=referral`,
      source: 'unsplash' as const,
      description: photo.description || photo.alt_description,
      width: photo.width,
      height: photo.height
    }))
  } catch (error) {
    console.error('Error fetching Unsplash images:', error)
    return []
  }
}

// Fetch images from Pexels
export async function fetchPexelsImages(
  query: string,
  perPage: number = 10
): Promise<StockImage[]> {
  if (!PEXELS_API_KEY) {
    console.warn('Pexels API key not configured')
    return []
  }

  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(
        query
      )}&per_page=${perPage}&orientation=landscape`,
      {
        headers: {
          Authorization: PEXELS_API_KEY
        }
      }
    )

    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.status}`)
    }

    const data = await response.json()

    return data.photos.map((photo: any) => ({
      id: photo.id.toString(),
      url: photo.src.large,
      thumbnailUrl: photo.src.medium,
      photographerName: photo.photographer,
      photographerUrl: photo.photographer_url,
      source: 'pexels' as const,
      description: photo.alt,
      width: photo.width,
      height: photo.height
    }))
  } catch (error) {
    console.error('Error fetching Pexels images:', error)
    return []
  }
}

// Fetch images from both sources
export async function fetchStockImages(
  query: string,
  perPage: number = 5
): Promise<StockImage[]> {
  const [unsplashImages, pexelsImages] = await Promise.all([
    fetchUnsplashImages(query, perPage),
    fetchPexelsImages(query, perPage)
  ])

  // Combine and shuffle results for variety
  const allImages = [...unsplashImages, ...pexelsImages]
  return allImages.sort(() => Math.random() - 0.5)
}

// Get a random query from a category
export function getRandomQuery(category: keyof typeof THERAPY_IMAGE_QUERIES): string {
  const queries = THERAPY_IMAGE_QUERIES[category]
  return queries[Math.floor(Math.random() * queries.length)]
}

// Placeholder images for development (when APIs are not configured)
export const PLACEHOLDER_IMAGES: StockImage[] = [
  {
    id: 'placeholder-1',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    photographerName: 'Joseph Gonzalez',
    photographerUrl: 'https://unsplash.com/@miracletwentyone',
    source: 'unsplash',
    description: 'Man looking thoughtfully',
    width: 800,
    height: 600
  },
  {
    id: 'placeholder-2',
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=600&fit=crop',
    thumbnailUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop',
    photographerName: 'Albert Dera',
    photographerUrl: 'https://unsplash.com/@albertdera',
    source: 'unsplash',
    description: 'Professional man portrait',
    width: 800,
    height: 600
  },
  {
    id: 'placeholder-3',
    url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&h=600&fit=crop',
    thumbnailUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=300&fit=crop',
    photographerName: 'Alex Suprun',
    photographerUrl: 'https://unsplash.com/@alexsuprun',
    source: 'unsplash',
    description: 'Confident man smiling',
    width: 800,
    height: 600
  }
]