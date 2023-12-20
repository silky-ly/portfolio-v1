import "@/styles/globals.scss";

import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Faith Amiekhame",
    template: "",
  },
  description: "A portfolio of projects",
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "",
    description: "",
    // images: [`${siteConfig.url}/images/og.jpg`],
  },
};

const degular = localFont({
  src: [
    {
      path: "fonts/Degular/Degular-Thin.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "fonts/Degular/Degular-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Degular/Degular-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/Degular/Degular-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "fonts/Degular/Degular-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-degular",
  display: "swap",
});

const clashDisplay = localFont({
  src: [
    {
      path: "fonts/ClashDisplay/ClashDisplay-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "fonts/ClashDisplay/ClashDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/ClashDisplay/ClashDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/ClashDisplay/ClashDisplay-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "fonts/ClashDisplay/ClashDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          degular.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
