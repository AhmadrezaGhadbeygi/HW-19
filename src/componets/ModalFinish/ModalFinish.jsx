import { AiOutlineCheckCircle } from "react-icons/ai";
function ModalFinish() {
  return (
    <div className="flex justify-between w-full  ">
      <div className="w-1/2 bg-[rgb(217,217,217)] flex flex-col gap-3 items-center py-8 rounded-l-3xl">
        <img src="image/logo.png" alt="" className="w-28" />

        <AiOutlineCheckCircle className="text-8xl text-green-600"></AiOutlineCheckCircle>
        <p className="font-bold text-lg">Payment Confirmed</p>
        <p className="text-green-600 ">ORDER #2039</p>
        <div className="border border-gray-400 rounded-md flex flex-col items-center gap-3 px-4 w-[65%] py-5 ">
          <label
            htmlFor="email"
            className=" w-full flex items-center justify-center "
          >
            <span className="text-gray-600">Contact</span>
            <input
              type="email"
              name="Contact"
              id="email"
              className="bg-transparent outline-none  py-1 px-2 w-[80%]"
            />
          </label>

          <label
            htmlFor="name"
            className="pt-2  border-t border-gray-400 w-full flex items-center justify-center"
          >
            <span className=" text-gray-600">Name</span>
            <input
              type="text"
              name="Name"
              id="name"
              className="bg-transparent outline-none  py-1 px-2 w-[80%]"
            />
          </label>
          <label
            htmlFor="address"
            className="pt-2 w-full flex items-center  border-t border-gray-400 justify-center"
          >
            <span className=" text-gray-600">Ship to</span>
            <input
              type="text"
              name="Adderss"
              id="address"
              className="bg-transparent outline-none py-1 px-2 w-[80%] "
            />
          </label>
        </div>
        <button className="text-white text-lg bg-green-600 px-5 py-1 mt-2 rounded-md">
          Back to shopping
        </button>
        <button className="text-green-600  underline">Print receipt</button>
      </div>
      <div className="w-1/2 flex flex-col gap-2 px-9 py-8  bg-[#F2F2F2] rounded-r-3xl">
        <div className="w-full flex  gap-5  ">
          <div className="flex">
            <div className="bg-white w-[150px] rounded-r-full">
              <img src="image/image1.png" className="w-[150px]" alt="" />
            </div>
            <p className="text-white bg-green-600 w-7 h-7 rounded-full  ">2</p>
          </div>
          <div className="flex flex-col gap-2 items-start ">
            <p className="font-semibold mt-3">Spiced Mint Candleaf</p>
            <p className="font-bold text-green-600 text-2xl">$19.98</p>
          </div>
        </div>

<div className="w-2/3 flex flex-col justify-center items-start border-t-2 border-green-400 mt-28">
<div className="w-full py-5 text-xl flex justify-between items-center font-bold">
<p className="text-gray-500">Subtotal</p>
<p>$ 19.98</p>

</div>
<div className="w-full py-5 text-xl flex justify-between items-center font-bold">
<p className="text-gray-500">Shipping</p>
<p>Free Shipping</p>

</div>
<div className="w-full text-green-600  py-5 text-xl flex justify-between items-center font-bold border-t-2 border-green-400">
<p >Paid</p>
<p>$ 19.99</p>

</div>

   
</div>

      </div>
    </div>
  );
}

export default ModalFinish;
