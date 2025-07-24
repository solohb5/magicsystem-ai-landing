import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MagicSystem AI - The Cyborg Enhancement Platform",
  description: "Stop being the bottleneck. Start being superhuman. MagicSystem AI creates cyborg entrepreneurs - humans enhanced with adaptive AI specialists that multiply capability by 100x.",
  keywords: "AI, automation, productivity, cyborg, enhancement, specialists, multiplication, founding partners",
  openGraph: {
    title: "MagicSystem AI - The Cyborg Enhancement Platform",
    description: "Stop being the bottleneck. Start being superhuman.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MagicSystem AI - The Cyborg Enhancement Platform",
    description: "Stop being the bottleneck. Start being superhuman.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-magic-dark text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
