import {assets} from "../assets/assets"

const Hero = () => {
  return (
    <div className="border border-gray-400 flex flex-col sm:flex-row ">
        {/* hero left side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
            <div className="text-[#414141]">
                <div className="flex gap-2 items-center">
                    <p className="w-8 md:w-11 h-[1.6px] bg-[#414141]"/>
                    <p className="font-medium text-sm md:text-base uppercase">Our Bestsellers</p>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-5xl py-3 prata">Latest Arrivals</h1>
                <div className="flex gap-2 items-center ">
                <p className="uppercase text-sm md:text-base text-gray-800 font-semibold">Shop Now</p>
                <p className="w-8 md:w-11 h-[1.6px] bg-[#414141]"/>
                </div>
            </div>
        </div>



        {/* hero right side */}
        <img src={assets.hero_img} className=" w-full sm:w-1/2" alt="" />
    </div>
  )
}

export default Hero