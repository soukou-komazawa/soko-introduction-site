import Hero from "@/components/Hero";
import Container from "@/components/Container";
import styles from "./homepage.module.css";
import Button from "@/components/Button";
import Accordion from "@/components/Accordion"; // ★ 新しいアコーディオンをインポート

export default function Home() {
  return (
    <>
      {/* 1. ヒーローセクション */}
      <Hero
        title="ようこそ、文芸サークル「草行」へ"
        subtitle="あなたが作る、誰かにとっての「忘れられない一文」を。"
      />

      <Container>

        {/* 2. 「草行」という名に込めた想い */}
        <section id="philosophy" className={styles.section}>
          <h2 className={styles.sectionTitle}>「草行」という名に込めた想い</h2>
          <p className={styles.sectionText}>
            私たちのサークル名「草行」は、四字熟語『草行露宿（そうこうろじゅく）』に由来します。
            草を掻き分け、時には野宿をせざるを得ない大変な道のり。
            創作とは、時に困難と向き合い、先行きが見えない“道なき道”を行くようなものです。
            そんな一人一人の邁進に敬意を払いつつ、その道でせめて孤独にならないようにするために、このサークルは設立されました。
          </p>
        </section>

        {/* 3. 活動方針 */}
        <section id="policy" className={styles.section}>
          <h2 className={styles.sectionTitle}>🧭 「草行」の活動方針</h2>
          <p className={styles.sectionText}>
            私たちの活動は「創作（アウトプット）」「読書（インプット）」「批評（フィードバック）」によって成り立っています。
          </p>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h3>✒️ 創作（アウトプット）</h3>
              <p>あなたの頭の中で蠢いている物語、詩、エッセイをあなたが形にします。</p>
            </div>
            <div className={styles.card}>
              <h3>💡 インプット（読書・交流）</h3>
              <p>「書く」ためには「読む」ことが不可欠。読書会や仲間との交流で、新たな視点や創作の糧を得ます。</p>
            </div>
            <div className={styles.card}>
              <h3>🤝 批評（フィードバック）</h3>
              <p>仲間と作品を読み合い合評を行います。感想や改善点の交換、自分の作品が磨かれていく喜び、他人の作品から学びを受け取りましょう。</p>
            </div>
          </div>
        </section>

        {/* 4. 具体的な活動 */}
        <section id="activities" className={styles.section}>
          <h2 className={styles.sectionTitle}>🏃‍♀️ 「草行」の具体的な活動</h2>
          <p className={styles.sectionText}>
            「草行」では、長く楽しく続けるために、活動に「緩急」をつけています。
          </p>
          {/*（カードデザインを流用）*/}
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h3>1. 月2回の「定例会」</h3>
              <p>隔週（およそ2週間に1回）で集まります。</p>
              <ul>
                <li><strong>インプット・交流会:</strong> 好きな本の話や映画鑑賞など、エネルギーを充電する日。おしゃべりだけの参加も大歓迎です。</li>
                <li><strong>アウトプット・創作会:</strong> 持ち込みの「テーマ」に沿って、その場で小説や詩などを創作します。</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3>2. 年2回のメインプロジェクト</h3>
              <ul>
                <li><strong>部誌の制作:</strong> 夏と冬に部誌を制作し、作品を紙媒体として残します。</li>
                <li><strong>文学フフリマへの出展:</strong> 完成した部誌を「文学フリマ」で販売します！</li>
                <li><strong>オータムフェスティバルへの出展:</strong> 学園祭でブックカフェなどの模擬店を出店します。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. 「草行」の歩幅 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>✨ 「草行」の歩幅</h2>
          <p className={styles.sectionText}>
            「草行」は、等身大の歩みを目標にしています。
          </p>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h4>1. 合評会</h4>
              <p>「作品と人格は完全に分離する」「『私』を主語にして提案する」といった明確なルールを共有し、安全な批評の場を作ります。</p>
            </div>
            <div className={styles.card}>
              <h4>2. 運営体制</h4>
              <p>「部誌編集長」「企画担当」など、活動ごとに「やりたい人」がリーダーを務めるシステムを採用しています。</p>
            </div>
            <div className={styles.card}>
              <h4>3. 活動拠点</h4>
              <p>チャットツール「Discord」を駆使し、情報を整理し、創作に集中できる環境を整えます。</p>
            </div>
          </div>
        </section>
        
        {/* 6. こんな人におすすめ */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>こんな人におすすめ</h2>
          <ul className={styles.checkList}> {/* チェックリスト用の新しいCSSクラス */}
            <li>大学で何か「作品」を形にしてみたい人</li>
            <li>「批評」に興味がある、または自分の作品を本気で良くしたい人</li>
            <li>「書く」だけでなく、「読む」仲間や「語る」仲間が欲しい人</li>
            <li>「ゆるすぎ」も「厳しすぎ」も違う。「本気で楽しめる」場所を探している人</li>
            <li>サークルの運営や企画にも主体的に関わってみたい人</li>
          </ul>
        </section>

        {/* 7. よくある質問 (Q&A) - アコーディオン機能 */}
        <section id="qa" className={styles.section}>
          <h2 className={styles.sectionTitle}>よくある質問 (Q&A)</h2>
          
          <Accordion title="Q. 駒澤大学の学生以外でも入れますか？">
            【回答例】:
            はい、「草行」は駒澤大学の学生を中心に活動していますが、他大学の学生（インカレ）や、文学を愛する社会人・専門学生の方も歓迎しています。お気軽にご相談ください！
            （または）
            「草行」は駒澤大学の公認サークル（または届出団体）であるため、現在のメンバーは駒澤大学の学生のみで構成されています。
          </Accordion>
          
          <Accordion title="Q. 1年生（または3年生）ですが、いつからでも入れますか？">
            はい、通年で新メンバーを募集しています。学部・学科・学年、そして入会時期は一切問いません。「書きたい」「読みたい」と思ったその瞬間が、一番の入会タイミングです！
          </Accordion>
          
          <Accordion title="Q. 活動はいつ、どこで行っていますか？">
            【回答例】:
            日時: 隔週の土曜日 13:00〜15:00
            場所: 駒澤大学 駒沢キャンパス 〇〇号館の教室（または図書館会議室）
            オンライン: 上記の対面活動に加え、Discordサーバー上で随時、オンラインでの読書会、雑談会、作業会などを開催しています。
          </Accordion>
          
          <Accordion title="Q. 会費はかかりますか？">
            【回答例】:
            はい、部誌の印刷費、文学フリマや学園祭の出展料に充てるため、会費を徴収しています。
            （例1：年間 〇〇円）
            （例2：部誌を制作する半期ごとに 〇〇円）
            集めた費用は「会計」担当が責任を持って管理し、収支は全メンバーに透明に公開しています。
          </Accordion> {/* ★★★ ここの閉じタグを </D Accordion> から修正しました ★★★ */}
          
          <Accordion title="Q. 合評会（批評）が不安です。厳しく批判されたりしませんか？">
            その不安、とてもよく分かります。だからこそ「草行」では、紹介文にもある通り「安全な場所」であるためのグランドルールを徹底しています。
            目的は「作品を良くするため」であり、人格攻撃は絶対にありません。「この表現、私はすごく好きです」「もしこうしたら、私はもっと感動するかも」といった、「私（I-message）」を主語にした建設的な「提案」を交換する場です。
          </Accordion>
          
          <Accordion title="Q. 小説や詩をきちんと書いたことがありません…。">
            心から歓迎します！「草行」は「書く」だけでなく「読む」ことも同じくらい大切にしています。
            まずは「インプット・交流会」で好きな本の話をするだけでも、立派なサークル活動です。「書きたい」という気持ちさえあれば、メンバーが全力でサポートします！
          </Accordion>

          <Accordion title="Q. 見学・入会について連絡先を教えてください">
            【回答例】:
            ご質問、見学・入会のお申し込みは、以下の連絡先までお願いします。
            （例：公式X（旧Twitter）のDM [ここにXのリンクを貼る]、またはメールアドレス [ここにメールアドレスを記載]）
          </Accordion>

        </section>

        {/* 8. 最後の行動喚起 */}
        <section id="join" className={styles.section}>
          <h2 className={styles.sectionTitle}>“道なき道”を、私たちと一緒に歩んでみませんか？</h2>
          <p className={styles.sectionText}>
            少しでも「草行」の活動に心が動いたら、ぜひ一度、私たちの活動を見に来てください。
            見学、質問、いつでも大歓迎です！
          </p>
          <Button href="ここにDiscordまたはX(Twitter)のリンク" variant="primary">
            活動拠点（Discord）に参加する
          </Button>
        </section>

      </Container>
    </>
  );
}