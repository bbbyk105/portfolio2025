// 修正版
import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaArrowLeft } from "react-icons/fa";
import BlogContentStyles from "./BlogContentStyles";
import { ServerSanitizeComponent } from "./ServerSanitizeComponent";
import { getAllBlogs, getBlogById } from "@/app/libs/microcms";

// Next.js 15の型定義に合わせる：両方のパラメータがPromiseである必要がある
interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  // paramsをawaitする
  const { id } = await params;
  const blog = await getBlogById(id);

  return {
    title: `${blog.title} | Portfolio Blog`,
    description: blog.excerpt,
  };
}

export async function generateStaticParams() {
  const data = await getAllBlogs(10);

  return data.contents.map((blog) => ({
    id: blog.id,
  }));
}

export default async function BlogDetail({ params }: PageProps) {
  // paramsをawaitする
  const { id } = await params;
  // searchParamsは使用していないので削除

  const blog = await getBlogById(id);

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "No date";
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

  // マークアップをmicroCMSスタイルに変換する前処理関数
  const preProcessContent = (content: string) => {
    // コードブロックの処理を改善
    // microCMSのリッチエディタで出力されるコード形式を適切に処理
    let processedContent = content;

    // コードブロック内のスタイリングを保持
    processedContent = processedContent.replace(
      /<pre>([\s\S]*?)<\/pre>/g,
      (match, codeContent) => {
        // コードブロック内のインデントと空白を保持
        return `<pre class="code-block"><code class="language-typescript">${codeContent}</code></pre>`;
      }
    );

    return processedContent;
  };

  const preprocessedContent = preProcessContent(blog.content);

  return (
    <div className="bg-zinc-900 dark:bg-zinc-900 min-h-screen">
      <div className="container mx-auto px-4 py-6 max-w-screen-lg">
        {/* 戻るリンク */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-400 hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-300 text-sm font-medium transition-colors"
          >
            <FaArrowLeft className="w-5 h-5" />
            <span className="ml-1">記事一覧に戻る</span>
          </Link>
        </div>

        <article className="bg-zinc-800 dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden border border-zinc-700 dark:border-zinc-700 dark-mode-element">
          {blog.thumbnail && (
            <div className="relative w-full aspect-[2/1]">
              <Image
                src={blog.thumbnail.url}
                alt={blog.title}
                width={640}
                height={360}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-6 md:p-8">
            {/* カテゴリータグ */}
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.category && (
                <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-blue-900 text-blue-200 dark:bg-blue-900 dark:text-blue-200">
                  {blog.category.name}
                </span>
              )}
            </div>

            {/* タイトル */}
            <h1 className="text-3xl font-bold mb-4 text-gray-100 dark:text-gray-100 leading-tight blog-title">
              {blog.title}
            </h1>

            {/* メタ情報 (Zennスタイル) */}
            <div className="flex items-center text-sm text-gray-400 dark:text-gray-400 pb-6 mb-6 border-b border-zinc-700 dark:border-zinc-700">
              <span className="flex items-center mr-4">
                <FaCalendarAlt className="w-4 h-4" />
                <span className="ml-1">{formatDate(blog.publishedAt)}</span>
              </span>
              <span className="flex items-center">
                <FaClock className="w-4 h-4" />
                <span className="ml-1">{readTime}分で読めます</span>
              </span>
            </div>

            {/* 記事本文 - クライアントコンポーネントを使用 */}
            <ServerSanitizeComponent content={preprocessedContent || ""} />

            {/* ソーシャルシェアボタン */}
            <div className="mt-12 pt-6 border-t border-zinc-700 dark:border-zinc-700">
              <div className="flex items-center justify-between">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-gray-400 hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-300 text-sm font-medium transition-colors"
                >
                  <FaArrowLeft className="w-5 h-5" />
                  <span className="ml-1">記事一覧に戻る</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* スタイルをクライアントコンポーネントで適用 */}
      <BlogContentStyles />
    </div>
  );
}
