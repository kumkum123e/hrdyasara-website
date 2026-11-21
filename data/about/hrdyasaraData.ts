
export const hrdyasaraData = {
  hero: {
    eyebrow: "WELCOME TO HRDYASARA",

    title: "About",
    highlightedTitle: "Us",

    description:
      "The story of HrdyaSara is a journey of love, resilience, and inclusion, dedicated to empowering individuals with disabilities and their families.",

    image: "/hero/Hrdya Sara’s Foundation Group Portrait.png",

    imageAlt:
      "HrdyaSara Foundation team and community members",

    buttons: [
      {
        label: "Our Story",
        href: "#our-story",
        primary: true,
      },
      {
        label: "Get Involved",
        href: "#get-involved",
        primary: false,
      },
    ],
  },

  introduction: {
    eyebrow: "OUR STORY",

    title: "About",
    highlightedTitle: "HrdyaSara",

    paragraphs: [
      "The story of HrdyaSara is deeply intertwined with the story of Sara, the daughter of our founder, Mrs. Jayashree S. Godwin. Sara's life was marked by extraordinary challenges and boundless joy. Born with severe disabilities, her resilience and radiant smile were a beacon of hope and inspiration for all who met her.",

      "Despite her constant pain, she found happiness and taught us all the true meaning of strength, love, and compassion.",
    ],
  },

  values: [
    {
      id: 1,
      title: "Inclusion",
      description:
        "Creating opportunities and a sense of belonging for individuals with disabilities.",
      icon: "heart",
    },
    {
      id: 2,
      title: "Empowerment",
      description:
        "Nurturing talent, confidence, and independence through holistic support.",
      icon: "sprout",
    },
    {
      id: 3,
      title: "Community",
      description:
        "Building a more compassionate and inclusive society together.",
      icon: "users",
    },
  ],
} as const;
