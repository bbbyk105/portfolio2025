import { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

// 静的パス生成
export function generateStaticParams() {
  const slugs = getAllServiceSlugs();

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// メタデータ生成
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "サービスが見つかりません",
      description: "指定されたサービスは存在しません。",
    };
  }

  return {
    title: `${service.title} | BYAKKO-ENGINEER`,
    description: service.subtitle,
    keywords: [service.title, service.englishTitle, "Web開発", "エンジニア"],
    openGraph: {
      title: `${service.title} | BYAKKO-ENGINEER`,
      description: service.subtitle,
      url: `https://byakko-engineer.com/services/${service.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | BYAKKO-ENGINEER`,
      description: service.subtitle,
    },
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "ホーム", href: "/" },
    { label: "サービス", href: "/" },
    { label: service.title },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 pt-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Service Hero Section */}
      <ServiceHero service={service} />

      {/* Service Features Section */}
      <ServiceFeatures service={service} />
    </div>
  );
}