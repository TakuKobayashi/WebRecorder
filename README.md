# WebRecorder

ブラウザだけで画面録画とリアルタイム文字起こしができるWebアプリケーションです。インストールやアカウント登録は不要で、録画データはサーバーへ送信せず端末内で処理します。

## 公開URL

https://web-recorder.taptappun.workers.dev/

## 主な機能

- 画面、ウィンドウ、ブラウザタブの録画
- 画面音声、マイク、音声なしの切り替え
- WebM／MP4から録画形式を選択（ブラウザが対応する形式のみ）
- Web Speech APIによるリアルタイム文字起こし
- 録画中のプレビューと経過時間表示
- 録画終了後の動画再生
- 動画ファイル（WebMまたはMP4）の保存
- 文字起こし結果のテキストファイル保存
- OS設定に連動するライト／ダークモード
- テーマの手動切り替えとブラウザへの設定保存
- デスクトップ、タブレット、スマートフォン対応のレスポンシブUI

## 使い方

1. 「Audio Source」から使用する音声を選択します。
2. 「Video Format」からWebMまたはMP4を選択します。
3. 「Start Recording」を押します。
4. ブラウザの共有ダイアログで録画対象を選択します。
5. 録画を終了するときは「Stop Recording」を押します。
6. 録画内容を確認し、「Save Video」から動画を保存します。
7. 文字起こし結果がある場合は、Transcript欄の「.txt」から保存できます。

画面共有中にブラウザ側の「共有を停止」を押した場合も、録画は自動的に終了します。

## プライバシー

録画処理とファイル生成はブラウザ内で完結します。録画した映像や音声をアプリケーションのサーバーへアップロードする処理はありません。

文字起こしにはブラウザのWeb Speech APIを使用します。その処理方法やデータの取り扱いは、利用しているブラウザおよび音声認識サービスの仕様に依存します。

## 対応ブラウザ

画面録画には `MediaDevices.getDisplayMedia`、動画生成には `MediaRecorder` を使用します。

| 機能                   | Chrome | Edge | Firefox  | Safari                           |
| ---------------------- | ------ | ---- | -------- | -------------------------------- |
| 画面録画               | 対応   | 対応 | 対応     | 対応（バージョンにより制限あり） |
| 画面音声               | 対応   | 対応 | 制限あり | 制限あり                         |
| マイク音声             | 対応   | 対応 | 対応     | 対応                             |
| リアルタイム文字起こし | 対応   | 対応 | 非対応   | 対応状況はバージョン依存         |

ブラウザやOSによって、共有できる対象や画面音声の取得可否が異なります。すべての機能を利用する場合は、最新版のGoogle ChromeまたはMicrosoft Edgeを推奨します。

## 技術構成

| 項目           | 使用技術                                |
| -------------- | --------------------------------------- |
| フレームワーク | Next.js 15（App Router／Static Export） |
| UI             | React 19                                |
| 言語           | TypeScript 5                            |
| スタイル       | CSS Modules                             |
| フォント       | IBM Plex Sans／IBM Plex Mono            |
| 画面録画       | MediaDevices API／MediaRecorder API     |
| 文字起こし     | Web Speech API                          |
| ホスティング   | Cloudflare Workers Assets               |
| コード整形     | Prettier                                |

## ローカル開発

### 必要な環境

- Node.js 20以上
- pnpm

### セットアップ

```bash
pnpm install
pnpm dev
```

起動後、http://localhost:3000/ を開きます。

画面共有APIの動作にはSecure Contextが必要です。ローカルでは `localhost`、公開環境ではHTTPSを使用してください。

### 主なコマンド

```bash
pnpm dev           # 開発サーバーを起動
pnpm build         # 静的サイトをoutディレクトリへ出力
pnpm format        # Prettierでコードを整形
pnpm format:check  # コードの整形状態を確認
pnpm deploy        # ビルド後、Cloudflare Workersへデプロイ
```

## 環境変数

| 変数名                | 説明                                                  |
| --------------------- | ----------------------------------------------------- |
| `NEXT_PUBLIC_APP_URL` | メタデータ、サイトマップ、robots.txtで使用する公開URL |

ローカルで設定する場合は、プロジェクト直下に `.env.local` を作成します。

```env
NEXT_PUBLIC_APP_URL=https://web-recorder.taptappun.workers.dev
```

## ビルドとデプロイ

Next.jsのStatic Exportで生成された `out` ディレクトリを、Cloudflare Workers Assetsから配信します。

```bash
pnpm deploy
```

Cloudflareへの認証や対象アカウントの設定は、事前にWranglerで完了している必要があります。デプロイ設定は `wrangler.jsonc` に記載されています。

## ディレクトリ構成

```text
web-recorder/
├── app/
│   ├── globals.css          # 共通スタイルとテーマ変数
│   ├── layout.tsx           # レイアウト、SEO、テーマ初期化
│   ├── page.tsx             # トップページ
│   ├── not-found.tsx        # 404ページ
│   ├── robots.ts            # robots.txt生成
│   └── sitemap.ts           # sitemap.xml生成
├── components/
│   └── RecordingApp.tsx     # 録画・文字起こし・テーマ切り替え処理
├── styles/
│   └── RecordingApp.module.css
├── next.config.ts
├── wrangler.jsonc
└── package.json
```

## 制限事項

- 選択できる録画形式はブラウザが対応するMIMEタイプによって異なります。未対応の形式は選択できません。
- 画面音声を含めるには、ブラウザの共有ダイアログで音声共有を有効にする必要があります。
- 文字起こしの精度や対応言語は、ブラウザの音声認識機能に依存します。
- 長時間の録画ではメモリ使用量と生成ファイルサイズが大きくなる可能性があります。
