import React from "react";
import Link from "next/link";

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
  label?: string;
  className?: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon,
  label,
  className = "",
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors ${className}`}
    >
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

export default SocialLink;
