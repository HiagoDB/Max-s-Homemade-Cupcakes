import { useState } from "react";

interface MenuItemProps {
  name: string;
  description: string;
  image: string;
}

export default function MenuItem({ name, description, image }: MenuItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const containerClass = `h-[26rem] w-72 bg-[#FAFAF5] border-2 border-[#E6E6E6] rounded-[10px] shadow-slate-300 shadow-md relative  transition-transform transform  ${
    isHovered ? "hover:filter brightness-[60%]" : ""
  }`;
  const imageClass = `mb-2 rounded-t-[10px]`;
  const plusSignClass = `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[10em] font-['Varela Round'] opacity-0 transition-opacity duration-500 ease-in-out ${
    isHovered ? "opacity-100" : "opacity-0"
  }`;

  return (
    <div
      className={containerClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt={name} className={imageClass} />
      <div className="pl-6 pt-1">
        <span className="text-xl text-black">{name}</span>
        <p className="font-['Inter'] text-[#6D6D6D] font-normal text-[17px]">
          {description}
        </p>
        <div className={plusSignClass}>+</div>
      </div>
    </div>
  );
}
