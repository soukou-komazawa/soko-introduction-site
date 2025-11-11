import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

// 1. ボタンとリンクで共通のプロパティ
type BaseButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'small' | 'medium' | 'large';
  icon?: ReactNode;
};

// 2. (A) <button> としてのプロパティ
// (onClick, type など)
type StandardButtonProps = BaseButtonProps & {
  href?: never; // リンク(href)は持てない
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

// 3. (B) <a> (Link) としてのプロパティ
// (href, target, rel など)
type LinkButtonProps = BaseButtonProps & {
  href: string; // リンク(href)を必ず持つ
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

// 4. (A) または (B) のどちらかである、という型定義
type ButtonProps = StandardButtonProps | LinkButtonProps;

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  ...props // (href, target, rel, onClick, type など、残りの全て)
}: ButtonProps) => {

  const className = [
    styles.button,
    styles[variant], // 'primary' などのスタイル
    styles[size], // 'medium' などのスタイル
    icon ? styles.withIcon : '',
  ].filter(Boolean).join(' ');

  // 5. props の中に 'href' が含まれているかチェック
  if ('href' in props && props.href) {
    // 含まれている場合、(B) の <Link> として描画
    const { href, ...anchorProps } = props as LinkButtonProps; // 型を明確にする

    return (
      <Link href={href} className={className} {...anchorProps}>
        {icon}
        {children}
      </Link>
    );
  }

  // 6. 'href' がない場合、(A) の <button> として描画
  const { href, ...buttonProps } = props as StandardButtonProps; // 型を明確にする

  return (
    <button className={className} {...buttonProps}>
      {icon}
      {children}
    </button>
  );
};

export default Button;