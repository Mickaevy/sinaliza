import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/core/components/Header";
import { Footer } from "@/core/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "600"],
});

export const metadata: Metadata = {
  title: "Sinaliza",
  description: "Tornando mais fácil o aprendizado de Libras",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        {children} 
        <Footer />
      </body>
    </html>
  );
}
