'use client';

import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import Button from "./Button"; // ★ Buttonコンポーネントをインポート

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/soko-icon.png"
          alt="草行 ロゴ"
          width={50}
          height={50}
        />
        <span className={styles.logoTitle}>文芸サークル 草行</span>
      </Link>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>トップ</Link>
        <Link href="/about" className={styles.navLink}>私たちについて</Link>
        <Link href="/activities" className={styles.navLink}>活動内容</Link>
        <Link href="/policy" className={styles.navLink}>合評会ポリシー</Link>
        
        {/* ★ ここを <Link> から <Button> コンポーネントに変更 */}
        <Button href="/join" variant="primary">
          参加する
        </Button>
      </nav>
    </header>
  );
}