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
    title: "CTO",
    company: "株式会社NOVA",
    period: "2025年2月 - 現在",
    description:
      "サービスの方向性の策定、新規開発の推進、タスク管理を担当。React、Next.js、TypeScriptを使用したWebアプリケーションの設計・開発に従事。チームの技術的リーダーとして、技術選定、開発体制の構築なども担当。",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "AWS"],
  },
  {
    id: "2",
    title: "CEO",
    company: "byPay",
    period: "2025年1月 - 現在",
    description:
      "テンプレートを活用した決済サービスのWebアプリケーションを立ち上げ、自ら企画・設計・開発・運用を実施。マイクロフロントエンドアーキテクチャの導入やパフォーマンス最適化にも取り組み、スケーラブルなサービス基盤を構築。",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MicroCMS",
      "AWS",
    ],
  },
  {
    id: "3",
    title: "フロントエンドエンジニア（インターン）",
    company: "株式会社レターファン",
    period: "2024年9月 - 2025年12月",
    description:
      "TicketDiveの新規開発にて、Next.js、TypeScriptを用いた効率的でスケーラブルなWebアプリケーションのフロントエンド開発を担当。ユーザーインターフェースの改善や動的コンテンツ提供を実現。さらに、QA作成や顧客満足度調査を通じてサービス品質の向上にも寄与。",
    skills: ["React", "Next.js", "TypeScript", "SCSS", "Figma", "Firebase"],
  },
  {
    id: "4",
    title: "フロントエンドエンジニア（インターン）",
    company: "株式会社Drumrole",
    period: "2024年10月 - 2025年1月",
    description:
      "Next.jsとTailwind CSSを用いたWebアプリケーション開発を担当。UI設計・実装に加え、パフォーマンス最適化や一部バックエンド機能の実装も担当。Figma、Adobe XDを用いたUI/UXデザインやプロトタイピング、ユーザーインタビューによるユーザー中心設計も実践。",
    skills: [
      "Next.js",
      "Tailwind CSS",
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
