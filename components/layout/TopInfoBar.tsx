
import { MapPin, Phone } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function TopInfoBar() {
  const today = new Date();

  const date = new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    timeZone: "Asia/Kolkata",
  }).format(today);

  const month = new Intl.DateTimeFormat("en-IN", {
    month: "short",
    timeZone: "Asia/Kolkata",
  }).format(today);

  const year = new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(today);

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/",
      icon: FaFacebookF,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      icon: FaInstagram,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: FaLinkedinIn,
    },
    {
      name: "Twitter",
      href: "https://x.com/",
      icon: FaTwitter,
    },
  ];

  return (
    <div className="hidden h-[36px] bg-[#242428] text-white lg:block">
      <div className="mx-auto flex h-full max-w-[1800px] items-center justify-between gap-5 px-6 xl:px-10">

        {/* Date */}
        <div className="flex shrink-0 items-center gap-2">
          <span className="text-[27px] font-bold leading-none text-[#f0900b]">
            {date}
          </span>

          <div className="flex flex-col text-[10px] font-semibold leading-tight">
            <span>{month.toUpperCase()}</span>
            <span>{year}</span>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex items-center gap-5 text-[12px] xl:gap-7">

          {/* Address */}
          <div className="hidden items-center gap-2 xl:flex">
            <MapPin
              size={15}
              className="shrink-0 text-[#f0900b]"
            />

            <span>
              C-41, First Floor, Jangpura Extension,
              New Delhi -110014
            </span>
          </div>

          {/* Phone */}
          <a
            href="tel:+919873204215"
            className="flex items-center gap-2 transition-colors duration-300 hover:text-[#f0900b]"
          >
            <Phone
              size={15}
              className="text-[#f0900b]"
            />

            <span>+91 98732 04215</span>
          </a>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:text-[#f0900b]"
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
