import { useState } from "react"
import { assets } from "../assets/assets"
import CartTotal from "../components/CartTotal"
import Title from "../components/Title"

const PlaceOrder = () => {
  const [paymentType, setPaymentType ] = useState("cod")

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-5 md:gap-10 my-12">
      {/* left */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[500px]">
        <div className="text-xl md:text-2xl my-3">
          <Title text1='delivery'  text2='information' />
        </div>

        <div className="flex gap-3">
          <input type="text" placeholder="First name" className="py-1.5 px-3.5 border border-gray-300 rounded w-full outline-none" />
          <input type="text" placeholder="Last name"  className="py-1.5 px-3.5 border border-gray-300 rounded w-full outline-none" />
        </div>

        <input type="text" placeholder="Email Address" className="py-1.5 px-3.5 border border-gray-300 rounded w-full outline-none" />
        <input type="text" placeholder="Street" className="py-1.5 px-3.5 border border-gray-300 rounded w-full outline-none" />

        <div className="flex gap-3">
          <input type="text" placeholder="City" className="py-1.5 px-3.5 border border-gray-300 rounded w-full outline-none" />
          <input type="text" placeholder="State"  className="py-1.5 px-3.5 border border-gray-300 rounded w-full outline-none" />
        </div>

        <div className="flex gap-3">
          <input type="text" placeholder="Zip Code" className="py-1.5 px-3.5 border border-gray-300 rounded w-full outline-none" />
          <input type="text" placeholder="Country"  className="py-1.5 px-3.5 border border-gray-300 rounded w-full outline-none" />
        </div>

        <input type="text" placeholder="Phone Number" className="py-1.5 px-3.5 border border-gray-300 rounded w-full outline-none" />


      </div>

      <div className="w-full  sm:ml-auto lg:max-w-[550px]">
        <div className="mt-8 min-w-80 ">
          <CartTotal />
        </div>
        
        <div className="mt-8">
          <Title text1={'payment'} text2={'method'}
          />
        </div>

        <div className="mt-3 flex gap-3 flex-wrap justify-between">
          <div onClick={()=> setPaymentType('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentType === 'stripe' ? 'bg-green-400' : ''}`}></p>
            <img src={assets.stripe_logo} className="h-4 mx-4" alt="" />
          </div>

          <div onClick={()=> setPaymentType('razor')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentType === 'razor' ? 'bg-green-400' : ''}`}></p>
            <img src={assets.razorpay_logo} className="w-24 h-auto" alt="" />
          </div>

          <div onClick={()=> setPaymentType('cod')} className="flex items-center gap-3 border p-1.5 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentType === 'cod' ? 'bg-green-400' : ''}`}></p>
            <p className="uppercase text-gray-500 font-semibold text-sm">cash on delivery</p>
          </div>

        </div>

        <div className="text-end mt-4">
          <button className="bg-black text-white px-14 py-1.5 uppercase">Place order</button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder