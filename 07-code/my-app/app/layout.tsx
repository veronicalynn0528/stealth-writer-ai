import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stealth Writer AI | The Art of Human Expression",
  description: "Transform AI-generated content into natural, undetectable prose. Free, forever, and perfectly stealthy.",
  keywords: "AI humanizer, undetectable AI, humanize text, AI rewriter, bypass AI detection",
  openGraph: {
    title: "Stealth Writer AI | The Art of Human Expression",
    description: "Transform AI-generated content into natural, undetectable prose.",
    url: "https://stealthwriter.online",
    siteName: "Stealth Writer AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stealth Writer AI",
    description: "Transform AI-generated content into natural, undetectable prose.",
  },
  alternates: {
    canonical: "https://stealthwriter.online",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap" 
          rel="stylesheet" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-body-md text-on-surface selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
        {children}
      </body>
    </html>
  );
}
