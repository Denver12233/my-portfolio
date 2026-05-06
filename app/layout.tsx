import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://denvervm-portfolio.vercel.app'),
  title: {
    template: "%s | Denver Tandingan",
    default: "Denver Tandingan | Internship Portfolio",
  },
  description: "Frontend Developer & UI/UX Designer Intern Portfolio. Showcasing projects and learning logs.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Denver Tandingan | Internship Portfolio",
    description: "Frontend Developer & UI/UX Designer Intern Portfolio.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Denver Tandingan",
                "jobTitle": "Frontend Developer & UI/UX Designer Intern",
                "url": "https://my-portfolio-zeta-one-99.vercel.app",
                "sameAs": [
                  "https://github.com/Denver12233",
                  "https://www.linkedin.com/in/tandingan-denver-m-374910392/"
                ]
              })
            }}
          />
          <script dangerouslySetInnerHTML={{
          __html: `
          try {
            const theme = localStorage.getItem('portfolio-theme') || 'light';
            document.documentElement.className = theme;
          } catch(e) {}
        `}} />
      </head>
      <body className={`${plusJakartaSans.variable} ${dmSans.variable} font-dmsans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false} storageKey="portfolio-theme">
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
