import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { getBlogById, getAllBlogs } from "@/lib/fetchMicroCMS";
import Tag from "@/components/atoms/Tag";
import { Metadata } from "next";
import Image from "next/image";

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

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-4xl mx-auto bg-gray-900 rounded-lg overflow-hidden">
        {blog.thumbnail && (
          <div className="relative w-full h-96">
            <Image
              src={blog.thumbnail.url}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-8">
          <div className="flex items-center text-sm text-gray-400 mb-4">
            <span className="flex items-center">
              <FaCalendarAlt className="mr-1" />
              {formatDate(blog.publishedAt)}
            </span>
            <span className="mx-2">•</span>
            {blog.category && <Tag>{blog.category.name}</Tag>}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6">{blog.title}</h1>

          <div
            className="prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </article>
    </div>
  );
}
