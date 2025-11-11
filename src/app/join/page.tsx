import Container from "@/components/Container";
import styles from "../homepage.module.css"; // トップページのCSS（セクションタイトル用）
import pageStyles from "../about/about.module.css"; // aboutページのCSS（説明文やリスト用）
import Button from "@/components/Button"; // ★ Buttonコンポーネントをインポートします

export default function JoinPage() {
  // ★★★ 必ずあなたのサークルのDiscord招待リンクに書き換えてください ★★★
  const discordInviteLink = "https://discord.gg/YOUR_INVITE_LINK_HERE";

  return (
    <Container>
      <section className={styles.section}>
        <h1 className={styles.sectionTitle}>📲 参加方法</h1>
        <p className={styles.sectionText}>
          「草行」の活動に興味を持っていただきありがとうございます。
          <br />
          私たちの活動はすべてDiscordを中心に行われています。
        </p>
      </section>

      {/* 1. 活動の道具 */}
      <section className={styles.section}>
        <h2 className={pageStyles.subTitle}>1. 私たちの「道具」：Discord (本部・アトリエ)</h2>
        <p className={pageStyles.detailText}>
          サークルの実務、議論、創作物の管理、オンラインでの会議は、すべてDiscordで行います。
          情報は「チャンネル（部屋）」ごとに整理され、LINEのように大切な連絡が流れてしまうことはありません。
        </p>
        <p className={pageStyles.detailText}>
          （緊急連絡や日程調整のみ、補助的にLINEグループを使用します）
        </p>
      </section>

      {/* 2. 参加ステップ */}
      <section className={styles.section}>
        <h2 className={pageStyles.subTitle}>2. 参加ステップ</h2>
        
        {/* ▼▼▼ ここのタイポが修正されています ▼▼▼ */}
        <p className={pageStyles.detailText}>
          見学希望、入部希望、どちらも大歓迎です。
          <br />
          まずは、以下のボタンから私たちのDiscordサーバーにご参加ください。
          <br />
          参加後、サーバー内の「#はじめに」チャンネルの案内をご確認いただけるとスムーズです。
        </p>
        
        {/* <Link> タグの代わりに <Button> コンポーネントを使用 */}
        <Button
          href={discordInviteLink}
          variant="primary" // Button.tsx で定義されている "primary" スタイルを適用
          target="_blank" // リンクを新しいタブで開く
          rel="noopener noreferrer" // セキュリティのための記述
        >
          Discordサーバーに参加する
        </Button>
      </section>
    </Container>
  );
}