"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "dark" | "light";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // 初期値を undefined にして、クライアントサイドでのみ値を設定
  const [theme, setTheme] = useState<Theme | undefined>(undefined);
  const [mounted, setMounted] = useState(false);

  // コンポーネントがマウントされたことを検知
  useEffect(() => {
    setMounted(true);

    try {
      const savedTheme = localStorage.getItem("theme") as Theme | null;
      if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
        setTheme(savedTheme);
      } else {
        // デフォルトのテーマを設定
        setTheme("dark");
        localStorage.setItem("theme", "dark");
      }
    } catch (error) {
      console.error("LocalStorage is not accessible:", error);
      setTheme("dark");
    }
  }, []);

  // テーマが変更されたときに適用（マウント後のみ）
  useEffect(() => {
    if (!mounted || theme === undefined) return;

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }

    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.error("Failed to save theme to localStorage:", error);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // マウント前はレンダリングを遅延させる
  if (!mounted) {
    return null; // または初期表示用のローディングUI
  }

  return (
    <ThemeContext.Provider value={{ theme: theme || "dark", toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
