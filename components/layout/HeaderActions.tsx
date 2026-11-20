
import Link from "next/link";
import { UserRound, ShoppingBasket } from "lucide-react";

export default function HeaderActions() {
  return (
    <div className="flex shrink-0 items-center gap-2 xl:gap-4">

      {/* My Account */}
      <Link
        href="/account"
        aria-label="My Account"
        className="flex h-10 w-10 items-center justify-center rounded-full text-[#171717] transition-all duration-300 hover:bg-[#f0900b]/10 hover:text-[#f0900b]"
      >
        <UserRound size={24} strokeWidth={1.8} />
      </Link>

      {/* Cart */}
      <Link
        href="/cart"
        aria-label="Shopping Cart"
        className="flex h-10 w-10 items-center justify-center rounded-full text-[#171717] transition-all duration-300 hover:bg-[#f0900b]/10 hover:text-[#f0900b]"
      >
        <ShoppingBasket size={24} strokeWidth={1.8} />
      </Link>

      {/* SHOP RASA Button */}
      <Link
        href="/initiatives/rasa/shop"
        className="ml-3 hidden h-[48px] min-w-[160px] items-center justify-center rounded-[30px] bg-[#f0900b] px-7 text-[14px] font-semibold text-white transition-all duration-300 hover:brightness-95 hover:shadow-[0_6px_18px_rgba(240,144,11,0.25)] xl:flex"
      >
        SHOP RASA
      </Link>

    </div>
  );
}
