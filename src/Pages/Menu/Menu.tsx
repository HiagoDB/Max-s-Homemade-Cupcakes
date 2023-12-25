import MenuItem from "./MenuItem";
import items from "./items.json";

export default function Menu() {
  return (
    <main className="flex flex-col gap-3 justify-center items-center ">
      <h1 className="font-['Parisienne'] text-black font-bold text-7xl pt-6">
        Menu
      </h1>
      <span className=" font-normal text-[#E63F97] text-4xl pb-5">
        $2.75 each / $30 per dozen
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-10 gap-y-20">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </main>
  );
}
