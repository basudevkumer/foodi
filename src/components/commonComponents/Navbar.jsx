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
  const [menuOpen, setMenuOpen] = useState(false);
  const { navImage } = allImages;

  const navarr = navbarArr;
  const { chevronIconDown, chevronIconUp, searchIcon, bagIcon, callIcon, menuIcon, closeIcon } =
    allIcon;

  const handleClicked = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const hangleClickedSearch = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="py-5 md:py-9">
      <Container>
        <header>
          <nav className="flex justify-between items-center">
            {/* Logo */}
            <figure className="w-[120px] md:w-auto">
              <img src={navImage} alt="navimage" className="w-full" />
            </figure>

            {/* Desktop Nav Links */}
            <ul className="hidden  lg:flex gap-x-[40px] xl:gap-x-[60px]">
              {navarr.map((items) => {
                const isActive = items.id === activeId;
                return (
                  <li key={items.id}>
                    <Link
                      to={""}
                      className="text-primary p4 hover:text-secondary font-poppins transition duration-300 ease-in-out flex items-center gap-x-3"
                      onClick={() => handleClicked(items.id)}
                    >
                      {items.name}
                      {items.icon && (
                        <span>{isActive ? chevronIconUp : chevronIconDown}</span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop Right Icons */}
            <div className="hidden lg:flex items-center gap-x-8">
              <div className="relative">
                {isOpen && (
                  <input
                    type="text"
                    placeholder="search..."
                    className="border absolute left-[-185px] top-[-4px] px-3 w-[183px] py-1 font-poppins placeholder:text-lg rounded text-tarnary"
                  />
                )}
                <span className="p2 cursor-pointer" onClick={hangleClickedSearch}>
                  {searchIcon}
                </span>
              </div>
              <div className="relative">
                <span className="p2">{bagIcon}</span>
                <span className="absolute right-[-8px] top-[-4px] bg-secondary w-[18px] h-[18px] rounded-full text-[12px] flex items-center justify-center font-semibold text-quinary">
                  8
                </span>
              </div>
              <Button text={`Contact`} icon={callIcon} />
            </div>

            {/* Mobile Right Side: bag + hamburger */}
            <div className="flex lg:hidden items-center gap-x-5">
              {/* Search */}
              <div className="relative flex items-center">
                {isOpen && (
                  <input
                    type="text"
                    placeholder="search..."
                    className="border absolute right-8 top-[-4px] px-3 w-[160px] py-1 font-poppins placeholder:text-sm rounded text-tarnary"
                  />
                )}
                <span className="text-[20px] cursor-pointer" onClick={hangleClickedSearch}>
                  {searchIcon}
                </span>
              </div>
              {/* Bag */}
              <div className="relative">
                <span className="text-[20px]">{bagIcon}</span>
                <span className="absolute right-[-8px] top-[-4px] bg-secondary w-[16px] h-[16px] rounded-full text-[10px] flex items-center justify-center font-semibold text-quinary">
                  8
                </span>
              </div>
              {/* Hamburger */}
              <button
                className="text-[24px] text-primary cursor-pointer focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {menuOpen ? closeIcon : menuIcon}
              </button>
            </div>
          </nav>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-secondary2">
              <ul className="flex flex-col items-center gap-y-3 pt-4">
                {navarr.map((items) => {
                  const isActive = items.id === activeId;
                  return (
                    <li key={items.id}>
                      <Link
                        to={""}
                        className="text-primary p4 hover:text-secondary font-poppins transition duration-300 ease-in-out flex items-center gap-x-3 py-2"
                        onClick={() => {
                          handleClicked(items.id);
                        }}
                      >
                        {items.name}
                        {items.icon && (
                          <span>{isActive ? chevronIconUp : chevronIconDown}</span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              {/* Mobile Contact Button */}
              <div className="mt-5 flex justify-center">
                <Button text={`Contact`} icon={callIcon} />
              </div>
            </div>
          )}
        </header>
      </Container>
    </section>
  );
};

export default Navbar;