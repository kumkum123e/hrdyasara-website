
import type { NavItem } from "@/types/navigation";

export const navigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    children: [
      { label: "HrdyaSara", href: "/about/hrdyasara" },
      { label: "Meet Sara", href: "/about/meet-sara" },
      { label: "Our Team", href: "/about/our-team" },
      { label: "Our Children", href: "/about/our-children" },
      { label: "Our Objectives", href: "/about/our-objectives" },
      { label: "Our Projects", href: "/about/our-projects" },
    ],
  },
  {
    label: "Initiatives",
    children: [
      { label: "Pehchan", href: "/initiatives/pehchan" },
      {
        label: "Rasa",
        href: "/initiatives/rasa",
        children: [
          {
            label: "Shop",
            href: "/initiatives/rasa/shop",
          },
        ],
      },
      {
        label: "Self Help Group",
        href: "/initiatives/self-help-group",
      },
    ],
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Resources",
    children: [
      {
        label: "Sponsors & Partners",
        href: "/resources/sponsors-partners",
      },
      {
        label: "Annual Reports",
        href: "/resources/annual-reports",
        children: [
          {
            label: "Annual Report 2022-23",
            href: "/resources/annual-reports/2022-23",
          },
          {
            label: "Annual Report 2023-24",
            href: "/resources/annual-reports/2023-24",
          },
        ],
      },
      {
        label: "News & Media",
        href: "/resources/news-media",
      },
      {
        label: "Gallery",
        href: "/resources/gallery",
      },
    ],
  },
  {
    label: "Connect",
    children: [
      {
        label: "Contact Us",
        href: "/connect/contact-us",
      },
      {
        label: "Work With Us",
        href: "/connect/work-with-us",
      },
      {
        label: "Volunteer With Us",
        href: "/connect/volunteer-with-us",
      },
    ],
  },
];
