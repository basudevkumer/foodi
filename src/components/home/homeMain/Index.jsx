import React from "react";
import Navbar from "../../commonComponents/Navbar";
import Bannar from "../bannar/Bannar";
import Category from "../../commonComponents/Category";
import SpecialDish from "../../specialDish/SpecialDish";

const HomeMain = () => {
  return (
    <>
      <Bannar />
      <Category />
      <SpecialDish />
    </>
  );
};

export default HomeMain;
