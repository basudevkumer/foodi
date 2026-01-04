import NavbarImage from "../assets/images/navicon.png";
import TriangleImage from "../assets/images/triangle.png";
import inspactleImage from "../assets/images/intersect.png";
import Hot from "../assets/images/hotCili.png";
import Dish1 from "../assets/images/dish1.png";
import Dish2 from "../assets/images/dish2.png";
import CategoryImage1 from "../assets/images/categoryImage1.png";
import CategoryImage2 from "../assets/images/categoryImage2.png";
import CategoryImage3 from "../assets/images/categoryImage3.png";
import CategoryImage4 from "../assets/images/categoryImage4.png";
import SpecialDImg1 from "../assets/images/special1.png";
import SpecialDImg2 from "../assets/images/special2.png";
import SpecialDImg3 from "../assets/images/special3.png";

const allImages = {
  navImage: NavbarImage,
  triangleImage: TriangleImage,
  inspactsleImage: inspactleImage,
  cili: Hot,
  dish1: Dish1,
  dish2: Dish2,
  categoryImages: [
    { id: 1, images: CategoryImage1 },
    { id: 2, images: CategoryImage2 },
    { id: 3, images: CategoryImage3 },
    { id: 4, images: CategoryImage4 },
  ],
  specialDimage: [
    { id: 1, images: SpecialDImg1 },
    { id: 2, images: SpecialDImg2 },
    { id: 3, images: SpecialDImg3 },
  ],
};

export default allImages;
