import Image from "next/image";
import React from "react";
import { FaCode, FaLaptopCode, FaPalette } from "react-icons/fa";

export const metadata = {
  title: "Portfolio | About",
  description: "Learn more about me and my background",
};

export default function About() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-12">
        <div className="text-start mb-12">
          <h1 className="text-4xl font-bold mb-2">ABOUT</h1>
          <div className="w-20 h-1 bg-teal-400 items-start"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-xl overflow-hidden bg-gray-800 shadow-lg aspect-square">
            <Image
              src="/images/me.webp"
              alt="Profile photo"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Byakko Kondo</h2>
            <p className="text-gray-300 mb-6">
              フロントエンドエンジニアとして、最新の技術を駆使して美しいウェブアプリケーションを構築することに情熱を持っています。ユーザー体験を最優先に考え、パフォーマンスとアクセシビリティに配慮したプロダクトを開発しています。
            </p>
            <p className="text-gray-300 mb-6">
              これまでに複数のプロジェクトでNext.js、React、TypeScriptを活用し、スケーラブルなアプリケーションを構築してきました。常に新しい技術を学び、より良いコードを書くことを目指しています。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                <FaCode className="text-3xl text-teal-400 mb-3" />
                <h3 className="font-bold mb-1">Development</h3>
                <p className="text-sm text-gray-400">
                  クリーンで効率的なコードを書くことにこだわります。
                </p>
              </div>

              <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                <FaLaptopCode className="text-3xl text-teal-400 mb-3" />
                <h3 className="font-bold mb-1">Frontend</h3>
                <p className="text-sm text-gray-400">
                  最新のフレームワークとツールを駆使します。
                </p>
              </div>

              <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                <FaPalette className="text-3xl text-teal-400 mb-3" />
                <h3 className="font-bold mb-1">UI/UX</h3>
                <p className="text-sm text-gray-400">
                  美しく使いやすいインターフェースをデザインします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
