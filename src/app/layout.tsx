import type { Metadata } from "next";
import { siteConfig } from "@/data/portfolio";
import PCBBackground from "@/components/ui/PCBBackground";
import AIChatbot from "@/components/ui/AIChatbot";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.title}`,
  description: siteConfig.description,
  keywords: [
    "Software Engineer",
    "AI Engineer",
    "Full Stack Developer",
    "Generative AI",
    "Agentic AI",
    "Cloud Native",
    "React",
    "Next.js",
    "Python",
    "LangGraph",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600&family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased bg-[#e4e7ec] text-neutral-800 relative">
        <PCBBackground />
        {children}
        <AIChatbot />
      </body>
    </html>
  );
}
