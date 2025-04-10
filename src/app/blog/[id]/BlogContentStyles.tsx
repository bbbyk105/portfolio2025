"use client";

import React, { useEffect } from "react";

// クライアントコンポーネントとしてグローバルスタイルを定義
export default function BlogContentStyles() {
  // クライアントサイドでのダークモード強制適用
  useEffect(() => {
    // ダークモードを検出して適用する関数
    const applyDarkMode = () => {
      const htmlElement = document.documentElement;

      // 優先順位: ローカルストレージ > システム設定
      const isDarkMode =
        localStorage.getItem("darkMode") === "true" ||
        (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);

      if (isDarkMode) {
        htmlElement.classList.add("dark");
        document.body.classList.add("dark-mode-active");

        // ブログコンテンツに明示的にダークモードクラスを適用
        const blogContent = document.getElementById("blog-content");
        if (blogContent) {
          blogContent.classList.add("dark-content");
        }

        // 記事コンテナにもダークモードを適用
        const articleElements = document.querySelectorAll("article");
        articleElements.forEach((element) => {
          element.classList.add("dark-content-container");
        });
      }
    };

    // 初期適用
    applyDarkMode();

    // システムのダークモード変更を監視
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add("dark");
        document.body.classList.add("dark-mode-active");
      } else {
        // ローカルストレージに明示的な設定がなければクラスを削除
        if (localStorage.getItem("darkMode") !== "true") {
          document.documentElement.classList.remove("dark");
          document.body.classList.remove("dark-mode-active");
        }
      }

      // ダークモード変更時に記事内容も更新
      applyDarkMode();
    };

    // イベントリスナーを追加
    if (darkModeMediaQuery.addEventListener) {
      darkModeMediaQuery.addEventListener("change", handleChange);
      return () =>
        darkModeMediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  return (
    <style jsx global>{`
      /* CSS変数の上書き */
      html.dark {
        --background: #0a0a0a !important;
        --foreground: #ededed !important;
      }

      html.dark body {
        background: var(--background) !important;
        color: var(--foreground) !important;
      }

      /* ダークモード強制適用用クラス */
      body.dark-mode-active {
        background: var(--background) !important;
        color: var(--foreground) !important;
      }

      /* 基本的な記事スタイリング */
      .prose {
        font-size: 1rem !important;
        line-height: 1.8 !important;
      }

      /* 見出しのスタイリング */
      .prose h1 {
        font-size: 2rem !important;
        font-weight: 700 !important;
        margin-top: 2rem !important;
        margin-bottom: 1rem !important;
        line-height: 1.3 !important;
      }

      .prose h2 {
        font-size: 1.5rem !important;
        font-weight: 700 !important;
        margin-top: 1.75rem !important;
        margin-bottom: 0.75rem !important;
        padding-bottom: 0.3rem !important;
        border-bottom: 1px solid #e5e7eb !important;
      }

      .dark .prose h2,
      html.dark .prose h2,
      body.dark-mode-active .prose h2 {
        border-bottom-color: #374151 !important;
      }

      .prose h3 {
        font-size: 1.25rem !important;
        font-weight: 600 !important;
        margin-top: 1.5rem !important;
        margin-bottom: 0.75rem !important;
      }

      /* Dark mode text colors - !important で強制 */
      html.dark .prose h1,
      html.dark .prose h2,
      html.dark .prose h3,
      html.dark .prose h4,
      html.dark .prose h5,
      html.dark .prose h6,
      body.dark-mode-active .prose h1,
      body.dark-mode-active .prose h2,
      body.dark-mode-active .prose h3,
      body.dark-mode-active .prose h4,
      body.dark-mode-active .prose h5,
      body.dark-mode-active .prose h6,
      .dark-content h1,
      .dark-content h2,
      .dark-content h3,
      .dark-content h4,
      .dark-content h5,
      .dark-content h6 {
        color: #f3f4f6 !important;
      }

      html.dark .prose p,
      html.dark .prose ul,
      html.dark .prose ol,
      html.dark .prose li,
      body.dark-mode-active .prose p,
      body.dark-mode-active .prose ul,
      body.dark-mode-active .prose ol,
      body.dark-mode-active .prose li,
      .dark-content p,
      .dark-content ul,
      .dark-content ol,
      .dark-content li {
        color: #d1d5db !important;
      }

      /* Light mode text colors */
      .prose h1,
      .prose h2,
      .prose h3,
      .prose h4,
      .prose h5,
      .prose h6 {
        color: #111827 !important;
      }

      .prose p,
      .prose ul,
      .prose ol,
      .prose li {
        color: #374151 !important;
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

      /* インラインコードのスタイル */
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
      html.dark .prose :not(pre) > code,
      body.dark-mode-active .prose :not(pre) > code,
      .dark-content :not(pre) > code {
        background-color: rgba(59, 130, 246, 0.15) !important;
        color: #60a5fa !important;
      }

      /* 引用のスタイル */
      .prose blockquote {
        border-left: 4px solid #e5e7eb !important;
        padding-left: 1rem !important;
        font-style: italic !important;
        color: #6b7280 !important;
        margin: 1.25rem 0 !important;
      }

      /* Dark mode 引用 */
      html.dark .prose blockquote,
      body.dark-mode-active .prose blockquote,
      .dark-content blockquote {
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

      /* カスタムID selector for blog content */
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

      /* Blog content dark mode - 強化されたセレクタ */
      html.dark #blog-content.prose h1,
      html.dark #blog-content.prose h2,
      html.dark #blog-content.prose h3,
      html.dark #blog-content.prose h4,
      html.dark #blog-content.prose h5,
      html.dark #blog-content.prose h6,
      body.dark-mode-active #blog-content.prose h1,
      body.dark-mode-active #blog-content.prose h2,
      body.dark-mode-active #blog-content.prose h3,
      body.dark-mode-active #blog-content.prose h4,
      body.dark-mode-active #blog-content.prose h5,
      body.dark-mode-active #blog-content.prose h6,
      #blog-content.dark-content h1,
      #blog-content.dark-content h2,
      #blog-content.dark-content h3,
      #blog-content.dark-content h4,
      #blog-content.dark-content h5,
      #blog-content.dark-content h6 {
        color: #f3f4f6 !important;
      }

      html.dark #blog-content.prose p,
      html.dark #blog-content.prose ul,
      html.dark #blog-content.prose ol,
      html.dark #blog-content.prose li,
      body.dark-mode-active #blog-content.prose p,
      body.dark-mode-active #blog-content.prose ul,
      body.dark-mode-active #blog-content.prose ol,
      body.dark-mode-active #blog-content.prose li,
      #blog-content.dark-content p,
      #blog-content.dark-content ul,
      #blog-content.dark-content ol,
      #blog-content.dark-content li {
        color: #d1d5db !important;
      }

      /* dangerouslySetInnerHTMLで挿入されたコンテンツに対する強力なセレクタ */
      html.dark [id^="blog-"] .prose *,
      body.dark-mode-active [id^="blog-"] .prose *,
      .dark-content * {
        color: var(--foreground) !important;
      }

      /* 条件付きセレクタの追加 - DOMPurifyでサニタイズされた要素にも適用 */
      html.dark #blog-content > *,
      body.dark-mode-active #blog-content > *,
      .dark-mode-content > * {
        color: var(--foreground) !important;
      }

      /* コンテナ背景色を強化 */
      .bg-gray-100.dark\\:bg-zinc-900 {
        background-color: #f3f4f6 !important;
      }

      /* コンテナ背景色（ダークモード） */
      html.dark .bg-gray-100.dark\\:bg-zinc-900,
      body.dark-mode-active .bg-gray-100.dark\\:bg-zinc-900 {
        background-color: #18181b !important;
      }

      /* 記事コンテナ（ライトモード） */
      .bg-white.dark\\:bg-zinc-800 {
        background-color: #ffffff !important;
      }

      /* 記事コンテナ（ダークモード） */
      html.dark .bg-white.dark\\:bg-zinc-800,
      body.dark-mode-active .bg-white.dark\\:bg-zinc-800,
      .dark-content-container {
        background-color: #27272a !important;
      }

      /* ダークモードでリンクを適切に表示 */
      html.dark .text-gray-600.hover\\:text-gray-900.dark\\:text-gray-400,
      body.dark-mode-active
        .text-gray-600.hover\\:text-gray-900.dark\\:text-gray-400 {
        color: #9ca3af !important;
      }

      html.dark .text-gray-600.hover\\:text-gray-900.dark\\:text-gray-400:hover,
      body.dark-mode-active
        .text-gray-600.hover\\:text-gray-900.dark\\:text-gray-400:hover {
        color: #d1d5db !important;
      }

      /* 強制的なテキスト色の適用 - さらに強力なセレクタ */
      html.dark .prose *,
      html.dark #blog-content.prose *,
      body.dark-mode-active .prose *,
      body.dark-mode-active #blog-content.prose *,
      .dark-content * {
        color: var(--foreground) !important;
      }

      /* カスタムIDを持つ要素のための特別な処理 */
      [id="blog-content"] .prose h1,
      [id="blog-content"] .prose h2,
      [id="blog-content"] .prose h3 {
        color: var(--foreground) !important;
      }

      /* microCMSコンテンツに対するダークモード強制適用 */
      html.dark .prose h1.blog-title,
      body.dark-mode-active .prose h1.blog-title {
        color: var(--foreground) !important;
      }

      /* ダークモード強制適用のためのユーティリティクラス */
      .dark-mode-element * {
        color: var(--foreground) !important;
      }

      /* dangerouslySetInnerHTMLとDOMPurifyによる要素の強制スタイリング */
      html.dark #blog-content div,
      html.dark #blog-content span,
      html.dark #blog-content p,
      html.dark #blog-content h1,
      html.dark #blog-content h2,
      html.dark #blog-content h3,
      html.dark #blog-content h4,
      html.dark #blog-content h5,
      html.dark #blog-content h6,
      html.dark #blog-content ul,
      html.dark #blog-content ol,
      html.dark #blog-content li,
      html.dark #blog-content blockquote,
      html.dark #blog-content pre,
      html.dark #blog-content code {
        color: var(--foreground) !important;
      }

      /* プログレッシブエンハンスメントのための追加セレクタ */
      html[class*="dark"] .prose *,
      body[class*="dark-mode"] .prose *,
      [class*="dark-content"] * {
        color: var(--foreground) !important;
      }
    `}</style>
  );
}
