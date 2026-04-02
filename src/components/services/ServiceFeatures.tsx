import Link from "next/link";
import { Service } from "@/lib/services";

interface ServiceFeaturesProps {
  service: Service;
}

export default function ServiceFeatures({ service }: ServiceFeaturesProps) {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        {/* Overview Section */}
        <div className="mb-16">
          <h2 className="text-[#6b6b6b] text-xs tracking-[1.4px] font-normal mb-8 uppercase">
            OVERVIEW
          </h2>
          <div className="max-w-4xl">
            {service.overview.split('\n').map((paragraph, index) => (
              <p
                key={index}
                className="text-[#b8b8b8] text-lg leading-[1.75] mb-4 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#5e6ad2] transition-colors duration-200"
            >
              {/* Feature Icon/Dash */}
              <div className="flex items-start space-x-4">
                <span className="text-[#5e6ad2] text-sm font-normal mt-1">—</span>
                <div>
                  <h3 className="text-[#f2f2f2] text-base font-normal mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[#b8b8b8] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 pt-8 border-t border-[#2a2a2a]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center space-x-2">
              <p className="text-[#6b6b6b] text-sm">
                このサービスについて相談する
              </p>
              <span className="text-[#5e6ad2] text-lg">→</span>
            </div>

            <Link
              href="/"
              className="text-[#6b6b6b] text-sm hover:text-[#f2f2f2] transition-colors duration-200"
            >
              ← すべてのサービスへ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}