import { Inter } from "next/font/google";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Welcome to my portfolio website",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
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
