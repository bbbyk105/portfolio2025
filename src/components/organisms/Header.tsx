"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";
import Logo from "../atoms/Logo";
import NavLink from "../molecules/NavLink";
import Button from "../atoms/Button";
import MobileMenu from "../molecules/MobileMenu";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo />

          <nav className="hidden md:flex items-center space-x-2">
            <NavLink href="/">HOME</NavLink>
            <NavLink href="/about">ABOUT</NavLink>
            <NavLink href="/tech-stack">TECH STACK</NavLink>
            <NavLink href="/blog">BLOG</NavLink>
            <NavLink href="/contact">CONTACT</NavLink>
            <Link href="/resume.pdf" target="_blank">
              <Button className="flex items-center gap-2 ml-4">
                <FaFileDownload />
                <span>RESUME</span>
              </Button>
            </Link>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
};

export default Header;
