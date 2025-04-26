import { Inter } from "next/font/google";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import "./globals.css";
import { Metadata, Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | BYAKKO-ENGINEER",
    default: "Portfolio | BYAKKO-ENGINEER",
  },
  description:
    "Web開発者/エンジニアとしてのポートフォリオサイト。ブログ、プロジェクト、技術スタック、経験を紹介してます。",
  keywords: [
    "ポートフォリオ",
    "Web開発",
    "ECサイト作成",
    "Webサイト作成",
    "エンジニア",
    "プログラマー",
  ],
  authors: [{ name: "BYAKKO" }],
  creator: "BYAKKO",
  publisher: "BYAKKO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://byakko-engineer.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "BYAKKO-ENGINEER Portfolio",
    description: "Web開発者/エンジニアとしてのポートフォリオサイト",
    url: "https://byakko-engineer.com",
    siteName: "BYAKKO-ENGINEER Portfolio",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BYAKKO-ENGINEER Portfolio",
    description: "Web開発者/エンジニアとしてのポートフォリオサイト",
  },

  // JSON-LD構造化データを追加
  other: {
    "application/ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "BYAKKO",
        url: "https://byakko-engineer.com",
        jobTitle: "Web開発者/エンジニア",
        sameAs: [
          "https://x.com/byakko_bbb",
          "https://github.com/bbbyk105",
          "https://linkedin.com/in/byakko-kondo",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "BYAKKO-ENGINEER",
        description: "Web開発者/エンジニアとしてのサービス提供",
        url: "https://byakko-engineer.com",
        sameAs: "https://byakko-engineer.com",
        serviceType: ["Web開発", "ECサイト作成", "Webサイト作成"],
        areaServed: {
          "@type": "Country",
          name: "日本",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://byakko-engineer.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ]),
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-black text-white dark:bg-black dark:text-white dark-mode`}
      >
        <div
          id="theme-wrapper"
          className="flex flex-col min-h-screen dark:bg-black dark:text-white"
        >
          <Header />
          <main className="flex-grow pt-24 pb-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
