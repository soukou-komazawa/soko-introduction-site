import Link from "next/link";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import styles from "./homepage.module.css";
import Button from "@/components/Button"; // Buttonコンポーネントをインポート

export default function Home() {
  return (
    <>
      {/* 1. ヒーローセクション */}
      <Hero
        title="文学を本気で楽しむ"
        subtitle="文芸サークル「草行」は、創作・インプット・批評のサイクルを回す、オンライン上の部室です。"
      />

      <Container>
        {/* 2. 私たちの軸 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🧭 私たちの「軸」</h2>
          <p className={styles.sectionText}>
            私たちは「創作（アウトプット）」「インプット（読書・交流）」「批評（フィードバック）」の3つの喜びを追求します。
          </p>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h3>創作</h3>
              <p>自分の内側にあるものを作品として生み出す喜び。</p>
            </div>
            <div className={styles.card}>
              <h3>インプット</h3>
              <p>新たな知識や刺激を得て、創作の糧とする喜び。</p>
            </div>
            <div className={styles.card}>
              <h3>批評</h3>
              <p>仲間と切磋琢磨し、作品の質を高めていく喜び。</p>
            </div>
          </div>
          <Link href="/about" className={styles.ctaLink}>
            理念について詳しく →
          </Link>
        </section>

        {/* 3. 私たちの活動 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🏃‍♀️ 私たちの「活動」</h2>
          <p className={styles.sectionText}>
            「軽い日（交流会）」と「重い日（定例会）」を組み合わせ、無理なく「頻度」と「質」を両立させます。
            活動の集大成として、年2回の部誌制作と合評会を行います。
          </p>
          <Link href="/activities" className={styles.ctaLink}>
            活動内容を詳しく →
          </Link>
        </section>

        {/* 4. 私たちの約束 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>🤝 私たちの「約束」</h2>
          <p className={styles.sectionText}>
            「作品への批評」が「人格への攻撃」になってはいけません。
            私たちは心理的安全性が確保された「建設的な批評の場」を全員で作ることを約束します。
          </p>
          <Link href="/policy" className={styles.ctaLink}>
            合評会ポリシーを読む →
          </Link>
        </section>

        {/* 5. 参加方法 (行動喚起) */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>📲 参加方法</h2>
          <p className={styles.sectionText}>
            活動の実務、議論、創作物の管理は、すべてDiscordで行います。
            見学・入部希望の方も、まずはDiscordへご参加ください。
          </p>
          <Button href="/join" variant="primary">
            Discordに参加する
          </Button>
        </section>
      </Container>
    </>
  );
}