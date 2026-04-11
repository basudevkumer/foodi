import React from "react";
import Container from "../../commonComponents/Container";
import allImages from "../../../helper/ImageProiver";
import allIcon from "../../../helper/IocnProvider";

const Testimonial = () => {
  const { chefImg, tesmonialAnimtImg, clinettesmonial } = allImages;
  const { star } = allIcon;

  return (
    <section className="overflow-hidden py-10 lg:py-0 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-x-[120px] items-center">

          {/* Left - Chef Image */}
          <div className="relative flex justify-center">
            {/* Green background blob */}
            <div className="bg-secondary absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-3 lg:translate-x-0 w-[80%] lg:w-full h-[300px] md:h-[380px] lg:h-[400px] -z-10 rounded-t-[50%]"></div>

            {/* Floating images */}
            <img
              src={tesmonialAnimtImg[0].images}
              alt="anim1"
              className="absolute left-0 top-[73%] move2 w-[60px] md:w-[80px] lg:w-auto"
            />
            <img
              src={tesmonialAnimtImg[1].images}
              alt="anim2"
              className="absolute right-0 lg:-right-6 top-[73%] move3 w-[60px] md:w-[80px] lg:w-auto"
            />
            <img
              src={tesmonialAnimtImg[2].images}
              alt="anim3"
              className="absolute bottom-[-8%] right-0 lg:bottom-[-11%] lg:right-[-95px] move4 w-[80px] md:w-[110px] lg:w-auto"
            />

            {/* Chef image */}
            <figure className="z-20 w-[75%] sm:w-[60%] lg:w-full">
              <img
                src={chefImg}
                alt="ChefImage"
                className="w-full max-h-[500px] md:max-h-[700px] lg:max-h-[880px] object-cover"
              />
            </figure>
          </div>

          {/* Right - Text Content */}
          <div className="text-center lg:text-lef t">
            <p className="text-quaternary p6">Testimonials</p>
            <h2 className="h2 pt-6 lg:pt-[53px] pb-4 lg:pb-[29px] text-primary">
              What Our Customers Say About Us
            </h2>
            <p className="p1 text-tarnary2">
              "I had the pleasure of dining at Foodi last night, and I'm still
              raving about the experience! The attention to detail in
              presentation and service was impeccable"
            </p>

            {/* Bottom - Clients + Rating */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-y-0 sm:gap-x-[44px] pt-8 sm:pt-10 lg:pt-[67px]">
              {/* Client avatars */}
              <figure className="relative w-full h-10 flex justify-center lg:justify-start">
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

              {/* Rating */}
              <div className="text-center sm:text-left mt-10 lg:mt-0">
                <p className="p2s text-primary">Customer Feedback</p>
                <div className="flex justify-center sm:justify-between items-center gap-x-4 sm:gap-x-0 pt-1">
                  <p className="p2 text-tarnary flex items-center gap-x-2">
                    <span className="text-[#FFE605]">{star}</span>
                    4.6
                  </p>
                  <p className="p2 text-tarnary2">(18.6k Reviews)</p>
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