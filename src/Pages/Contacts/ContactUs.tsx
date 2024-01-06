import MapComponent from "./Map";
import contactImg from "../../assets/contactusimg.svg";

export default function Home() {
  const contactContainerStyle = {
    backgroundImage: `url(${contactImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "550px",
  };
  const textShadow = {
    textShadow: "-4px 1px 1px #FFFFFF",
  };

  return (
    <main className="flex flex-col">
      <section >
        <div className="flex items-center justify-center flex-col h-full" style={contactContainerStyle}>
          <h1
            className="font-['Parisienne'] text-9xl text-[#E63F97] font-bold"
            style={textShadow}
          >
            Come visit us at our store!
          </h1>
        </div>
        <div className="flex items-center w-full h-[540px]">
          <div className=" w-1/2 flex flex-col justify-center items-start pl-20 text-3xl">
            <p><span className="text-[#E63F97]">Contact us -</span> <span className="text-black">max.cupcakes@gmail.com</span></p>
            <p><span className="text-[#E63F97]">Phone:</span> <span className="text-black">718-CUPCAKE (718-287-2253)</span></p>
            <p><span className="text-[#E63F97]">Fax:</span> <span className="text-black">718-287-2250</span></p>
          </div>
          <div>
            <MapComponent />
          </div>
        </div>
      </section>
      <section>
        <p className="flex items-center justify-center text-3xl pb-3">
          Mailing Address: 140 North 11th Street, Brooklyn, NY. 11249-1174
        </p>
      </section>
    </main>
  );
}
