import Link from "next/link";
import { MdChevronRight } from "react-icons/md";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center space-x-2 text-sm ${className}`} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && (
            <MdChevronRight className="h-3 w-3 text-[#6b6b6b] mx-2" />
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="text-[#6b6b6b] hover:text-[#f2f2f2] transition-colors duration-200"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#6b6b6b]" aria-current="page">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}