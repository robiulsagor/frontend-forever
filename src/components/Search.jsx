import { useContext, useEffect, useState } from "react"
import {assets} from "../assets/assets"
import { ShopContext } from "../context/ShopContext"
import { useLocation } from "react-router-dom"

const Search = () => {
const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext)
const location = useLocation()
const [isVisible, setIsVisible] = useState(false)

useEffect(()=> {
    if(location.pathname === '/collection'){
        setIsVisible(true)
    }else{
        setIsVisible(false)
        setShowSearch(false)
    }
    if(!showSearch) setSearch('')
}, [showSearch, location])

  return showSearch && isVisible ? (
    <div className="flex items-center gap-6 justify-center border-t border-b py-5">
        <div className="w-full md:w-3/4 lg:w-1/2 border border-gray-300 flex items-center py-2 px-6 rounded-full">
            <input type="text" value={search} onChange={e=> setSearch(e.target.value)} className="border-none outline-none flex-1"
            placeholder="Search Items ..." />
            <img src={assets.search_icon} className="w-4 cursor-pointer" alt="" />
        </div>

        <img src={assets.cross_icon} onClick={()=> setShowSearch(false)} className="w-4 cursor-pointer" alt="" />
    </div>
  ) : null
}

export default Search