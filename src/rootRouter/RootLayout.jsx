import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../components/commonComponents/Footer";
import Navbar from "../components/commonComponents/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default RootLayout;
