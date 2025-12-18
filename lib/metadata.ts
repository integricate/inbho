import { Metadata } from 'next'

export const siteConfig = {
  name: 'INBHO',
  description: 'INBHO - Professional Full Stack Web Development Solutions. We build modern, scalable, and SEO-optimized web applications.',
  url: 'https://www.inbho.com',
  ogImage: '/images/og-image.png',
  links: {
    twitter: 'https://twitter.com/inbho',
    github: 'https://github.com/inbhos',
    linkedin: 'https://linkedin.com/company/inbho',
  },
  creator: 'INBHO Team',
  keywords: [
    'web development',
    'full stack development',
    'Next.js',
    'React',
    'TypeScript',
    'SEO optimization',
    'web applications',
    'software development',
    'frontend development',
    'backend development',
    'API development',
    'responsive design',
    'modern web apps',
    'INBHO',
  ],
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.creator }],
    creator: siteConfig.creator,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@inbho',
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}
