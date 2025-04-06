import React from "react";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <Link href="/" className={`text-2xl font-bold text-teal-400 ${className}`}>
      PORTFOLIO
    </Link>
  );
};

export default Logo;
