import Link from 'next/link';
import styles from './Footer.module.css';
import { FaXTwitter, FaInstagram, FaLine } from 'react-icons/fa6';

const socialLinks = [
  { name: 'X (Twitter)', url: 'https://x.com/soukou_0127', icon: <FaXTwitter /> },
  { name: 'Instagram', url: 'https://www.instagram.com/soukou.0127/?igsh=eG9uajIxZGZqczZr', icon: <FaInstagram /> },
  { name: 'Line', url: 'https://line.me/R/ti/p/@355qjxhp?ts=02272256&oat_content=url', icon: <FaLine /> },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialsContainer}>
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={styles.socialLink}
          >
            {social.icon}
          </a>
        ))}
      </div>

      <div className={styles.links}>
        <Link href="/terms" className={styles.footerLink}>利用規約</Link>
        <Link href="/privacy" className={styles.footerLink}>プライバシーポリシー</Link>
                <Link href="/contact" className={styles.footerLink}>問い合わせ</Link>

      </div>
      
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} 草行 All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;