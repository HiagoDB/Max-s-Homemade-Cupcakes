import Logo from "../../../assets/logo.svg";
import Cart from "../../../assets/cart.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header w-full flex flex-col sm:flex-row h-16 bg-primary place-content-around pt-1">
      <div>
        <Link to="/">
          <img src={Logo} alt="Max's Homemade Cupcakes logo" className="logo z-10 relative transition md:w-[80px] sm:w-[60px] transform hover:scale-105"/>
        </Link>
      </div>
      <nav className="navItems flex items-center gap-6 ">
        <ul className="listContainer flex gap-10 sm:gap-4 md:gap-6 lg:gap-20 lg:text-lg md:text-base sm:text-sm">
          <li className="text-white transition transform hover:scale-105">
            <Link to="/">Home</Link>
          </li>
          <li className="transition transform hover:scale-105">
            <Link to="/AboutUs">About us</Link>
          </li>
          <li className="text-white transition transform hover:scale-105">
            <Link to="/Menu">Menu</Link>
          </li>
          <li className="transition transform hover:scale-105">
            <Link to="/Contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
      <div className="cartContainer flex items-center gap-3 mt-3 sm:mt-0">
        <Link to="/Menu"><button className="bg-black text-white lg:text-lg md:text-base sm:text-sm py-2 lg:px-8 md:px-6 sm:px-3 rounded-md transition transform hover:scale-105">ORDER NOW</button> </Link>
        <Link to="/Cart"><img className="cart w-45 h-45 sm:w-[30px] sm:h-[30px] cursor-pointer transition transform hover:scale-105" src={Cart} alt="shopping cart" /> </Link>
      </div>
    </header>
  );
}
