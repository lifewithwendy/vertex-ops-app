import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vertex Ops | Operations Panel",
  description: "Internal operations panel for Vertex Logistics team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
