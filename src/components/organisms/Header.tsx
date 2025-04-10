"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";
import NavLink from "../molecules/NavLink";
import Button from "../atoms/Button";
import MobileMenu from "../molecules/MobileMenu";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-end items-center">
          <div className="flex items-center">
            <nav className="hidden md:flex items-center space-x-2">
              <NavLink href="/" className="text-xs">
                HOME
              </NavLink>
              <NavLink href="/about" className="text-xs">
                ABOUT
              </NavLink>
              <NavLink href="/tech-stack" className="text-xs">
                TECH
              </NavLink>
              <NavLink href="/blog" className="text-xs">
                BLOG
              </NavLink>
              <NavLink href="/experience" className="text-xs">
                EXPRIENCE
              </NavLink>
              <NavLink href="/projects" className="text-xs">
                PROJECTS
              </NavLink>
              <NavLink href="/contact" className="text-xs">
                CONTACT
              </NavLink>
              <Link
                href="/myProfile.pdf"
                target="_blank"
                suppressHydrationWarning
              >
                <Button className="flex items-center gap-2 ml-4 text-xs">
                  {mounted ? (
                    <FaFileDownload className="text-xs" />
                  ) : (
                    <span className="w-3 h-3"></span>
                  )}
                  <span>RESUME</span>
                </Button>
              </Link>
            </nav>

            <button
              className="md:hidden text-white ml-4"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              suppressHydrationWarning
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
};

export default Header;
