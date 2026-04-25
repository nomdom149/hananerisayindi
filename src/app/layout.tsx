import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Hanane Risayindi — Pensée · Identité · Visibilité",
    template: "%s — Hanane Risayindi",
  },
  description:
    "Hub éditorial de Hanane Risayindi. Multipotentialité, identité, stratégie de visibilité. Belgique.",
  metadataBase: new URL("https://hananerisayindi.be"),
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: "https://hananerisayindi.be",
    siteName: "Hanane Risayindi",
    images: [
      {
        url: "/og-background.png",
        width: 1200,
        height: 630,
        alt: "Hanane Risayindi — Pensée · Identité · Visibilité",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-background.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}