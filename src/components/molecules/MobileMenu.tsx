"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFileDownload } from "react-icons/fa";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/tech-stack", label: "TECH STACK" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/experience", label: "EXPERIENCE" },
    { href: "/blog", label: "BLOG" },
    { href: "/contact", label: "CONTACT" },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col">
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-white p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow">
        <nav className="flex flex-col items-center space-y-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`text-2xl font-medium ${
                pathname === item.href
                  ? "text-teal-400"
                  : "text-white hover:text-teal-400"
              } transition-colors`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/resume.pdf"
            target="_blank"
            className="flex items-center gap-2 text-teal-400 text-xl mt-8"
          >
            <FaFileDownload />
            <span>RESUME</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
