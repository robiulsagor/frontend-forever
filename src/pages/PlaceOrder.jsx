import { useContext, useState } from "react"
import { assets } from "../assets/assets"
import CartTotal from "../components/CartTotal"
import Title from "../components/Title"
import { toast } from "react-toastify"
import axios from "axios"
import { ShopContext } from "../context/ShopContext"
import { useNavigate } from "react-router-dom"

const PlaceOrder = () => {
  const { cartItems, setCartItems, calculateTotalPrice, products, token, backendUrl } = useContext(ShopContext)
  const [paymentType, setPaymentType] = useState("COD")
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phoneNumber: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let items = []

    cartItems.map((item) => {
      let product = products.find((product) => product._id === item.id)
      items.push({ ...product, size: item.size, quantity: item.count })
    })

    try {
      const orderData = {
        address: formData,
        amount: calculateTotalPrice(),
        items
      }

      setCartItems([])

      switch (paymentType) {
        case 'COD':
          const response = await axios.post(`${backendUrl}/api/order/place-order`, orderData, {
            headers: {
              token
            }
          })
          if (response.data.success) {
            toast.success(response.data.message)
            setCartItems([])
            navigate('/orders')
          } else {
            toast.error(response.data.message || "Something went wrong")
          }
          break

        case 'Stripe':
          const res = await axios.post(`${backendUrl}/api/order/place-order-stripe`, orderData, { headers: { token } })
          setCartItems([])
          if (res.data.success) {
            toast.success(res.data.message)
            window.location.href = res.data.session_url
          } else {
            toast.error(res.data.message || "Something went wrong")
          }
          break

        default:
          console.log('invalid payment method')
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }

  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-between gap-5 md:gap-10 my-12">
      {/* left */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[500px]">
        <div className="text-xl md:text-2xl my-3">
          <Title text1='delivery' text2='information' />
        </div>

        <div className="flex gap-3">
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" className="py-1.5 px-3.5 border border-gray-300 rounded w-full outline-none" required />
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" className="py-1.5 px-3.5 border border-gray-300 rounded w-full outline-none" required />
        </div>

        <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="py-1.5 px-3.5 border border-gray-300 rounded w-full outline-none" required />
        <input type="text" name="street" value={formData.street} onChange={handleChange} placeholder="Street" className="py-1.5 px-3.5 border border-gray-300 rounded w-full outline-none" required />

        <div className="flex gap-3">
          <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="py-1.5 px-3.5 border border-gray-300 rounded w-full outline-none" required />
          <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" className="py-1.5 px-3.5 border border-gray-300 rounded w-full outline-none" required />
        </div>

        <div className="flex gap-3">
          <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} placeholder="Zip Code" className="py-1.5 px-3.5 border border-gray-300 rounded w-full outline-none" required />
          <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" className="py-1.5 px-3.5 border border-gray-300 rounded w-full outline-none" required />
        </div>

        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" className="py-1.5 px-3.5 border border-gray-300 rounded w-full outline-none" required />
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
          <div onClick={() => setPaymentType('Stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentType === 'Stripe' ? 'bg-green-400' : ''}`}></p>
            <img src={assets.stripe_logo} className="h-4 mx-4" alt="" />
          </div>

          {/* <div onClick={() => setPaymentType('razor')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentType === 'razor' ? 'bg-green-400' : ''}`}></p>
            <img src={assets.razorpay_logo} className="w-24 h-auto" alt="" />
          </div> */}

          <div onClick={() => setPaymentType('COD')} className="flex items-center gap-3 border p-1.5 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentType === 'COD' ? 'bg-green-400' : ''}`}></p>
            <p className="uppercase text-gray-500 font-semibold text-sm">cash on delivery</p>
          </div>

        </div>

        <div className="text-end mt-4">
          <button type="submit" className="bg-black text-white px-14 py-1.5 uppercase">Place order</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder