import React from "react";
import Link from "next/link";
import Button from "@/components/atoms/Button";
import { FaArrowRight } from "react-icons/fa";

export const metadata = {
  title: "Portfolio | Home",
  description: "Welcome to my portfolio website",
};

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-20 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="block">Hi, I&apos;m</span>
          <span className="text-teal-400">Byakko Kondo</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          フロントエンドエンジニア・UIデザイナー。美しいインターフェースと快適なユーザー体験を創造します。
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <Link href="/about">
            <Button className="flex items-center gap-2">
              <span>VIEW PROFILE</span>
              <FaArrowRight />
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-transparent border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black">
              CONTACT ME
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
