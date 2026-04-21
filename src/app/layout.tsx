import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deseo, mantente firme",
  description: "Un viaje al universo íntimo de Frida Khalo. Biodrama ficcionado con Melisa Schneider.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
