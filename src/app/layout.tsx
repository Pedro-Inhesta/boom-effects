import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boom Effects",
  description: "Efeitos especiais para eventos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}