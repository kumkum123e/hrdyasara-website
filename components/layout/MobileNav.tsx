
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigation } from "@/data/navigation";
import type { NavItem } from "@/types/navigation";

function MobileItem({
  item,
  closeMenu,
  depth = 0,
}: {
  item: NavItem;
  closeMenu: () => void;
  depth?: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div
        className="flex items-center justify-between border-b border-gray-100"
        style={{ paddingLeft: `${depth * 16}px` }}
      >
        {item.href ? (
          <Link
            href={item.href}
            onClick={closeMenu}
            className="flex-1 py-3 text-sm font-medium"
          >
            {item.label}
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="flex-1 py-3 text-left text-sm font-medium"
          >
            {item.label}
          </button>
        )}

        {item.children && (
          <button
            type="button"
            aria-label={`Toggle ${item.label}`}
            aria-expanded={expanded}
            onClick={() => setExpanded(!expanded)}
            className="p-3"
          >
            <ChevronDown
              size={16}
              className={`transition-transform ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>

      {expanded && item.children && (
        <div className="bg-[#f0900b]/5">
          {item.children.map((child) => (
            <MobileItem
              key={child.label}
              item={child}
              closeMenu={closeMenu}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="rounded-lg p-2 hover:bg-[#f0900b]/10"
      >
        {open ? <X size={25} /> : <Menu size={25} />}
      </button>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="absolute left-0 top-full z-50 max-h-[calc(100dvh-84px)] w-full overflow-y-auto border-t bg-white px-5 py-4 shadow-xl"
        >
          {navigation.map((item) => (
            <MobileItem
              key={item.label}
              item={item}
              closeMenu={() => setOpen(false)}
            />
          ))}

          <Link
            href="/initiatives/rasa/shop"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full bg-[#f0900b] px-6 py-3 text-center font-semibold text-white"
          >
            SHOP RASA
          </Link>
        </nav>
      )}
    </div>
  );
}
