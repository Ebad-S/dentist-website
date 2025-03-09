import '@/styles/globals.css';
import { Inter, Poppins } from 'next/font/google';
import { Providers } from './providers';
import type { Metadata, Viewport } from 'next';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import ThemeToggle from '@/components/ThemeToggle';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1e293b' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://vivadentistry.vercel.app'),
  title: 'Viva Dentistry | Dr. Amin Yeganeh | Professional Dental Care',
  description: 'Dr. Amin Yeganeh\'s Viva Dentistry offers professional dental services including general dentistry, cosmetic procedures, dental implants, and clear aligners. Dr. Yeganeh holds a Post-Graduate Diploma in Dental Implantology and is a preferred provider for Linea Clear Aligners and FastBraces.',
  keywords: 'dentist, dental clinic, dental care, teeth whitening, dental implants, emergency dentist, Dr. Amin Yeganeh, clear aligners, FastBraces, PGIDS, dental technology',
  authors: [{ name: 'Dr. Amin Yeganeh, PGIDS, BDS' }],
  creator: 'Viva Dentistry',
  alternates: {
    canonical: 'https://vivadentistry.vercel.app',
  },
  icons: [
    { rel: 'icon', url: '/favicon.jpg' },
    { rel: 'apple-touch-icon', url: '/favicon.jpg' },
  ],
  openGraph: {
    title: 'Viva Dentistry | Dr. Amin Yeganeh | Professional Dental Care',
    description: 'Dr. Amin Yeganeh\'s Viva Dentistry offers professional dental services including general dentistry, cosmetic procedures, dental implants, and clear aligners. Dr. Yeganeh holds a Post-Graduate Diploma in Dental Implantology and is a preferred provider for Linea Clear Aligners and FastBraces.',
    url: 'https://vivadentistry.vercel.app',
    siteName: 'Viva Dentistry',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo.jpg',
        width: 800,
        height: 600,
        alt: 'Viva Dentistry Logo',
      },
    ],
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://vivadentistry.vercel.app" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-primary-600 focus:text-white focus:z-50">
              Skip to main content
            </a>
            <header className="sticky top-0 z-50 bg-white dark:bg-secondary-900 shadow-sm dark:shadow-secondary-800/20" role="banner">
              <div className="container py-4">
                <div className="flex justify-between items-center">
                  <a href="/" className="flex items-center gap-4" aria-label="Viva Dentistry Home">
                    <div className="flex items-center">
                      <Image 
                        src="/logo.jpg" 
                        alt="Viva Dentistry Logo" 
                        width={80} 
                        height={80}
                        className="rounded-md"
                        priority
                      />
                      <span className="text-3xl font-bold text-primary-600 dark:text-primary-400 ml-4">Viva Dentistry</span>
                    </div>
                  </a>
                  <nav className="hidden md:flex space-x-8 items-center" aria-label="Main Navigation">
                    <a href="#services" className="relative font-medium text-secondary-700 dark:text-secondary-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 py-2 group">
                      Services
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#about" className="relative font-medium text-secondary-700 dark:text-secondary-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 py-2 group">
                      About
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#testimonials" className="relative font-medium text-secondary-700 dark:text-secondary-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 py-2 group">
                      Testimonials
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#gallery" className="relative font-medium text-secondary-700 dark:text-secondary-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 py-2 group">
                      Gallery
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#faq" className="relative font-medium text-secondary-700 dark:text-secondary-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 py-2 group">
                      FAQ
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#contact" className="px-5 py-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-white rounded-md transition-colors duration-300 shadow-sm hover:shadow-md">
                      Contact
                    </a>
                    <ThemeToggle />
                  </nav>
                  <div className="md:hidden flex items-center space-x-4">
                    <ThemeToggle />
                    <button className="p-2 text-secondary-800 dark:text-secondary-200" aria-label="Open menu">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </header>
            <main id="main-content" className="flex-grow" role="main">
              {children}
            </main>
            <footer className="bg-secondary-900 text-white py-12" role="contentinfo">
              <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Viva Dentistry</h3>
                    <p className="mb-4 text-secondary-300">Dr. Amin Yeganeh providing quality dental care for the whole family.</p>
                    <div className="flex items-center mt-4">
                      <a 
                        href="https://www.instagram.com/viva_dentistry" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-white hover:text-primary-400 transition-colors"
                        aria-label="Follow us on Instagram"
                      >
                        <FaInstagram className="w-6 h-6 mr-2" aria-hidden="true" />
                        <span>Follow us on Instagram</span>
                      </a>
                    </div>
                    <p className="mt-4 text-secondary-400">© {new Date().getFullYear()} Viva Dentistry. All rights reserved.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
                    <address className="not-italic">
                      <p className="mb-2 text-secondary-300">123 Dental Street</p>
                      <p className="mb-2 text-secondary-300">City, State 12345</p>
                      <p className="mb-2 text-secondary-300">Phone: <a href="tel:+11234567890" className="hover:text-primary-400 transition-colors">(123) 456-7890</a></p>
                      <p className="text-secondary-300">Email: <a href="mailto:info@vivadentistry.com" className="hover:text-primary-400 transition-colors">info@vivadentistry.com</a></p>
                    </address>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Hours</h3>
                    <p className="mb-2 text-secondary-300">Monday - Friday: 8am - 6pm</p>
                    <p className="mb-2 text-secondary-300">Saturday: 9am - 3pm</p>
                    <p className="text-secondary-300">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
        
        {/* Structured Data */}
        <Script id="schema-dental-business" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Viva Dentistry",
              "image": "https://vivadentistry.vercel.app/logo.jpg",
              "url": "https://vivadentistry.vercel.app",
              "telephone": "+11234567890",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Dental Street",
                "addressLocality": "City",
                "addressRegion": "State",
                "postalCode": "12345",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.7128,
                "longitude": -74.0060
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "15:00"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/viva_dentistry"
              ],
              "priceRange": "$$",
              "servesCuisine": "Dental Services"
            }
          `}
        </Script>
      </body>
    </html>
  );
} 