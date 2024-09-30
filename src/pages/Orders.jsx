import { useContext, useEffect, useState } from "react"
import Title from "../components/Title"
import { ShopContext } from "../context/ShopContext"
import axios from "axios"
import { toast } from "react-toastify"
import Loader from "../components/Loader"
import { useNavigate } from "react-router-dom"

const Orders = () => {
  const { backendUrl, token } = useContext(ShopContext)
  const [loading, setLoading] = useState(true)
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()

  const fetchOrders = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`${backendUrl}/order/user-orders`, { headers: { token } })
      if (res.data.success) {
        setOrders(res.data.orders)
        const orderItems = []


        res.data.orders.map((order) => {
          console.log(order);
          order.items.map(item => {
            item.paymentMethod = order.paymentMethod
            item.status = order.status
            item.payment =
              orderItems.push(item)
          })
        })
        setOrders(orderItems.reverse())
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }

  }

  useEffect(() => {
    token ? fetchOrders() : navigate("/login")
  }, [token])

  const getDate = (getObj) => {
    const dateObj = new Date()
    const date = dateObj.getDate(getObj)
    const mon = dateObj.getMonth(getObj)
    const year = dateObj.getFullYear(getObj)
    let month;
    switch (mon) {
      case 0:
        month = "Jan"
        break;
      case 1:
        month = "Feb"
        break;
      case 2:
        month = "Mar"
        break;
      case 3:
        month = "Apr"
        break;
      case 4:
        month = "May"
        break;
      case 5:
        month = "Jun"
        break;
      case 6:
        month = "Jul"
        break;
      case 7:
        month = "Aug"
        break;
      case 8:
        month = "Sep"
        break;
      case 9:
        month = "Oct"
        break;
      case 10:
        month = "Nov"
        break;
      case 12:
        month = "Dec"
        break;
    }
    return `${date} ${month}, ${year}`
  }


  return (
    <div className="my-10 py-5">
      <div className="text-2xl my-3 mb-5">
        <Title text1={'your'} text2={'orders'} />
      </div>

      <div className="flex flex-col">

        {loading ? <Loader height={'40vh'} /> :
          orders.length > 0 ? orders.map((item, index) => (

            <div key={index} className="flex py-3 gap-3 flex-col md:flex-row md:items-center md:justify-between first:border-t border-b text-gray-500">

              <div className="flex gap-4">
                <img src={item.image[0]} className="w-20" alt="" />
                <div>
                  <p className="text-base font-semibold">
                    {item.name}
                  </p>

                  <div className="flex items-center gap-3 mt-1.5">
                    <p className="font-medium text-lg md:text-xl">${item.price * item.quantity + 10}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>

                  <p className="mt-1 font-semibold">Date: <span className="font-normal">
                    {getDate(item.date)} </span></p>

                  <p className="mt-1 font-semibold">Payment Method: <span className="font-normal">
                    {item.paymentMethod} </span></p>
                </div>
              </div>

              <div className="ml-24 md:ml-0 flex items-center gap-4 font-semibold">
                <p className="w-3 h-3 border bg-green-400 rounded-full"></p>
                <p className="">{item.status} </p>
              </div>

              <div className="ml-24 md:ml-0">
                <button disabled={item.status === 'Delivered'} onClick={fetchOrders} className="border px-5 py-2 font-semibold text-sm rounded-md hover:bg-slate-200 transition disabled:bg-slate-200 disabled:text-gray-500  ">Track order</button>
              </div>
            </div>
          )) : <div className="h-[40vh] w-full flex items-center justify-center"><h2 className="text-red-600 text-3xl font-bold">No Orders Found!</h2></div>
        }
      </div>
    </div>
  )
}

export default Orders