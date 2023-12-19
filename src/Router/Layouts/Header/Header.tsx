import Logo from "../../../assets/logo.svg";
import Cart from "../../../assets/cart.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (

    <header className="header w-full flex h-16 bg-primary place-content-around pt-1">
      <div>
        <Link to="/"><img src={Logo} alt="Max's Homemade Cupcakes logo" className="logo z-10 relative transition transform hover:scale-105"/></Link>
      </div>
      <nav className="navItems flex items-center ">
        <ul className="listContainer flex gap-20 text-lg ">
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
      <div className="cartContainer flex items-center gap-6">
      <button className="btn bg-black text-white text-xl not-italic font-normal py-2 px-6 rounded-md transition transform hover:scale-105">ORDER NOW</button>

      <img className="cart w-45 h-45 cursor-pointer transition transform hover:scale-105" src={Cart} alt="shopping cart" />
      </div>


    </header>
  );
}
