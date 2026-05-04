import { Metadata } from 'next';
import AboutContent from '@/components/sections/AboutContent';

export const metadata: Metadata = {
  title: "À Propos",
  description: "KINKPON Marie Sylvanus Mahougnon — Parcours international, expertise en IA et développement Full Stack. Basé à Cotonou, Bénin, ayant travaillé chez Neural Bridge à Londres.",
  openGraph: {
    title: "KINKPON Marie Sylvanus Mahougnon — À Propos",
    description: "Parcours, compétences et vision de KINKPON Marie Sylvanus Mahougnon, Creative Developer et AI Consultant basé à Cotonou, Bénin.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KINKPON Marie Sylvanus Mahougnon — À Propos",
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
