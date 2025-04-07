import React from "react";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

const Tag: React.FC<TagProps> = ({ children, className = "" }) => {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium bg-gray-800 text-teal-400 rounded-full ${className}`}
    >
      {children}
    </span>
  );
};

export default Tag;
