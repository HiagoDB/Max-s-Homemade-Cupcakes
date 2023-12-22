import HomeImage from "../../assets/homeImage.svg";
import Carousel from "./HomeCarousel/Carousel";

export default function Home() {
  const homeContainerStyle = {
    backgroundImage: `url(${HomeImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  return (
    <main>
      <section className="homeContainer flex" style={homeContainerStyle}>
        <div>
          <h1 className="homeHI text-white text-8xl pt-[0.78em] pl-[1.1em] leading-[120px]">
            We all know
            <br />
            you want a bite!
          </h1>
        </div>
        <div className="homeTexts text-white flex flex-col items-center self-end pb-[7em] pl-[8em]">
          <span className="text-[30px] pb-[5px]">Stop wishing. make it happen!</span>
          <button className="homeBtn w-[9.3em] h-[1.8em] bg-[#E63F97] text-white text-[2em] rounded-[10px] transition transform hover:scale-105 cursor-pointer" >ORDER NOW</button>
          <p className="text-[15px] text-[#E589BA] underline cursor-pointer hover:text-opacity-[90%]">
            or make your budget!
          </p>
        </div>
      </section>

      <section className="h-[300px] w-full  mt-[30px] mb-[30px] bg-[#E63F97]">
        <div>
          <h1 className="text-[70px] text-center">
            Max's
            <br />
            Homemade
            <br />
            Cupcakes
          </h1>
        </div>
      </section>

      <section className="carousel-container my-8">
        <Carousel />
      </section>
    </main>
  );
}
