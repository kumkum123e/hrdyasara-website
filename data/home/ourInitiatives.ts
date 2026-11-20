
export type InitiativeIcon = "users" | "masks";

export type Initiative = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: InitiativeIcon;
  href: string;
};

export const ourInitiativesData = {
  eyebrow: "OUR INITIATIVES",

  heading: {
    normal: "Our",
    highlighted: "Initiatives",
  },

  description:
    "Programs that nurture talent, inclusion, and independence.",

  initiatives: [
    {
      id: "pehchaan",
      title: "Pehchaan",
      description:
        "Nurturing creativity, recognizing talent, and encouraging individual potential.",
      image: "/hero/Colorful Artistic Splashes and Icons.png",
      imageAlt: "Pehchaan initiative by HrdyaSara Foundation",
      icon: "users",
      href: "/initiatives/pehchaan",
    },
    {
      id: "rasa",
      title: "RaSa",
      description:
        "Celebrating creativity and meaningful opportunities through the RaSa initiative.",
      image: "/hero/Elegant RASA Floral Portrait.png",
      imageAlt: "RaSa initiative by HrdyaSara Foundation",
      icon: "masks",
      href: "/initiatives/rasa",
    },
    {
      id: "self-help-group",
      title: "Self-Help Group",
      description:
        "Empowering individuals through community support, skill development, and independence.",
      image: "/hero/Women’s Self Help Group Banner.png",
      imageAlt: "Women participating in HrdyaSara self-help group",
      icon: "users",
      href: "/initiatives/self-help-group",
    },
  ] satisfies Initiative[],
};
