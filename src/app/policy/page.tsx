import Container from "@/components/Container";
import styles from "../homepage.module.css"; // トップページのCSS
import pageStyles from "../about/about.module.css"; // aboutページのCSSを流用

export default function PolicyPage() {
  return (
    <Container>
      <section className={styles.section}>
        <h1 className={styles.sectionTitle}>🤝 合評会ポリシー</h1>
        <p className={styles.sectionText}>
          「草行」の合評会は、作品を良くするため、お互いを「本気で」批評する場です。
          私たちは「心理的安全性」が確保された「建設的な批評の場」を全員で作ることを約束します。
        </p>
      </section>

      {/* 1. グランドルール */}
      <section className={styles.section}>
        <h2 className={pageStyles.subTitle}>1. 合評会のグランドルール (毎回必ず確認)</h2>
        <ul className={pageStyles.list}>
          <li>
            <strong>目的の確認:</strong> 私たちの目的は、作品を良くし、部誌の質を高めることです。相手を打ち負かすことではありません。
          </li>
          <li>
            <strong>「作品」と「人格」の分離:</strong> 作品への批評は、制作者個人への攻撃では断じてありません。
          </li>
          <li>
            <strong>感謝の原則:</strong> 他人の作品を読み、真剣にフィードバックすることは「贈り物（ギフト）」です。その時間と労力に感謝します。
          </li>
        </ul>
      </section>

      {/* 2. 司会者の設置 */}
      <section className={styles.section}>
        <h2 className={pageStyles.subTitle}>2. 司会者（モデレーター）の設置</h2>
        <p className={pageStyles.detailText}>
          合評会には必ず司会者を置きます。
          司会者は「時間厳守」を徹底し、グランドルールから逸脱した発言（人格攻撃など）があれば即座に介入し、議論を軌道修正します。
        </p>
      </section>

      {/* 3. 伝える側（評論者）の心構え */}
      <section className={styles.section}>
        <h2 className={pageStyles.subTitle}>3. 伝える側（評論者）の心構え</h2>
        <ul className={pageStyles.list}>
          <li>
            <strong>「私」を主語にする (I-メッセージ):</strong>
            <br />
            NG例：「この表現は分かりにくい」（断定）
            <br />
            OK例：「私は、この部分を読んだ時、少し混乱しました」（感想）
          </li>
          <li>
            <strong>提案型で伝える:</strong>
            <br />
            NG例：「オチが弱い」
            <br />
            OK例：「最後のシーンで、あの伏線が回収されたら、私はもっと感動したかもしれません」（改善案）
          </li>
          <li>
            <strong>サンドイッチ法:</strong>
            <br />
            必ず「良いところ」（称賛）を伝えてから、「改善点」（提案）を伝えます。
          </li>
        </ul>
      </section>

      {/* 4. 受け取る側（制作者）の心構え */}
      <section className={styles.section}>
        <h2 className={pageStyles.subTitle}>4. 受け取る側（制作者）の心構え</h2>
        <ul className={pageStyles.list}>
          <li>
            <strong>まずは「聞く」:</strong> 批評されている間は、弁解したくても遮らず、最後までフィードバックを受け取ります。
          </li>
          <li>
            <strong>すべてを採用しなくて良い:</strong> フィードバックは「贈り物」であり「命令」ではありません。取り入れるかどうか、最終決定権は制作者である「あなた」にあります。
          </li>
          <li>
            <strong>「逆質問」の活用:</strong> 意図が伝わらなかった部分や、改善のヒントについて、冷静に質問します。
          </li>
        </ul>
      </section>
    </Container>
  );
}