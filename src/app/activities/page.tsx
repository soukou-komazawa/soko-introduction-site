import Container from "@/components/Container";
import styles from "../homepage.module.css"; // トップページのCSS
import pageStyles from "../about/about.module.css"; // aboutページのCSSを流用

export default function ActivitiesPage() {
  return (
    <Container>
      <section className={styles.section}>
        <h1 className={styles.sectionTitle}>活動内容</h1>
        <p className={styles.sectionText}>
          「本気」で活動を継続するため、エネルギー（創作体力）の管理を重視しています。
        </p>
      </section>

      {/* 1. 活動の基本リズム */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🏃‍♀️ 活動の基本リズム</h2>
        <p className={pageStyles.detailText}>
          私たちは「重い活動」と「軽い活動」を意識的に組み合わせ、無理なく「頻度」と「質」を両立させる「隔週・月2回モデル」を採用しています。
        </p>
        
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <h3>💡【軽い日】インプット・交流会 (例: 第2週)</h3>
            <p>創作のネタ集め、親睦、息抜きが目的。読書会やブレインストーミングなど、気軽に参加できる日です。</p>
          </div>
          <div className={styles.card}>
            <h3>✒️【重い日】アウトプット・定例会 (例: 第4週)</h3>
            <p>創作の発表、技術の研鑽が目的。事前に決められた「テーマ」に基づき、創作した作品を発表・共有します。</p>
          </div>
        </div>
      </section>

      {/* 2. メインプロジェクト */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📚 メインプロジェクト</h2>
        
        <h3 className={pageStyles.subTitle}>部誌制作と合評会 (年2回)</h3>
        <p className={pageStyles.detailText}>
          サークル活動の集大成として、部誌を年2回（夏・冬）発行します。
          発行に合わせ、サークルで最も重要なイベント「合評会」を開催します。
        </p>

        <h3 className={pageStyles.subTitle}>私たちの最終目標</h3>
        <p className={pageStyles.detailText}>
          制作した部誌（紙媒体）を、文学フリマで販売することを目指します。
        </p>
      </section>
    </Container>
  );
}