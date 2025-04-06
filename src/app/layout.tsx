import { Inter } from "next/font/google";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Welcome to my portfolio website",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-black text-white`}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-grow pt-24 pb-12">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
