import Link from 'next/link';

import styles from './Footer.module.css';

import { FaXTwitter, FaInstagram, FaLine } from 'react-icons/fa6';



const socialLinks = [

  // ★ XのURLを正しいものに（もし違っていれば修正してください）

  { name: 'X (Twitter)', url: 'https://x.com/soukou_0127', icon: <FaXTwitter /> },

  { name: 'Instagram', url: 'https://www.instagram.com/soukou.0127/?igsh=eG9uajIxZGZqczZr', icon: <FaInstagram /> },

 { name: 'Line', url: 'https://line.me/R/ti/p/@355qjxhp?ts=02272256&oat_content=url', icon: <FaLine /> },

];



export default function Footer() {

  return (

    <footer className={styles.footer}>

      <div className={styles.footerContent}>

        

        {/* ▼▼▼ 復活させるセクション ▼▼▼ */}

        <div className={styles.footerLinks}>

          <Link href="/contact" className={styles.footerLink}>

            お問い合わせ

          </Link>

          <Link href="/terms" className={styles.footerLink}>

            利用規約

          </Link>

          <Link href="/privacy" className={styles.footerLink}>

            プライバシーポリシー

          </Link>

        </div>

        {/* ▲▲▲ ここまで ▲▲▲ */}



        <div className={styles.socialLinks}>

          {socialLinks.map((link) => (

            <a

              key={link.name}

              href={link.url}

              target="_blank"

              rel="noopener noreferrer"

              aria-label={link.name}

              className={styles.socialIcon}

            >

              {link.icon}

            </a>

          ))}

        </div>

        <p className={styles.copyright}>

          &copy; {new Date().getFullYear()} 文芸サークル 草行. All rights reserved.

        </p>

      </div>

    </footer>

  );

}