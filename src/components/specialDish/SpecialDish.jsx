import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";

import Container from "../commonComponents/Container";
import allIcon from "../../helper/IocnProvider";
import { specialItems } from "../../helper/ProjectArrObj";

const SpecialDish = () => {
  const { star, chevronIconRight, chevronIconLeft, heart } = allIcon;
  const [light, setLight] = useState(null);

  const handleClicked = (id) => {
    setLight((prev) => (prev === id ? null : id));
  };

  return (
    <section className="pb-[120px] lg:pb-[221px]">
      <Container>
        <div>
          <p className="text-quaternary font-inter p6">Special Dishes</p>
          <h2 className="h2 pt-6 lg:pt-10 lg:w-[580px]">
            Standout Dishes From Our Menu
          </h2>

          <div className="relative">
            <Swiper
              freeMode={true}
              modules={[FreeMode, Navigation]}
              loop={true}
              className="mySwiper !py-12 !px-3 lg:!px-5"
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 20 },
                640: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 50 },
              }}
            >
              {specialItems.map((items) => {
                const isActive = light === items.id;
                return (
                  <SwiperSlide key={items.id}>
                    <div className="rounded-[25px] py-6 px-6 md:py-[38px] md:px-[46px] shadow-xl cursor-pointer ease-in-out relative overflow-hidden">
                      {/* Heart Button */}
                      <div
                        className="absolute top-0 right-0 w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-secondary rounded-bl-full"
                        onClick={() => handleClicked(items.id)}
                      >
                        <span className="absolute top-1/2 left-[38%] -translate-y-1/2 text-lg md:text-xl text-quinary">
                          {isActive ? heart[1].icon : heart[0].icon}
                        </span>
                      </div>

                      {/* Image */}
                      <figure className="pb-4 md:pb-6 flex justify-center">
                        <img
                          src={items.imageUrl}
                          className="h-[200px] w-[200px] md:h-[276px] md:w-[276px] object-cover"
                          alt={items.imageUrl}
                        />
                      </figure>

                      {/* Title */}
                      <h6 className="h6 font-inter text-primary">
                        {items.name}
                      </h6>

                      {/* Description */}
                      <p className="p3 text-tarnary2 font-inter pt-3 pb-5 md:pt-4 md:pb-7">
                        {items.description}
                      </p>

                      {/* Price & Rating */}
                      <div className="flex justify-between items-center">
                        <p className="h6 text-primary font-inter">
                          <span className="text-quaternary !text-[20px]">$</span>
                          {items.price}
                        </p>
                        <p className="p2s font-inter text-tarnary flex gap-x-2 items-center">
                          <span className="text-[#FFE605]">{star}</span>
                          {items.rating}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Next Button */}
            <button className="cursor-pointer swiper-button-next !w-[35px] !h-[35px] md:!w-[50px] md:!h-[50px] rounded-full bg-[#EFEFEF] group hover:bg-secondary transition duration-300 ease-in-out !absolute !top-[-40px] sm:!top-[-15px] !right-[-50px] md:!top-[-20px] sm:!right-0 -translate-x-[100%]">
              <span className="text-base md:text-2xl text-tarnary2 group-hover:text-quinary transition duration-300 ease-in-out">
                {chevronIconRight}
              </span>
            </button>

            {/* Prev Button */}
            <button className="cursor-pointer swiper-button-prev !w-[35px] !h-[35px] md:!w-[50px] md:!h-[50px] rounded-full bg-[#EFEFEF] group hover:bg-secondary transition duration-300 ease-in-out !absolute !top-[-40px] sm:!top-[-15px] md:!top-[-20px]  !left-[75%] lg:!left-[80%] ">
              <span className=" text-base md:text-2xl text-tarnary2 group-hover:text-quinary transition duration-300 ease-in-out">
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