import React from "react";
import Link from "next/link";
import { FaCalendarAlt, FaTag } from "react-icons/fa";
import { getAllBlogs } from "@/app/api/fetchMicroCMS";
import Image from "next/image";
import SectionHeader from "@/components/molecules/SectionHeader";

export const metadata = {
  title: "Portfolio | Blog",
  description: "My thoughts and articles about web development",
};

export default async function Blog() {
  const data = await getAllBlogs();
  const blogs = data.contents;

  return (
    <div className="container mx-auto px-4">
      <section className="py-12">
        <SectionHeader
          title="BLOG"
          subtitle="技術やデザインに関する知見や、制作過程で得た学びを共有しています。その他、普段の仕事についても発信していきます。"
          centered={true}
          aosAnimation="fade-up"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <article className="bg-gray-900 rounded-lg overflow-hidden transition-transform hover:transform hover:scale-105 hover:shadow-xl hover:shadow-teal-900/20">
                <div className="aspect-video bg-gray-800 relative">
                  {post.thumbnail ? (
                    <Image
                      src={post.thumbnail.url}
                      alt={post.title}
                      width={640}
                      height={360}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                      Thumbnail
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <span className="flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      {new Date(post.publishedAt).toISOString().split("T")[0]}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <FaTag className="mr-1" />
                      {post.category?.name || "Uncategorized"}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{post.excerpt}</p>

                  <div className="mt-4 text-teal-400 text-sm font-medium">
                    READ MORE
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
