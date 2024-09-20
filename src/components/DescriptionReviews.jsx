import { useState } from "react"
import { assets } from "../assets/assets"

const DescriptionReviews = () => {
    // showing description or reviews
  const [showType, setShowType] = useState('description')

  return (
    <div className="mt-10">
    <div>
      <button onClick={()=> setShowType('description')}
       className={`border border-b-0 border-r-0 rounded-tl-md px-5 py-2 relative ${showType === 'description' ? 'font-semibold border-gray-400 border-r' : ''}`}>Description
        <span className={`inline-block w-full h-2 bg-white absolute -bottom-1 left-0  ${showType === 'description' ? '' : 'hidden'}`}></span>
       </button>

      <button onClick={()=> setShowType('reviews')}
       className={`border border-b-0 rounded-tr-md px-5 py-2 relative ${showType === 'reviews' ? 'font-semibold border-gray-400 border-l border-b border-b-red-500' : ''}`}>Reviews
     
       <span className={`inline-block w-full h-2 bg-white absolute -bottom-1 left-0  ${showType === 'reviews' ? '' : 'hidden'}`}></span>
       </button>
    </div>

    <div className="border border-gray-400 w-full p-4 sm:p-6 md:p-10  overflow-hidden ">
        {/* description  */}
          <p className={`text-sm text-gray-500  ${showType === 'description' ? ' block ' : ' hidden '}`}>
            An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. <br /> <br /> E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer. E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
        </p>

        {/* reviews div */}
        <div className={`flex flex-col gap-8 transition-[max-height] duration-500  ${showType === 'reviews' ? ' block' : ' hidden'}`}>
          {/* --- */}
          <div className="flex gap-6 items-start">
            <div className="border rounded-full p-3">
              <img src={assets.profile_icon} className="w-5 " alt="" />
            </div>

            <div className="flex-1 flex flex-col gap-3">
              <div className="flex gap-5 items-center">
                <p className="font-medium text-lg">Sagor Islam</p>
                <div className="  flex items-center gap-1 ">
                  <img src={assets.star_icon} className="w-3" alt="" />
                  <img src={assets.star_icon} className="w-3" alt="" />
                  <img src={assets.star_icon} className="w-3" alt="" />
                  <img src={assets.star_icon} className="w-3" alt="" />
                  <img src={assets.star_icon} className="w-3" alt="" />
                </div>
              </div>
              
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatem sed amet! Atque alias suscipit fuga deserunt laborum porro officiis reiciendis, labore dicta dignissimos facere voluptate iure possimus ipsam accusamus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatem sed amet! Atque alias suscipit fuga deserunt laborum porro officiis reiciendis, labore dicta dignissimos facere voluptate iure possimus ipsam accusamus
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatem sed amet! Atque alias suscipit fuga deserunt laborum porro officiis reiciendis, labore dicta dignissimos facere voluptate iure possimus ipsam accusamus
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatem sed amet! Atque alias suscipit fuga deserunt laborum porro officiis reiciendis, labore dicta dignissimos facere voluptate iure possimus ipsam accusamus
                ?</p>
            </div>

          </div>

          <div className="flex gap-6 items-start">
            <div className="border rounded-full p-3">
              <img src={assets.profile_icon} className="w-5 " alt="" />
            </div>

            <div className="flex-1 flex flex-col gap-3">
              <div className="flex gap-5 items-center">
                <p className="font-medium text-lg">Sagor Islam</p>
                <div className="  flex items-center gap-1 ">
                  <img src={assets.star_icon} className="w-3" alt="" />
                  <img src={assets.star_icon} className="w-3" alt="" />
                  <img src={assets.star_icon} className="w-3" alt="" />
                  <img src={assets.star_icon} className="w-3" alt="" />
                  <img src={assets.star_icon} className="w-3" alt="" />
                </div>
              </div>
              
              <p className="text-gray-500 text-sm">Lorem labore dicta dignissimos facere voluptate iure possimus ipsam accusamus
                ?</p>
            </div>

          </div>

          <div className="flex gap-6 items-start">
            <div className="border rounded-full p-3">
              <img src={assets.profile_icon} className="w-5 " alt="" />
            </div>

            <div className="flex-1 flex flex-col gap-3">
              <div className="flex gap-5 items-center">
                <p className="font-medium text-lg">Sagor Islam</p>
                <div className="  flex items-center gap-1 ">
                  <img src={assets.star_icon} className="w-3" alt="" />
                  <img src={assets.star_icon} className="w-3" alt="" />
                  <img src={assets.star_icon} className="w-3" alt="" />
                  <img src={assets.star_icon} className="w-3" alt="" />
                  <img src={assets.star_icon} className="w-3" alt="" />
                </div>
              </div>
              
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatem sed amet! Atque alias suscipiicing elit. Quam voluptatem sed amet! Atque alias suscipit fuga deserunt laborum porro officiis reiciendis, labore dicta dignissimos facere voluptate iure possimus ipsam accusamus
                ?</p>
            </div>

          </div>

          <div className="flex gap-6 items-start">
            <div className="border rounded-full p-3">
              <img src={assets.profile_icon} className="w-5 " alt="" />
            </div>

            <div className="flex-1 flex flex-col gap-3">
              <div className="flex gap-5 items-center">
                <p className="font-medium text-lg">Sagor Islam</p>
                <div className="  flex items-center gap-1 ">
                  <img src={assets.star_icon} className="w-3" alt="" />
                  <img src={assets.star_icon} className="w-3" alt="" />
                  <img src={assets.star_icon} className="w-3" alt="" />
                  <img src={assets.star_icon} className="w-3" alt="" />
                  <img src={assets.star_icon} className="w-3" alt="" />
                </div>
              </div>
              
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatem sed amet! Atque aliar adipisicing elit. Quam voluptatem sed amet! Atque alias suscipit fuga deserunt laborum porro officiis reiciendis, labore dicta dignissimos facere voluptate iure possimus ipsam accusamus
                ?</p>
            </div>

          </div>
          {/* --- */}
        </div>
    </div>
  </div>
  )
}

export default DescriptionReviews