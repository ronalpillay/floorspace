import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./polish.css";
import "./contemporary.css";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import SmoothScroll from "@/components/SmoothScroll";
import RevealObserver from "@/components/RevealObserver";
import CustomCursor from "@/components/CustomCursor";

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
    "Floor-Space India delivers premium commercial interiors and turnkey industrial construction across Pune, Mumbai, Bangalore, Hyderabad & 20+ cities. 470+ projects, 15+ years, ISO 9001:2015 certified.",
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
    description: "470+ projects across corporate, banking, pharma, and industrial sectors. Turnkey execution across India.",
    url: "https://floor-space.co.in",
    siteName: "Floor-Space India",
    locale: "en_IN",
    type: "website",
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
      <body className="grain" suppressHydrationWarning>
        <ScrollProgressBar />
        <SmoothScroll />
        <RevealObserver />
        <CustomCursor />
        {children}
        {/* Social FABs — Instagram + LinkedIn above WhatsApp */}
        <div className="c-social-fabs">
          <a
            href="https://www.instagram.com/floor_space_india"
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
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
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
