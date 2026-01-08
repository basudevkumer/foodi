import React from "react";

const StoryCard = ({ icons, title, description }) => {
  return (
    <div className="!shadow-2xl flex flex-col items-center py-[45px] hover:translate-y-[-15px] translate duration-300 ease-in-out">
      <div className="text-[50px] text-secondary">{icons}</div>
      <h6 className="text-secondary pt-8 pb-[17px] p2b font-inter">{title}</h6>
      <p className="text-[#90BD95] p4 font-inter text-center  ">{description}</p>
    </div>
  );
};

export default StoryCard;
