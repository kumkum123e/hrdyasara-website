
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import NavDropdown from "./NavDropdown";

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-[26px] xl:flex"
    >
      {navigation.map((item) => {
        if (item.children) {
          return (
            <NavDropdown
              key={item.label}
              item={item}
            />
          );
        }

        const active = pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href ?? "/"}
            aria-current={active ? "page" : undefined}
            className={`group relative flex h-[84px] items-center whitespace-nowrap text-[15px] font-medium transition-colors duration-300 ${
              active
                ? "text-[#f0900b]"
                : "text-[#171717] hover:text-[#f0900b]"
            }`}
          >
            {item.label}

            <span
              className={`absolute bottom-[22px] left-0 h-[2px] bg-[#f0900b] transition-all duration-300 ${
                active
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
