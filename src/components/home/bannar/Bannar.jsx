import React from "react";
import Container from "../../commonComponents/Container";
import Button from "../../commonComponents/Button";
import allImages from "../../../helper/ImageProiver";

const Bannar = () => {
  const { triangleImage, inspactsleImage, cili, dish1, dish2 } = allImages;
  return (
    <section className="overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-[90px] gap-y-16 pt-[60px] lg:pt-[100px] pb-[80px] lg:pb-[210px]">

          {/* Left - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="h1 lg:w-[596px] text-primary font-inter">
              Dive into Delights Of Delectable{" "}
              <span className="text-secondary">Food</span>
            </h1>
            <p className="p1 text-tarnary font-inter pt-8 lg:pt-[59px] pb-8 lg:pb-[71px]">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate
              Craftsmanship
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-x-5 lg:gap-x-[35px]">
              <Button
                className={"drop-shadow-[2px_22px_38px_#8EFF9A]"}
                text={"Order Now"}
              />
              <button className="flex items-center gap-4 lg:gap-[25px] cursor-pointer">
                <span className="p2s text-[#4D4D4D] font-inter">
                  Watch Video
                </span>
                <span className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-quinary inline-block rounded-full drop-shadow-xl relative">
                  <img
                    src={triangleImage}
                    alt="triamgleIamge"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[16px] lg:w-[20px] blingkingAni"
                  />
                </span>
              </button>
            </div>
          </div>

          {/* Right - Image Section */}
          <div className="flex justify-center items-center">
            <div className="
              w-[300px] h-[300px]
              sm:w-[420px] sm:h-[420px]
              md:w-[520px] md:h-[520px]
              lg:w-[600px] lg:h-[600px]
              xl:w-[660px] xl:h-[660px]
              bg-secondary flex items-center rounded-full relative
            ">
              <figure className="relative -translate-y-[30px] sm:-translate-y-[40px] lg:-translate-y-[56px] -translate-x-[10px] lg:-translate-x-[20px]">
                <img
                  src={inspactsleImage}
                  alt="inspactsleImage"
                  className="
                    w-[320px] h-[360px]
                    sm:w-[460px] sm:h-[510px]
                    md:w-[560px] md:h-[620px]
                    lg:w-[660px] lg:h-[730px]
                    xl:w-[722px] xl:h-[797px]
                  "
                />
              </figure>

              {/* Cili - floating left */}
              <img
                src={cili}
                alt="cili"
                className="
                  absolute move
                  w-[60px] top-[20px] left-[-40px]
                  sm:w-[80px] sm:top-[30px] sm:left-[-70px]
                  lg:w-auto lg:top-[50px] lg:left-[-150px]
                "
              />

              {/* Dish 1 - bottom left */}
              <img
                src={dish1}
                alt="dish1"
                className="
                  absolute
                  w-[100px] bottom-[-60px] left-[-40px]
                  sm:w-[130px] sm:bottom-[-90px] sm:left-[-60px]
                  lg:w-auto lg:bottom-[-170px] lg:left-[-100px]
                "
              />

              {/* Dish 2 - bottom right */}
              <img
                src={dish2}
                alt="dish2"
                className="
                  absolute
                  w-[100px] bottom-[-60px] right-[-40px]
                  sm:w-[130px] sm:bottom-[-90px] sm:right-[-60px]
                  lg:w-auto lg:bottom-[-170px] lg:right-[-100px]
                "
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Bannar;