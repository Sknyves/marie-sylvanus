import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/core/SmoothScroll";
import Preloader from "@/components/core/Preloader";
import PWARegistry from "@/components/core/PWARegistry";

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://marie-sylvanus.vercel.app"),
  title: {
    default: "Marie Sylvanus | Creative Developer & AI Consultant",
    template: "%s | Marie Sylvanus"
  },
  description: "Portfolio de KINKPON Marie Sylvanus Mahougnon — Développeur Full Stack et Consultant en IA basé à Cotonou, Bénin. Écosystèmes numériques innovants et performants pour l'Afrique et le monde.",
  keywords: [
    "KINKPON Marie Sylvanus Mahougnon",
    "Marie Sylvanus",
    "Marie Sylvanus développeur",
    "Marie Sylvanus Bénin",
    "Marie Sylvanus IA",
    "Développeur Full Stack Cotonou",
    "AI Consultant Bénin",
    "Creative Developer Afrique",
    "Next.js Bénin",
    "Intelligence Artificielle Cotonou",
    "Développeur",
    "Developpeur",
    "Développeur web",
    "Développeur Bénin",
    "Meilleur développeur",
    "Meilleur développeur Bénin",
    "Dev Bénin"
  ],
  authors: [{ name: "KINKPON Marie Sylvanus Mahougnon", url: "https://marie-sylvanus.vercel.app" }],
  creator: "KINKPON Marie Sylvanus Mahougnon",
  openGraph: {
    title: "Marie Sylvanus | Creative Developer & AI Consultant",
    description: "KINKPON Marie Sylvanus Mahougnon — Expert en IA et Développement Full Stack basé à Cotonou, Bénin.",
    url: "https://marie-sylvanus.vercel.app",
    siteName: "Marie Sylvanus Portfolio",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KINKPON Marie Sylvanus Mahougnon — Creative Developer & AI Consultant, Cotonou Bénin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marie Sylvanus | Creative Developer & AI Consultant",
    description: "KINKPON Marie Sylvanus Mahougnon — Digital Craftsman spécialisé en IA & Développement Web, Cotonou.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Marie S.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://marie-sylvanus.vercel.app/#person",
      "name": "KINKPON Marie Sylvanus Mahougnon",
      "alternateName": ["Marie Sylvanus", "Marie Sylvanus Mahougnon"],
      "url": "https://marie-sylvanus.vercel.app",
      "jobTitle": "Creative Developer & AI Consultant",
      "description": "Développeur Full Stack et Consultant en Intelligence Artificielle basé à Cotonou, Bénin. Expérience internationale chez Neural Bridge (Londres).",
      "image": {
        "@type": "ImageObject",
        "url": "https://marie-sylvanus.vercel.app/portrait.png",
        "contentUrl": "https://marie-sylvanus.vercel.app/portrait.png",
        "name": "KINKPON Marie Sylvanus Mahougnon — Portrait officiel",
        "description": "Portrait officiel de KINKPON Marie Sylvanus Mahougnon, Développeur Full Stack et Consultant IA basé à Cotonou, Bénin.",
        "width": 800,
        "height": 1000,
        "representativeOfPage": true
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cotonou",
        "addressCountry": "BJ"
      },
      "sameAs": [
        "https://www.linkedin.com/in/marie-sylvanus-734b432a9/",
        "https://github.com/sknyves",
        "https://www.facebook.com/share/1BPvNbiCtm/"
      ],
      "knowsAbout": [
        "Développement Web",
        "Intelligence Artificielle",
        "Next.js",
        "Python",
        "Full Stack Development",
        "AI Consulting"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "@id": "https://marie-sylvanus.vercel.app/#portrait",
      "url": "https://marie-sylvanus.vercel.app/portrait.png",
      "contentUrl": "https://marie-sylvanus.vercel.app/portrait.png",
      "name": "KINKPON Marie Sylvanus Mahougnon",
      "description": "Portrait de KINKPON Marie Sylvanus Mahougnon, Creative Developer et AI Consultant basé à Cotonou, Bénin.",
      "creator": {
        "@type": "Person",
        "name": "KINKPON Marie Sylvanus Mahougnon"
      },
      "representativeOfPage": true,
      "license": "https://marie-sylvanus.vercel.app"
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://marie-sylvanus.vercel.app/#website",
      "url": "https://marie-sylvanus.vercel.app",
      "name": "Marie Sylvanus — Portfolio",
      "description": "Portfolio de KINKPON Marie Sylvanus Mahougnon, Creative Developer et AI Consultant.",
      "author": {
        "@id": "https://marie-sylvanus.vercel.app/#person"
      },
      "inLanguage": "fr-FR"
    }
  ];

  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <PWARegistry />
        <Preloader />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4E8Z0DEGSB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4E8Z0DEGSB');
          `}
        </Script>

        {/* Données structurées JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          key="structured-data"
        />
        
        <SmoothScroll>
          <div className="noise-overlay" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}