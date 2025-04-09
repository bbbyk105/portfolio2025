import { Project } from "@/types/experience";

export const Projects: Project[] = [
  {
    id: "1",
    title: "ポートフォリオサイト",
    description:
      "Next.js、TypeScript、Tailwind CSS、microCMSを使用して構築したポートフォリオサイト",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "microCMS"],
    githubUrl: "https://github.com/bbbyk105/portfolio2025",
    demoUrl: "https://your-portfolio.com",
    thumbnail: {
      url: "/images/portfolio.webp",
      width: 1200,
      height: 675,
    },
  },
  {
    id: "2",
    title: "byPay",
    description:
      "React、Next.js、MicroCMS、Stripeを使用したテンプレートECサイトWebサービス",
    skills: ["React", "Next.js", "MicroCMS", "Stripe"],
    githubUrl: "https://github.com/bbbyk105/byPay",
    demoUrl: "https://by-pay.vercel.app/",
    thumbnail: {
      url: "/images/bypay.webp",
      width: 1200,
      height: 675,
    },
  },
  {
    id: "3",
    title: "Checkey",
    description: "現在開発中。空き家やレンタルスペースを活用するためのサービス",
    skills: ["Next.js", "TypeScript", "Route53", "Amplify"],
    githubUrl: "https://github.com/yourusername/task-manager",
    demoUrl: "https://www.checkey-226.com/",
    thumbnail: {
      url: "/images/checkey.webp",
      width: 1200,
      height: 675,
    },
  },
];
