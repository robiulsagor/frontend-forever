import { useContext, useEffect, useState } from "react"
import Title from "./Title"
import { ShopContext } from "../context/ShopContext"
import Product from "./Product"

const LatestCollections = () => {
    const {products} = useContext(ShopContext)
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(()=> {
        setLatestProducts(products.slice(0, 10))
    }, [products])


  return (
    <div className="my-10">
        <div className="py-8 text-center flex flex-col gap-2 items-center justify-center text-2xl md:text-3xl">
            <Title text1="Latest" text2="Collections" />
            <p className="w-full sm:w-3/4 mx-auto text-center text-xs md:text-sm lg:text-base mt-1 text-gray-600" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur. Inventore culpa itaque amet?</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-14 py-5">
            {latestProducts.map((item, index)=> (
                <Product key={index} id={item._id} name={item.name} img={item.image} price={item.price}/>
            ))}
        </div>
    </div>
  )
}

export default LatestCollections