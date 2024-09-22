import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title"
import { useNavigate } from "react-router-dom"

const CartTotal = () => {
    const {cartItems, delivery_fee, calculateTotalPrice} = useContext(ShopContext)
    const [subtotal, setSubtotal] = useState()
    const [total, setTotal] = useState('')

    const navigate = useNavigate()
  
  useEffect(()=> {
    setSubtotal(calculateTotalPrice())
    setTotal(calculateTotalPrice() + 10)
  }, [calculateTotalPrice])
    
  return (
    <div className=' max-w-[450px] ml-auto mt-10'>
        <div className='text-xl sm:text-2xl'>
            <Title text1={'cart'} text2={'total'}
            />
        </div>

        <div className='mt-3 text-sm'>
            <div className='flex items-center justify-between py-2 border-b '>
                <p>Subtotal</p>
                <p>$ {subtotal} </p>
            </div>
            <div className='flex items-center justify-between py-2 border-b '>
                <p>Shipping Fee</p>
                <p>$ {delivery_fee} </p>
            </div>
            <div className='flex items-center justify-between py-2'>
                <p className='font-semibold'>Total</p>
                <p>$ {total} </p>
            </div>
        </div>

        <button
        onClick={()=> navigate("/place-order")}
        className='px-4 py-2 text-white  bg-black uppercase rounded-sm mt-5 ml-auto block disabled:opacity-40 disabled:cursor-not-allowed' disabled={cartItems.length === 0}>proceed to checkout</button>
    </div>
  )
}

export default CartTotal