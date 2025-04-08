import React from "react";
import { getBlogById, getAllBlogs } from "@/app/api/fetchMicroCMS";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaArrowLeft } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import DOMPurify from "isomorphic-dompurify";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getBlogById(params.id);

  return {
    title: `${blog.title} | Portfolio Blog`,
    description: blog.excerpt,
  };
}

export async function generateStaticParams() {
  const data = await getAllBlogs(999);

  return data.contents.map((blog) => ({
    id: blog.id,
  }));
}

export default async function BlogDetail({ params }: Props) {
  const blog = await getBlogById(params.id);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
  };

  // 記事の読了時間を計算（おおよそ）
  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const textLength = content.replace(/<[^>]*>/g, "").length;
    return Math.ceil(textLength / 5 / wordsPerMinute);
  };

  const readTime = calculateReadTime(blog.content);

  // XSS攻撃を防ぐためにHTMLコンテンツをサニタイズ
  const sanitizedContent = DOMPurify.sanitize(blog.content, {
    USE_PROFILES: { html: true },
    // 許可するHTMLタグを指定
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
    // 許可する属性を指定
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
    ],
    // 安全なURLのみを許可
    ALLOW_UNKNOWN_PROTOCOLS: false,
  });

  return (
    <div className="bg-gray-50 dark:bg-zinc-900 min-h-screen">
      <div className="container mx-auto px-4 py-6 max-w-screen-md">
        {/* 戻るリンク */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-sm font-medium"
          >
            <FaArrowLeft className="w-5 h-5" />
            <span className="ml-1">記事一覧に戻る</span>
          </Link>
        </div>

        <article className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm overflow-hidden">
          {blog.thumbnail && (
            <div className="relative w-full aspect-[2/1]">
              <Image
                src={blog.thumbnail.url}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="p-6 md:p-8">
            {/* カテゴリータグ */}
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.category && (
                <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                  {blog.category.name}
                </span>
              )}
            </div>

            {/* タイトル */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 leading-tight">
              {blog.title}
            </h1>

            {/* メタ情報 (Zennスタイル) */}
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 pb-6 mb-6 border-b border-gray-100 dark:border-zinc-700">
              <span className="flex items-center mr-4">
                <FaCalendarAlt className="w-4 h-4" />
                <span className="ml-1">{formatDate(blog.publishedAt)}</span>
              </span>
              <span className="flex items-center">
                <FaClock className="w-4 h-4" />
                <span className="ml-1">{readTime}分で読めます</span>
              </span>
            </div>

            {/* 記事本文 - サニタイズされたコンテンツを使用 */}
            <div
              className="prose prose-lg max-w-none
                dark:prose-invert
                prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
                prose-headings:border-b prose-headings:border-gray-200 dark:prose-headings:border-zinc-700 prose-headings:pb-2 prose-headings:mb-4
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:mt-8
                prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
                prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-4 prose-blockquote:border-gray-300 dark:prose-blockquote:border-gray-600
                prose-blockquote:pl-4 prose-blockquote:py-1 prose-blockquote:italic
                prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-400
                prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-code:bg-blue-50 dark:prose-code:bg-blue-900/30
                prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                prose-pre:bg-gray-100 dark:prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-gray-200 
                dark:prose-pre:border-zinc-700 prose-pre:rounded-lg prose-pre:p-4"
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />

            {/* アクションボタン */}
            <div className="mt-12 pt-6 border-t border-gray-100 dark:border-zinc-700">
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      blog.title
                    )}&url=${encodeURIComponent(
                      `${
                        typeof window !== "undefined"
                          ? window.location.href
                          : ""
                      }`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-zinc-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-600 transition-colors"
                  >
                    <FaXTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      `${
                        typeof window !== "undefined"
                          ? window.location.href
                          : ""
                      }`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-zinc-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-600 transition-colors"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      `${
                        typeof window !== "undefined"
                          ? window.location.href
                          : ""
                      }`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-zinc-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-600 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-sm font-medium"
                >
                  <FaArrowLeft className="w-5 h-5" />
                  <span className="ml-1">記事一覧に戻る</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
