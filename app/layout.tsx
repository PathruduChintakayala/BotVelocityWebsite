import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Bot Velocity",
    default: "Bot Velocity – Deterministic Control Plane for AI Automation",
  },
  description:
    "Enterprise-grade orchestration, evaluation, and governance for AI-powered workflows.",
  icons: {
    icon: "/FeviCon.svg",
    shortcut: "/FeviCon.svg",
    apple: "/FeviCon.svg",
  },
  openGraph: {
    title: "Bot Velocity – Deterministic Control Plane for AI Automation",
    description:
      "Enterprise-grade orchestration, evaluation, and governance for AI-powered workflows.",
    url: "https://botvelocity.com",
    siteName: "Bot Velocity",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bot Velocity – Deterministic Control Plane for AI Automation",
    description:
      "Enterprise-grade orchestration, evaluation, and governance for AI-powered workflows.",
  },
  metadataBase: new URL("https://botvelocity.com"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Bot Velocity",
      url: "https://botvelocity.com",
      logo: "https://botvelocity.com/logo.svg",
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@botvelocity.com",
        contactType: "sales",
      },
    },
    {
      "@type": "WebSite",
      name: "Bot Velocity",
      url: "https://botvelocity.com",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
