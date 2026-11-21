
import Image from "next/image";
import Link from "next/link";

import {
  MapPin,
  Phone,
  Mail,
  Heart,
  ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import { footerData } from "@/data/home/footer";

type FooterLink = {
  label: string;
  href: string;
};

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h3 className="mb-6 text-[15px] font-bold uppercase tracking-wide text-white">
        {title}
      </h3>

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-1 text-[14px] leading-6 text-white/70 transition-colors duration-300 hover:text-[#F0900B]"
            >
              <span className="underline-offset-4 group-hover:underline">
                {link.label}
              </span>
              <ArrowUpRight
                size={13}
                className="opacity-0 transition-opacity group-hover:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const socialItems = [
  {
    name: "Facebook",
    href: footerData.socialLinks.facebook,
    Icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: footerData.socialLinks.instagram,
    Icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: footerData.socialLinks.linkedin,
    Icon: FaLinkedinIn,
  },
  {
    name: "Twitter",
    href: footerData.socialLinks.twitter,
    Icon: FaTwitter,
  },
];

export default function Footer() {
  const year = 2026;

  return (
    <footer className="relative bg-[#242428] text-white">
      <div className="mx-auto max-w-[1500px] px-5 pb-8 pt-28 sm:px-8 lg:px-12 lg:pt-50">

        {/* Main footer grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1.2fr] lg:gap-10">

          {/* Column 1: Foundation */}
          <div>
            <Link
              href="/"
              aria-label="HrdyaSara Foundation homepage"
              className="inline-block"
            >
              <Image
                src={footerData.logo}
                alt="HrdyaSara Foundation"
                width={350}
                height={100}
                className="h-auto w-[230px] object-contain sm:w-[260px]"
              />
            </Link>

            <p className="mt-5 max-w-[350px] text-[14px] leading-7 text-white/75">
              {footerData.description}
            </p>

            <Link
              href="/connect/contact-us"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#E29B50] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F0900B] hover:shadow-lg"
            >
              Contact Us
              <Heart size={15} fill="currentColor" />
            </Link>
          </div>

          {/* Column 2 */}
          <FooterLinks
            title="Our Initiatives"
            links={footerData.initiatives}
          />

          {/* Column 3 */}
          <FooterLinks
            title="RASA"
            links={footerData.rasa}
          />

          {/* Column 4: Contact */}
          <div>
            <h3 className="mb-6 text-[15px] font-bold uppercase tracking-wide">
              Contact
            </h3>

            <div className="space-y-5 text-[14px] leading-7">
              <div className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-[#F0900B]"
                />
                <span className="text-white/75">
                  {footerData.contact.address}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={19}
                  className="mt-1 shrink-0 text-[#F0900B]"
                />

                <div className="flex min-w-0 flex-col gap-1">
                  {footerData.contact.emails.map(
                    (email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="break-all text-[#F0900B] transition-colors hover:text-[#FFC27D] hover:underline"
                      >
                        {email}
                      </a>
                    )
                  )}
                </div>
              </div>

              <a
                href={footerData.contact.phoneHref}
                className="flex items-center gap-3 text-white/80 transition-colors hover:text-[#F0900B]"
              >
                <Phone
                  size={19}
                  className="shrink-0 text-[#F0900B]"
                />
                {footerData.contact.phone}
              </a>
            </div>

            {/* Social icons */}
            <div className="mt-7 flex flex-wrap gap-3">
              {socialItems
                .filter((item) => item.href)
                .map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F0900B]"
                  >
                    <Icon size={16} />
                  </a>
                ))}
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-14 border-t border-white/15 pt-6">
          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
            <p className="text-xs leading-6 text-white/60 sm:text-sm">
              © {year} HrdyaSara Foundation. All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {footerData.bottomLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-white/65 transition-colors hover:text-[#F0900B] hover:underline sm:text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
