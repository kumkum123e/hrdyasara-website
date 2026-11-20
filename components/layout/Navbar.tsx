
import Image from "next/image";
import Link from "next/link";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import HeaderActions from "./HeaderActions";

export default function Navbar() {
  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex h-[84px] max-w-[1920px] items-center justify-between gap-4 px-5 lg:px-7 2xl:px-10">

        {/* Original HrdyaSara Logo */}
        <Link
          href="/"
          aria-label="HrdyaSara Home"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/logo/HRDYA SARA Heart Logo.png"
            alt="HrdyaSara Logo"
            width={2000}
            height={500}
            priority
            className="h-auto w-[190px] object-contain sm:w-[240px] xl:w-[290px] 2xl:w-[370px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="flex min-w-0 flex-1 justify-center">
          <DesktopNav />
        </div>

        {/* Profile, Cart, Shop RASA */}
        <div className="flex shrink-0 items-center gap-2">
          <HeaderActions />
          <MobileNav />
        </div>

      </div>
    </div>
  );
}
