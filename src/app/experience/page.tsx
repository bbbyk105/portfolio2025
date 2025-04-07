import React from "react";
import SectionHeader from "@/components/molecules/SectionHeader";
import ExperienceTimeline from "@/components/organisms/ExperienceTimeline";
import { Experiences } from "@/data/experience";

export const metadata = {
  title: "Portfolio | Experience",
  description: "My professional experience and career path",
};

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-16">
        <SectionHeader
          title="EXPERIENCE"
          subtitle="私のこれまでの職歴と携わったプロジェクトの概要です。フロントエンド開発を中心に、UI/UXデザインやバックエンド連携まで幅広く経験してきました。"
        />

        <ExperienceTimeline experiences={Experiences} />
      </section>
    </div>
  );
}
