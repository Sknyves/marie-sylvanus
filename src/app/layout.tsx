import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/core/SmoothScroll";
import Preloader from "@/components/core/Preloader";
import PWARegistry from "@/components/core/PWARegistry";

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://marie-sylvanus.vercel.app"),
  title: {
    default: "Marie Sylvanus KINKPON | Automatisation, IA & Solutions Digitales",
    template: "%s | Marie Sylvanus KINKPON"
  },
  description: "Consultante en automatisation, intelligence artificielle et solutions digitales. J'aide les entreprises et cabinets à automatiser leurs processus pour révéler leur potentiel stratégique et libérer du temps humain.",
  keywords: [
    "Marie Sylvanus KINKPON",
    "Consultante Automatisation IA",
    "Automatisation de processus",
    "Solutions Digitales",
    "Consultant IA Bénin",
    "Intelligence Artificielle Cotonou",
    "n8n Make Automatisation",
    "Next.js Solutions",
    "Développement SaaS IA",
    "Marie Sylvanus développeur",
    "Marie Sylvanus Bénin",
    "Marie Sylvanus IA",
    "Développeur Full Stack Cotonou",
    "AI Consultant Bénin",
    "Creative Developer Afrique",
    "Next.js Bénin",
    "Développeur",
    "Developpeur",
    "Développeur web",
    "Développeur Bénin",
    "Meilleur développeur",
    "Meilleur développeur Bénin",
    "Dev Bénin"
  ],
  authors: [{ name: "Marie Sylvanus KINKPON", url: "https://marie-sylvanus.vercel.app" }],
  creator: "Marie Sylvanus KINKPON",
  openGraph: {
    title: "Marie Sylvanus KINKPON | Automatisation, IA & Solutions Digitales",
    description: "Humain d'abord. Technologie ensuite. Optimisation de workflows, assistants IA et solutions digitales performantes.",
    url: "https://marie-sylvanus.vercel.app",
    siteName: "Marie Sylvanus KINKPON Portfolio",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marie Sylvanus KINKPON — Automatisation, IA & Solutions Digitales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marie Sylvanus KINKPON | Automatisation, IA & Solutions Digitales",
    description: "Humain d'abord. Technologie ensuite. Automatiser l'opérationnel pour révéler le stratégique.",
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
    statusBarStyle: "default",
    title: "Marie Sylvanus",
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
      "name": "Marie Sylvanus KINKPON",
      "alternateName": ["Marie Sylvanus", "KINKPON Marie Sylvanus Mahougnon"],
      "url": "https://marie-sylvanus.vercel.app",
      "jobTitle": "Consultante en Automatisation & IA",
      "description": "Consultante spécialisée en automatisation de processus, intelligence artificielle et solutions logicielles sur mesure.",
      "image": {
        "@type": "ImageObject",
        "url": "https://marie-sylvanus.vercel.app/portrait.png",
        "contentUrl": "https://marie-sylvanus.vercel.app/portrait.png",
        "name": "Marie Sylvanus KINKPON",
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
        "https://www.linkedin.com/in/marie-sylvanus-kinkpon/",
        "https://github.com/sknyves"
      ],
      "knowsAbout": [
        "Automatisation de processus",
        "Intelligence Artificielle",
        "Workflows n8n & Make",
        "Assistants IA & LLMs",
        "Solutions Digitales SaaS"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://marie-sylvanus.vercel.app/#website",
      "url": "https://marie-sylvanus.vercel.app",
      "name": "Marie Sylvanus KINKPON — Automatisation, IA & Solutions",
      "description": "Portfolio et services de Marie Sylvanus KINKPON, Consultante en automatisation, IA et solutions digitales.",
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