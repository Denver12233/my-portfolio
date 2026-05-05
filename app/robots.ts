import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://my-portfolio-zeta-one-99.vercel.app'}/sitemap.xml`,
  };
}
