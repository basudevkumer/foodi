import allImages from "./ImageProiver";

const { categoryImages, specialDimage } = allImages;

const navbarArr = [
  { id: 1, name: "Home", to: "home", icon: false },
  { id: 2, name: "Menu", to: "menu", icon: true },
  { id: 3, name: "Services", to: "services", icon: true },
  { id: 4, name: "Offers", to: "Offers", icon: false },
];
const footerColumns = {
  left: [
    { id: 1, name: "About us", link: "/about-us" },
    { id: 2, name: "Events", link: "/events" },
    { id: 3, name: "Blogs", link: "/blogs" },
    { id: 4, name: "FAQ", link: "/faq" },
  ],
  middle: [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Offers", link: "/offers" },
    { id: 3, name: "Menus", link: "/menus" },
    { id: 4, name: "Reservation", link: "/reservation" },
  ],
  right: [
    {
      id: 1,
      name: "example@email.com",
      link: "mailto:example@email.com",
      type: "email",
    },
    { id: 2, name: "+64 958 248 966", link: "tel:+64958248966", type: "phone" },
    { id: 3, name: "Social media", link: "/social-media", type: "social" },
  ],
};

const menuCategories = [
  {
    id: 1,
    title: "Main Dish",
    subtitle: "(86 dishes)",
    imageUrl: categoryImages[0].images,
  },
  {
    id: 2,
    title: "Break Fast",
    subtitle: "(12 break fast)",
    imageUrl: categoryImages[1].images,
  },
  {
    id: 3,
    title: "Dessert",
    subtitle: "(48 dessert)",
    imageUrl: categoryImages[2].images,
  },
  {
    id: 4,
    title: "Browse All",
    subtitle: "(255 Items)",
    imageUrl: categoryImages[3].images,
  },
];

const specialItems = [
  {
    id: 1,
    name: "Fattoush salad",
    description: "Description of the item",
    price: 24.0,
    rating: 4.9,
    imageUrl: specialDimage[0].images,
  },
  {
    id: 2,
    name: "Vegetable salad",
    description: "Description of the item",
    price: 26.0,
    rating: 4.6,
    imageUrl: specialDimage[1].images,
  },
  {
    id: 3,
    name: "Egg vegi salad",
    description: "Description of the item",
    price: 23.0,
    rating: 4.5,
    imageUrl: specialDimage[2].images,
  },
  {
    id: 4,
    name: "Fattoush salad",
    description: "Description of the item",
    price: 24.0,
    rating: 4.9,
    imageUrl: specialDimage[0].images,
  },
  {
    id: 5,
    name: "Vegetable salad",
    description: "Description of the item",
    price: 26.0,
    rating: 4.6,
    imageUrl: specialDimage[1].images,
  },
  {
    id: 6,
    name: "Egg vegi salad",
    description: "Description of the item",
    price: 23.0,
    rating: 4.5,
    imageUrl: specialDimage[2].images,
  },
];

export { navbarArr, footerColumns, menuCategories,specialItems };
