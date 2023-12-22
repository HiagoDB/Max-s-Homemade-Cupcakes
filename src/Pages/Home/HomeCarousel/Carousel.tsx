import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChocolatePeanut from '../../../assets/ChocolatePeanut.svg'
import Lemon from '../../../assets/Lemon.svg'
import darkchocolate from '../../../assets/darkchocolate.svg'
import RedVelvet from '../../../assets/RedVelvet.svg'
import SaltyCupcake from '../../../assets/SaltyCupcake.svg'
import BeerCupcake from '../../../assets/BeerCupcake.svg'
import Vanillacupcake from '../../../assets/Vanillacupcake.svg'
import CustomPrevArrowImage from "../../../assets/prev-arrow.svg";
import CustomNextArrowImage from "../../../assets/next-arrow.svg";


// It's not how i wanted, but it's functional

interface Data {
  flavor: string;
  img: string;
}

interface CustomArrowProps {
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  className?: string;
}

const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick, className }) => (
  <img
    onClick={onClick}
    className={` z-10 w-12 h-12 custom-prev-arrow ${className || ""} transition transform hover:scale-150`}
    src={CustomPrevArrowImage}
    alt="Previous"
  />
);

const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick, className }) => (
  <img
    onClick={onClick}
    className={`w-12 h-12 custom-next-arrow ${className || ""} transition transform hover:scale-150`}
    src={CustomNextArrowImage}
    alt="Next"
  />
);


export default function Carousel() {

  const settings: Settings = {
    dots:false,
    infinite: true,
    speed:800,
    slidesToShow:3,
    slidesToScroll:1,
    initialSlide: -1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            infinite:true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
  }

  return (

    <div className=" w-3/4 m-auto ">
      <Slider {...settings}>
        {data.map((d, key) => (

          <div key={key} className=" bg-white rounded-xl">
            <div className="rounded-t-xl  flex justify-center items-center">
              <img src={d.img} alt={d.flavor} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <a href="/menu" className="text-black text-2xl transition transform hover:scale-105">{d.flavor}</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};


const data: Data[] = [
  {
    flavor: "Chocolate Peanut Butter",
    img: ChocolatePeanut
  },
  {
    flavor: "Lemon Blueberry",
    img: Lemon
  },
  {
    flavor: "Dark Chocolate",
    img: darkchocolate
  },
  {
    flavor: "Red Velvet",
    img: RedVelvet
  },
  {
    flavor: "Salty & Spice",
    img: SaltyCupcake
  },
  {
    flavor: "Beer Batter Maple Bacon",
    img: BeerCupcake
  },
  {
    flavor: "Vanilla",
    img: Vanillacupcake
  },

]
