import { Link } from "react-router-dom"
import {assets} from "../assets/assets"


const Footer = () => {
  return (
    <div className="pt-12 mt-5">
        <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-10 mb-5">
            <div>
                <img src={assets.logo} className="w-32" alt="" />
                <p className="mt-6 w-full md:w-3/4 text-sm  text-gray-500 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe cum mollitia aperiam sequi doloribus eum itaque corrupti nulla tempore facere nostrum voluptatibus rem aut quidem temporibus amet, suscipit minima molestias magni culpa eos. Esse ut deserunt saepe quos voluptas impedit nesciunt in laboriosam. Sunt autem quisquam aspernatur error reprehenderit!</p>
            </div>

            <div>
                <h2 className="uppercase font-medium mb-6 text-xl text-gray-700">Company</h2>

                <ul className="text-sm flex flex-col gap-1.5">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/">Delevery</Link>
                    </li>
                    <li>
                        <Link to="/">Privacy Policy</Link>
                    </li>
                </ul>
            </div>

            <div>
                <h2 className="uppercase font-medium mb-6 text-xl text-gray-700">get in touch</h2>

                <ul className="text-sm flex flex-col gap-1.5">
                    <li>
                        <a href="callto:+8801758319969">+880 17 000 000 00</a>
                    </li>
                    <li>
                        <a href="mailto:robiul100.me@gmail.com">robiul100.me@gmail.com</a>
                    </li>
                </ul>
            </div>
        </div>

        <hr />
        <p className="py-4 text-center text-sm text-gray-800">Copyright 2024@ Sagor Islam- All Right Reserved.</p>
    </div>
  )
}

export default Footer