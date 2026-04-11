import React from "react";
import Container from "./Container";
import allImages from "../../helper/ImageProiver";
import { footerColumns } from "../../helper/ProjectArrObj";
import allIcon from "../../helper/IocnProvider";
import { Link } from "react-router-dom";

const Footer = () => {
  const { navImage } = allImages;
  const { footerIcon } = allIcon;
  const { left, middle, right } = footerColumns;

  return (
    <footer className="py-10 md:py-16">
      <Container>
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <figure className="w-[120px] md:w-auto">
              <img src={navImage} alt="navimages" className="w-[108px]" />
            </figure>
            <p className="p3 font-inter sm:max-w-[320px] text-tarnary2 mt-6 lg:mt-[37px]">
              Savor the artistry where every dish is a culinary masterpiece
            </p>
          </div>

          {/* Useful Links */}
          <div className="sm:col-span-1 ">
            <nav>
              <ul className="flex flex-col gap-y-4 lg:gap-y-5">
                <li className="pb-2 lg:pb-4">
                  <Link to={""} className="text-primary p2s">
                    Useful links
                  </Link>
                </li>
                {left.map((items, index) => (
                  <li key={index} className="overflow-hidden">
                    <Link
                      to={""}
                      className="p3 font-inter text-tarnary2 relative group"
                    >
                      <span className="absolute content-[''] w-[32px] h-[3px] bg-secondary top-1/2 left-[-37px] -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:left-0 rounded-full z-0"></span>
                      <span className="z-10 group-hover:translate-x-[34px] transition-all duration-300 ease-in-out inline-block">
                        {items.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Menu */}
          <div className="sm:col-span-1 ">
            <nav>
              <ul className="flex flex-col gap-y-4 lg:gap-y-5">
                <li className="pb-2 lg:pb-4">
                  <Link to={""} className="text-primary p2s">
                    Main Menu
                  </Link>
                </li>
                {middle.map((items, index) => (
                  <li key={index} className="overflow-hidden">
                    <Link
                      to={""}
                      className="p3 font-inter text-tarnary2 relative group"
                    >
                      <span className="absolute content-[''] w-[32px] h-[3px] bg-secondary top-1/2 left-[-37px] -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:left-0 rounded-full z-0"></span>
                      <span className="z-10 group-hover:translate-x-[34px] transition-all duration-300 ease-in-out inline-block">
                        {items.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Us */}
          <div className="sm:col-span-1 lg:col-span-2 ">
            <nav>
              <ul className="flex flex-col gap-y-4 lg:gap-y-5">
                <li className="pb-2 lg:pb-4">
                  <Link to={""} className="text-primary p2s">
                    Contact Us
                  </Link>
                </li>
                {right.map((items, index) => (
                  <li key={index} className="overflow-hidden">
                    <Link
                      to={""}
                      className="p3 font-inter text-tarnary2 relative group"
                    >
                      <span className="absolute content-[''] w-[32px] h-[3px] bg-secondary top-1/2 left-[-37px] -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:left-0 rounded-full z-0"></span>
                      <span className="z-10 group-hover:translate-x-[34px] transition-all duration-300 ease-in-out inline-block">
                        {items.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 lg:mt-[100px] flex flex-col sm:flex-row items-center gap-y-6 sm:gap-y-0 sm:gap-x-10 lg:gap-x-[170px]">
          {/* Social Icons */}
          <div>
            <ul className="flex gap-x-4 lg:gap-x-5">
              {footerIcon.map((items, index) => (
                <li key={index}>
                  <Link className="text-xl lg:text-2xl p-3 lg:p-4 rounded-full inline-block bg-secondary2 hover:bg-secondary hover:text-quinary transition duration-300 ease-in-out">
                    {items.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-tarnary2 font-inter p3 text-center sm:text-left">
              Copyright 2023 Dscode | All rights reserved
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;