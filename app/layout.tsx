import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adera SMS: Never Leave a Caller Wondering",
  description:
    "Adera SMS replies to your missed calls automatically, entirely on your phone. Nothing is uploaded, nothing leaves your device.",
  openGraph: {
    title: "Adera SMS",
    description:
      "Auto reply to missed calls. Fully offline. Available now for Android.",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adera SMS",
    description: "Auto reply to missed calls. Fully offline.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-[family-name:var(--font-body)] antialiased">
        {children}
      </body>
    </html>
  );
}
