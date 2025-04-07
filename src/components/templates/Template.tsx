"use client";
import React from "react";
import Link from "next/link";
import Button from "@/components/atoms/Button";
import { FaArrowRight } from "react-icons/fa";
import { BackgroundSpline } from "@/components/atoms/BackgroundSpline";

export default function Template() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 背景アニメーション */}
      <BackgroundSpline />

      {/* コンテンツ本体 */}
      <div className="relative z-10 container mx-auto px-4">
        <section className="py-20 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block">Hi, I&apos;m</span>
            <span className="text-teal-400">Byakko Kondo</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl hidden md:block">
            Frontend Engineer crafting elegant interfaces and seamless user
            experiences.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-48 md:mt-0">
            <Link href="/about">
              <Button className="flex items-center gap-2">
                <span>VIEW PROFILE</span>
                <FaArrowRight />
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-transparent border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black">
                CONTACT ME
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
