import { useContext, useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"
import { toast } from "react-toastify"
import axios from "axios"

const Verify = () => {
    const { token, setCartItems, backendUrl } = useContext(ShopContext)

    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const orderId = searchParams.get("orderId")
    const success = searchParams.get("success")

    const verifyOrder = async () => {
        try {
            const res = await axios.post(backendUrl + '/api/order/verify', { orderId, success }, { headers: { token } })
            if (res.data.success) {
                toast.success(res.data.message)
                setCartItems([])
                navigate('/orders')
            } else {
                console.log(res.data);
                toast.error(res.data.message || "Something went wrong")
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message || "Something went wrong")
        }
    }

    useEffect(() => {
        if (token === "") {
            navigate("/login")
        }
        verifyOrder()
    }, [token])

    return (
        <div>
            <h1>Verify</h1>
        </div>
    )
}

export default Verify