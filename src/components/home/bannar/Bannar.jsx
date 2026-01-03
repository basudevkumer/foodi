import React from "react";
import Container from "../../commonComponents/Container";
import Button from "../../commonComponents/Button";
import allImages from "../../../helper/ImageProiver";

const Bannar = () => {
  const { triangleImage, inspactsleImage, cili, dish1, dish2 } = allImages;
  return (
    <section>
      <Container>
        <div className="grid grid-cols-2 items-center gap-x-[90px] pt-[100px] pb-[210px]">
          <div>
            <h1 className="h1 lg:w-[596px] text-primary font-inter">
              {" "}
              Dive into Delights Of Delectable{" "}
              <span className="text-secondary">Food</span>
            </h1>
            <p className="p1 text-tarnary font-inter pt-[59px] pb-[71px]">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate
              Craftsmanship
            </p>

            <div className="flex  gap-x-[35px]">
              <Button
                className={"drop-shadow-[2px_22px_38px_#8EFF9A]"}
                text={"Order Now"}
              />
              <button className="flex items-center gap-[25px]  cursor-pointer">
                <span className="p2s text-[#4D4D4D] font-inter ">
                  Watch Video
                </span>
                <span className=" w-[50px] h-[50px] bg-quinary inline-block rounded-full drop-shadow-xl relative">
                  <img
                    src={triangleImage}
                    alt="triamgleIamge"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] blingkingAni"
                  />
                </span>
              </button>
            </div>
          </div>
          <div>
            <div className="w-[660px] h-[660px] bg-secondary flex items-center rounded-full relative">
              <figure className="relative -translate-y-[56px] -translate-x-[20px]">
                <img
                  src={inspactsleImage}
                  alt="inspactsleImage"
                  className="w-[722px] h-[797px]"
                />
              </figure>

             
                <img src={cili} alt="cili"  className="absolute top-[50px] left-[-150px]" />
                <img src={dish1} alt="dish1"  className="absolute bottom-[-170px] left-[-100px]"/>
                <img src={dish2} alt="dish2" className="absolute bottom-[-170px] right-[-100px]" />
          
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Bannar;
