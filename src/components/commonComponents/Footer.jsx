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
    <footer>
      <Container>
        <div className="grid grid-cols-6 gap-x-3">
          <div className="col-span-2 ">
            <figure>
              <img src={navImage} alt="navimages" />
            </figure>
            <p className="p2 font-inter lg:w-[320px] text-tarnary2  mt-[37px]">
              Savor the artistry where every dish is a culinary masterpiece
            </p>
          </div>
          <div className="">
            <nav>
              <ul className="flex flex-col gap-y-5">
                <li className="pb-4">
                  <Link to={""} className="text-primary p2s ">
                    Useful links
                  </Link>
                </li>

                {left.map((items, index) => {
                  return (
                    <li key={index} className="overflow-hidden">
                      <Link
                        to={""}
                        className=" p2 font-inter text-tarnary2 relative  group"
                      >
                        <span
                          className=" absolute content-[''] 
                    w-[32px] h-[3px] bg-secondary  top-1/2 left-[-37px] -translate-y-1/2  transition-all duration-300 ease-in-out group-hover:left-0 rounded-full z-0"
                        ></span>
                        <span className="z-10 group-hover:translate-x-[34px]  transition-all duration-300 ease-in-out inline-block">
                          {items.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="">
            <nav>
              <ul className="flex flex-col gap-y-5">
                <li className="pb-4">
                  <Link to={""} className="text-primary p2s ">
                    Main Menu
                  </Link>
                </li>

                {middle.map((items, index) => {
                  return (
                    <li key={index} className="overflow-hidden">
                      <Link
                        to={""}
                        className=" p2 font-inter text-tarnary2 relative  group"
                      >
                        <span
                          className=" absolute content-[''] 
                    w-[32px] h-[3px] bg-secondary  top-1/2 left-[-37px] -translate-y-1/2  transition-all duration-300 ease-in-out group-hover:left-0 rounded-full z-0"
                        ></span>
                        <span className="z-10 group-hover:translate-x-[34px]  transition-all duration-300 ease-in-out inline-block">
                          {items.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="col-span-2 ">
            <nav>
              <ul className="flex flex-col gap-y-5">
                <li className="pb-4">
                  <Link to={""} className="text-primary p2s ">
                    Contact Us
                  </Link>
                </li>

                {right.map((items, index) => {
                  return (
                    <li key={index} className="overflow-hidden">
                      <Link
                        to={""}
                        className=" p2 font-inter text-tarnary2 relative  group"
                      >
                        <span
                          className=" absolute content-[''] 
                    w-[32px] h-[3px] bg-secondary  top-1/2 left-[-37px] -translate-y-1/2  transition-all duration-300 ease-in-out group-hover:left-0 rounded-full z-0"
                        ></span>
                        <span className="z-10 group-hover:translate-x-[34px]  transition-all duration-300 ease-in-out inline-block">
                          {items.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
        <div className="mt-[100px] flex items-center  gap-x-[170px]">
          <div>
            <ul className="flex gap-x-5">
              {footerIcon.map((items, index) => {
                return (
                  <li className="" key={index}>
                    <Link className="text-2xl p-4 rounded-full inline-block  bg-secondary2 hover:bg-secondary hover:text-quinary  transition duration-300 ease-in-out">
                      {items.icon}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p className="text-tarnary2 font-inter p3">Copyright       2023 Dscode | All rights reserved</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
