import Title from "../components/Title"
import {assets} from "../assets/assets"
import Newsletter from "../components/Newsletter"
const About = () => {
  return (
    <div>
      <div className="text-2xl flex justify-center border-t pt-12 mb-10">
        <Title text1={'about'} text2={'us'}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        <img src={assets.about_img} className="w-full md:max-w-[420px] lg:max-w-[450px]" alt="" />
        <div className="lg:w-2/4 text-gray-700 mt-8 flex flex-col gap-8">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis eius laboriosam nulla ducimus a impedit eaque sapiente, ullam qui voluptates ratione quaerat accusantium ex tenetur aspernatur saepe iste quae illo tempora doloremque enim dolorem minus ut! Doloribus reiciendis aspernatur earum?</p>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos commodi fugit necessitatibus corrupti quaerat atque. Assumenda, saepe! Soluta facere quaerat quas beatae nulla? Nesciunt, aspernatur! In id ipsum earum aut unde, magni veniam beatae consequatur tenetur natus rem enim reprehenderit! Fugiat, possimus exercitationem.</p>

          <p className="font-semibold">Our Mission</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sint, saepe eaque consequuntur fugit harum expedita molestias rem, quae, amet illo. Pariatur libero commodi et, beatae sint officiis exercitationem perferendis labore minus dolorum?</p>
        </div>
      </div>

      <div className="text-xl mt-12">
        <Title text1={'why'} text2={'choose us'}
        />
      </div>

      <div className="mt-8 flex flex-col md:flex-row mb-20 text-gray-600 md:text-sm lg:text-base">
        <div className="flex flex-col gap-4 border border-gray-300 md:border-r-0 py-8 md:py-20 px-10 md:px-5 lg:px-12 ">
          <p className="font-semibold text-gray-800">
            Quality Assurance:
          </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque natus maiores hic eum facilis aut nostrum, reiciendis temporibus praesentium cumque?</p>
        </div>

        <div className="flex flex-col gap-4 border border-gray-300 border-t-0 md:border-t py-8 md:py-20 px-10 md:px-5 lg:px-12 ">
          <p className="font-semibold text-gray-800">
           Convenience:
          </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque natus maiores hic eum facilis aut nostrum, reiciendis temporibus praesentium cumque?</p>
        </div>

        <div className="flex flex-col gap-4 border border-gray-300 border-t-0 md:border-t md:border-l-0 py-8 md:py-20 px-10 md:px-5 lg:px-12 ">
          <p className="font-semibold text-gray-800">
            Exceptional Customer Service:
          </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque natus maiores hic eum facilis aut nostrum, reiciendis temporibus praesentium cumque?</p>
        </div>
      </div>

      <div className="">
        <Newsletter />
      </div>
    </div>
  )
}

export default About