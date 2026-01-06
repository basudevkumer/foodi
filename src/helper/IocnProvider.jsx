import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

import { IoBagOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";


const allIcon = {
  chevronIconRight: <FaChevronRight />,
  chevronIconLeft: <FaChevronLeft />,
  chevronIconDown: <FaChevronDown />,
  chevronIconUp: <FaChevronUp />,
  searchIcon: <IoSearchOutline />,
  bagIcon: <IoBagOutline />,
  callIcon: <FiPhoneCall />,
  footerIcon: [
    { id: 1, icon: <FiFacebook /> },
    { id: 2, icon: <FaInstagram /> },
    { id: 3, icon: <TfiTwitter /> },
    { id: 4, icon: <AiOutlineYoutube /> },
  ],
  star: <FaStar />,
  
};

export default allIcon;
