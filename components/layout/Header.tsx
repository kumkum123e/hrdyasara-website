"use client";

import TopInfoBar from "./TopInfoBar";
import Navbar from "./Navbar";
import useScrolled from "@/hooks/useScrolled";

export default function Header() {
  const scrolled = useScrolled(10);

  return (
    <>
      <TopInfoBar />

      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <Navbar />
      </header>
    </>
  );
}