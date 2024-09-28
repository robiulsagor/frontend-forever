import { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import DescriptionReviews from "../components/DescriptionReviews";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)

  const [productData, setProductData] = useState({})
  const [productImg, setProductImg] = useState([])
  const [productSize, setProductSize] = useState('')

  const fetchProductData = () => {
    products.map(item => {
      if (item._id === productId) {
        setProductData(item)
        setProductImg(item.image[0])
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  return productData.name ? (
    <div className="border-t border-gray-300 py-10 opacity-100 transition-opacity duration-500">
      <div className="flex flex-col sm:flex-row gap-16">
        {/* Image div */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-6 ">

          <div className=" w-[25%] overflow-hidden flex flex-col gap-1.5">
            {productData.image.map((img, index) => (
              <img onClick={() => setProductImg(img)} key={index} src={img} className={`cursor-pointer ${productImg === img ? 'border border-orange-500' : ''}`} alt="" />
            ))}
          </div>
          <div className="w-full border ">
            <img src={productImg} className="w-full h-full" alt="" />
          </div>
        </div>

        {/* Detais div */}
        <div className="flex-1">
          <h2 className="text-2xl font-medium">{productData.name} </h2>

          <div className="flex items-center gap-1 mt-3">
            <img src={assets.star_icon} className="w-3" alt="" />
            <img src={assets.star_icon} className="w-3" alt="" />
            <img src={assets.star_icon} className="w-3" alt="" />
            <img src={assets.star_icon} className="w-3" alt="" />
            <img src={assets.star_dull_icon} className="w-3" alt="" />
            <p className="ml-3"> (122) </p>
          </div>

          <p className="text-3xl font-medium mt-5">{currency}{productData.price} </p>

          <p className="text-base text-gray-500 mt-4 w-full sm:w-3/4 leading-6 tracking-wide">{productData.description} </p>

          <div className="mt-6">
            <h2 className="text-gray-600 font-medium">Select Size</h2>

            <div className="flex gap-3 items-center mt-4">
              {productData.sizes.map((size, index) => (
                <button key={index} onClick={() => setProductSize(size)} className={`px-4 py-2 border-2 bg-slate-100 ${productSize === size ? 'border-orange-500' : ''}`}>{size} </button>
              ))}
            </div>
          </div>

          {/* Add to cart button */}
          <button className="bg-black text-white px-5 py-2 uppercase mt-6 rounded-sm transition-colors hover:bg-slate-700"
            onClick={() => addToCart(productData._id, productSize)}>Add to Cart</button>

          <hr className="my-8 w-4/5" />

          <div className="text-sm text-gray-500 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* product description and reviews */}
      <DescriptionReviews />

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className="opacity-0"></div>
}

export default Product