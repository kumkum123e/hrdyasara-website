
export type ProjectIcon =
  | "utensils"
  | "graduation-cap"
  | "hand-heart"
  | "ear"
  | "palette"
  | "sprout"
  | "heart-pulse";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: ProjectIcon;
  href: string;
};

export const ourProjectsData = {
  eyebrow: "CREATING MEANINGFUL CHANGE",

  heading: {
    normal: "Our",
    highlighted: "Projects",
  },

  description:
    "A range of meaningful initiatives creating inclusion, care, and opportunity.",

  projects: [
    {
      id: "food-for-soul",
      title: "Food For Soul",
      description:
        "Nourishing lives through food, compassion, and community support, because every individual deserves care and dignity.",
      image: "/hero/Community Volunteers Preparing Meals Together.png",
      imageAlt: "Community food distribution activity",
      icon: "utensils",
      href: "/hero/Community Volunteers Preparing Meals Together.png",
    },
    {
      id: "awards-scholarships",
      title: "HSF Awards & Scholarships",
      description:
        "Recognizing potential and encouraging educational growth through opportunities, appreciation, and support.",
      image: "/hero/SARA J. GODWIN Award Trophy.png",
      imageAlt: "Students receiving awards and scholarships",
      icon: "graduation-cap",
      href: "/hero/SARA J. GODWIN Award Trophy.png",
    },
    {
      id: "care-giving",
      title: "Care Giving",
      description:
        "Providing compassionate support to children and families while encouraging understanding, comfort, and emotional wellbeing.",
      image: "/hero/Family Learning Together with Tablet.png",
      imageAlt: "Caregiver supporting a child",
      icon: "hand-heart",
      href: "/hero/Family Learning Together with Tablet.png",
    },
    {
      id: "hearing-voiceless",
      title: "Hearing the Voiceless",
      description:
        "Creating space for unheard voices, encouraging expression, inclusion, and equal opportunities for every individual.",
      image: "/hero/Gentle Cow Portrait by the Gate.png",
      imageAlt: "Children participating in an inclusive community activity",
      icon: "ear",
      href: "/hero/Gentle Cow Portrait by the Gate.png",
    },
    {
      id: "music-arts",
      title: "Music & Arts Therapy",
      description:
        "Using creativity, music, and artistic expression to build confidence, encourage communication, and support emotional wellbeing.",
      image: "/hero/Young Artist Painting Floral Cloth.png",
      imageAlt: "Child participating in a creative art activity",
      icon: "palette",
      href: "/hero/Young Artist Painting Floral Cloth.png",
    },
    {
      id: "HSF nurture-hope",
      title: "HSF Nurture Hope",
      description:
        "Nurturing hope through compassionate care, meaningful opportunities, and support for children and their families.",
      image: "/hero/Community Foundation Gathering in the Garden.png",
      imageAlt: "Children taking part in a supportive learning activity",
      icon: "sprout",
      href: "/hero/Community Foundation Gathering in the Garden.png",
    },
    {
      id: "wellbeing",
      title: "Wellbeing",
      description:
        "Encouraging physical, mental, and emotional wellbeing through supportive activities and community connections.",
      image: "/hero/Four People in a Supply-Filled Room.png",
      imageAlt: "Children participating in a wellbeing activity",
      icon: "heart-pulse",
      href: "/hero/Four People in a Supply-Filled Room.png",
    },
  ] satisfies Project[],
};
