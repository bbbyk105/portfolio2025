export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  englishTitle: string;
  overview: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  heroImage?: string;
}

export const services: Service[] = [
  {
    slug: "ai-agent",
    title: "AIエージェント開発",
    subtitle: "LLMを活用したワークフロー自動化・AIエージェントの設計・構築を行います。",
    englishTitle: "AI Agent Development",
    overview: "LLMを活用したワークフロー自動化・AIエージェントの設計・構築を行います。\nNotion・GitHub・各種APIと連携した実用的なシステムを最速で届けます。\nスピード感のある開発と、長期的な保守・運用まで一貫してサポートします。",
    features: [
      {
        title: "要件定義から実装まで一貫対応",
        description: "ビジネス要件の整理から技術選定、実装、テストまでワンストップで対応します。"
      },
      {
        title: "Notion / GitHub / API 連携",
        description: "既存ツールとシームレスに連携し、業務フローを効率化します。"
      },
      {
        title: "スピード重視の開発フロー",
        description: "アジャイル開発手法により、素早く価値のある成果物を提供します。"
      },
      {
        title: "保守・運用サポートも対応",
        description: "リリース後の運用・保守・機能追加まで長期的にサポートします。"
      }
    ],
    heroImage: "/api/placeholder/1920/400"
  },
  {
    slug: "web-design",
    title: "Web制作",
    subtitle: "コーポレートサイト・LP・シネマティックブランドサイトの企画・設計・制作",
    englishTitle: "Web Design & Development",
    overview: "ブランドの魅力を最大限に引き出すWebサイトを制作します。\nコーポレートサイト、ランディングページ、シネマティックな演出を取り入れたブランドサイトまで幅広く対応。\nデザインから開発、運用まで一貫してサポートします。",
    features: [
      {
        title: "戦略的なWebサイト設計",
        description: "ビジネス目標とユーザー体験を両立する戦略的な設計を行います。"
      },
      {
        title: "シネマティックな演出表現",
        description: "GSAP・Three.jsを活用した印象的な動画・3D表現を実装します。"
      },
      {
        title: "レスポンシブ対応",
        description: "全デバイスで最適な表示・操作性を実現します。"
      },
      {
        title: "SEO・パフォーマンス最適化",
        description: "検索エンジン最適化とページ速度向上で集客効果を最大化します。"
      }
    ],
    heroImage: "/api/placeholder/1920/400"
  },
  {
    slug: "ec",
    title: "EC構築",
    subtitle: "Shopify・カスタムECサイトの設計・構築・運用支援",
    englishTitle: "E-Commerce",
    overview: "売上向上を目的としたECサイトを構築します。\nShopifyを活用した効率的な構築から、フルカスタムのECサイト開発まで対応。\n在庫管理・決済システム・物流連携など、運営に必要な機能を包括的にサポートします。",
    features: [
      {
        title: "Shopify 専門知識",
        description: "テーマカスタマイズからアプリ開発まで幅広くサポートします。"
      },
      {
        title: "決済・物流システム連携",
        description: "多様な決済手段と物流システムとの連携を実現します。"
      },
      {
        title: "在庫管理自動化",
        description: "API連携により在庫管理・受注処理を自動化します。"
      },
      {
        title: "売上分析・改善提案",
        description: "データ分析に基づく継続的な売上向上提案を行います。"
      }
    ],
    heroImage: "/api/placeholder/1920/400"
  },
  {
    slug: "frontend",
    title: "フロントエンド",
    subtitle: "Next.js・React による高品質UI実装",
    englishTitle: "Frontend Development",
    overview: "モダンなフロントエンド技術を活用し、高品質なユーザーインターフェースを実装します。\nNext.js・React・TypeScriptを中心とした技術スタックで、パフォーマンスと保守性を両立。\nデザインシステムの構築から大規模アプリケーションの開発まで対応します。",
    features: [
      {
        title: "モダンな技術スタック",
        description: "Next.js・React・TypeScriptによる型安全で保守性の高い開発を行います。"
      },
      {
        title: "デザインシステム構築",
        description: "再利用可能なコンポーネント設計により開発効率を向上させます。"
      },
      {
        title: "パフォーマンス最適化",
        description: "Core Web Vitalsを意識した高速なWebアプリケーションを実現します。"
      },
      {
        title: "アクセシビリティ対応",
        description: "WCAG準拠のアクセシブルなUIを実装します。"
      }
    ],
    heroImage: "/api/placeholder/1920/400"
  },
  {
    slug: "automation",
    title: "業務自動化",
    subtitle: "GAS・API連携・Notionを活用した業務フロー自動化",
    englishTitle: "Workflow Automation",
    overview: "繰り返し作業を自動化し、業務効率を大幅に向上させます。\nGoogle Apps Script・各種API・Notionを活用したワークフロー自動化を実現。\nデータ集計・レポート生成・通知システムなど、幅広い業務改善をサポートします。",
    features: [
      {
        title: "Google Workspace 連携",
        description: "スプレッドシート・Gmail・カレンダーとの連携で業務を自動化します。"
      },
      {
        title: "Notion データベース活用",
        description: "Notion APIを活用したタスク管理・情報整理システムを構築します。"
      },
      {
        title: "外部サービス API 連携",
        description: "Slack・Discord・各種SaaSとの連携で情報共有を効率化します。"
      },
      {
        title: "定期実行・監視システム",
        description: "cron設定による定期実行と異常検知システムを構築します。"
      }
    ],
    heroImage: "/api/placeholder/1920/400"
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}