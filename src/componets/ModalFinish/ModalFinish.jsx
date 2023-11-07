import { AiOutlineCheckCircle } from "react-icons/ai";
function ModalFinish() {
  return (
    <div className="flex justify-between w-full rounded-2xl ">
      <div className="w-1/2 bg-[rgb(217,217,217)] flex flex-col gap-3 items-center py-8">
        <img src="image/logo.png" alt="" className="w-28"  />

        <AiOutlineCheckCircle className="text-8xl text-green-600"></AiOutlineCheckCircle>
        <p className="font-bold text-lg">Payment Confirmed</p>
        <p className="text-green-600 ">ORDER #2039</p>
        <div className="border border-gray-400 rounded-md flex flex-col items-center gap-3 px-4 w-[65%] py-5 ">
          <label htmlFor="email" className=" w-full flex items-center justify-center ">
            <span className="text-gray-600">Contact</span>
            <input type="email" name="Contact" id="email" className="bg-transparent outline-none  py-1 px-2 w-[80%]" />
          </label>

          <label htmlFor="name" className= "pt-2  border-t border-gray-400 w-full flex items-center justify-center">
            <span className= " text-gray-600">Name</span>
            <input type="text" name="Name" id="name" className="bg-transparent outline-none  py-1 px-2 w-[80%]" />
          </label>
          <label htmlFor="address" className= "pt-2 w-full flex items-center  border-t border-gray-400 justify-center">
            <span className=" text-gray-600">Ship to</span>
            <input type="text" name="Adderss" id="address"  className="bg-transparent outline-none py-1 px-2 w-[80%] "/>
          </label>
        </div>
        <button className="text-white text-lg bg-green-600 px-5 py-1 mt-2 rounded-md">Back to shopping</button>
        <button className="text-green-600  underline">Print receipt</button>
      </div>
      <div className="w-1/2"> right side</div>
    </div>
  );
}

export default ModalFinish;
