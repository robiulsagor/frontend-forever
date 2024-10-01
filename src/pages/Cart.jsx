import { useContext, useEffect, useState } from 'react'
import { assets, products } from '../assets/assets'


import Title from "../components/Title"
import { ShopContext } from '../context/ShopContext'
import CartTotal from '../components/CartTotal'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Cart = () => {
  const { cartItems, products, currency, updateQuantity, deleteItem, token } = useContext(ShopContext)
  const navigate = useNavigate()

  const handleQuantity = (id, size) => {
    const a = document.getElementById("quantity").value
    updateQuantity(id, size, a)
  }

  const handlePlaceOrder = () => {
    if (token) {
      navigate("/place-order")
    } else {
      toast.error("Please login to place an order")
      navigate("/login", { state: { from: "/cart" } })
    }
  }

  return (
    <div className="my-10 py-5">
      <div>
        <div className="text-2xl">
          <Title text1='your' text2="Cart"
          />
        </div>

        <div className="mt-10 mb-5">
          {products.length > 0 && cartItems.length > 0 ?
            cartItems.map((item, index) => {
              const cartData = products.find(product => product._id === item.id)
              return <div key={index} className=" border-0 border-t border-b py-4 grid grid-cols-[4fr_2fr_0.5fr] items-center">

                <div className='flex items-center gap-5'>
                  <img src={cartData?.image} className='w-16 sm:w-20' alt="" />
                  <div>
                    <p className='text-lg font-medium text-gray-700'>
                      {cartData?.name}
                    </p>
                    <div className='flex gap-4 items-center mt-2'>
                      <p>{currency}{cartData?.price}</p>
                      <p className='px-3 py-1 bg-slate-100 border'> {item.size} </p>
                    </div>
                  </div>
                </div>

                <input type="number" name="quantity" id="quantity" placeholder='Quantity' min={1} max={10} defaultValue={item.count} onChange={() => handleQuantity(item.id, item.size)}
                  className='max-w-[80px] border p-1 focus:border-gray-600 outline-none' />

                <img src={assets.bin_icon} className='w-5 cursor-pointer' alt=""
                  onClick={() => deleteItem(cartData?._id, item?.size)}
                />
              </div>
            })
            :
            <div className='py-10'>
              <h2 className='text-3xl my-10 text-red-800 font-bold text-center'>No items in your cart</h2>
            </div>
          }
        </div>
      </div>

      {/* if there is no items in cart, don't show the checkout button */}
      {cartItems.length > 0 && (
        <div className='px-5 sm:max-w-[450px] sm:ml-auto'>
          <CartTotal />
          <button
            onClick={handlePlaceOrder}
            className='px-4 py-2 text-white  bg-black uppercase rounded-sm mt-5 ml-auto block disabled:opacity-40 disabled:cursor-not-allowed' disabled={cartItems.length === 0}>proceed to checkout</button>
        </div>
      )}

    </div>
  )
}

export default Cart