import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const peydaFont = localFont({
  src: [
    {
      path: "../../public/font/peyda/PeydaWebFaNum-Thin.woff2",
      style: "normal",
      weight: "100",
    },
    {
      path: "../../public/font/peyda/PeydaWebFaNum-Regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/font/peyda/PeydaWebFaNum-Medium.woff2",
      style: "normal",
      weight: "500",
    },
    {
      path: "../../public/font/peyda/PeydaWebFaNum-DemiBold.woff2",
      style: "normal",
      weight: "600",
    },
    {
      path: "../../public/font/peyda/PeydaWebFaNum-Bold.woff2",
      style: "normal",
      weight: "800",
    },
    {
      path: "../../public/font/peyda/PeydaWebFaNum-Black.woff2",
      style: "normal",
      weight: "900",
    },
  ],
  display: "swap",
  variable: "--font-peyda",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${peydaFont.variable}`}>{children}</body>
    </html>
  );
}
