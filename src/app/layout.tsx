import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// Noto Sans（本文用）と Shippori Mincho（見出し用）をインポート
import { notoSans, shipporiMincho } from "@/theme/fonts"; 

export const metadata: Metadata = {
  title: "文芸サークル 草行",
  description: "文学を本気で楽しむ。オンライン上の部室、文芸サークル「草行」の紹介サイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ★ 2つのフォント変数を適用します ( ` ` バッククォートです)
    <html lang="ja" className={`${notoSans.variable} ${shipporiMincho.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}