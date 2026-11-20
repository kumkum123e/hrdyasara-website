
"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/types/navigation";
import NestedDropdown from "./NestedDropdown";

type Props = {
  item: NavItem;
};

export default function NavDropdown({ item }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = item.children?.some(
    (child) =>
      (child.href &&
        (pathname === child.href ||
          pathname.startsWith(child.href + "/"))) ||
      child.children?.some(
        (nested) =>
          nested.href &&
          (pathname === nested.href ||
            pathname.startsWith(nested.href + "/"))
      )
  );

  const closeMenu = () => setOpen(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(!open)}
        onKeyDown={(event) => {
          if (event.key === "Escape") closeMenu();
        }}
        className={`relative flex h-[84px] items-center gap-1.5 whitespace-nowrap text-[15px] font-medium transition-colors duration-300 ${
          isActive
            ? "text-[#f0900b]"
            : "text-[#171717] hover:text-[#f0900b]"
        }`}
      >
        {item.label}

        <ChevronDown
          size={15}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />

        <span
          className={`absolute bottom-[22px] left-0 h-[2px] bg-[#f0900b] transition-all duration-300 ${
            isActive || open
              ? "w-full"
              : "w-0 group-hover:w-full"
          }`}
        />
      </button>

      <div
        className={`absolute left-0 top-full z-50 w-[260px] rounded-xl border border-gray-100 bg-white p-3 shadow-xl transition-all duration-300 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        {item.children?.map((child) => (
          <div
            key={child.label}
            className="group/nested relative"
          >
            <Link
              href={child.href ?? "#"}
              onClick={closeMenu}
              className={`flex items-center justify-between rounded-lg px-4 py-3 text-[14px] font-medium transition-colors hover:bg-[#f0900b]/10 hover:text-[#f0900b] ${
                pathname === child.href
                  ? "text-[#f0900b]"
                  : "text-[#252525]"
              }`}
            >
              {child.label}

              {child.children && (
                <ChevronRight size={16} />
              )}
            </Link>

            {child.children && (
              <NestedDropdown
                items={child.children}
                closeMenu={closeMenu}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
