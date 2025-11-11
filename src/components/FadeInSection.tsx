// src/components/FadeInSection.tsx
'use client';

import React from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import styles from './FadeInSection.module.css';

interface FadeInSectionProps {
  children: React.ReactNode;
}

export default function FadeInSection({ children }: FadeInSectionProps) {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1, // 要素が10%見えたらトリガー
  });

  return (
    <div
      ref={ref}
      className={`${styles.fadeInSection} ${isIntersecting ? styles.isVisible : ''}`}
    >
      {children}
    </div>
  );
}