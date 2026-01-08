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
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { GiFruitBowl } from "react-icons/gi";
import { GiClockwork } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa";
import { FaGifts } from "react-icons/fa6";



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
   heart:[
    {id:1, icon: <FaRegHeart/>},
    {id:2, icon: <FaHeart/>},
  ]
  ,
  stroyIcon :  [
    {id:1, icon:<GiFruitBowl/>},
    {id:2, icon:<GiClockwork/>},
    {id:3, icon:<FaCartArrowDown/>},
    {id:4, icon:<FaGifts/>},
  ]
};

export default allIcon;
