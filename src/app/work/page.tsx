import { Metadata } from 'next';
import ProjectGrid from '@/components/sections/ProjectGrid';
import Navbar from '@/components/core/Navbar';
import Footer from '@/components/core/Footer';

export const metadata: Metadata = {
  title: 'Projets | Marie Sylvanus',
  description: 'Découvrez l\'ensemble de mes réalisations en développement web et intelligence artificielle.',
};

export default function WorkPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
        <ProjectGrid />
      </div>
      <Footer />
    </main>
  );
}
