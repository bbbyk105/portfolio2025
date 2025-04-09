"use client";
import { useEffect, useState } from "react";
import type { SplineProps } from "@splinetool/react-spline";
import { ForwardRefExoticComponent, RefAttributes } from "react";

const BackgroundSpline = () => {
  // 適切な型で初期化
  const [SplineComponent, setSplineComponent] =
    useState<ForwardRefExoticComponent<
      SplineProps & RefAttributes<HTMLDivElement>
    > | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSpline = async () => {
      try {
        const Spline = (await import("@splinetool/react-spline")).default;
        setSplineComponent(Spline); // 直接コンポーネントを設定
      } catch (error) {
        console.error("Failed to load Spline:", error);
      } finally {
        setLoading(false);
      }
    };

    loadSpline();
  }, []);

  return (
    <div
      className="absolute inset-0 z-0 w-full h-full overflow-hidden"
      style={{ pointerEvents: "none" }}
    >
      {loading && <div>Loading...</div>}
      {SplineComponent && (
        <SplineComponent scene="https://prod.spline.design/OvW6uE8qYbdrt7sn/scene.splinecode" />
      )}
    </div>
  );
};

export default BackgroundSpline;
