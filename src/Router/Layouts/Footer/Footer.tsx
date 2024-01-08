import instagram from "../../../assets/instagram.svg";
import facebook from "../../../assets/facebook.svg";
import twitter from "../../../assets/twitter.svg";
import footerLogo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footerContainer w-full h-[300px] flex bg-footerColor justify-around pb-[40px] pt-[10px] items-center ">
      <div className="footerNav lg:text-2xl md:text-xl sm:text-lg text-[#454545] pt-[20px]">
        <ul className="linksList flex flex-col gap-[16px] ">
          <li className="transition transform hover:scale-105">
            <Link to="/aboutUs">About us</Link>
          </li>
          <li className="transition transform hover:scale-105">
            <Link to="/Menu">Menu</Link>
          </li>
          <li className="transition transform hover:scale-105">
            <Link to="/Contacts">FAQ</Link>
          </li>
          <li className="transition transform hover:scale-105">
            <Link to="/Contacts">Contact</Link>
          </li>
          <li className="transition transform hover:scale-105">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>

      <div className="logoContainer flex gap-[104px] pl-20">
        <ul className="logoList flex flex-col gap-[29px] pt-[34px]">
          <li>
            <img
              className="w-[45px] h-[45px] transition transform hover:scale-105 cursor-pointer"
              src={instagram}
              alt="instagram logo"
            />
          </li>
          <li>
            <img
              className="w-[45px] h-[45px] transition transform hover:scale-105 cursor-pointer"
              src={facebook}
              alt="facebook logo"
            />
          </li>
          <li>
            <img
              className="w-[45px] h-[45px] transition transform hover:scale-105 cursor-pointer"
              src={twitter}
              alt="twitter logo"
            />
          </li>
        </ul>
        <Link to="/">
          <img
            className="w-[180px] h-[260px] transition transform hover:scale-105"
            src={footerLogo}
            alt="Max's Homemade Cupcakes logo"
          />
        </Link>
      </div>

      <div className="newsletterContainer flex flex-col gap-[10px]">
        <h1 className="lg:text-[40px] md:text-[30px] sm:text-[20px]">Join out Newsletter!</h1>
        <p className="lg:text-[15px] md:text-[13px] sm:text-[11px] text-[#E63F97] pb-[8px]">
          Receive special flavor announcements, news,
          <br /> and other cool stuff.
        </p>
        <div className="inputContainer">
          <form className="inputContainer">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className=" text-[22px] py-[14px] px-[14px] rounded-lg w-[21.5rem] text-[#747474] focus:outline-none"
            />
            <button
              type="submit"
              className=" text-[20px] py-[16px] px-[7px] bg-[#E63F97] hover:bg-opacity-75 transition duration-300 ease-in-out rounded-lg w-28 text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
