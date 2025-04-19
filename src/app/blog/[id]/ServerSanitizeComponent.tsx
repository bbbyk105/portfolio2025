"use client";

import React from "react";
import DOMPurify from "isomorphic-dompurify";

type Props = {
  content: string;
};

export function ServerSanitizeComponent({ content }: Props) {
  // クライアントサイドでのサニタイズ処理
  const sanitizedContent = DOMPurify.sanitize(content, {
    USE_PROFILES: { html: true },
    ALLOWED_TAGS: [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "a",
      "ul",
      "ol",
      "li",
      "blockquote",
      "pre",
      "code",
      "em",
      "strong",
      "del",
      "img",
      "br",
      "hr",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
      "div",
      "span",
    ],
    ALLOWED_ATTR: [
      "href",
      "src",
      "alt",
      "title",
      "class",
      "id",
      "target",
      "rel",
      "style",
      "width",
      "height",
      "data-language",
    ],
    ADD_ATTR: ["target"],
    ALLOW_UNKNOWN_PROTOCOLS: false,
  });

  return (
    <div
      id="blog-content"
      className="prose prose-lg max-w-none dark-mode-content
        dark:prose-invert
        prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
        prose-headings:border-b prose-headings:border-gray-200 dark:prose-headings:border-zinc-700 prose-headings:pb-2 prose-headings:mb-4
        prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
        prose-h3:text-xl prose-h3:mt-8
        prose-p:text-gray-800 dark:prose-p:text-gray-300 prose-p:leading-relaxed
        prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
        prose-blockquote:border-l-4 prose-blockquote:border-gray-300 dark:prose-blockquote:border-gray-600
        prose-blockquote:pl-4 prose-blockquote:py-1 prose-blockquote:italic
        prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-400
        
        /* コードブロックスタイルを強化 */
        prose-code:font-mono prose-code:text-blue-600 dark:prose-code:text-blue-400 
        prose-code:bg-blue-50 dark:prose-code:bg-blue-900/30
        prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
        
        /* preタグのスタイリングを強化 */
        prose-pre:bg-gray-900 dark:prose-pre:bg-zinc-900 
        prose-pre:text-gray-100 dark:prose-pre:text-gray-100
        prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-zinc-700 
        prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto
        
        /* preタグ内のcodeタグには背景色と余白を適用しない */
        prose-pre:prose-code:bg-transparent prose-pre:prose-code:p-0 prose-pre:prose-code:text-current"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
}
