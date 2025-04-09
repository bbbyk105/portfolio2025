import { createClient } from "microcms-js-sdk";
import { Blog, BlogResponse } from "@/types/blog";

// クライアントの作成
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.MICROCMS_API_KEY || "",
});

export async function getAllBlogs(limit = 10, offset = 0) {
  try {
    const response = await client.get<BlogResponse>({
      endpoint: "blogs",
      queries: {
        limit,
        offset,
        orders: "-publishedAt",
      },
    });
    return response;
  } catch (error) {
    console.error("microCMS API error:", error);
    return { contents: [], totalCount: 0, offset, limit };
  }
}

export async function getBlogById(id: string) {
  try {
    const response = await client.get<Blog>({
      endpoint: "blogs",
      contentId: id,
    });
    return response;
  } catch (error) {
    console.error("microCMS API error:", error);
    throw error;
  }
}

export async function getAllCategories() {
  try {
    const response = await client.get({
      endpoint: "categories",
      queries: {
        limit: 10,
      },
    });
    return response.contents;
  } catch (error) {
    console.error("microCMS API error:", error);
    return [];
  }
}
