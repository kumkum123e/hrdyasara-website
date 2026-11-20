
export type ApproachIcon =
  | "hand-heart"
  | "heart-handshake"
  | "users";

export type ApproachValue = {
  id: string;
  title: string;
  description: string;
  icon: ApproachIcon;
  image: string;
  imageAlt: string;
  color: "red" | "orange";
};

export const ourApproachData: {
  eyebrow: string;
  heading: {
    normal: string;
    highlighted: string;
  };
  description: string;
  centerLabel: string;
  centerSubtitle: string;
  values: ApproachValue[];
} = {
  eyebrow: "HOW WE MAKE A DIFFERENCE",

  heading: {
    normal: "Our",
    highlighted: "Approach",
  },

  description:
    "Three guiding values that shape our work, our relationships, and our impact.",

  centerLabel: "HRDYASARA",
  centerSubtitle: "Our Values",

  values: [
    {
      id: "accept",
      title: "Accept",
      description:
        "We create an inclusive space where everyone is seen, heard, and understood for who they are.",
      icon: "hand-heart",
      image: "/hero/Joyful Welcome Hug.png",
      imageAlt: "Child enjoying an inclusive activity",
      color: "red",
    },
    {
      id: "empathise",
      title: "Empathise",
      description:
        "We are driven by empathy, ensuring that everything we do comes from a place of compassion and respect.",
      icon: "heart-handshake",
      image: "/hero/Caring Teacher and Smiling Child.png",
      imageAlt: "Caregiver supporting a child with compassion",
      color: "orange",
    },
    {
      id: "engage",
      title: "Engage",
      description:
        "We build meaningful relationships, empowering individuals and families through support, collaboration, and shared growth.",
      icon: "users",
      image: "/hero/Joyful Family Art Activity.png",
      imageAlt: "Children and volunteers engaging in an activity",
      color: "red",
    },
  ],
};
