// Curated Unsplash image IDs for therapy website
// These are hand-picked, high-quality images appropriate for mental health content

export const THERAPY_IMAGES = {
  // Hero images
  hero: {
    main: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0", // Professional therapy session (valid)
    about: "https://images.unsplash.com/photo-1607827448387-a67db1383b59", // Supportive conversation
    services: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e", // Professional male
    contact: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a", // Office setting
  },

  // Service-specific images
  services: {
    individualTherapy: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65", // One-on-one session
    adhd: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d", // Focused professional
    anxiety: "https://images.unsplash.com/photo-1493836734858-4014951add13", // Calm meditation
    depression: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88", // Hope and light
    anger: "https://images.unsplash.com/photo-1541199249251-f713e6145474", // Stress relief
    stress: "https://images.unsplash.com/photo-1506126613408-eca07ce68773", // Work-life balance
    addiction: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56", // Recovery support
    trauma: "https://images.unsplash.com/photo-1492681290082-e932832941e6", // Healing journey
    relationships: "https://images.unsplash.com/photo-1518398046578-8cca57782e17", // Couple talking
    workLife: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0", // Professional balance
    performance: "https://images.unsplash.com/photo-1552664730-d307ca884978", // Team success
    parenting: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9", // Father and child
    mensIssues: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a", // Confident man
  },

  // Location images
  locations: {
    toronto: "https://images.unsplash.com/photo-1517935706615-2717063c2225", // Toronto skyline
    ottawa: "https://images.unsplash.com/photo-1610135206960-1829d27717dc", // Ottawa Parliament
  },

  // Article images
  articles: {
    workStress: "https://images.unsplash.com/photo-1587560699334-bea93391dcef", // Stressed at work
    depression: "https://images.unsplash.com/photo-1493836734858-4014951add13", // Mental health awareness
    choosing: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e", // Professional choice
    main: "https://images.unsplash.com/photo-1529156069898-49662164384f", // Reading and learning
  },

  // Assessment images
  assessment: {
    main: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d", // Assessment forms
    adhd: "https://images.unsplash.com/photo-1555421689-d68471e189f2", // Focus assessment
    anxiety: "https://images.unsplash.com/photo-1493836734858-4014951add13", // Anxiety evaluation
    depression: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88", // Depression screening
    stress: "https://images.unsplash.com/photo-1506126613408-eca07ce68773", // Stress levels
    habits: "https://images.unsplash.com/photo-1506126613408-eca07ce68773", // Daily habits
  },

  // Team and about images
  team: {
    main: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca", // Professional team
    therapist1: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d", // Male therapist
    therapist2: "https://images.unsplash.com/photo-1594824476967-48c8b964273f", // Female therapist
    therapist3: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c", // Male professional
  },

  // General wellness images
  wellness: {
    meditation: "https://images.unsplash.com/photo-1506126613408-eca07ce68773", // Meditation
    nature: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e", // Peaceful nature
    support: "https://images.unsplash.com/photo-1521225099409-8e1efc95321d", // Support group
    growth: "https://images.unsplash.com/photo-1492681290082-e932832941e6", // Personal growth
  },

  // Pricing and booking
  booking: {
    consultation: "https://images.unsplash.com/photo-1576091160550-2173dba999ef", // Consultation
    pricing: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c", // Investment in health
  },
};

// Function to get Unsplash image with proper parameters
export function getUnsplashImage(url: string, params?: {
  w?: number;
  h?: number;
  q?: number;
  fit?: string;
  auto?: string;
}) {
  const defaultParams = {
    auto: 'format',
    fit: 'crop',
    q: 80,
    ...params
  };

  const queryString = new URLSearchParams(
    Object.entries(defaultParams).reduce((acc, [key, value]) => {
      if (value !== undefined && value !== null) {
        acc[key] = String(value);
      }
      return acc;
    }, {} as Record<string, string>)
  ).toString();

  return `${url}?${queryString}`;
}

// Helper to get responsive image srcSet
export function getResponsiveSrcSet(url: string) {
  const sizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
  return sizes
    .map(size => `${getUnsplashImage(url, { w: size })} ${size}w`)
    .join(', ');
}

// Get optimized image for specific use cases
export function getOptimizedImage(category: keyof typeof THERAPY_IMAGES, subcategory: string) {
  const images = THERAPY_IMAGES[category] as Record<string, string>;
  const baseUrl = images[subcategory];

  if (!baseUrl) {
    console.warn(`Image not found for ${category}.${subcategory}`);
    return null;
  }

  return {
    src: getUnsplashImage(baseUrl),
    srcSet: getResponsiveSrcSet(baseUrl),
    placeholder: getUnsplashImage(baseUrl, { w: 20, q: 10 }),
  };
}
