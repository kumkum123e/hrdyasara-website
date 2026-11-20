
"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/types/navigation";

type Props = {
  items: NavItem[];
  closeMenu: () => void;
};

export default function NestedDropdown({
  items,
  closeMenu,
}: Props) {
  const pathname = usePathname();

  return (
    <div className="invisible absolute left-full top-0 z-50 ml-1 w-[250px] translate-y-2 rounded-xl border border-gray-100 bg-white p-3 opacity-0 shadow-xl transition-all duration-300 group-hover/nested:visible group-hover/nested:translate-y-0 group-hover/nested:opacity-100 group-focus-within/nested:visible group-focus-within/nested:translate-y-0 group-focus-within/nested:opacity-100">
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href ?? "#"}
          onClick={closeMenu}
          aria-current={
            pathname === item.href ? "page" : undefined
          }
          className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-[#f0900b]/10 hover:text-[#f0900b] ${
            pathname === item.href
              ? "text-[#f0900b]"
              : "text-[#252525]"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
