import React from "react";
import Container from "../../commonComponents/Container";
import allImages from "../../../helper/ImageProiver";
import allIcon from "../../../helper/IocnProvider";
const Testimonial = () => {
  const { chefImg, tesmonialAnimtImg, clinettesmonial } = allImages;
  const { star } = allIcon;

  return (
    <section>
      <Container>
        <div className="grid grid-cols-2 gap-x-[120px] items-center">
          <div className=" relative">
            <div className=" bg-secondary absolute bottom-0 left-3   w-full h-[400px] -z-10  rounded-t-[50%]"></div>
            <img
              src={tesmonialAnimtImg[0].images}
              alt="bestChef"
              className="absolute left-0 top-[73%] move2"
            />
            <img
              src={tesmonialAnimtImg[1].images}
              alt="bestChef"
              className="absolute -right-6 top-[73%] move3"
            />
            <img
              src={tesmonialAnimtImg[2].images}
              alt="bestChef"
              className="absolute bottom-[-11%] right-[-95px] move4"
            />

            <figure className="z-20">
              <img
                src={chefImg}
                alt={"ChefImage"}
                className="w-full max-h-[880px] object-cover "
              />
            </figure>
          </div>
          <div className="">
            <p className="text-quaternary p6">Testimonials</p>
            <h2 className=" h2 pt-[53px] pb-[29px] text-primary ">
              What Our Customers Say About Us
            </h2>
            <p className="p1 text-tarnary2 ">
              “I had the pleasure of dining at Foodi last night, and I'm still
              raving about the experience! The attention to detail in
              presentation and service was impeccable”
            </p>
            <div className="grid grid-cols-2 gap-x-[44px] pt-[67px] ">
              <figure className="relative  w-full h-6  ">
                {clinettesmonial.map((items, index) => {
                  return (
                    <img
                      src={items.images}
                      alt=""
                      className={`${items.className}`}
                      key={index}
                    />
                  );
                })}
              </figure>
              <div className=" ">
                <p className="p2s text-primary">Customer Feedback </p>
                <div className="flex justify-between">
                  <p className="p2 text-tarnary flex items-center gap-x-2">
                    <span className="text-[#FFE605]">{star}</span>
                    4.6
                  </p>
                  <p className="p2  text-tarnary2">(18.6k Reviews)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
