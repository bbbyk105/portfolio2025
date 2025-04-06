"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className = "",
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-4 py-2 transition-all hover:text-teal-400 ${
        isActive ? "text-teal-400 font-medium" : "text-gray-300"
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
