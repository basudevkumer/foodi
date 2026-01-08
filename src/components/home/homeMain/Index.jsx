import React from "react";
import Navbar from "../../commonComponents/Navbar";
import Bannar from "../bannar/Bannar";
import Category from "../../commonComponents/Category";
import SpecialDish from "../../specialDish/SpecialDish";
import Testimonial from "../testimonials/Testimonial";
import Story from "../story/Story";

const HomeMain = () => {
  return (
    <>
      <Bannar />
      <Category />
      <SpecialDish />
      <Testimonial/>
      <Story/>
    </>
  );
};

export default HomeMain;
