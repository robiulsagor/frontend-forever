import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"

const Product = ({id, name, img, price}) => {
    const {currency} = useContext(ShopContext)

  return (
    <Link  to={`/product/${id}`}>
        <div className="overflow-hidden">
            <img src={img[0]} className="hover:scale-110 transition duration-150" alt="" />
        </div>
        <p className="text-sm font-light mt-1 leading-tight">{name} </p>
        <span className="text-sm">{currency}{price} </span>
    </Link>
  )
}

export default Product