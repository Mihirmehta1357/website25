import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improves loading performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Improves loading performance
});

export const metadata = {
  // Primary SEO Meta Tags
  title: {
    default: "Koncept Services - Premium Office Supplies & Cleaning Products in Delhi",
    template: "%s | Koncept Services"
  },
  description: "Leading supplier of office supplies, cleaning products, hygiene solutions & housekeeping items in Delhi. Premium partnerships with Diversey, HUL, Kent & more. Quality guaranteed.",
  
  // Keywords for better search visibility
  keywords: [
    "office supplies Delhi",
    "cleaning products Delhi",
    "hygiene products Delhi",
    "housekeeping supplies",
    "Diversey products Delhi", 
    "office stationery Delhi",
    "cleaning chemicals Delhi",
    "tissue papers Delhi",
    "cleaning machines Delhi",
    "office equipment Delhi"
  ],

  // Open Graph Meta Tags (for social media sharing)
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.konceptservices.in",
    title: "Koncept Services - Premium Office Supplies & Cleaning Products",
    description: "Leading supplier of office supplies, cleaning products & hygiene solutions in Delhi. Quality products from trusted brands like Diversey, HUL, Kent & more.",
    siteName: "Koncept Services",
    images: [
      {
        url: "/images/kss.jpg",
        width: 1200,
        height: 630,
        alt: "Koncept Services - Office Supplies & Cleaning Products"
      }
    ]
  },

  // Additional SEO Meta Tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.konceptservices.in"
  },

  // Local Business Schema
  other: {
    // Geographic targeting
    "geo.region": "IN-DL",
    "geo.placename": "Delhi",
    "geo.position": "28.7041;77.1025", // Delhi coordinates
    
    // Business information
    "business.contact_data.locality": "Delhi",
    "business.contact_data.country": "India",
    "business.contact_data.region": "Delhi",
  },

  // Verification tags (add your actual verification codes)
  verification: {
    google: "your-google-verification-code", // Replace with actual code
    // bing: "your-bing-verification-code", // Uncomment and add if needed
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN"> {/* Changed to en-IN for India */}
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.konceptservices.in" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Koncept Services",
              "description": "Leading supplier of office supplies, cleaning products, hygiene solutions and housekeeping items in Delhi",
              "url": "https://www.konceptservices.in",
              "telephone": "+91-XXXXXXXXXX", // Add your actual phone number
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Street Address", // Add actual address
                "addressLocality": "Delhi",
                "addressRegion": "Delhi",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.7041,
                "longitude": 77.1025
              },
              "openingHours": "Mo-Sa 09:00-18:00", // Adjust as needed
              "sameAs": [
                // Add social media URLs when available
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Office Supplies & Cleaning Products",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Office Supplies",
                      "description": "Complete range of office stationery and supplies"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Cleaning Products",
                      "description": "Professional cleaning chemicals and solutions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product", 
                      "name": "Hygiene Products",
                      "description": "Tissue papers, sanitizers and hygiene solutions"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
