import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "家中酒单",
  description: "从 1955 到 1997 的 30 瓶私人藏酒，按出生年份、纪念日与法国故事挑选",
  openGraph: {
    title: "家中酒单",
    description: "从 1955 到 1997 的 30 瓶私人藏酒，按出生年份、纪念日与法国故事挑选",
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
