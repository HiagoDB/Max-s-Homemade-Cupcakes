import maxPhoto from "../../assets/maxPhoto.svg";
import carolinePhoto from "../../assets/carolinePhoto.svg";

export default function Home() {
  return (
    <main>
      <section className="flex gap-10 mt-24 ml-40">
        <div>
          <img src={maxPhoto} alt="Max profile photo" />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-['Parisienne'] text-6xl font-bold">Max Black</h1>
          <span className="text-[#E63F97] text-2xl">
            Max is a talented chef who is passionate about baking. Her
            <br />
            skills are crucial for the quality and flavor of the <br />
            cupcakes. Max's sarcastic personality and unique sense of
            <br />
            humor contribute to the bakery's distinctive identity. He
            <br />
            charisma helps attract customers and creates a laid-back
            <br />
            atmosphere in Max's Homemade Cupcakes.
          </span>
        </div>
      </section>
      <section className="flex gap-10 justify-end mr-40">
        <div className="flex flex-col gap-4 items-end">
          <h1 className="font-['Parisienne'] text-6xl font-bold text-[#E63F97]">
            Caroline Channing
          </h1>
          <span className="text-2xl text-right">
            Caroline Channing is a vibrant and intelligent woman <br />
            with a cheerful demeanor. Caroline is well-versed in <br />
            business and finance, utilizing her skills to contribute to <br />
            the success of Max's Homemade Cupcakes. She is the <br />
            driving force behind the cupcake business, showcasing her <br />
            book smarts and sales talents.
          </span>
        </div>
        <div>
          <img src={carolinePhoto} alt="Caroline profile photo" />
        </div>
      </section>
      <div>
        <p className=" font-['Montserrat'] text-[#747474] font-normal flex items-center justify-center text-2xl py-9" >
        Combining Max's baking skills with Caroline's business and networking <br />
        knowledge, Max's Homemade Cupcakes was born in September 2011.
        </p>
      </div>
    </main>
  );
}
