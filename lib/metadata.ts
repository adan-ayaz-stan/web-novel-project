import { Metadata } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://spitfirenovelpub.vercel.app";

export const siteConfig = {
  name: "Web Novel Project",
  title: "Web Novel Project - Discover and Read Light Novels",
  description:
    "Explore a vast library of translated and original light novels. Search for your favorite stories, follow trending releases, and dive into exciting adventures—all in one place.",
  url: baseUrl,
  ogImage: `${baseUrl}/og-image.svg`,
  twitterImage: `${baseUrl}/twitter-image.svg`,
  keywords: [
    "light novels",
    "web novels",
    "manga",
    "anime",
    "reading",
    "translated novels",
    "korean novels",
    "chinese novels",
    "japanese novels",
    "isekai",
    "fantasy",
    "romance",
    "adventure",
    "trending novels",
    "novel search",
    "online reading",
  ],
  authors: [
    {
      name: "Web Novel Project Team",
      url: baseUrl,
    },
  ],
  creator: "Web Novel Project",
  publisher: "Web Novel Project",
  category: "Entertainment",
  genre: "Literature & Fiction",
  language: "en",
  themeColor: "#E94560",
  colorScheme: "dark",
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  category: siteConfig.category,
  classification: siteConfig.genre,

  // Basic meta tags
  applicationName: siteConfig.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // OpenGraph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
        type: "image/svg+xml",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@webnovelproject", // Replace with your actual Twitter handle
    site: "@webnovelproject", // Replace with your actual Twitter handle
    images: [
      {
        url: siteConfig.twitterImage,
        width: 1200,
        height: 600,
        alt: siteConfig.title,
      },
    ],
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#E94560" },
    ],
  },

  // Manifest
  manifest: "/site.webmanifest",

  // Additional meta tags
  other: {
    "apple-mobile-web-app-title": siteConfig.name,
    "application-name": siteConfig.name,
    "msapplication-TileColor": siteConfig.themeColor,
    "theme-color": siteConfig.themeColor,
    "color-scheme": siteConfig.colorScheme,
  },

  // Verification (add your verification codes)
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
    // other: {
    //   'facebook-domain-verification': 'your-facebook-verification-code',
    // },
  },

  // Alternate languages (if you support multiple languages)
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "en-US": siteConfig.url,
      // 'ja-JP': `${siteConfig.url}/ja`,
      // 'ko-KR': `${siteConfig.url}/ko`,
      // 'zh-CN': `${siteConfig.url}/zh`,
    },
  },

  // Archives and bookmarking
  archives: [`${siteConfig.url}/sitemap.xml`],
  bookmarks: [`${siteConfig.url}/trending`],
};

// Generate structured data for the homepage
export const generateHomePageJsonLd = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/favicon.svg`,
      },
    },
    sameAs: [
      // Add your social media URLs here
      // 'https://twitter.com/webnovelproject',
      // 'https://facebook.com/webnovelproject',
      // 'https://instagram.com/webnovelproject',
    ],
  };
};

// Generate structured data for novel pages
export const generateNovelJsonLd = (novel: {
  title: string;
  description?: string;
  author?: string;
  url: string;
  rating?: string;
  status?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: novel.title,
    description: novel.description,
    author: novel.author
      ? {
          "@type": "Person",
          name: novel.author,
        }
      : undefined,
    url: novel.url,
    aggregateRating: novel.rating
      ? {
          "@type": "AggregateRating",
          ratingValue: novel.rating,
          ratingCount: 1,
        }
      : undefined,
    bookFormat: "EBook",
    genre: "Fiction",
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
};
