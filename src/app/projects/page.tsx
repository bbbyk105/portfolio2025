import React from "react";
import SectionHeader from "@/components/molecules/SectionHeader";
import ProjectGrid from "@/components/organisms/Projectgrid";
import { Projects } from "@/data/project";

export const metadata = {
  title: "Portfolio | Projects",
  description: "My portfolio of projects and client work",
};

// ダミーデータ

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-16">
        <SectionHeader
          title="PROJECTS"
          subtitle="私が携わった主なプロジェクトを紹介します。フロントエンド開発、UIデザイン、バックエンド連携など、幅広いスキルを活かした作品です。"
        />

        <ProjectGrid projects={Projects} />
      </section>
    </div>
  );
}
