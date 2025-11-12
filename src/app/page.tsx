import Hero from "@/components/Hero";
import Container from "@/components/Container";
import styles from "./homepage.module.css";
import Button from "@/components/Button";
import Accordion from "@/components/Accordion";
import FadeInSection from "@/components/FadeInSection"; // ★ フェードインコンポーネント
import { FaXTwitter, FaInstagram, FaLine } from 'react-icons/fa6'; // ★ SNSアイコン

// page.tsx の上部

// ★★★
// CSSで使うための className を追加
// ★★★
const socialLinks = [
  { 
    name: 'X (Twitter)', 
    url: 'https://x.com/soukou_0127', 
    icon: <FaXTwitter />,
    className: styles.socialTwitter // ★ 追加
  },
  { 
    name: 'Instagram', 
    url: 'https://www.instagram.com/soukou.0127/?igsh=eG9uajIxZGZqczZr', 
    icon: <FaInstagram />,
    className: styles.socialInstagram // ★ 追加
  },
  { 
    name: 'Line', 
    url: 'https://line.me/R/ti/p/@355qjxhp?ts=02272256&oat_content=url', 
    icon: <FaLine />,
    className: styles.socialLine // ★ 追加
  },
];

export default function Home() {
  return (
    <>
      {/* 1. ヒーローセクション (これはフェードインさせない) */}
      <Hero
        title="ようこそ、文芸サークル「草行」へ"
        subtitle="あなたが作る、誰かにとっての「忘れられない一文」を。"
      />

      <Container>

        {/* 2. 「草行」という名に込めた想い */}
        <FadeInSection>
          <section id="philosophy" className={styles.section}>
            <h2 className={styles.sectionTitle}>「草行」という名に込めた想い</h2>
            <p className={styles.sectionText}>
              私たちのサークル名「草行」は、四字熟語『草行露宿（そうこうろじゅく）』に由来します。
              草を掻き分け、時には野宿をせざるを得ない大変な道のり。
              創作とは、時に困難と向き合い、先行きが見えない“道なき道”を行くようなものです。
              そんな一人一人の邁進に敬意を払いつつ、その道でせめて孤独にならないようにするために、このサークルは設立されました。
            </p>
          </section>
        </FadeInSection>

        {/* 3. 活動方針 */}
        <FadeInSection>
          <section id="policy" className={styles.section}>
            <h2 className={styles.sectionTitle}>🧭 「草行」の活動方針</h2>
            <p className={styles.sectionText}>
              私たちの活動は「創作（アウトプット）」「読書（インプット）」「批評（フィードバック）」によって成り立っています。
            </p>
            <div className={styles.cardGrid}>
              <div className={styles.card}>
                <h3>✒️ 創作（アウトプット）</h3>
                <p>あなたの頭の中で蠢いている物語、詩、エッセイをあなたの手で形にします。</p>
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
        </FadeInSection>

        {/* 4. 具体的な活動 */}
        <FadeInSection>
          <section id="activities" className={styles.section}>
            <h2 className={styles.sectionTitle}>🏃‍♀️ 「草行」の具体的な活動</h2>
            <p className={styles.sectionText}>
              「草行」では、長く楽しく続けるために、活動に「緩急」をつけています。
            </p>
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
                <h3>2. メインプロジェクト</h3>
                <ul>
                  <li><strong>部誌の制作:</strong> 夏と冬に部誌を制作し、普段の集大成として作品を紙媒体として残します。</li>
                  <li><strong>文学フフリマへの出展:</strong> 完成した部誌を「文学フリマ」で販売します！</li>
                  <li><strong>オータムフェスティバルへの出展:</strong> 学園祭で制作した部誌を基に、ブックカフェをコンセプトとした模擬店を出店します。</li>
                </ul>
              </div>
            </div>

            {/* ▼▼▼ 挿入：年間スケジュール ▼▼▼ */}
            <h3 className={styles.sectionTitle} style={{ fontSize: '2.2rem', marginTop: '4rem', marginBottom: '3rem' }}>
              年間スケジュール 
            </h3>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>4月</div>
                <div className={styles.timelineContent}>
                  <strong>新歓期・新メンバー歓迎会</strong>
                  <p>読書会や自己紹介、創作にまつわるミニゲームを通して親睦を深めます</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>5月〜7月</div>
                <div className={styles.timelineContent}>
                  <strong>夏号部誌 制作期間</strong>
                  <p>テーマ決め、執筆、合評会、デザイン、入稿までを行います。</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>8月</div>
                <div className={styles.timelineContent}>
                  <strong>夏休み</strong>
                  <p>夏季休暇の時間を使って、課外活動や文学にまつわる企画を実施する</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>11月</div>
                <div className={styles.timelineContent}>
                  <strong>オータムフェスティバル</strong>
                  <p>学園祭にてブックカフェや部誌の販売を行います。</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDate}>12月〜1月</div>
                <div className={styles.timelineContent}>
                  <strong>冬号部誌 制作期間</strong>
                  <p>合評会を中心に、冬の作品を仕上げます。</p>
                </div>
              </div>
            </div>
            {/* ▲▲▲ 年間スケジュール 挿入完了 ▲▲▲ */}

          </section>
        </FadeInSection>

        {/* 5. 活動の風景 */}
        <FadeInSection>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>活動の風景</h2>
            <p className={styles.sectionText}>
              学園祭でのブックカフェ、日々の定例会など、活動の様子です。
            </p>
            <div className={styles.galleryGrid}>
              {/* ★★★
                publicフォルダに画像（例: g1.jpg）を置き、
                src="/g1.jpg" のように書き換えてください。
              ★★★ */}
              <div className={styles.galleryItem}>
                <img src="/g6.jpg/400x300" alt="新歓の風景" />
              </div>
              <div className={styles.galleryItem}>
                <img src="/g1.jpg/400x300" alt="定例会の風景" />
              </div>
              <div className={styles.galleryItem}>
                <img src="/g2.jpg/400x500" alt="定例会の風景２" />
              </div>
              <div className={styles.galleryItem}>
                <img src="/g3.jpg/400x350" alt="オータムフェスティバルの風景" />
              </div>             
              <div className={styles.galleryItem}>
                <img src="/g5.jpg/400x350" alt="オータムフェスティバルの風景２" />
              </div>
              <div className={styles.galleryItem}>
                <img src="/g4.jpg/400x400" alt="部誌の参考画像" />
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* 6. 「草行」の歩幅 */}
        <FadeInSection>
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
        </FadeInSection>
        
        {/* 7. こんな人におすすめ */}
        <FadeInSection>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>こんな人におすすめ</h2>
            <ul className={styles.checkList}>
              <li>大学で何か「作品」を形にしてみたい人</li>
              <li>「批評」に興味がある、または自分の作品を本気で良くしたい人</li>
              <li>「書く」だけでなく、「読む」仲間や「語る」仲間が欲しい人</li>
              <li>「ゆるすぎ」も「厳しすぎ」も違う。「本気で楽しめる」場所を探している人</li>
              <li>サークルの運営や企画にも主体的に関わってみたい人</li>
            </ul>
          </section>
        </FadeInSection>

        {/* 8. よくある質問 (Q&A) */}
        <FadeInSection>
          <section id="qa" className={styles.section}>
            <h2 className={styles.sectionTitle}>よくある質問 (Q&A)</h2>
            
            <Accordion title="Q. 1年生（または3年生）ですが、いつからでも入れますか？">
              はい、通年で新メンバーを募集しています。学部・学科・学年、そして入会時期は一切問いません。「書きたい」「読みたい」と思ったら、ぜひ私たちの活動に体験してみてください
            </Accordion>
            
            <Accordion title="Q. 駒澤大学の学生以外でも入れますか？">
              「草行」は駒澤大学の公認サークルであるため、現在のメンバーは駒澤大学の学生のみで構成されています。
            </Accordion>

            <Accordion title="Q. 活動はいつ、どこで行っていますか？">
              活動日程は毎年変わります。
              多くの方に参加していただきたいので、アンケートで日程を決定しています。
              場所に関しては、駒澤大学図書館を使用させていただいています。
            </Accordion>
            
            <Accordion title="Q. 会費はかかりますか？">
              はい、部誌の印刷費、文学フリマや学園祭の出展料に充てるため、年間500円の会費を徴収しています。
              また、集めた費用は「会計」担当が責任を持って管理し、収支は全メンバーに透明に公開しています。
            </Accordion>
            
            <Accordion title="Q. 合評会（批評）が不安です。厳しく批判されたりしませんか？">
              「草行」では、合評会のグランドルールを徹底しています。
              目的は「作品を良くするため」であり、人格攻撃は絶対にありません。「この表現、私はすごく好きです」「もしこうしたら、私はもっと感動するかも」といった、「私（I-message）」を主語にした建設的な「提案」を交換する場です。
            </Accordion>
            
            <Accordion title="Q. 小説や詩をきちんと書いたことがありません…。">
              歓迎します！「草行」は「書く」だけでなく「読む」ことも同じくらい大切にしています。
              「インプット・交流会」で自分の言葉を駆使して、好きな話をするだけでも、立派なサークル活動です。
              「書きたい」という気持ちさえあれば、メンバーが全力でサポートします！
            </Accordion>

            <Accordion title="Q. 見学・入会について連絡先を教えてください">
              ご質問、見学・入会のお申し込みは、以下の連絡先までお願いします。
            </Accordion>

          </section>
        </FadeInSection>

        {/* 9. 最後の行動喚起 */}
        <FadeInSection>
          <section id="join" className={styles.section}>
            <h2 className={styles.sectionTitle}>“道なき道”を、私たちと一緒に歩んでみませんか？</h2>
            <p className={styles.sectionText}>
              少しでも「草行」の活動に心が動いたら、ぜひ一度、私たちの活動を見に来てください。
              見学、質問、いつでも大歓迎です！
            </p>
            <Button href="https://forms.gle/HU3k7ffCj6Wqe9me9" variant="primary">
              見学の申し込み
            </Button>
          </section>
        </FadeInSection>

        {/* ▼▼▼ 挿入：SNS (Connect) セクション ▼▼▼ */}
{/* ▼▼▼ 挿入：SNS (Connect) セクション ▼▼▼ */}
        <FadeInSection>
          <section id="connect" className={styles.socialSection}>
            <h2 className={styles.sectionTitle}>Connect with Us</h2>
            <p className={styles.sectionText}>
              日々の活動の様子や、読書会のお知らせはSNSで発信しています。
              <br />
              お気軽にフォローしてください。
            </p>
            <div className={styles.socialGrid}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  // ★ ここで className を適用する
                  className={`${styles.socialIconLink} ${link.className || ''}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </section>
        </FadeInSection>

      </Container>
    </>
  );
}