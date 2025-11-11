import { Noto_Sans_JP, Shippori_Mincho, Hachi_Maru_Pop, Hina_Mincho } from 'next/font/google';

export const notoSans = Noto_Sans_JP({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-noto-sans', // CSSで使うための変数名を定義
});

export const shipporiMincho = Shippori_Mincho({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-noto-serif', // CSSで使うための変数名を定義
});

export const hachiMaruPop = Hachi_Maru_Pop({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-hachi-maru',
});

export const hinaMincho = Hina_Mincho({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-hina-mincho',
});