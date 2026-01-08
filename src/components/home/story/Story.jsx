import React from "react";
import Container from "../../commonComponents/Container";
import Button from "../../commonComponents/Button";
import StoryCard from "../../commonComponents/StoryCard";
import { storCardArray } from "../../../helper/ProjectArrObj";

const Story = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-2  gap-x-[96px] py-[260px]">
          <div className="">
            <p className="font-inter  p6 text-quaternary">
              Our Story & Services
            </p>
            <h2 className="py-[52px] h2  font-inter text-primary">
              Our Culinary Journey And Services
            </h2>
            <p className=" text-tarnary2 font-inter font-inter lg:w-[502px]">
              Rooted in passion, we curate unforgettable dining experiences and
              offer exceptional services, blending culinary artistry with warm
              hospitality.
            </p>
            <Button text={"Explore"} className={"mt-[52px]"} />
          </div>
          <div className="grid grid-cols-2 gap-9">
            {storCardArray.map((items) => {
              return <StoryCard icons={items.icon} key={items.id} title={items.title} description={items.description} />;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Story;
