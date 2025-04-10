"use client";

import { useEffect } from "react";

export default function ThemeFixer() {
  useEffect(() => {
    // 強制的にdarkクラスを適用する
    document.documentElement.classList.add("dark");

    // localStorageにも保存
    localStorage.setItem("theme", "dark");

    // CSS変数を強制的に設定
    document.documentElement.style.setProperty("--background", "#0a0a0a");
    document.documentElement.style.setProperty("--foreground", "#ededed");

    // Tailwindのダークモード設定が期待通りに動作しているか確認する関数
    const checkDarkMode = () => {
      // darkクラスが適用されているか確認
      const hasDarkClass = document.documentElement.classList.contains("dark");

      // もし外れていたら再適用
      if (!hasDarkClass) {
        document.documentElement.classList.add("dark");
      }
    };

    // 定期的にチェック (DOM変更があった場合に備えて)
    const interval = setInterval(checkDarkMode, 100);

    // クリーンアップ
    return () => clearInterval(interval);
  }, []);

  return null;
}
