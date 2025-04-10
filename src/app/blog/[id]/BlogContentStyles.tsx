"use client";

import React, { useEffect } from "react";

// クライアントコンポーネントとしてグローバルスタイルを定義
export default function BlogContentStyles() {
  // クライアントサイドでのダークモード設定
  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      // まずデフォルトでダークモードを適用（サイト全体のデフォルト設定として）
      htmlElement.classList.add("dark");

      // ローカルストレージから設定を読み取って上書きする可能性
      const storedDarkMode = localStorage.getItem("darkMode");

      // 明示的にライトモードの設定がある場合のみライトモードを適用
      if (storedDarkMode === "false") {
        htmlElement.classList.remove("dark");
      }
    }

    // ダークモード変更のイベントリスナーを設定
    const updateDarkMode = () => {
      const isDarkMode = localStorage.getItem("darkMode") === "true";
      const htmlElement = document.querySelector("html");
      if (htmlElement) {
        if (isDarkMode || localStorage.getItem("darkMode") === null) {
          // デフォルトまたは明示的にダークモードの場合
          htmlElement.classList.add("dark");
        } else {
          // 明示的にライトモードの場合のみ
          htmlElement.classList.remove("dark");
        }
      }
    };

    // ストレージ変更イベントをリッスン
    window.addEventListener("storage", updateDarkMode);

    // クリーンアップ関数
    return () => {
      window.removeEventListener("storage", updateDarkMode);
    };
  }, []);

  return (
    <style jsx global>{`
      /* 基本的な記事スタイリング */
      .prose {
        font-size: 1rem !important;
        line-height: 1.8 !important;
      }

      /* 見出しのスタイリング - デフォルトで黒色にしてSafariの問題に対応 */
      .prose h1 {
        font-size: 2rem !important;
        font-weight: 700 !important;
        margin-top: 2rem !important;
        margin-bottom: 1rem !important;
        line-height: 1.3 !important;
        color: #111827 !important;
      }

      .prose h2 {
        font-size: 1.5rem !important;
        font-weight: 700 !important;
        margin-top: 1.75rem !important;
        margin-bottom: 0.75rem !important;
        padding-bottom: 0.3rem !important;
        border-bottom: 1px solid #e5e7eb !important;
        color: #111827 !important;
      }

      .prose h3,
      .prose h4,
      .prose h5,
      .prose h6 {
        color: #111827 !important;
      }

      .prose h3 {
        font-size: 1.25rem !important;
        font-weight: 600 !important;
        margin-top: 1.5rem !important;
        margin-bottom: 0.75rem !important;
      }

      /* テキストはデフォルトで黒色に設定 */
      .prose p,
      .prose ul,
      .prose ol,
      .prose li {
        color: #374151 !important;
      }

      /* Dark mode で白色テキストをオーバーライド */
      html.dark .prose h1,
      html.dark .prose h2,
      html.dark .prose h3,
      html.dark .prose h4,
      html.dark .prose h5,
      html.dark .prose h6 {
        color: #f3f4f6 !important;
      }

      html.dark .prose p,
      html.dark .prose ul,
      html.dark .prose ol,
      html.dark .prose li {
        color: #d1d5db !important;
      }

      html.dark .prose h2 {
        border-bottom-color: #374151 !important;
      }

      /* 段落のスタイリング */
      .prose p {
        margin-top: 1rem !important;
        margin-bottom: 1rem !important;
        line-height: 1.8 !important;
      }

      /* リストのスタイリング */
      .prose ul,
      .prose ol {
        margin-top: 1rem !important;
        margin-bottom: 1rem !important;
        padding-left: 1.5rem !important;
      }

      .prose li {
        margin-top: 0.25rem !important;
        margin-bottom: 0.25rem !important;
      }

      /* コードブロックのスタイル */
      .prose pre {
        background-color: #1e1e1e !important;
        color: #d4d4d4 !important;
        padding: 1rem !important;
        border-radius: 0.375rem !important;
        overflow-x: auto !important;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          "Liberation Mono", "Courier New", monospace !important;
        font-size: 0.9rem !important;
        line-height: 1.7 !important;
        tab-size: 2 !important;
        margin: 1.25rem 0 !important;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) !important;
      }

      /* コードブロック内のコードのスタイル */
      .prose pre code {
        background-color: transparent !important;
        padding: 0 !important;
        color: inherit !important;
        border-radius: 0 !important;
        font-size: inherit !important;
        white-space: pre !important;
        word-break: normal !important;
      }

      /* シンタックスハイライト - 基本的なカラースキーマ */
      .prose pre .comment {
        color: #6a9955 !important;
      }
      .prose pre .keyword {
        color: #569cd6 !important;
      }
      .prose pre .string {
        color: #ce9178 !important;
      }
      .prose pre .number {
        color: #b5cea8 !important;
      }
      .prose pre .function {
        color: #dcdcaa !important;
      }
      .prose pre .operator {
        color: #d4d4d4 !important;
      }
      .prose pre .variable {
        color: #9cdcfe !important;
      }
      .prose pre .property {
        color: #9cdcfe !important;
      }
      .prose pre .punctuation {
        color: #d4d4d4 !important;
      }
      .prose pre .constant {
        color: #4fc1ff !important;
      }
      .prose pre .class-name {
        color: #4ec9b0 !important;
      }

      /* インラインコードのスタイル - デフォルトで青色に */
      .prose :not(pre) > code {
        background-color: rgba(96, 165, 250, 0.1) !important;
        color: #3b82f6 !important;
        padding: 0.2rem 0.4rem !important;
        border-radius: 0.25rem !important;
        font-size: 0.875rem !important;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          "Liberation Mono", "Courier New", monospace !important;
      }

      /* Dark mode インラインコード */
      html.dark .prose :not(pre) > code {
        background-color: rgba(59, 130, 246, 0.15) !important;
        color: #60a5fa !important;
      }

      /* 引用のスタイル - デフォルトでグレーに */
      .prose blockquote {
        border-left: 4px solid #e5e7eb !important;
        padding-left: 1rem !important;
        font-style: italic !important;
        color: #6b7280 !important;
        margin: 1.25rem 0 !important;
      }

      /* Dark mode 引用 */
      html.dark .prose blockquote {
        border-left-color: #4b5563 !important;
        color: #9ca3af !important;
      }

      /* microCMSスタイルに近づけるための追加スタイル */
      .prose code {
        font-family: Menlo, Monaco, "Courier New", monospace !important;
      }

      /* シンタックスハイライトのカラー - microCMS風 */
      .prose pre .comment {
        color: #6a9955 !important;
      } /* コメント - 緑色 */
      .prose pre .keyword {
        color: #569cd6 !important;
      } /* キーワード - 青色 */
      .prose pre .string {
        color: #ce9178 !important;
      } /* 文字列 - オレンジ色 */
      .prose pre .function {
        color: #dcdcaa !important;
      } /* 関数名 - 黄色 */
      .prose pre .variable {
        color: #9cdcfe !important;
      } /* 変数 - 水色 */
      .prose pre .punctuation {
        color: #d4d4d4 !important;
      } /* 句読点 - 白色 */

      /* フォーカスされた要素の強調 */
      .prose a:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }

      /* カスタムID selector for blog content - 明示的に文字色を指定 */
      #blog-content.prose h1,
      #blog-content.prose h2,
      #blog-content.prose h3,
      #blog-content.prose h4,
      #blog-content.prose h5,
      #blog-content.prose h6 {
        color: #111827 !important;
      }

      #blog-content.prose p,
      #blog-content.prose ul,
      #blog-content.prose ol,
      #blog-content.prose li {
        color: #374151 !important;
      }

      /* Blog content dark mode */
      html.dark #blog-content.prose h1,
      html.dark #blog-content.prose h2,
      html.dark #blog-content.prose h3,
      html.dark #blog-content.prose h4,
      html.dark #blog-content.prose h5,
      html.dark #blog-content.prose h6 {
        color: #f3f4f6 !important;
      }

      html.dark #blog-content.prose p,
      html.dark #blog-content.prose ul,
      html.dark #blog-content.prose ol,
      html.dark #blog-content.prose li {
        color: #d1d5db !important;
      }

      /* コンテナ背景色 - デフォルトで明るい背景 */
      .bg-gray-100.dark\\:bg-zinc-900 {
        background-color: #f3f4f6 !important;
      }

      /* コンテナ背景色（ダークモード） */
      html.dark .bg-gray-100.dark\\:bg-zinc-900 {
        background-color: #18181b !important;
      }

      /* 記事コンテナ - デフォルトで白背景 */
      .bg-white.dark\\:bg-zinc-800 {
        background-color: #ffffff !important;
      }

      /* 記事コンテナ（ダークモード） */
      html.dark .bg-white.dark\\:bg-zinc-800 {
        background-color: #27272a !important;
      }

      /* リンク色 - デフォルトでグレー */
      .text-gray-600.hover\\:text-gray-900.dark\\:text-gray-400 {
        color: #4b5563 !important;
      }

      .text-gray-600.hover\\:text-gray-900.dark\\:text-gray-400:hover {
        color: #111827 !important;
      }

      /* ダークモードでリンクを適切に表示 */
      html.dark .text-gray-600.hover\\:text-gray-900.dark\\:text-gray-400 {
        color: #9ca3af !important;
      }

      html.dark
        .text-gray-600.hover\\:text-gray-900.dark\\:text-gray-400:hover {
        color: #d1d5db !important;
      }
    `}</style>
  );
}
