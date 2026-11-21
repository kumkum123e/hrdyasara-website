
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import GetInvolved from "@/components/layout/GetInvolved";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "HrdyaSara Foundation",
    template: "%s | HrdyaSara Foundation",
  },

  description:
    "HrdyaSara Foundation is dedicated to supporting children and individuals with disabilities through inclusive education, therapy, community care, and meaningful initiatives.",

  keywords: [
    "HrdyaSara Foundation",
    "NGO in Delhi",
    "Disability Support",
    "Inclusive Education",
    "Child Development",
    "Community Welfare",
    "HrdyaSara Initiatives",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "HrdyaSara Foundation",
    description:
      "Building a more inclusive and compassionate world through care, education, and community support.",
    type: "website",
    locale: "en_IN",
    siteName: "HrdyaSara Foundation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white antialiased">

        {/* Header - Visible on every page */}
        <Header />

        {/* Dynamic page content */}
        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        {/* Get Involved Banner */}
        <GetInvolved />

        {/* Main Footer */}
        <Footer />

        {/* Back to Top Button */}
        <BackToTop />

      </body>
    </html>
  );
}
