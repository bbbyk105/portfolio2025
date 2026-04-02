import Image from "next/image";
import { Service } from "@/lib/services";

interface ServiceHeroProps {
  service: Service;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative">
      {/* Hero Image Area with Gradient Overlay */}
      <div className="relative h-[400px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f17] to-[#0a0a0f] via-[#12141f] via-[60%]">
          {service.heroImage && (
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              className="object-cover opacity-30"
              priority
            />
          )}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.85)] to-[rgba(10,10,10,0)]" />

        {/* Content */}
        <div className="relative z-10 flex items-end h-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-20 pb-16">
            <div className="max-w-4xl">
              {/* Service Number */}
              <p className="text-[#6b6b6b] text-sm tracking-[1.2px] font-normal mb-2">
                {String(service.slug === 'ai-agent' ? '01' :
                       service.slug === 'web-design' ? '02' :
                       service.slug === 'ec' ? '03' :
                       service.slug === 'frontend' ? '04' : '05')}
              </p>

              {/* Service Title */}
              <h1 className="text-[#f2f2f2] text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-1.5px] mb-4 leading-tight">
                {service.title}
              </h1>

              {/* English Title */}
              <p className="text-[#6b6b6b] text-base tracking-[0.5px] font-normal">
                {service.englishTitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Photo annotation (dev only) */}
      <div className="absolute bottom-4 left-20 bg-[#141414] border border-[#333] px-3 py-2 rounded text-xs text-[#666]">
        📷 unsplash: ZIPFteu-R8k · abstract tech / code
      </div>
    </section>
  );
}