import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const shareTitle = "家中酒单｜1955—1997 私人年份藏酒";
const shareDescription = "30 瓶 1955—1997 年私人藏酒，以法国酒款为主。按出生年份、纪念年份与一段旧时光，找到值得留下的那一年。";
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? process.env.VERCEL_PROJECT_PRODUCTION_URL
  ?? process.env.VERCEL_URL
  ?? "http://localhost:3000";
const normalizedSiteUrl = configuredSiteUrl.startsWith("http")
  ? configuredSiteUrl
  : `https://${configuredSiteUrl}`;

export const metadata: Metadata = {
  metadataBase: new URL(normalizedSiteUrl),
  title: "家中酒单",
  description: shareDescription,
  applicationName: "家中酒单",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: shareTitle,
    description: shareDescription,
    url: "/",
    siteName: "家中酒单",
    locale: "zh_CN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: shareDescription
  },
  robots: {
    index: true,
    follow: true
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
