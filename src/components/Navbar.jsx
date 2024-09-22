import { Link, NavLink, useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets'
import { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const NAV_LINKS = [
    {
        id:1, 
        label: "home",
        link: "/"
    },
    {
        id:2, 
        label: "collection",
        link: "/collection"
    },
    {
        id:3, 
        label: "about",
        link: "/about"
    },
    {
        id:4, 
        label: "contact",
        link: "/contact"
    },
]

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const {setShowSearch, cartItems} = useContext(ShopContext)
    const totalItems = cartItems.reduce((total, item) => {
        return total + item.count;
      }, 0);
      
    const navigate = useNavigate()

  return (
    <div className="py-5 flex items-center justify-between">
        <Link to="/">
        <img src={assets.logo} className='w-32 md:w-36' alt="" />
        </Link>

        <div className='text-gray-800 font-medium sm:flex items-center gap-4 md:gap-6 hidden '>
            {NAV_LINKS.map(item=> (
                 <NavLink to={item.link} key={item.id} className="flex flex-col gap-1 items-center uppercase">
                <p>{item.label}</p>
                <hr className='nav-hr'/>
            </NavLink>
            ))}
        </div>

        <div className='flex items-center gap-6'>
            <img src={assets.search_icon} onClick={()=> setShowSearch(prev => !prev)} className='w-5 cursor-pointer' alt="" />
            <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />

            <div className='relative'
            onClick={()=> navigate("/cart")}>
                <img src={assets.cart_icon} className='w-5 cursor-pointer' alt="" />
                <span className='absolute bg-slate-900 aspect-square text-white bottom-[-5px] right-[-5px] text-xs w-4 text-center rounded-full leading-4 select-none cursor-pointer'>
                    {totalItems}
                </span>
            </div>

            <img onClick={()=> setShowMenu(true)} src={assets.menu_icon} className='w-5 sm:hidden cursor-pointer' alt="" />
        </div>

        {/* for small screen */}
        <div className={`absolute top-0 right-0 bg-white  h-screen overflow-hidden ${showMenu ? "w-full" : 'w-0'} transition-all`}> 
            <div className='flex items-center gap-4 text-lg font-medium p-3 cursor-pointer' onClick={()=> setShowMenu(false)}>
                <img src={assets.dropdown_icon} className='rotate-180 w-3 h-5' alt="" />
                <p>Back</p>
            </div>

            {NAV_LINKS.map((item)=> (
                 <NavLink key={item.id} onClick={()=> setShowMenu(false)} to={item.link} className="py-3 px-5 font-medium uppercase border-b w-full block border-t hover:bg-slate-100 transition mobile-link">
                 {item.label}
             </NavLink>
            ))}
        </div>
    </div>
  )
}

export default Navbar
  