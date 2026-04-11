import React from "react";
import Container from "../../commonComponents/Container";
import Button from "../../commonComponents/Button";
import StoryCard from "../../commonComponents/StoryCard";
import { storCardArray } from "../../../helper/ProjectArrObj";

const Story = () => {
  return (
    <section className="overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-[96px] py-[100px] md:py-[160px] lg:py-[260px]">

          {/* Left - Text */}
          <div className="text-center lg:text-left">
            <p className="font-inter p6 text-quaternary">
              Our Story & Services
            </p>
            <h2 className="py-8 lg:py-[52px] h2 font-inter text-primary">
              Our Culinary Journey And Services
            </h2>
            <p className="p1 text-tarnary2 font-inter lg:w-[502px]">
              Rooted in passion, we curate unforgettable dining experiences and
              offer exceptional services, blending culinary artistry with warm
              hospitality.
            </p>
            <Button
              text={"Explore"}
              className={"mt-8 lg:mt-[52px]"}
            />
          </div>

          {/* Right - Story Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-9">
            {storCardArray.map((items) => {
              return (
                <StoryCard
                  icons={items.icon}
                  key={items.id}
                  title={items.title}
                  description={items.description}
                />
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Story;