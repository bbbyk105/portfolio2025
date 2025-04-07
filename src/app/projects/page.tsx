import React from "react";
import SectionHeader from "@/components/molecules/SectionHeader";
import ProjectGrid from "@/components/organisms/Projectgrid";
import { Project } from "@/types/experience";

export const metadata = {
  title: "Portfolio | Projects",
  description: "My portfolio of projects and client work",
};

// ダミーデータ
const dummyProjects: Project[] = [
  {
    id: "1",
    title: "ポートフォリオサイト",
    description:
      "Next.js、TypeScript、Tailwind CSS、microCMSを使用して構築したポートフォリオサイト",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "microCMS"],
    githubUrl: "https://github.com/yourusername/portfolio",
    demoUrl: "https://your-portfolio.com",
  },
  {
    id: "2",
    title: "ECサイト",
    description: "React、Redux、Firebase、Stripeを使用したECサイト",
    skills: ["React", "Redux", "Firebase", "Stripe"],
    githubUrl: "https://github.com/yourusername/ec-site",
    demoUrl: "https://your-ec-site.com",
  },
  {
    id: "3",
    title: "タスク管理アプリ",
    description: "Vue.js、Vuex、TypeScriptを使用したタスク管理アプリ",
    skills: ["Vue.js", "Vuex", "TypeScript"],
    githubUrl: "https://github.com/yourusername/task-manager",
    demoUrl: "https://your-task-manager.com",
  },
  {
    id: "4",
    title: "ブログプラットフォーム",
    description:
      "Next.js、GraphQL、MongoDB、Tailwind CSSを使用したブログプラットフォーム",
    skills: ["Next.js", "GraphQL", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/blog-platform",
  },
  {
    id: "5",
    title: "天気予報アプリ",
    description:
      "React Native、TypeScript、OpenWeather APIを使用したモバイルアプリ",
    skills: ["React Native", "TypeScript", "OpenWeather API"],
    githubUrl: "https://github.com/yourusername/weather-app",
  },
  {
    id: "6",
    title: "チャットアプリケーション",
    description:
      "React、Socket.io、Express、MongoDBを使用したリアルタイムチャットアプリケーション",
    skills: ["React", "Socket.io", "Express", "MongoDB"],
    githubUrl: "https://github.com/yourusername/chat-app",
    demoUrl: "https://your-chat-app.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-16">
        <SectionHeader
          title="PROJECTS"
          subtitle="私が携わった主なプロジェクトを紹介します。フロントエンド開発、UIデザイン、バックエンド連携など、幅広いスキルを活かした作品です。"
        />

        <ProjectGrid projects={dummyProjects} />
      </section>
    </div>
  );
}
