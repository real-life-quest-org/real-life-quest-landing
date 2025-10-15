# リアルライフクエスト

昨日までの「タスク」が、今日の「経験値」になる。

退屈な日常をクエストに変え、あなたのレベルアップを実感しよう。

## プロジェクト概要

リアルライフクエストは、日常のタスクをRPGゲーム風のクエストに変換することで、モチベーションを高め、習慣化を支援するWebアプリケーションです。

## 技術スタック

- **Next.js 15** - Reactフレームワーク
- **TypeScript** - 型安全な開発
- **Tailwind CSS** - ユーティリティファーストのCSS
- **Framer Motion** - スムーズなアニメーション
- **Prisma** - データベースORM
- **SQLite** - ローカル開発用データベース

## 必要な環境

- Node.js 18.18.0以上または20.0.0以上

## 開発環境のセットアップ

1. Node.jsのバージョンを確認:
```bash
node --version
```

もしNode.jsが古い場合は、[Node.js公式サイト](https://nodejs.org/)から最新版をインストールしてください。

2. 依存関係のインストール:
```bash
npm install
```

3. データベースのセットアップ:
```bash
npx prisma generate
npx prisma db push
```

4. 開発サーバーの起動:
```bash
npm run dev
```

5. ブラウザで開く:
```
http://localhost:3000
```

## データベース

開発環境ではSQLiteを使用しています。データベースファイルは `prisma/dev.db` に作成されます。

### Prismaコマンド

```bash
# Prisma Studioでデータベースを確認
npx prisma studio

# マイグレーションの作成
npx prisma migrate dev --name migration_name

# データベースのリセット
npx prisma migrate reset
```

## API エンドポイント

### POST /api/waitlist
ウェイティングリストにメールアドレスを登録

**リクエスト:**
```json
{
  "email": "user@example.com"
}
```

**レスポンス (成功):**
```json
{
  "message": "登録ありがとうございます！",
  "id": 1
}
```

### GET /api/waitlist
登録されているメールアドレスの数を取得

**レスポンス:**
```json
{
  "count": 42
}
```

## ビルド

プロダクションビルドを作成:
```bash
npm run build
```

ビルドしたアプリケーションを起動:
```bash
npm start
```

## プロジェクト構成

```
real-life-game/
├── src/
│   └── app/
│       ├── globals.css    # グローバルスタイル
│       ├── layout.tsx     # ルートレイアウト
│       └── page.tsx       # メインランディングページ
├── public/               # 静的ファイル
├── .github/             # GitHub設定
└── package.json         # 依存関係
```

## 機能

### ランディングページの構成

1. **ヒーローセクション** - キャッチコピーとCTA
2. **共感セクション** - ユーザーの課題を提示
3. **解決策セクション** - サービスの価値提案
4. **利用方法セクション** - 3ステップの使い方
5. **ビジョンセクション** - 開発者の想い
6. **CTAセクション** - メール登録フォーム

## ライセンス

© 2025 Real Life RPG. All rights reserved.
