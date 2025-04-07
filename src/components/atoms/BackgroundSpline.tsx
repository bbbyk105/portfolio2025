"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// クライアントサイドのみでロードするように設定
const DynamicSpline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export const BackgroundSpline = () => {
  const [isClient, setIsClient] = useState(false);

  // クライアントサイドでマウントされたことを確認
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className="absolute inset-0 z-0 w-full h-full overflow-hidden"
      style={{ pointerEvents: "none" }}
    >
      {isClient && (
        <DynamicSpline scene="https://prod.spline.design/OvW6uE8qYbdrt7sn/scene.splinecode" />
      )}
    </div>
  );
};
