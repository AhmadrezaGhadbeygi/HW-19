function Footer() {
  return (
    <div className="flex flex-col  ">
      <div className="bg-[#272727] flex justify-between w-full  text-white py-10 px-16  ">
        

<div className="flex flex-col gap-2 items-center w-1/2">
    <img src="./image/logo.png" alt="" className="w-52" />
    <p className="text-center">Your natural candle made for your haome and for your wellness</p>


</div>
<div className="w-1/2 flex justify-evenly">

<ul className="flex flex-col gap-2 " >
<li className="text-green-800">Discovery</li>
<li className="text-white">New season</li>
<li className="text-white">Most searched</li>
<li className="text-white">Most selled</li>

</ul>
<ul className="flex flex-col gap-2 " >
<li className="text-green-800">About</li>
<li className="text-white">Help</li>
<li className="text-white">Shipping</li>
<li className="text-white">Affiliate</li>

</ul>
<ul className="flex flex-col gap-2 " >
<li className="text-green-800">Info</li>
<li className="text-white">Contact us</li>
<li className="text-white">Privacy Policies</li>
<li className="text-white">Terms & Conditions</li>

</ul>

    
</div>

      </div>
      <div className="px-16 bg-[#E5E5E5] py-4 text-black flex justify-between items-center text-sm font-bold"> 
      
      <p>@Candlleaf All Rights Reserved</p>
      <p>Designed with ❤ by uxbly </p>
      
      
      </div>
    </div>
  );
}

export default Footer;
