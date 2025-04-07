import React from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiWebpack,
  SiStorybook,
  SiRust,
  SiMysql,
} from "react-icons/si";

export const metadata = {
  title: "Portfolio | Tech Stack",
  description: "Technologies and tools I use",
};

export default function TechStack() {
  const technologies = [
    { name: "React", icon: <FaReact />, category: "Frontend" },
    { name: "TypeScript", icon: <SiTypescript />, category: "Language" },
    { name: "Next.js", icon: <SiNextdotjs />, category: "Framework" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "Styling" },
    { name: "Node.js", icon: <FaNodeJs />, category: "Backend" },
    { name: "SQL", icon: <SiMysql />, category: "Database" },
    { name: "Firebase", icon: <SiFirebase />, category: "Backend" },
    { name: "Git", icon: <FaGitAlt />, category: "Version Control" },
    { name: "Figma", icon: <FaFigma />, category: "Design" },
    { name: "Webpack", icon: <SiWebpack />, category: "Build Tools" },
    { name: "Storybook", icon: <SiStorybook />, category: "UI Testing" },
    { name: "AWS", icon: <FaAws />, category: "Cloud" },
    { name: "Rust", icon: <SiRust />, category: "Language (Learning)" },
  ];

  return (
    <div className="container mx-auto px-4">
      <section className="py-20 relative">
        {/* 背景装飾要素 */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-teal-400/5 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4">
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-5xl font-bold mb-2">TECH STACK</h2>
            <div className="w-24 h-1 bg-teal-400 mx-auto"></div>
            <p
              className="text-gray-300 mt-6 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              日々のプロジェクトで使用している技術スタックです。常に最新のツールとベストプラクティスを取り入れるよう心がけています。
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center justify-center transition-all duration-500 hover:bg-gray-800 hover:shadow-lg hover:shadow-teal-400/10 transform hover:-translate-y-2 group"
                data-aos="zoom-in"
                data-aos-delay={150 + index * 50}
              >
                <div className="text-4xl text-teal-400 mb-4 transition-all duration-500 group-hover:scale-110 group-hover:text-teal-300">
                  {tech.icon}
                </div>
                <h3 className="font-bold text-center text-white">
                  {tech.name}
                </h3>
                <p className="text-xs text-gray-400 text-center mt-1">
                  {tech.category}
                </p>

                {/* ホバー時に表示される輝きエフェクト */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
