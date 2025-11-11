'use client';

import React from 'react';
import styles from './Hero.module.css';
// import CuteHeroAnimation from './CuteHeroAnimation'; // アニメーションをインポートしない

// Heroコンポーネントが受け取るProps（情報）の型
interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <div className={styles.heroContainer}>
      {/* アニメーション（背景）*/}
      <div className={styles.heroAnimation}>
        {/* <CuteHeroAnimation /> */} {/* ← この行をコメントアウト（または削除）します */}
      </div>

      {/* テキスト（手前）*/}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>
      </div>
    </div>
  );
}