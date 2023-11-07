function Modalinfo() {
    return ( 
<div className="flex flex-col gap-2 items-start p-5 border rounded-3xl bg-gray-400">
<div className="flex items-center ">
<img src="./image/logo.png" alt="" className="w-36 " />
</div>
   <p className="font-bold text-lg">Buyer Info</p> 

   <form className="flex flex-col gap-4 items-center w-full">

<input type="text" name="Name" placeholder="Name" className="w-[90%] py-1 px-2 border-none rounded-md outline-none" required />
<input type="email" name="Email" placeholder="Email"className="w-[90%] py-1 px-2 border-none rounded-md outline-none"  required />
<input type="text" name="Address" placeholder="Address" className="w-[90%] py-1 px-2 border-none rounded-md outline-none" required />

<button className="bg-green-600 py-2 px-12 font-bold rounded-md text-white mt-3" type="submit">Checkout</button>
   </form>
</div>


     );
}

export default Modalinfo;