import { Project } from "@/types/experience";

export const Projects: Project[] = [
  {
    id: "1",
    title: "ポートフォリオサイト",
    description:
      "Next.js、TypeScript、Tailwind CSS、microCMSを使用して構築したポートフォリオサイト",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "microCMS"],
    githubUrl: "https://github.com/bbbyk105/portfolio2025",
    demoUrl: "https://byakko-engineer.com",
    thumbnail: {
      url: "/images/portfolio.webp",
      width: 1200,
      height: 675,
    },
  },
  {
    id: "2",
    title: "聚楽苑 ECサイト",
    description: "聚楽苑様の公式サイトを作成させていただきました。",
    skills: ["React", "Next.js", "TailwindCSS", "Stripe"],
    githubUrl: "https://github.com/bbbyk105/jurakuen",
    demoUrl: "https://jurakuen.com/",
    thumbnail: {
      url: "/images/jurakuen.webp",
      width: 1200,
      height: 675,
    },
  },
  {
    id: "3",
    title: "天地星空 ECサイト",
    description:
      "三つ星レストラン「銀座鮨 おのでら Los Angels店」様にも採用された日本酒のサイトの作成をさせていただきました。",
    skills: ["React", "Next.js", "TailwindCSS", "Stripe"],
    githubUrl: "https://github.com/yourusername/task-manager",
    demoUrl: "https://mtfuji-sake-aus.com/",
    thumbnail: {
      url: "/images/amachi.jpg",
      width: 1200,
      height: 675,
    },
  },
];
