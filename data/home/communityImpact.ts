
export type CommunityCard = {
  id: string;
  title: string;
  description: string;
};

export const communityImpactData = {
  image: "/hero/Celebratory Certificate Presentation on Stage.png",

  imageAlt:
    "HrdyaSara Foundation community award ceremony celebrating inclusion and achievement",

  cards: [
    {
      id: "what-can-you-do",
      title: "What Can You Do?",
      description:
        "The next time you encounter someone with a disability or feel overwhelmed yourself, remember that everyone has their own challenges. Take a moment to breathe and smile. Sometimes, making a difference begins with something as simple as a smile.",
    },
    {
      id: "why-should-you-do-it",
      title: "Why Should You Do It?",
      description:
        "We are all part of the same puzzle, with our strengths and weaknesses. By supporting one another, we create a world where everyone feels valued and heard. Educate yourself, become sensitive to the needs of others, and when you’re ready, contribute.",
    },
  ] satisfies CommunityCard[],
};
