import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const ShopContext = createContext()

const ShopContextProvider = ({ children }) => {
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const fetchProducts = async () => {
    const res = await axios.get(backendUrl + '/api/product/list')
    if (res.data.success) {
      setProducts(res.data.products)
    }
  }

  const addToCart = async (id, size) => {
    if (!size) {
      toast.error("Please select a size!", {
        containerId: "info"
      })
      return
    }

    let itemExists = false;

    const updatedCart = cartItems.map(item => {
      if (item.id === id && item.size === size) {
        itemExists = true;
        toast.success("Item Incremented!")
        return { ...item, count: item.count + 1 };
      }
      return item;
    });

    if (!itemExists) {
      updatedCart.push({ id, size, count: 1 });
      toast.success("Item Added!")
    }

    // Update the cart state with the new items
    setCartItems(updatedCart);

    // Send the updated cart to the backend
    if (token) await axios.post(backendUrl + '/api/cart/addToCart', {
      productId: id,
      size,
    }, { headers: { token } })
  }

  const updateQuantity = async (itemId, size, quantity) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === itemId && item.size === size) {
        return { ...item, count: Number(quantity) }
      }
      return item
    })

    setCartItems(updatedCart)
    token && await axios.post(backendUrl + '/api/cart/updateCart', {
      productId: itemId,
      quantity,
      size
    }, { headers: { token } })

    toast.success("Item incremented!")
  }

  const deleteItem = async (itemId, size) => {
    const newItems = cartItems.filter(item => !(item.id === itemId && item.size === size))
    setCartItems(newItems)
    token && await axios.post(backendUrl + '/api/cart/deleteItem', {
      productId: itemId,
      size
    }, { headers: { token } })
    return newItems
  }

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, cartItem) => {
      // Find the product that matches the cart item id
      const product = products.find(product => product._id === cartItem.id);

      // If the product is found, add its price * count to the total
      return product ? total + (product.price * cartItem.count) : total;
    }, 0);

    return totalPrice;
  };

  // Fetch cart items from the backend
  const fetchCart = async () => {
    const res = await axios.get(backendUrl + '/api/cart/getCart', { headers: { token } })
    if (res.data.success) {
      setCartItems(res.data.cartData)
    }
  }

  useEffect(() => {
    fetchProducts()
    if (token) {
      fetchCart()
    }
  }, [])

  const currency = "$"
  const delivery_fee = 10
  const value = {
    products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch,
    cartItems, setCartItems, addToCart, updateQuantity, deleteItem, calculateTotalPrice, token, setToken, backendUrl, fetchCart
  }

  return (
    <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
  )
}

export default ShopContextProvider