import { Metadata } from 'next';
import ProjectGrid from '@/components/sections/ProjectGrid';
import Navbar from '@/components/core/Navbar';
import Footer from '@/components/core/Footer';

export const metadata: Metadata = {
  title: 'Portfolio & Solutions | Marie Sylvanus KINKPON',
  description: 'Découvrez l\'ensemble des solutions développées : automatisation de workflows, assistants IA sur mesure et plateformes digitales.',
};

export default function WorkPage() {
  return (
    <main style={{ background: '#FAF8F5', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ paddingTop: '60px' }}>
        <ProjectGrid />
      </div>
      <Footer />
    </main>
  );
}
