"use client";
import dynamic from "next/dynamic";

const SplineComponent = dynamic(
  () =>
    import("@splinetool/react-spline").then((mod) => {
      const Spline = mod.default || mod;
      return { default: Spline };
    }),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }
);

const BackgroundSpline = () => {
  return (
    <div
      className="absolute inset-0 z-0 w-full h-full overflow-hidden"
      style={{ pointerEvents: "none" }}
    >
      <SplineComponent scene="https://prod.spline.design/OvW6uE8qYbdrt7sn/scene.splinecode" />
    </div>
  );
};

export default BackgroundSpline;
