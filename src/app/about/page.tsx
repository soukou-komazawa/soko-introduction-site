import Container from "@/components/Container";
import styles from "../homepage.module.css"; // トップページのCSSを流用
import pageStyles from "./about.module.css"; // このページ専用のスタイル（後で作成）

export default function AboutPage() {
  return (
    <Container>
      <section className={styles.section}>
        <h1 className={styles.sectionTitle}>私たちについて</h1>
        <p className={styles.sectionText}>
          文芸サークル「草行」の理念と、それを支える運営体制についてご紹介します。
        </p>
      </section>

      {/* 1. 私たちの「軸」 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🧭 私たちの「軸」：文学を本気で楽しむ</h2>
        <p className={pageStyles.detailText}> {/* pageStylesを使ってみます */}
          「草行」は、サークル員全員が「文学を本気で楽しむ」ことを最高の理念とします。
          この「本気」とは、以下の3つの活動を柱とすることを意味します。
        </p>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <h3>創作 (アウトプット)</h3>
            <p>自分の内側にあるものを作品として生み出す喜び。</p>
          </div>
          <div className={styles.card}>
            <h3>インプット (読書・交流)</h3>
            <p>新たな知識や刺激を得て、創作の糧とする喜び。</p>
          </div>
          <div className={styles.card}>
            <h3>批評 (フィードバック)</h3>
            <p>仲間と切磋琢磨し、作品の質を高めていく喜び。</p>
          </div>
        </div>
        <p className={pageStyles.detailText}>
          この3つのサイクルを回すことで、私たちは唯一無二の楽しみを追求します。
        </p>
      </section>

      {/* 3. 私たちの「体制」 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>👥 私たちの「体制」：「全員主役」のプロジェクト制</h2>
        <p className={pageStyles.detailText}>
          特定の誰かが「義務」に追われて燃え尽きる体制を避けます。
          私たちは「やりたい」という気持ちを原動力に、全員が主役になれる「プロジェクト・リーダー制」を導入します。
        </p>
        
        <h3 className={pageStyles.subTitle}>固定役職 (サークルの基盤)</h3>
        <ul className={pageStyles.list}>
          <li>
            <strong>部長 (代表):</strong> 「実行者」ではなく「サポーター」。全体の進捗を見守り、各リーダーの相談役となります。
          </li>
          <li>
            <strong>会計 (最重要):</strong> 会費、印刷費、売上など、サークルのお金全般を透明に管理します。
          </li>
          <li>
            <strong>広報担当:</strong> Instagramなどを活用し、「草行」の魅力を外部に発信します。
          </li>
        </ul>

        <h3 className={pageStyles.subTitle}>プロジェクト・リーダー (活動の主役)</h3>
        <ul className={pageStyles.list}>
          <li>
            <strong>部誌編集長 (夏号 / 冬号):</strong> 部誌制作プロジェクトの総責任者。スケジュールに責任を持ちます。
          </li>
          <li>
            <strong>企画担当 (持ち回り制):</strong> 「軽い日（インプット・交流会）」の企画と司会進行を担当します。
          </li>
        </ul>
      </section>
    </Container>
  );
}