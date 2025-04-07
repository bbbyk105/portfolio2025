import React from "react";
import SectionHeader from "@/components/molecules/SectionHeader";
import ExperienceTimeline from "@/components/organisms/ExperienceTimeline";
import { Experience } from "@/types/experience";

export const metadata = {
  title: "Portfolio | Experience",
  description: "My professional experience and career path",
};

// ダミーデータ
const dummyExperiences: Experience[] = [
  {
    id: "1",
    title: "フロントエンドエンジニア",
    company: "株式会社テックイノベーション",
    period: "2023年4月 - 現在",
    description:
      "React、Next.js、TypeScriptを使用したWebアプリケーション開発。マイクロフロントエンドアーキテクチャの導入やパフォーマンス最適化を担当。",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
  },
  {
    id: "2",
    title: "Webデベロッパー",
    company: "株式会社デジタルクリエイト",
    period: "2021年7月 - 2023年3月",
    description:
      "Vue.js、Nuxt.js、JavaScriptを使用したWebサイト、Webアプリケーション開発。レスポンシブデザインの実装やアクセシビリティ対応を担当。",
    skills: ["Vue.js", "Nuxt.js", "JavaScript", "SCSS", "REST API"],
  },
  {
    id: "3",
    title: "UI/UXデザイナー（インターン）",
    company: "株式会社デザインラボ",
    period: "2020年4月 - 2021年6月",
    description:
      "Figma、Adobe XDを使用したUI/UXデザイン。ユーザーインタビューやプロトタイピングを通じて、ユーザー中心設計を実践。",
    skills: [
      "Figma",
      "Adobe XD",
      "UI/UX",
      "プロトタイピング",
      "ユーザーテスト",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-16">
        <SectionHeader
          title="EXPERIENCE"
          subtitle="私のこれまでの職歴と携わったプロジェクトの概要です。フロントエンド開発を中心に、UI/UXデザインやバックエンド連携まで幅広く経験してきました。"
        />

        <ExperienceTimeline experiences={dummyExperiences} />
      </section>
    </div>
  );
}
