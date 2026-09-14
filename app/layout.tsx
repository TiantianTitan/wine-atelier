import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "家中酒单",
  description: "31 瓶家藏葡萄酒的库存、估值与研究档案",
  openGraph: {
    title: "家中酒单",
    description: "31 瓶家藏葡萄酒的库存、估值与研究档案",
    images: ["/assets/hero/wine-pour-poster.webp"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#241714"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
