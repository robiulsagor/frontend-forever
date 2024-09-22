import Title from "../components/Title"
import {assets} from "../assets/assets"
import Newsletter from "../components/Newsletter"

const Contact = () => {
  return (
    <div>
      <div className="flex justify-center border-t pt-14 text-2xl">
        <Title text1={'contact'} text2={'us'}
        />
        </div>



        <div className="mt-12 flex justify-center items-center gap-10">
          <img src={assets.contact_img} className="w-full md:max-w-[430px]" alt="" />
          <div className="flex flex-col items-start gap-5 text-gray-500 text-base">
            <p className="font-semibold text-xl">Our store</p>
            <p>7365 Williams Station <br /> Suite 350, Washington, USA </p>
            <p>Tel: (314) 444-555</p>
            <p className="font-semibold text-xl">Careers at Forever</p>
            <p>Learn more about our teams and job openning</p>
            <button className=" border-gray-500 border-2 px-4 py-2 rounded-sm hover:bg-black hover:text-white transition-colors duration-300">Explore Jobs</button>
          </div>
        </div>

        <div>
          <Newsletter />
        </div>
    </div>
  )
}

export default Contact