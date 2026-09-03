import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Ethiopic } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ethiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  variable: "--font-ethiopic",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Adera SMS: Miss a Call. Adera Responds.",
  description:
    "Automatically send a text message when you miss a call so callers know you’ll get back to them.",
  keywords: [
    "Adera SMS",
    "missed call auto reply",
    "Android SMS responder",
    "automatic text message missed call",
    "offline SMS reply",
    "business call responder",
    "Android auto text",
  ],
  authors: [{ name: "Adera SMS Team" }],
  creator: "Adera SMS",
  publisher: "Adera SMS",
  metadataBase: new URL("https://adera-sms.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Adera SMS: Miss a Call. Adera Responds.",
    description:
      "Automatically send a text message when you miss a call so callers know you’ll get back to them.",
    url: "https://adera-sms.vercel.app",
    siteName: "Adera SMS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adera SMS: Miss a Call. Adera Responds.",
    description:
      "Automatically send a text message when you miss a call so callers know you’ll get back to them.",
  },
  icons: {
    icon: "/aderasms-logo-transparent.png",
    apple: "/aderasms-logo-transparent.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Adera SMS",
    operatingSystem: "Android",
    applicationCategory: "CommunicationApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Automatically send a text message when you miss a call. Adera SMS processes missed calls locally on Android to send your configured SMS response.",
    downloadUrl: "https://adera-sms.vercel.app/downloads/AderaSMS.apk",
    softwareVersion: "1.0.1",
  };

  return (
    <html lang="en" className={`${inter.variable} ${ethiopic.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
