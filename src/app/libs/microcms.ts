import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
} from "microcms-js-sdk";

// ブログの型定義
export type Blog = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  thumbnail?: MicroCMSImage;
  category?: {
    id: string;
    name: string;
  };
} & MicroCMSDate;

// 環境変数のチェック
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// APIクライアントの作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
  retry: true,
});

// ブログ記事一覧を取得する関数
export const getAllBlogs = async (limit = 10, queries?: MicroCMSQueries) => {
  return await client.getList<Blog>({
    endpoint: "blogs",
    queries: {
      limit,
      orders: "-publishedAt",
      ...queries,
    },
  });
};

// ブログ記事詳細を取得する関数
export const getBlogById = async (id: string, queries?: MicroCMSQueries) => {
  return await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId: id,
    queries,
  });
};
