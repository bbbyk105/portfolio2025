import React from "react";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
  className = "",
}) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-4xl font-bold mb-2">{title}</h2>
      <div
        className={`w-20 h-1 bg-teal-400 ${centered ? "mx-auto" : ""}`}
      ></div>
      {subtitle && (
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
