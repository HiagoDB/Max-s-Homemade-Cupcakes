import arrow from "../../assets/arrowPayment.svg";

export default function Cart() {
  return (
    <main className=" h-[900px] w-[1250px] m-auto my-auto rounded-[10px] p-20 flex flex-col ">
      <section className="flex gap-3 items-end">
        <h1 className=" text-8xl">Cart</h1>
        <p className=" pb-4 text-[#E63F97]">x items</p>
      </section>
      <div className="border-b-2 border-[#E63F97] ml-2"></div>
      <section className=" flex mt-4 ">
        <div className=" w-[820px]">Cards</div>
        <div className=" h-[300px] w-[350px] p-6 bg-[#FAFAF5] border-[3px] border-[#e4e4e4] rounded-3xl">
          <div className=" ">
            <p className=" text-xl text-black pb-8">Order summary</p>
          </div>
          <div>
            <div className="flex justify-between">
              <div className="text-black text-base flex flex-col gap-4">
                <p>Subtotal</p>
                <p>Shipping</p>
                <p>Tax</p>
                <p>Total</p>
              </div>
              <div className="text-[#E63F97] text-base flex flex-col gap-4 items-end">
                <p>$5.50</p>
                <p>$5.50</p>
                <p>$5.50</p>
                <p>$5.50</p>
              </div>
            </div>
            <div className="flex cursor-pointer w-[100%] h-11 py-2 mt-2 pl-5 bg-[#E63F97] text-white rounded-md items-center gap-14 transition transform hover:scale-105">
              <p className="text-[#FFFFFF]">Continue to payment</p>
              <img className="h-[16px] w-[20px]" src={arrow} alt="Arrow" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
