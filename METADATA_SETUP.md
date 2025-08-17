# Web Novel Project - Metadata & SEO Setup

## Overview

This project now includes comprehensive metadata and SEO optimization with:

- ✅ OpenGraph tags for social media sharing
- ✅ Twitter Card support
- ✅ Structured data (JSON-LD) for search engines
- ✅ Dynamic metadata for novel pages
- ✅ Web app manifest for PWA support
- ✅ Sitemap generation
- ✅ Robots.txt configuration
- ✅ Multiple icon formats and sizes

## Files Added/Modified

### Metadata Configuration

- `lib/metadata.ts` - Central metadata configuration
- `app/layout.tsx` - Updated with comprehensive metadata
- `app/sitemap.ts` - Dynamic sitemap generation
- `app/novel/[slug]/page.tsx` - Dynamic novel page metadata

### Static Assets (Replace with your actual images)

- `public/og-image.svg` - OpenGraph image (1200x630)
- `public/twitter-image.svg` - Twitter card image (1200x600)
- `public/favicon.svg` - Main favicon
- `public/apple-touch-icon.svg` - Apple touch icon (180x180)
- `public/safari-pinned-tab.svg` - Safari pinned tab icon
- `public/site.webmanifest` - Web app manifest
- `public/robots.txt` - Search engine crawler instructions

## Setup Instructions

### 1. Update Environment Variables

Add to your `.env` file:

```env
NEXT_PUBLIC_BASE_URL=https://your-actual-domain.com
```

### 2. Replace Placeholder Images

Replace these placeholder SVG files with your actual images:

**Required Sizes:**

- **OG Image**: 1200x630px (PNG/JPG recommended)
- **Twitter Image**: 1200x600px (PNG/JPG recommended)
- **Favicon**: 32x32px (ICO/PNG/SVG)
- **Apple Touch Icon**: 180x180px (PNG recommended)
- **PWA Icons**: 192x192px and 512x512px (PNG)

### 3. Update Social Media Handles

In `lib/metadata.ts`, update:

```typescript
twitter: {
  creator: '@your_twitter_handle',
  site: '@your_twitter_handle',
}
```

### 4. Add Verification Codes (Optional)

In `lib/metadata.ts`, uncomment and add your verification codes:

```typescript
verification: {
  google: 'your-google-verification-code',
  yandex: 'your-yandex-verification-code',
  // ... other verification codes
},
```

### 5. Update Domain References

Replace `https://spitfirenovelpub.vercel.app` with your actual domain in:

- `lib/metadata.ts`
- `public/robots.txt`
- Environment variables

## Features Included

### OpenGraph Tags

- Optimized for Facebook, LinkedIn, Discord, Slack
- Novel-specific metadata with cover images
- Proper fallbacks to default images

### Twitter Cards

- Large image cards for better engagement
- Novel-specific descriptions and images
- Proper Twitter handle attribution

### Structured Data (JSON-LD)

- Website schema for homepage
- Book schema for novel pages
- Search action markup
- Organization markup

### PWA Support

- Web app manifest with shortcuts
- Installable app experience
- Offline-ready configuration
- Custom app icons

### SEO Optimization

- Dynamic sitemap with novel pages
- Proper robots.txt configuration
- Canonical URLs
- Language declarations
- Meta descriptions and keywords

## Testing Your Metadata

### OpenGraph Testing

- [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [Discord](https://discord.com) - Share a link to test

### Twitter Cards

- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### Structured Data

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)

### General SEO

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

## Notes

1. **Image Optimization**: Consider using `next/image` optimized images for better performance
2. **Content Updates**: Metadata will automatically update when novel content changes
3. **Sitemap**: Regenerates automatically with trending novels
4. **Caching**: Metadata is cached at build time for better performance
5. **Multilingual**: Framework ready for multiple language support

## Deployment Checklist

- [ ] Replace all placeholder images
- [ ] Update domain in environment variables
- [ ] Add social media verification codes
- [ ] Test metadata with debugging tools
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (recommended)
- [ ] Configure CDN for images (recommended)

## Performance Tips

1. Optimize images for web (WebP format recommended)
2. Use appropriate image sizes for each use case
3. Consider implementing `next-seo` for more advanced SEO features
4. Monitor Core Web Vitals in production
