import { Metadata } from 'next';
import AboutContent from '@/components/sections/AboutContent';

export const metadata: Metadata = {
  title: "À Propos",
  description: "Découvrez le parcours international et l'expertise en IA de KINKPON Marie Sylvanus Mahougnon.",
};

export default function AboutPage() {
  return <AboutContent />;
}
