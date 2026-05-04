import { MetadataRoute } from 'next';

const baseUrl = 'https://marie-sylvanus.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      images: [
        `${baseUrl}/portrait.png`,
        `${baseUrl}/og-image.jpg`,
      ],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [
        `${baseUrl}/portrait.png`,
        `${baseUrl}/og-image.jpg`,
      ],
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [
        `${baseUrl}/projects/barika.png`,
        `${baseUrl}/projects/requestflow.png`,
        `${baseUrl}/projects/uptown.png`,
        `${baseUrl}/projects/aimusic.png`,
        `${baseUrl}/projects/comptaia.png`,
        `${baseUrl}/projects/garage.png`,
      ],
    },
    {
      url: `${baseUrl}/projects/barika`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [`${baseUrl}/projects/barika.png`],
    },
    {
      url: `${baseUrl}/projects/roajelf`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [`${baseUrl}/projects/requestflow.png`],
    },
    {
      url: `${baseUrl}/projects/neon-mind`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [`${baseUrl}/projects/aimusic.png`],
    },
  ];
}
