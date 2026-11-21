
export type CommunityMember = {
  id: number;
  name: string;
  image: string;
  role?: string;
  imagePosition?: string;
};

export const communityData = {
  label: "OUR PEOPLE",
  heading: "Community",
  description:
    "A community of caregivers, professionals, and changemakers working towards inclusion and belonging.",

  autoplayDelay: 2000,

  members: [
    {
      id: 1,
      name: "Adv Amita V Joseph",
      image: "/about/Adv-AMITA-V-JOSEPH-1.jpg",
    },
    {
      id: 2,
      name: "Gopal Krishna Rao",
      image: "/about/GOPAL-KRISHNA-RAO-1.jpg",
    },
    {
      id: 3,
      name: "Lakshmi S Mahesh",
      image: "/about/LAKSHMI-S-MAHESH-1.jpg",
    },
    {
      id: 4,
      name: "Nijo Johnson",
      image: "/about/NIJO-JOHNSON-1.jpg",
    },
    {
      id: 5,
      name: "Pushpa Jena",
      image: "/about/PUSHPA-JENA-1.jpg",
    },
    {
      id: 6,
      name: "Dr. R.K. Sabharwal",
      image: "/about/Dr-RK-SABHARWAL-1.jpg",
    },
    {
      id: 7,
      name: "Dr. Paul",
      image: "/about/Dr-PAUL-1.jpg",
    },
    {
      id: 8,
      name: "Dr. Sangeeta Subudhi",
      image: "/about/Dr-SANGEETA-SUBUDHI-1.jpg",
    },
    {
      id: 9,
      name: "Dr. Shruthy Muralidharan",
      image: "/about/Dr-SHRUTHY-MURALIDHARAN-1.jpg",
    },
  ] satisfies CommunityMember[],
};
