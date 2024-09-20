import { useContext, useEffect, useState } from "react";
import Title from "./Title"
import { ShopContext } from "../context/ShopContext";
import Product from "./Product";

const RelatedProducts = ({category, subCategory}) => {
    const {products} = useContext(ShopContext)
    const [relatedProducts, setRelatedProducts] = useState([])

    useEffect(()=> {
        let productCpy = products.slice()
        productCpy = productCpy.filter(item => category === item.category)
        productCpy = productCpy.filter(item => subCategory === item.subCategory)
        setRelatedProducts(productCpy.slice(0, 5))
    }, [category, subCategory])
    
  return (
    <div className="py-12 my-10">
        <div className="text-3xl text-center mx-auto flex justify-center">
            <Title text1="Related" text2="Products" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-10">
            {
                relatedProducts.map((item, index)=> (
                    <Product key={index} id={item._id} name={item.name} img={item.image}  price={item.price}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default RelatedProducts