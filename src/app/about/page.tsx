"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import {
  FaCode,
  FaLaptopCode,
  FaPalette,
  FaShoppingCart,
  FaRocket,
  FaMobileAlt,
  FaGamepad,
  FaCamera,
  FaMusic,
  FaBookOpen,
} from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutWithTechStack() {
  // AOSの初期化
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
      offset: 100,
    });

    // ウィンドウリサイズ時にAOSを更新
    window.addEventListener("resize", AOS.refresh);

    return () => {
      window.removeEventListener("resize", AOS.refresh);
    };
  }, []);

  // サービスデータ
  const services = [
    {
      id: 1,
      title: "最新技術によるWebサイト制作",
      description:
        "Next.js、React、TailwindCSSを活用した高速で美しいWebサイトを低価格で提供します。学生ならではの柔軟な対応と最新トレンドを取り入れたデザインが強みです。",
      icon: <FaRocket />,
      delay: 100,
    },
    {
      id: 2,
      title: "ECサイト構築",
      description:
        "Shopify、WooCommerce、Next.js Commerceなどを用いた最適なECソリューションを提案。決済システム連携からSEO対策まで、オンラインストアの立ち上げをトータルでサポートします。",
      icon: <FaShoppingCart />,
      delay: 200,
    },
    {
      id: 3,
      title: "レスポンシブデザイン",
      description:
        "スマートフォンからタブレット、デスクトップまで、あらゆるデバイスで最適な表示を実現するレスポンシブWebデザインを提供します。",
      icon: <FaMobileAlt />,
      delay: 300,
    },
  ];

  // 趣味・興味データ
  const interests = [
    {
      id: 1,
      title: "ゲーム開発",
      description:
        "休日はUnityを使った小規模なゲーム開発に取り組んでいます。ゲームメカニクスの設計が特に好きです。",
      icon: <FaGamepad />,
      delay: 100,
    },
    {
      id: 2,
      title: "写真撮影",
      description:
        "風景や街並みの写真撮影が趣味です。撮影した写真はWebデザインの参考にしています。",
      icon: <FaCamera />,
      delay: 200,
    },
    {
      id: 3,
      title: "音楽制作",
      description:
        "電子音楽の制作も趣味の一つです。プログラミングのスキルを活かしたジェネラティブミュージックに興味があります。",
      icon: <FaMusic />,
      delay: 300,
    },
    {
      id: 4,
      title: "技術書籍",
      description:
        "常に新しい技術トレンドをキャッチアップするため、技術書や開発ブログを読むことが日課です。",
      icon: <FaBookOpen />,
      delay: 400,
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* About Section */}
      <section className="relative">
        {/* 背景装飾要素 */}
        <div className="absolute top-40 left-0 w-64 h-64 bg-teal-400/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4">
          <div
            className="text-start mb-16"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h1 className="text-5xl font-bold mb-2 text-center">ABOUT</h1>
            <div className="w-24 h-1 bg-teal-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* プロフィール写真 - サイズ調整済み (5カラム分) */}
            <div
              className="md:col-span-5 relative h-80 md:h-96 rounded-xl overflow-hidden bg-gray-800/80 shadow-xl group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* プロフィール画像の輝きエフェクト */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/0 via-teal-400/0 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10"></div>

              <Image
                src="/images/me.webp"
                alt="Profile photo"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
              />

              {/* 画像の上に薄いオーバーレイ */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* 自己紹介テキスト部分 (7カラム分) */}
            <div className="md:col-span-7">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Byakko Kondo
              </h2>
              <p
                className="text-gray-300 mb-6 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                フロントエンドエンジニアとして、最新の技術を駆使して美しいウェブアプリケーションを構築することに情熱を持っています。ユーザー体験を最優先に考え、パフォーマンスとアクセシビリティに配慮したプロダクトを開発しています。
              </p>
              <p
                className="text-gray-300 mb-6 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                これまでに複数のプロジェクトでNext.js、React、TypeScriptを活用し、スケーラブルなアプリケーションを構築してきました。常に新しい技術を学び、より良いコードを書くことを目指しています。
              </p>
              <p
                className="text-gray-300 mb-10 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="550"
              >
                <strong className="text-teal-400">学生ならではの視点</strong>
                で、リーズナブルな価格設定と最新のトレンドを取り入れたウェブサイト・ECサイト制作サービスを提供しています。低コストでハイクオリティな制作を実現します。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div
                  className="bg-gray-900/80 backdrop-blur-sm p-5 rounded-lg hover:bg-gray-800 transition-all duration-500 group hover:shadow-lg hover:shadow-teal-400/10 transform hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className="text-3xl text-teal-400 mb-3 transition-transform duration-500 group-hover:scale-110">
                    <FaCode />
                  </div>
                  <h3 className="font-bold mb-2 text-white">Development</h3>
                  <p className="text-sm text-gray-400">
                    クリーンで効率的なコードを書くことにこだわります。
                  </p>
                </div>

                <div
                  className="bg-gray-900/80 backdrop-blur-sm p-5 rounded-lg hover:bg-gray-800 transition-all duration-500 group hover:shadow-lg hover:shadow-teal-400/10 transform hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <div className="text-3xl text-teal-400 mb-3 transition-transform duration-500 group-hover:scale-110">
                    <FaLaptopCode />
                  </div>
                  <h3 className="font-bold mb-2 text-white">Frontend</h3>
                  <p className="text-sm text-gray-400">
                    最新のフレームワークとツールを駆使します。
                  </p>
                </div>

                <div
                  className="bg-gray-900/80 backdrop-blur-sm p-5 rounded-lg hover:bg-gray-800 transition-all duration-500 group hover:shadow-lg hover:shadow-teal-400/10 transform hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <div className="text-3xl text-teal-400 mb-3 transition-transform duration-500 group-hover:scale-110">
                    <FaPalette />
                  </div>
                  <h3 className="font-bold mb-2 text-white">UI/UX</h3>
                  <p className="text-sm text-gray-400">
                    美しく使いやすいインターフェースをデザインします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 提供サービスセクション */}
      <section className="py-20 relative">
        {/* 背景装飾要素 */}
        <div className="absolute top-40 right-0 w-72 h-72 bg-teal-400/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-2">SERVICES</h2>
            <div className="w-24 h-1 bg-teal-400 mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              学生ならではの視点と最新技術を組み合わせた、リーズナブルで高品質なサービスを提供します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl hover:bg-gray-800/80 transition-all duration-500 hover:shadow-xl hover:shadow-teal-400/5 transform hover:-translate-y-2 border border-gray-800 group"
                data-aos="fade-up"
                data-aos-delay={service.delay}
              >
                <div className="text-4xl text-teal-400 mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:text-teal-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-teal-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* 料金表/学生割引案内 */}
          <div
            className="mt-16 bg-gradient-to-br from-gray-900/90 to-gray-800/90 p-8 rounded-xl border border-gray-700 max-w-3xl mx-auto shadow-xl"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="text-teal-400">学生割引</span>
              で高品質なウェブ開発
            </h3>
            <p className="text-gray-300 mb-6 text-center">
              一般的な制作会社より
              <span className="text-teal-300 font-semibold">最大40%オフ</span>
              の価格設定で、
              最新技術を用いた高品質なサイト制作を提供しています。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/70 p-5 rounded-lg">
                <h4 className="font-bold text-xl mb-3 text-white">
                  Webサイト制作
                </h4>
                <p className="text-gray-400 mb-3">Next.jsベースの高速サイト</p>
                <p className="text-teal-300 font-bold">¥50,000〜</p>
                <p className="text-xs text-gray-500 mt-2">※規模により変動</p>
              </div>

              <div className="bg-gray-800/70 p-5 rounded-lg">
                <h4 className="font-bold text-xl mb-3 text-white">
                  ECサイト構築
                </h4>
                <p className="text-gray-400 mb-3">決済システム連携込み</p>
                <p className="text-teal-300 font-bold">¥80,000〜</p>
                <p className="text-xs text-gray-500 mt-2">※機能により変動</p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                ※お見積りは無料です。まずはお気軽にご相談ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section - 趣味・興味セクション */}
      <section className="py-20 relative">
        {/* 背景装飾要素 */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-teal-400/5 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-2">INTERESTS</h2>
            <div className="w-24 h-1 bg-teal-400 mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              プログラミング以外にも様々な分野に興味を持ち、それらの経験をWeb制作にも活かしています。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {interests.map((interest) => (
              <div
                key={interest.id}
                className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg hover:bg-gray-800/80 transition-all duration-500 group transform hover:-translate-y-2 border border-gray-800/50"
                data-aos="fade-up"
                data-aos-delay={interest.delay}
              >
                <div className="text-3xl text-teal-400 mb-4 transition-transform duration-500 group-hover:scale-110">
                  {interest.icon}
                </div>
                <h3 className="font-bold mb-2 group-hover:text-teal-300 transition-colors duration-300">
                  {interest.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>

          {/* 個人的なプロジェクト/趣味制作物のギャラリー */}
          <div className="mt-16" data-aos="fade-up">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Personal Projects
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src="/images/project1.jpg"
                  alt="Personal Project - Game Development"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h4 className="text-white font-bold mb-2">
                    Puzzle Game Prototype
                  </h4>
                  <p className="text-gray-300 text-sm">Unity / C#</p>
                </div>
                <div className="absolute inset-0 bg-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src="/images/project2.jpg"
                  alt="Personal Project - Photography"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h4 className="text-white font-bold mb-2">
                    Urban Photography
                  </h4>
                  <p className="text-gray-300 text-sm">Tokyo Night Series</p>
                </div>
                <div className="absolute inset-0 bg-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src="/images/project3.jpg"
                  alt="Personal Project - Music Production"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h4 className="text-white font-bold mb-2">
                    Electronic Music EP
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Ableton Live / Max for Live
                  </p>
                </div>
                <div className="absolute inset-0 bg-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
