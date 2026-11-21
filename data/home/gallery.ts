
export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  caption: string;
};

export const galleryData = {
  heading: "Gallery",

  description: "Moments of love, care, and togetherness.",

  images: [
    {
      id: 1,
      src: "/hero/Inclusive Art Workshop Joy.png",
      alt: "HrdyaSara Foundation community activity",
      caption: "Moments of Togetherness",
    },
    {
      id: 2,
      src: "/hero/Focused Builder at Play.png",
      alt: "HrdyaSara self-help group event",
      caption: "Empowering Communities",
    },
    {
      id: 3,
      src: "/hero/Hopeful Smile Against Colorful Stripes.png",
      alt: "Children celebrating at HrdyaSara",
      caption: "Celebrating Happiness",
    },
    {
      id: 4,
      src: "/hero/Joyful Family Art Activity.png",
      alt: "Children participating in creative activities",
      caption: "Learning Through Creativity",
    },
    {
      id: 5,
      src: "/hero/Vibrant Indian Family Group Portrait (1).png",
      alt: "Foundation volunteers supporting children",
      caption: "Care and Compassion",
    },
    {
      id: 6,
      src: "/hero/Women’s Self Help Group Banner.png",
      alt: "HrdyaSara community celebration",
      caption: "Memories That Matter",
    },
  ] satisfies GalleryImage[],
};
