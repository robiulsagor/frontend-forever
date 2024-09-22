import { useContext } from "react"
import Title from "../components/Title"
import { ShopContext } from "../context/ShopContext"

const Orders = () => {
  const {products} = useContext(ShopContext)

  return (
    <div className="my-10 py-5">
      <div className="text-2xl my-3 mb-5">
        <Title text1={'your'} text2={'orders'} />
      </div>

      <div className="flex flex-col">
        {
          products.slice(1,4).map((item, index)=> (
            <div key={index} className="flex py-3 gap-3 flex-col md:flex-row md:items-center md:justify-between first:border-t border-b text-gray-500">
              <div className="flex gap-4">
                <img src={item.image[0]} className="w-20" alt="" />
                <div>
                  <p className="text-base font-semibold">
                    {item.name}
                  </p>
                  
                  <div className="flex items-center gap-3 mt-1.5">
                    <p className="font-medium text-lg md:text-xl">$299</p>
                    <p>Quantity: 2</p>
                    <p>Size: M</p>
                  </div>

                  <p className="mt-1.5 font-semibold">Date: <span className="font-normal">22 Sep, 2024</span></p>

                </div>
              </div>

              <div className="ml-24 md:ml-0 flex items-center gap-4 font-semibold">
                <p className="w-3 h-3 border bg-green-400 rounded-full"></p>
                <p className="">Ready to ship</p>
              </div>

              <div className="ml-24 md:ml-0">
                <button className="border px-5 py-2 font-semibold text-sm rounded-md hover:bg-slate-200 transition">Track order</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders