import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/core/SmoothScroll";
import Preloader from "@/components/core/Preloader";

export const metadata: Metadata = {
  metadataBase: new URL("https://marie-sylvanus.com"),
  title: {
    default: "KINKPON Marie Sylvanus Mahougnon | Creative Developer & AI Consultant",
    template: "%s | KINKPON Marie Sylvanus Mahougnon"
  },
  description: "Portfolio de KINKPON Marie Sylvanus Mahougnon. Développeur Full Stack et Consultant en IA basé à Cotonou. Création d'écosystèmes numériques innovants et performants.",
  keywords: ["KINKPON Marie Sylvanus Mahougnon", "Marie Sylvanus", "Développeur Bénin", "AI Consultant", "Full Stack Developer", "Cotonou", "Next.js", "Python", "IA", "Creative Developer"],
  authors: [{ name: "KINKPON Marie Sylvanus Mahougnon" }],
  openGraph: {
    title: "KINKPON Marie Sylvanus Mahougnon | Creative Developer & AI Consultant",
    description: "Expert en IA et Développement Full Stack. Basé à Cotonou, servant le monde.",
    url: "https://marie-sylvanus.com",
    siteName: "Marie Sylvanus Portfolio",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KINKPON Marie Sylvanus Mahougnon Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KINKPON Marie Sylvanus Mahougnon",
    description: "Digital Craftsman spécialisé en IA & Développement Web interactif.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "KINKPON Marie Sylvanus Mahougnon",
    "url": "https://marie-sylvanus.com",
    "jobTitle": "Creative Developer & AI Consultant",
    "description": "Développeur Full Stack et Consultant en Intelligence Artificielle avec une expérience internationale (Neural Bridge Londres).",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cotonou",
      "addressCountry": "Benin"
    },
    "sameAs": [
      "https://www.linkedin.com/in/marie-sylvanus-734b432a9/",
      "https://github.com/sknyves",
      "https://wa.me/+22943655721"
    ]
  };

  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Preloader />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <div className="noise-overlay" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
