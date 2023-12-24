import MenuItem from "./MenuItem";
import vanilla from "../../assets/Vanilla.svg";
import chocolate from "../../assets/chocolate.svg";
import redvelvet from "../../assets/redvelve.svg";
import salty from "../../assets/salty.svg";
import beer from "../../assets/beer.svg";
import blueb from "../../assets/blueb.svg";
import coconut from "../../assets/coconut.svg";
import earl from "../../assets/earl.svg";
import peanut from "../../assets/peanut.svg";
import pumpkin from "../../assets/pumpkin.svg";
import veryv from "../../assets/veryv.svg";
import espresso from "../../assets/espresso.svg";

export default function Menu() {
  const items = [
    {
      name: "Vanilla",
      description: "Moist vanilla cupcake with light vanilla frosting",
      image: vanilla,
    },
    {
      name: "Chocolate",
      description: "Rich chocolate taste with chocolate buttercream icing. Chocolate sprinkles optional.",
      image: chocolate,
    },
    {
      name: "Red Velvet",
      description: "Moist red cocoa cupcake with cream cheese frosting.",
      image: redvelvet,
    },
    {
      name: "Salty & Spice",
      description: "Cinnamon spice cake flavor covered with cream cheese frosting and a hint of caramel sauce.",
      image: salty,
    },
    {
      name: "Beer Batter Maple Bacon",
      description: "Chocolate beer batter flavor with cream cheese frosting and crunchy-sweet bacon bits.",
      image: beer,
    },
    {
      name: "Blueberry Lemonzest",
      description: "Light and fluffy blueberry cupcake with lemon cream cheese frosting. Topped with a fresh blueberry.",
      image: blueb,
    },
    {
      name: "Cocconut Coffee",
      description: "Light and fluffy coconut cupcake with espresso buttercream. Topped with coconut shavings.",
      image: coconut,
    },
    {
      name: "The Earl",
      description: "Decadent dark chocolate cupcake covered in a rich chocolate frosting. Topped with dark chocolate chips.",
      image: earl,
    },
    {
      name: "Chocolate Peanut Butter ",
      description: "Dark chocolate cupcake, peanut butter buttercream frosting with chocolate syrup and chopped peanuts. ",
      image: peanut,
    },
    {
      name: "Pumpkin Spice",
      description: "Pumpkin flavored cupcake with hints of nutmeg and cinnamon. Topped with cream cheese frosting",
      image: pumpkin,
    },
    {
      name: "Very Very Vanilla",
      description: "Light and fluffy vanilla cupcake with rich vanilla buttercream frosting",
      image: veryv,
    },
    {
      name: "Chocolate Espresso",
      description: "Moist chocolate cupcake topped with espresso buttercream.",
      image: espresso,
    },
  ];

  return (
    <main className="flex flex-col gap-3 justify-center items-center ">
      <h1 className="font-['Parisienne'] text-black font-bold text-7xl pt-6">
        Menu
      </h1>
      <span className=" font-normal text-[#E63F97] text-4xl pb-5">
        $2.75 each / $30 per dozen
      </span>
      <div className="grid grid-cols-4 gap-8 pb-10 gap-y-20">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </main>
  );
}
