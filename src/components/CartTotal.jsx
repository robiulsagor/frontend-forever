import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title"

const CartTotal = () => {
    const {cartItems, delivery_fee, calculateTotalPrice} = useContext(ShopContext)
    const [subtotal, setSubtotal] = useState()
    const [total, setTotal] = useState('')
  
  useEffect(()=> {
    setSubtotal(calculateTotalPrice())
    setTotal(calculateTotalPrice() + 10)
  }, [calculateTotalPrice])
    
  return (
    <div className='mt-10'>
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

       
    </div>
  )
}

export default CartTotal