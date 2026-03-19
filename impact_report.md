# Next.js 13 → 14 Upgrade Impact Report

## 実施内容のサマリ
- Next.js を 13.4.13 から 14.2.24 にアップグレードしました。
- 関連する依存関係（React 18.3.1, ESLint config 14.2.24）および型定義を更新しました。
- 公式 codemod を実行しましたが、今回のソースコードにおいては自動変換が必要な箇所はありませんでした。
- `yarn dev` および `yarn build` を通じて、正常に動作することを確認済みです。

## 影響範囲の整理結果

### 1. 依存関係の変更
- **影響箇所**: `package.json`
- **影響理由**: Next.js 14 の動作要件を満たすため、Next.js および関連パッケージのバージョンを更新。
- **実施した修正内容**:
```diff
--- a/package.json
+++ b/package.json
@@ -9,16 +9,16 @@
     "lint": "next lint"
   },
   "dependencies": {
-    "@types/node": "20.4.9",
-    "@types/react": "18.2.20",
-    "@types/react-dom": "18.2.7",
+    "@types/node": "20",
+    "@types/react": "18",
+    "@types/react-dom": "18",
     "autoprefixer": "10.4.14",
     "eslint": "8.46.0",
-    "eslint-config-next": "13.4.13",
-    "next": "13.4.13",
+    "eslint-config-next": "14.2.24",
+    "next": "14.2.24",
     "postcss": "8.4.27",
-    "react": "18.2.0",
-    "react-dom": "18.2.0",
+    "react": "18.3.1",
+    "react-dom": "18.3.1",
     "tailwindcss": "3.3.3",
     "typescript": "5.1.6"
   },
```

### 2. コードへの影響
- **影響箇所**: なし
- **影響理由**: 今回のプロジェクトで使用している Pages Router の機能に関しては、Next.js 14 においても大きな破壊的変更（削除された API 等）の影響を受けなかったためです。
- **公式 codemod 結果**:
  - `built-in-next-font`: 18 unmodified (該当箇所なし)
  - `next-og-import`: 18 ok / 0 unmodified (変更なし)

### 3. 設定ファイル・ランタイム
- **影響箇所**: なし
- **影響理由**: `next.config.js` 等の設定において、非推奨となった設定は使用されていませんでした。
- **検証結果**: `yarn build` は正常に成功しており、バイナリやページ生成におけるエラーは検出されませんでした。
