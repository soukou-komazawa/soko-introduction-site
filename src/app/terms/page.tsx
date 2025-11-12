import Container from "@/components/Container";
import styles from "../legal/legal.module.css"; // ★ ステップ1で作成した共有CSS

export default function TermsPage() {
  return (
    <Container>
      <div className={styles.legalContainer}>
        <h1 className={styles.legalTitle}>利用規約</h1>
        
        <section className={styles.legalSection}>
          <h2>第1条（適用）</h2>
          <p>
            この規約は、本ウェブサイトの利用に関する一切の関係に適用されます。
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>第2条（禁止事項）</h2>
          <p>
            ユーザーは、本サイトの利用にあたり、以下の行為をしてはなりません。
          </p>
          <ul>
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
            <li>その他、当サークルが不適切と判断する行為</li>
          </ul>
        </section>
        
        {/* ★★★
          ここに、サークルの実情に合わせた利用規約の条文を追記してください。
          (例：著作権の扱い、免責事項など)
        ★★★ */}

      </div>
    </Container>
  );
}