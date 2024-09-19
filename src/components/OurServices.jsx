import {assets} from '../assets/assets'

const OurServices = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-12 items-center justify-around py-10 my-5">
        <div className='flex items-center justify-center flex-col'>
            <img src={assets.exchange_icon} className='w-12 mb-4' alt="" />
            <p className='font-medium'>Easy Exchange Policy</p>
            <p className='text-gray-400 text-xs md:text-sm font-medium lg:text-base'>We offer hassle free exchange policy</p>
        </div>

      <div className='flex items-center justify-center flex-col'>
            <img src={assets.quality_icon} className='w-12 mb-4' alt="" />
            <p className='font-medium'>7 Days Return Policy</p>
            <p className='text-gray-400 text-xs md:text-sm font-medium lg:text-base'>We provide 7 days free return policy</p>
        </div>

      <div className='flex items-center justify-center flex-col'>
            <img src={assets.support_img} className='w-10 mb-4' alt="" />
            <p className='font-medium'>Best customer support</p>
            <p className='text-gray-400 text-xs md:text-sm font-medium lg:text-base'>We provide 24/7 customer support</p>
        </div>
    </div>
  )
}

export default OurServices