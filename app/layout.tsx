import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bektech | Carrelage, revêtement, mosaïque",
  description:
    "Carrelage, revêtement, mosaïque, démolition, préparation et petite maçonnerie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${openSans.variable} bg-[color:var(--sand-50)] text-[color:var(--ink-900)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
