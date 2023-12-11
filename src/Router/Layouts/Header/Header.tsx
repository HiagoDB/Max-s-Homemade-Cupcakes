import Logo from "../../../assets/logo.svg";
import Cart from "../../../assets/cart.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header w-screen flex h-16 bg-primary place-content-around pt-1 ">
      <div>
        <img src={Logo} alt="Max's Homemade Cupcakes logo" className="logo "/>
      </div>
      <nav className="navItems flex items-center ">
        <ul className="listContainer flex gap-20 text-lg ">
          <li className="text-white ">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AboutUs">About us</Link>
          </li>
          <li className="text-white">
            <Link to="/Menu">Menu</Link>
          </li>
          <li>
            <Link to="/Contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
      <div className="cartContainer flex items-center gap-6">
      <button className="btn bg-black text-white text-xl not-italic font-normal py-2 px-6 rounded-md">ORDER NOW</button>

        <img className="cart w-45 h-45" src={Cart} alt="shopping cart" />
      </div>

    </header>
  );
}
