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
export { navbarArr, footerColumns };
