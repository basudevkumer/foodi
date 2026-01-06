import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";

import Container from "../commonComponents/Container";
import allIcon from "../../helper/IocnProvider";
import { specialItems } from "../../helper/ProjectArrObj";

const SpecialDish = () => {
  const { star, chevronIconRight, chevronIconLeft } = allIcon;

  return (
    <section className="pb-[221px]">
      <Container>
        <div>
          <p className="text-quaternary font-inter p6">Special Dishes</p>
          <h2 className="h2 lg:w-[580px] pt-10 ">
            Standout Dishes From Our Menu
          </h2>
          <div className="relative">
            <Swiper
              freeMode={true}
              modules={[FreeMode, Navigation]}
              slidesPerView={3}
              spaceBetween={50}
              loop={true}
              className="mySwiper !py-12 !px-5"
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              {specialItems.map((items, index) => {
                return (
                  <SwiperSlide>
                    <div className=" rounded-[20px] py-[38px] px-[46px] shadow-xl cursor-pointer easy-in-out ">
                      <figure className="pb-6">
                        <img
                          src={items.imageUrl}
                          className="h-[276px] w-[276px] object-cover"
                          alt={items.imageUrl}
                        />
                      </figure>
                      <h6 className="h6  font-inter text-primary">
                        {items.name}
                      </h6>
                      <p className="p3 text-tarnary2 font-inter pt-4 pb-7">
                        {items.description}
                      </p>
                      <div className="flex justify-between">
                        <p className="h6 text-primary  font-inter">
                          <span className="text-quaternary !text-[20px]">
                            $
                          </span>
                          {items.price}
                        </p>
                        <p className="p2s font-inter text-tarnary   flex gap-x-2 items-center">
                          <span className="text-[#FFE605]">{star}</span>
                          {items.rating}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <button className="  coursor-pointer swiper-button-next !w-[50px] !h-[50px] rounded-full bg-[#EFEFEF]    group hover:bg-secondary transition duration-300 easy-in-out  !absolute !top-[-50px] !right-0 -translate-x-[100%]">
              <span className="text-2xl text-tarnary2 group-hover:text-quinary transition duration-300 easy-in-out">
                {" "}
                {chevronIconRight}
              </span>
            </button>
            <button className="coursor-pointer swiper-button-prev !w-[50px] !h-[50px] rounded-full bg-[#EFEFEF]    group hover:bg-secondary transition duration-300 easy-in-out  !absolute !top-[-50px] !left-[89%] !translate-x-[-100%]">
              <span className="text-2xl text-tarnary2 group-hover:text-quinary transition duration-300 easy-in-out">
                {" "}
                {chevronIconLeft}
              </span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SpecialDish;
