import Container from "@/components/Container";
import styles from "../legal/legal.module.css"; // ★ ステップ1で作成した共有CSS

export default function PrivacyPage() {
  return (
    <Container>
      <div className={styles.legalContainer}>
        <h1 className={styles.legalTitle}>プライバシーポリシー</h1>
        
        <section className={styles.legalSection}>
          <h2>第1条（個人情報）</h2>
          <p>
            「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとします。
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>第2条（個人情報の収集方法）</h2>
          <p>
            当サークルは、ユーザーが利用登録をする際に氏名、メールアドレスなどの個人情報をお尋ねすることがあります。
          </p>
          {/* ★★★
            ここに、サークルの実情に合わせたプライバシーポリシーを追記してください。
            (例：Google Analyticsの使用の有無、収集した情報の利用目的など)
          ★★★ */}
        </section>

      </div>
    </Container>
  );
}