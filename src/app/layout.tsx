import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./polish.css";
import "./contemporary.css";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import SmoothScroll from "@/components/SmoothScroll";
import RevealObserver from "@/components/RevealObserver";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import BackToTop from "@/components/BackToTop";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Floor-Space India — Commercial Interiors & Industrial Construction",
    template: "%s | Floor-Space India",
  },
  description:
    "Floor-Space India delivers premium commercial interiors and turnkey industrial construction across Pune, Mumbai, Bangalore, Hyderabad & 20+ cities. 225+ projects, 17+ years, ISO 9001:2015 certified.",
  keywords: [
    "interior contractors India",
    "turnkey interiors Pune",
    "commercial interiors",
    "industrial construction",
    "office interior design Pune",
    "corporate office design",
    "pharma interiors",
    "interior fit-out Mumbai",
  ],
  openGraph: {
    title: "Floor-Space India — Commercial Interiors & Industrial Construction",
    description: "225+ projects across corporate, banking, pharma, and industrial sectors. Turnkey execution across India.",
    url: "https://floor-space.co.in",
    siteName: "Floor-Space India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://floor-space.co.in/images/tristone/01.jpg",
        width: 1200,
        height: 630,
        alt: "Floor-Space India — Premium commercial interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Floor-Space India — Commercial Interiors & Industrial Construction",
    description: "225+ projects across corporate, banking, pharma, and industrial sectors.",
    images: ["https://floor-space.co.in/images/tristone/01.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Floor-Space India Pvt. Ltd.",
              alternateName: "FSIPL",
              url: "https://floor-space.co.in",
              logo: "https://floor-space.co.in/images/fsipl-logo-new.png",
              image: "https://floor-space.co.in/images/tristone/01.jpg",
              description:
                "Turnkey commercial interior contractors and industrial construction specialists. 225+ projects delivered across India in 17+ years.",
              telephone: "+91-90119-99399",
              email: "rajesh@floor-space.co.in",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 18.5204,
                longitude: 73.8567,
              },
              areaServed: [
                "Pune", "Mumbai", "Bengaluru", "Chennai", "Hyderabad",
                "Delhi", "Kolkata", "Ahmedabad",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Interior & Construction Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Office Interiors" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Industrial Construction" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pharma & Healthcare Interiors" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Turnkey Interior Fit-Out" } },
                ],
              },
              sameAs: [
                "https://www.instagram.com/floor_space_india",
                "https://www.linkedin.com/company/floor-space-india-private-limited/",
                "https://youtube.com/@floor-spaceindiapvtltd",
              ],
            }),
          }}
        />
      </head>
      <body className="grain" suppressHydrationWarning>
        <Preloader />
        <ScrollProgressBar />
        <SmoothScroll />
        <RevealObserver />
        {/* CustomCursor disabled */}
        {children}
        <BackToTop />
        {/* Social FABs — Instagram + LinkedIn + YouTube above WhatsApp */}
        <div className="c-social-fabs">
          <a
            href="https://www.instagram.com/floor_space_india?igsh=cHU2OXV2bDN5NG5n"
            target="_blank"
            rel="noopener noreferrer"
            className="c-social-fab c-social-fab--instagram"
            aria-label="Follow us on Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/floor-space-india-private-limited/"
            target="_blank"
            rel="noopener noreferrer"
            className="c-social-fab c-social-fab--linkedin"
            aria-label="Connect on LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a
            href="https://youtube.com/@floor-spaceindiapvtltd?si=HxoFSfrXwDKgLILG"
            target="_blank"
            rel="noopener noreferrer"
            className="c-social-fab c-social-fab--youtube"
            aria-label="Watch us on YouTube"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
            </svg>
          </a>
        </div>

        {/* WhatsApp FAB — visible on every page */}
        <a
          href="https://wa.me/919011999399?text=Hi%20Floor-Space%2C%20I%27d%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="c-whatsapp-fab"
          aria-label="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
