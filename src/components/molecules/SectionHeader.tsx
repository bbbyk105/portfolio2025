"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// SectionHeader Component with AOS
type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  aosAnimation?: string;
  aosDelay?: number;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
  className = "",
  aosAnimation = "fade-up",
  aosDelay = 0,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div
      className={`mb-12 ${centered ? "text-center" : ""} ${className}`}
      data-aos={aosAnimation}
      data-aos-delay={aosDelay}
    >
      <h2 className="text-4xl font-bold mb-2">{title}</h2>
      <div
        className={`w-20 h-1 bg-teal-400 ${centered ? "mx-auto" : ""}`}
        data-aos="zoom-in"
        data-aos-delay={aosDelay + 100}
      ></div>
      {subtitle && (
        <p
          className="text-gray-300 mt-4 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay={aosDelay + 200}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
