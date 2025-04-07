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
      <section className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">TECH STACK</h1>
          <div className="w-20 h-1 bg-teal-400 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            日々のプロジェクトで使用している技術スタックです。常に最新のツールとベストプラクティスを取り入れるよう心がけています。
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg flex flex-col items-center justify-center transition-transform hover:transform hover:scale-105"
            >
              <div className="text-4xl text-teal-400 mb-3">{tech.icon}</div>
              <h3 className="font-bold text-center">{tech.name}</h3>
              <p className="text-xs text-gray-400 text-center mt-1">
                {tech.category}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
