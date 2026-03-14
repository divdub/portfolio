import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divyansh Dubey | Full-Stack Developer",
  description:
    "Portfolio of Divyansh Dubey, a backend-focused full-stack developer showcasing projects, skills, and engineering work.",
  keywords: ["Divyansh Dubey", "portfolio", "developer", "full-stack", "backend", "next.js", "node.js"],
  authors: [{ name: "Divyansh Dubey" }],
  openGraph: {
    title: "Divyansh Dubey | Full-Stack Developer",
    description:
      "Projects, skills, and engineering work by Divyansh Dubey.",
    type: "website",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
