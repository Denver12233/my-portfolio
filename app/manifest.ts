import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Denver Tandingan Portfolio',
    short_name: 'Denver Portfolio',
    description: 'Frontend Developer & UI/UX Designer Intern Portfolio. Showcasing projects and learning logs.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#16a34a',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
