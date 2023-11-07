import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
function Header() {
  return (
    <div className="flex flex-col gap-2 w-full ">
      <div className=" flex  justify-around items-center">
        <div className="flex  items-center text-green-500">
          <img src="./image/logo.png" alt="" className="w-36 " />
          <span className="ml-[-90px]">Candlleaf</span>
        </div>
        <div className="w-2/5 font-bold cursor-pointer flex justify-around items-center  ">
          <span>Discovery</span>
          <span>About</span>
          <span>Contact us</span>
        </div>
        <div className="flex gap-4 cursor-pointer text-2xl">
          <span>
            <BsPersonFill />
          </span>
          <span>
            <HiShoppingCart />
          </span>
        </div>
      </div>
      <img src="./image/heading.png" alt="" />
    </div>
  );
}

export default Header;
