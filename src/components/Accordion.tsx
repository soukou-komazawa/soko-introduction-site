'use client'; // クライアントコンポーネントとしてマーク

import React, { useState } from 'react';
import styles from './Accordion.module.css';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionItem}>
      <button 
        className={styles.accordionButton} 
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span className={styles.accordionTitle}>{title}</span>
        <span className={styles.accordionIcon}>{isOpen ? '−' : '＋'}</span>
      </button>
      {isOpen && (
        <div className={styles.accordionContent}>
          {children}
        </div>
      )}
    </div>
  );
}