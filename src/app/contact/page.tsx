import Container from "@/components/Container";
import styles from "../homepage.module.css"; // トップページのスタイルを流用
import pageStyles from "./contact.module.css"; // お問い合わせ専用CSS
import Button from "@/components/Button"; // Buttonコンポーネントをインポート

export default function ContactPage() {
  return (
    <Container>
      <section className={styles.section}>
        <h1 className={styles.sectionTitle}>お問い合わせ</h1>
        <p className={styles.sectionText}>
          文芸サークル「草行」へのご連絡ありがとうございます。
          <br />
          お問い合わせの目的をお選びください。
        </p>

        <div className={pageStyles.contactGrid}>
          {/* === 1. 体験参加 === */}
          <div className={pageStyles.contactBox}>
            <h2 className={pageStyles.contactTitle}>
              体験参加・見学をご希望の方
            </h2>
            <p>
              サークル活動の体験参加・見学をご希望の方は、以下のGoogleフォームよりお申し込みください。
            </p>
            <Button
              href="https://forms.gle/wz9zXstKhxM2ogJS9" // ご指定のGoogleフォームURL
              variant="primary" // メインのボタン（緑）
              target="_blank"
              rel="noopener noreferrer"
            >
              体験参加申し込みフォームへ
            </Button>
          </div>

          {/* === 2. その他のお問い合わせ === */}
          <div className={pageStyles.contactBox}>
            <h2 className={pageStyles.contactTitle}>
              一般的なご質問・その他
            </h2>
            <p>
              他大学からのご連絡、メディア取材、その他一般的なご質問は、以下のメールアドレスまでお願いいたします。
            </p>

            {/* ▼▼▼ メールアドレスをボタンに変更 ▼▼▼ */}
            <Button
              href="soukou.komazawa@gmail.com" // ★ あなたのメールアドレスに書き換え
              variant="secondary" // サブのボタン（金）
            >
              Eメールでお問い合わせ(soukou.komazawa@gmail.com)
            </Button>
            
            {/* ★★★
              <small> タグは不要になったため削除しました。
              href="mailto:..." のメールアドレスを、必ずご自身のものに書き換えてください。
            ★★★ */}

          </div>
        </div>
      </section>
    </Container>
  );
}