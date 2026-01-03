import React, { useState } from "react";
import Container from "../commonComponents/Container";
import { Link } from "react-router-dom";
import { navbarArr } from "../../helper/ProjectArrObj";
import allIcon from "../../helper/IocnProvider";
import allImages from "../../helper/ImageProiver";
import Button from "./Button";

const Navbar = () => {
  const [activeId, setActiveId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { navImage } = allImages;

  // for icon and arr
  const navarr = navbarArr;
  const { chevronIconDown, chevronIconUp, searchIcon, bagIcon, callIcon } =
    allIcon;

  // for hangle event

  const handleClicked = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const hangleClickedSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="py-9">
      <Container>
        <header>
          <nav className="flex justify-between items-center">
            <figure>
              <img src={navImage} alt="navimage" />
            </figure>
            <ul className="flex gap-x-[60px]">
              {navarr.map((items, index) => {
                const isActive = items.id === activeId;

                return (
                  <li key={items.id}>
                    <Link
                      to={""}
                      className="text-primary p4 hover:text-secondary  font-poppins  transition duration-300 ease-in-out flex items-center gap-x-3"
                      onClick={() => handleClicked(items.id)}
                    >
                      {items.name}
                      {items.icon && (
                        <span>
                          {isActive ? chevronIconUp : chevronIconDown}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center gap-x-8">
              <div className=" relative">
                {isOpen && (
                  <input
                    type="text"
                    placeholder="search..."
                    className="border absolute left-[-185px] top-[-4px] px-3 w-[183px] py-1 font-poppins  placeholder:text-lg rounded  text-tarnary"
                  />
                )}
                <span
                  className=" p2  cursor-pointer"
                  onClick={hangleClickedSearch}
                >
                  {searchIcon}
                </span>
              </div>
              <div className="relative">
                <span className="p2">{bagIcon}</span>
                <span className="absolute right-[-8px] top-[-4px] bg-secondary w-[18px] h-[18px] rounded-full text-[12px]  flex items-center justify-center font-semibold text-quinary" >8</span>
              </div>
              <Button text={`Contact`} icon={callIcon} />
            </div>
          </nav>
        </header>
      </Container>
    </section>
  );
};

export default Navbar;
