
export type Partner = {
  id: string;
  name: string;
  logo: string;
  website?: string;
};

export const ourPartnersData = {
  partners: [
    {
      id: "evergreen",
      name: "Evergreen",
      logo: "/hero/Evergreen-logow.png",
    },
    {
      id: "osttra",
      name: "OSTTRA",
      logo: "/hero/osstra-2.png",
    },
    {
      id: "sant-nirankari",
      name: "Sant Nirankari Mission",
      logo: "/hero/Logo-Sant-Nirankari.webp",
    },
  ] satisfies Partner[],
};
