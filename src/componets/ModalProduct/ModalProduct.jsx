import {BsBusFrontFill} from 'react-icons/bs'
import {SlBasket} from 'react-icons/sl'
function ModalProduct() {
  return <div className='w-4/5 flex bg-[#D9D9D9] justify-evenly rounded-3xl'>
<div className="w-1/2  flex flex-col py-8 px-4 justify-center gap-8 items-center  font-bold">

<img src="image/image1.png" alt="" className="w-72" />
<p className='w-3/5'>All hand-made with natural say wax, Candleaf is made for your pleasure moments.</p>
<div className='flex items-center gap-1'>
    <BsBusFrontFill className='text-orange-600'></BsBusFrontFill>
    <p className='text-green-600'>FREE SHIPPING</p>
</div>
</div>
<div className='w-1/2 flex flex-col gap-4 mt-10 items-start'> 
  <p className='text-green-600 font-bold text-xl'>$ 9.99</p>  
<div className='flex flex-col gap-3 border py-7 px-4 border-white w[70%] rounded-md '>

<div className=' flex items-center gap-1 flex-wrap '>
<p className='font-bold'>Wax:</p>
<p className='text-gray-600 text-sm' >Top grade Soy wax that delivers a smoke less, consistent burn</p>

</div>
<div className=' flex items-center gap-1 flex-wrap '>
<p className='font-bold'>Fragrance:</p>
<p className='text-gray-600 text-sm' >Premium quality ingredients with natural essential iols</p>

</div>
<div className=' flex items-center gap-1 flex-wrap '>
<p className='font-bold'>Burning Time:</p>
<p className='text-gray-600 text-sm flex items-center gap-1' >70-75 hours<span className='font-bold text-black'>Dimention:</span> 10cm * 5cm <span className='font-bold text-black'>    weight: </span>400g</p>

</div>


</div>
<div className=' flex flex-col items-center text-xl gap-2 
'>

<span className='font-bold '>Quantity</span>
<div className='rounded-md flex justify-evenly items-center border px-10 py-1 border-green-600 gap-4'>
<span className='text-green-600 cursor-pointer'>+</span>
<span>1</span>
<span className='text-green-600 cursor-pointer'>-</span>
</div>

</div>
<button className='w-3/5 bg-green-600 py-2 rounded-md text-white flex items-center justify-center gap-2'><SlBasket></SlBasket> + Add to cart</button>
</div>


  </div>;
}

export default ModalProduct;
