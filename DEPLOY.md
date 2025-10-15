# リアルライフクエスト - デプロイガイド

## 🚀 Vercelでの公開手順

### 1. GitHubにプッシュ

```bash
# 初回のみ
git add .
git commit -m "Initial commit"

# GitHubでリポジトリを作成してから
git remote add origin https://github.com/your-username/real-life-game.git
git branch -M main
git push -u origin main
```

### 2. Vercelにデプロイ

1. [Vercel](https://vercel.com)にアクセスしてサインアップ（GitHubアカウントで）
2. "New Project"をクリック
3. GitHubリポジトリを選択
4. "Deploy"をクリック

### 3. データベースのセットアップ（Vercel Postgres）

1. Vercelダッシュボードで、プロジェクトを選択
2. "Storage" タブをクリック
3. "Create Database" → "Postgres" を選択
4. データベース名を入力して作成
5. 自動的に `DATABASE_URL` 環境変数が設定されます

### 4. Prismaマイグレーションの実行

Vercelダッシュボードで：
1. "Settings" → "Environment Variables"
2. 必要な環境変数が設定されていることを確認
3. プロジェクトを再デプロイ（または、ターミナルから）

```bash
# ローカルから本番DBへマイグレーション実行（推奨）
DATABASE_URL="your-production-database-url" npx prisma migrate deploy
```

または、Vercelの "Build & Development Settings" で：
- Build Command: `prisma migrate deploy && prisma generate && next build`

## 🔑 環境変数

Vercelで以下の環境変数を設定してください：

- `DATABASE_URL` - PostgreSQLの接続URL（Vercel Postgresで自動設定）

## 📊 本番データベースの確認

```bash
# ローカルから本番DBに接続
DATABASE_URL="your-production-url" npx prisma studio
```

## 🔄 更新のデプロイ

```bash
git add .
git commit -m "Update message"
git push
```

pushするだけで自動的にVercelがデプロイします！

## 💡 その他のデプロイオプション

### Vercel以外の選択肢：

1. **Netlify** - 無料、簡単
2. **Railway** - データベース込みで簡単
3. **Render** - 無料プラン有り
4. **AWS / Azure / GCP** - 上級者向け

## 📱 カスタムドメインの設定

Vercelダッシュボード → "Settings" → "Domains" から独自ドメインを追加できます。

## 🔒 セキュリティチェックリスト

- [ ] `.env` ファイルがgitignoreされている
- [ ] 本番環境の環境変数が設定されている
- [ ] データベースのバックアップ設定
- [ ] HTTPS が有効（Vercelは自動）

## 🐛 トラブルシューティング

### ビルドエラーが出る場合：

```bash
# ローカルでビルドテスト
npm run build

# Prisma Clientの再生成
npx prisma generate
```

### データベース接続エラー：

1. `DATABASE_URL` が正しく設定されているか確認
2. IPアドレス制限がある場合は、Vercelのアドレスを許可リストに追加
