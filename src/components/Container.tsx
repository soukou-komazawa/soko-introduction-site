import styles from './Container.module.css';
import React from 'react'; // Reactをインポートします

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  // ▼▼▼ styleプロパティを追加 ▼▼▼
  style?: React.CSSProperties; 
};

// ▼▼▼ propsにstyleを追加 ▼▼▼
const Container = ({ children, className = '', style }: ContainerProps) => {
  return (
    // ▼▼▼ div要素にstyleを渡す ▼▼▼
    <div className={`${styles.container} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Container;