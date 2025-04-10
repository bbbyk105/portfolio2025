"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function BlogThemeToggle() {
  // ダークモード状態の管理
  const [isDarkMode, setIsDarkMode] = useState(true);

  // ページロード時に現在のテーマを確認
  useEffect(() => {
    // ローカルストレージから設定を取得
    const storedDarkMode = localStorage.getItem("blogDarkMode");

    // 明示的にライトモードが設定されている場合は反映
    if (storedDarkMode === "false") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // デフォルトまたは明示的なダークモード設定の場合
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("blogDarkMode", "true");
    }
  }, []);

  // テーマ切り替え処理
  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("blogDarkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("blogDarkMode", "false");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center px-3 py-1.5 rounded-md text-sm font-medium bg-gray-200 dark:bg-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-zinc-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label={
        isDarkMode ? "ライトモードに切り替え" : "ダークモードに切り替え"
      }
      title={isDarkMode ? "ライトモードに切り替え" : "ダークモードに切り替え"}
    >
      {isDarkMode ? (
        <>
          <FaSun className="w-4 h-4 mr-1.5" />
        </>
      ) : (
        <>
          <FaMoon className="w-4 h-4 mr-1.5" />
        </>
      )}
    </button>
  );
}
