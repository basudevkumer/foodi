import React from "react";
import Container from "./Container";
import allIcon from "../../helper/IocnProvider";
import { menuCategories } from "../../helper/ProjectArrObj";

const Category = () => {
  return (
    <section className="pb-[100px] lg:pb-[208px]">
      <Container>
        <p className="p6 font-inter text-quaternary text-center">
          Customer Favorites
        </p>
        <h2 className="text-primary h2 font-inter text-center pt-4 pb-10 lg:pb-[78px]">
          Popular Catagories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-x-[38px]">
          {menuCategories.map((items, index) => {
            return (
              <div
                className="py-6 px-6 md:px-10 lg:px-[75px] shadow-2xl relative hover:-translate-y-4 cursor-pointer transition duration-300 ease-in-out rounded-[20px]"
                key={index}
              >
                <figure>
                  <img
                    src={items.imageUrl}
                    alt={items.imageUrl}
                    className="w-full"
                  />
                </figure>
                <h1 className="pt-3 pb-2 h6 font-inter text-primary">
                  {items.title}
                </h1>
                <p className="text-tarnary2 p3 font-inter">{items.subtitle}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Category;