import { Metadata } from 'next';
import ProjectDetailContent from '@/components/sections/ProjectDetailContent';

export const metadata: Metadata = {
  title: "Projet",
  description: "Détails du projet et étude de cas.",
};

export default function ProjectPage() {
  return <ProjectDetailContent />;
}
