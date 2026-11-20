// Update these values to change homepage hero and About content.
export const homepageContent = {
  hero: {
    eyebrow: "Every Child Deserves Hope & Dignity",
    heading: {
      before: "Every Child Deserves to Grow with",
      highlight: "Pride, Hope & Dignity.",
    },
    description:
      "HrdyaSara Foundation brings inclusive developmental care, mindful learning, and essential support to children and families across underserved communities — helping every child reach their fullest potential.",
    actions: {
      donate: {
        label: "Donate Today",
        href: "/connect/contact-us",
      },
      explore: {
        label: "Explore Initiatives",
        href: "/initiatives/pehchan",
      },
    },
    image: {
      src: "/hero/Inclusive Art Workshop Joy.png",
      alt: "Children participating in learning and community activities",
    },
    quote: {
      text: "Every child deserves the opportunity to learn, grow and thrive.",
      attribution: "HrdyaSara Foundation",
    },
    infoCards: [
      {
        title: "Disabilities are not always visible",
        description:
          "Every child deserves understanding, inclusive care and opportunities to grow with confidence.",
        image: "/hero/Hopeful Smile Against Colorful Stripes.png",
        alt: "Child participating in an inclusive learning activity",
      },
      {
        title: "Early Intervention is important",
        description:
          "Timely developmental support can help children and families overcome challenges and build a stronger future.",
        image: "/hero/Focused Builder at Play.png",
        alt: "Child receiving early learning and developmental support",
      },
    ],
  },
  about: {
    eyebrow: "About HrdyaSara",
    heading: "Who We Are",
    tagline: "Understanding beyond what we can see.",
    paragraphs: [
      "When people think of disability, a wheelchair is often the first thing that comes to mind. But disability and the challenges people experience can extend far beyond what is visible.",
      "At different moments in life, we may struggle to think clearly, act or even breathe when anxiety takes over. Yet many hesitate to ask for help because of fear, judgment or barriers around them.",
      "At HrdyaSara, we believe meaningful change begins with us. By choosing understanding over assumptions and compassion over judgment, we can build a more inclusive society.",
    ],
    action: {
      label: "Discover Our Story",
      href: "/about/hrdyasara",
    },
    imageGrid: {
      images: [
        {
          src: "/hero/Vibrant Indian Family Group Portrait (1).png",
          alt: "Children participating in community activities",
        },
        {
          src: "/hero/Smiling Siblings_ Balcony and Drawing Time.png",
          alt: "Children learning together",
        },
        {
          src: "/hero/Hrdya Sara’s Foundation Group Portrait.png",
          alt: "Children receiving care and support",
        },
      ],
      highlight: {
        title: "Care & Inclusion",
        description: "Creating a more compassionate community",
      },
    },
    impactCounters: [
      {
        label: "Years of Service",
        value: 4,
        suffix: "+",
      },
      {
        label: "Lives Touchedd",
        value: 100000,
        suffix: "+",
      },
      {
        label: "Successful Programs",
        value: 1152,
        suffix: "",
      },
    ],
  },
} as const;
